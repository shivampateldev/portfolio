"use client";
import { useEffect, useRef, useState } from "react";

export default function CustomCursor() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [hoverState, setHoverState] = useState<"none" | "button" | "link" | "image">("none");

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Dynamic coordinates for physics rendering
    const mouse = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    
    // Dot and trailing ring position objects
    const dot = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    const ring = { x: window.innerWidth / 2, y: window.innerHeight / 2 };

    // Dynamic scale parameters
    let currentRadius = 12;
    let currentOpacity = 0.5;
    let currentFillOpacity = 0.0;
    let currentStrokeWidth = 1.0;

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    window.addEventListener("mousemove", handleMouseMove);

    let lastScrollY = window.scrollY;
    let scrollActiveTime = 0;
    let scrollDirection: "up" | "down" | null = null;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const dyScroll = currentScrollY - lastScrollY;
      
      if (Math.abs(dyScroll) > 0.5) {
        scrollDirection = dyScroll < 0 ? "up" : "down";
        scrollActiveTime = performance.now();
      }
      
      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    // Track hovers across interactive classes/tags
    const updateHoverState = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target) return;

      if (target.closest("button") || target.closest(".magnetic-target")) {
        setHoverState("button");
      } else if (target.closest("a")) {
        setHoverState("link");
      } else if (target.closest("img") || target.closest(".zoom-target") || target.closest("#projects") || target.closest(".group")) {
        setHoverState("image");
      } else {
        setHoverState("none");
      }
    };

    window.addEventListener("mouseover", updateHoverState);

    // Clean lerp helper
    const lerp = (start: number, end: number, amt: number) => {
      return (1 - amt) * start + amt * end;
    };

    let jetAngle = -Math.PI / 2; // Face upward initially
    let animationFrameId: number;

    const draw = () => {
      // 1. Calculate trailing coordinates
      // Inner dot tracks extremely fast
      dot.x = lerp(dot.x, mouse.x, 0.35);
      dot.y = lerp(dot.y, mouse.y, 0.35);

      // Trailing jet flows elegantly behind
      ring.x = lerp(ring.x, mouse.x, 0.08);
      ring.y = lerp(ring.y, mouse.y, 0.08);

      // Calculate velocity vector to dynamically orient the jet based on mouse moves
      const dx = mouse.x - ring.x;
      const dy = mouse.y - ring.y;
      const speed = Math.sqrt(dx * dx + dy * dy);

      let targetAngle = jetAngle;
      let hasTarget = false;

      if (speed > 1.5) {
        targetAngle = Math.atan2(dy, dx);
        hasTarget = true;
      }

      // Smoothly blend scrolling direction into jet orientation if active
      const now = performance.now();
      const isScrolling = now - scrollActiveTime < 180;
      if (isScrolling && scrollDirection) {
        const scrollTargetAngle = scrollDirection === "up" ? -Math.PI / 2 : Math.PI / 2;
        if (hasTarget) {
          let diff = scrollTargetAngle - targetAngle;
          while (diff < -Math.PI) diff += Math.PI * 2;
          while (diff > Math.PI) diff -= Math.PI * 2;
          targetAngle += diff * 0.75; // Blend prioritizing scroll direction
        } else {
          targetAngle = scrollTargetAngle;
        }
        hasTarget = true;
      }

      if (hasTarget) {
        // Smoothly interpolate angle to handle transitions flawlessly
        let diff = targetAngle - jetAngle;
        while (diff < -Math.PI) diff += Math.PI * 2;
        while (diff > Math.PI) diff -= Math.PI * 2;
        jetAngle += diff * 0.15;
      }

      // 2. Set dynamic parameters based on hover
      let targetRadius = 12;
      let targetOpacity = 0.5;
      let targetFillOpacity = 0.0;
      let targetStrokeWidth = 1.0;
      let targetColor = "rgba(255, 62, 29, 0.8)"; // Red accent theme

      if (hoverState === "button" || hoverState === "link") {
        targetRadius = 26;
        targetOpacity = 0.95;
        targetFillOpacity = 0.15;
        targetStrokeWidth = 1.5;
        targetColor = "rgba(255, 62, 29, 0.95)";
      } else if (hoverState === "image") {
        targetRadius = 36;
        targetOpacity = 0.8;
        targetFillOpacity = 0.05;
        targetStrokeWidth = 1.0;
        targetColor = "rgba(255, 62, 29, 0.6)";
      }

      // Smoothly interpolate cursor style parameters
      currentRadius = lerp(currentRadius, targetRadius, 0.12);
      currentOpacity = lerp(currentOpacity, targetOpacity, 0.12);
      currentFillOpacity = lerp(currentFillOpacity, targetFillOpacity, 0.12);
      currentStrokeWidth = lerp(currentStrokeWidth, targetStrokeWidth, 0.12);

      // 3. Clear and draw
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // A. Draw Outer Trailing Jet
      ctx.save();
      ctx.translate(ring.x, ring.y);
      ctx.rotate(jetAngle);

      // Apply dynamic scales based on hover
      const jetScale = hoverState !== "none" ? 1.4 : 1.0;
      ctx.scale(jetScale, jetScale);

      // Body parameters
      ctx.strokeStyle = "rgba(255, 62, 29, 0.95)";
      ctx.fillStyle = "rgba(255, 62, 29, 0.12)";
      ctx.lineWidth = 1.5;
      
      // Shadow glow for elite HUD/Sci-fi aesthetic
      ctx.shadowBlur = hoverState !== "none" ? 16 : 6;
      ctx.shadowColor = "rgba(255, 62, 29, 0.5)";

      // Draw jet vector paths
      ctx.beginPath();
      ctx.moveTo(18, 0); // Nose
      ctx.lineTo(4, -3); // Mid left body
      ctx.lineTo(-6, -14); // Left wing leading edge
      ctx.lineTo(-9, -14); // Left wing tip
      ctx.lineTo(-6, -3); // Left wing trailing edge
      ctx.lineTo(-12, -7); // Left tail stabilizer leading edge
      ctx.lineTo(-14, -7); // Left stabilizer tip
      ctx.lineTo(-12, -2); // Left stabilizer trailing edge
      ctx.lineTo(-15, -2); // Engine nozzle left
      ctx.lineTo(-15, 2); // Engine nozzle right
      ctx.lineTo(-12, 2); // Right stabilizer trailing edge
      ctx.lineTo(-14, 7); // Right stabilizer tip
      ctx.lineTo(-12, 7); // Right stabilizer leading edge
      ctx.lineTo(-6, 3); // Right wing trailing edge
      ctx.lineTo(-9, 14); // Right wing tip
      ctx.lineTo(-6, 14); // Right wing leading edge
      ctx.lineTo(4, 3); // Mid right body
      ctx.closePath();
      ctx.fill();
      ctx.stroke();

      // Draw glass canopy/cockpit (bright white glow line)
      ctx.beginPath();
      ctx.moveTo(8, 0);
      ctx.lineTo(1, -1.5);
      ctx.lineTo(-3, 0);
      ctx.lineTo(1, 1.5);
      ctx.closePath();
      ctx.fillStyle = "rgba(255, 255, 255, 0.95)";
      ctx.shadowColor = "rgba(255, 255, 255, 0.9)";
      ctx.shadowBlur = 6;
      ctx.fill();

      // Pulsing thruster plume trail (flames out with scroll boost!)
      const isScrolledBoost = performance.now() - scrollActiveTime < 180;
      const plumePulse = 6 + Math.sin(performance.now() * 0.05) * 3 + (isScrolledBoost ? 8 : 0);
      ctx.beginPath();
      ctx.moveTo(-15, -2);
      ctx.lineTo(-15 - plumePulse, 0);
      ctx.lineTo(-15, 2);
      ctx.closePath();
      
      const grad = ctx.createLinearGradient(-15, 0, -15 - plumePulse, 0);
      grad.addColorStop(0, "rgba(255, 120, 0, 0.95)"); // Hot intense center core
      grad.addColorStop(1, "rgba(255, 62, 29, 0.0)");
      ctx.fillStyle = grad;
      ctx.shadowBlur = 15;
      ctx.shadowColor = "rgba(255, 80, 0, 0.85)";
      ctx.fill();

      ctx.restore();

      // B. Draw Inner Reactive Target Dot
      ctx.beginPath();
      ctx.arc(dot.x, dot.y, 3, 0, Math.PI * 2);
      ctx.fillStyle = "rgba(255, 255, 255, 0.95)";
      ctx.shadowBlur = 5;
      ctx.shadowColor = "rgba(255, 255, 255, 0.8)";
      ctx.fill();

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseover", updateHoverState);
      window.removeEventListener("scroll", handleScroll);
      cancelAnimationFrame(animationFrameId);
    };
  }, [hoverState]);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-[9999] h-full w-full mix-blend-screen"
    />
  );
}
