import { useRef, type ReactNode, type MouseEvent } from "react";
import { cn } from "@/lib/utils";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hoverGlow?: boolean;
  onClick?: () => void;
}

export function GlassCard({ children, className, hoverGlow = true, onClick }: GlassCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!hoverGlow || !cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    cardRef.current.style.setProperty("--glow-x", `${x}%`);
    cardRef.current.style.setProperty("--glow-y", `${y}%`);
  };

  return (
    <div
      ref={cardRef}
      className={cn(
        "relative rounded-[24px] overflow-hidden cursor-default transition-all duration-300",
        "bg-white/[0.03] backdrop-blur-[12px]",
        "border border-white/[0.08]",
        hoverGlow && "hover:backdrop-blur-[20px] hover:border-white/[0.15]",
        className
      )}
      onMouseMove={handleMouseMove}
      onClick={onClick}
      style={{
        boxShadow: "inset 0 1px 1px rgba(255,255,255,0.08), inset 1px 0 0 rgba(255,255,255,0.04)",
      }}
    >
      {hoverGlow && (
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
          style={{
            background: "radial-gradient(600px circle at var(--glow-x, 50%) var(--glow-y, 50%), rgba(74,124,255,0.06), transparent 40%)",
          }}
        />
      )}
      <div className="relative z-10">{children}</div>
    </div>
  );
}
