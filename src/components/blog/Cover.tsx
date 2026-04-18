import type { Post } from "@/data/blog";

type Props = {
  post: Post;
  className?: string;
  height?: number;
};

export default function Cover({ post, className = "", height }: Props) {
  const { coverFrom, coverTo, pattern = "grid" } = post;
  return (
    <div
      className={`relative overflow-hidden ${className}`}
      style={{
        background: `linear-gradient(135deg, ${coverFrom} 0%, ${coverTo} 100%)`,
        height,
      }}
    >
      {pattern === "grid" && (
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.12) 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />
      )}
      {pattern === "dots" && (
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: "radial-gradient(rgba(255,255,255,.25) 1.5px, transparent 1.5px)",
            backgroundSize: "22px 22px",
          }}
        />
      )}
      {pattern === "waves" && (
        <svg
          className="absolute inset-0 w-full h-full opacity-40"
          viewBox="0 0 400 240"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id={`ws-${post.slug}`} x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="white" stopOpacity=".4" />
              <stop offset="100%" stopColor="white" stopOpacity=".05" />
            </linearGradient>
          </defs>
          {[40, 90, 140, 190].map((y, i) => (
            <path
              key={y}
              d={`M0 ${y} Q 100 ${y - 20 - i * 4} 200 ${y} T 400 ${y}`}
              stroke={`url(#ws-${post.slug})`}
              strokeWidth="1.5"
              fill="none"
            />
          ))}
        </svg>
      )}
      {pattern === "rays" && (
        <svg
          className="absolute inset-0 w-full h-full opacity-35"
          viewBox="0 0 400 240"
          preserveAspectRatio="none"
        >
          {Array.from({ length: 14 }).map((_, i) => {
            const x = i * 30;
            return (
              <line
                key={i}
                x1={x}
                y1="0"
                x2={x + 120}
                y2="240"
                stroke="white"
                strokeOpacity="0.35"
                strokeWidth="1"
              />
            );
          })}
        </svg>
      )}

      {/* ambient glow blob */}
      <div
        className="absolute pointer-events-none"
        style={{
          width: "60%",
          height: "80%",
          right: "-15%",
          top: "-20%",
          background: "radial-gradient(circle, rgba(255,255,255,.25), transparent 60%)",
          filter: "blur(30px)",
        }}
      />
    </div>
  );
}
