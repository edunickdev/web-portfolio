import { useEffect, useState } from "react";
import { RadarAxis } from "../../../data/interfaces/recruiterMatchTypes";

interface RadarChartProps {
  axes: RadarAxis[];
  size?: number;
}

const RadarChart = ({ axes, size = 300 }: RadarChartProps) => {
  const [animationProgress, setAnimationProgress] = useState(0);

  useEffect(() => {
    let frame: number;
    let start: number | null = null;
    const duration = 1200;

    const animate = (timestamp: number) => {
      if (!start) start = timestamp;
      const elapsed = timestamp - start;
      const progress = Math.min(elapsed / duration, 1);
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setAnimationProgress(eased);
      if (progress < 1) {
        frame = requestAnimationFrame(animate);
      }
    };

    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, [axes]);

  // Extra padding for labels so they never get clipped
  const padding = 70;
  const viewBox = `${-padding} ${-padding} ${size + padding * 2} ${size + padding * 2}`;

  const center = size / 2;
  const radius = size * 0.38;
  const levels = 5;
  const count = axes.length;
  const angleStep = (2 * Math.PI) / count;
  // Start from top (-90deg)
  const startAngle = -Math.PI / 2;

  const getPoint = (index: number, value: number) => {
    const angle = startAngle + index * angleStep;
    const r = (value / 100) * radius;
    return {
      x: center + r * Math.cos(angle),
      y: center + r * Math.sin(angle),
    };
  };

  // Grid polygons
  const gridPolygons = Array.from({ length: levels }, (_, level) => {
    const levelValue = ((level + 1) / levels) * 100;
    const points = axes
      .map((_, i) => {
        const p = getPoint(i, levelValue);
        return `${p.x},${p.y}`;
      })
      .join(" ");
    return points;
  });

  // Data polygon (animated)
  const dataPoints = axes
    .map((axis, i) => {
      const p = getPoint(i, axis.score * animationProgress);
      return `${p.x},${p.y}`;
    })
    .join(" ");

  // Axis lines
  const axisLines = axes.map((_, i) => {
    const p = getPoint(i, 100);
    return { x1: center, y1: center, x2: p.x, y2: p.y };
  });

  // Label positions (pushed outward enough to not clip)
  const labelPositions = axes.map((axis, i) => {
    const angle = startAngle + i * angleStep;
    const labelRadius = radius + 40;
    return {
      x: center + labelRadius * Math.cos(angle),
      y: center + labelRadius * Math.sin(angle),
      label: axis.label,
      score: axis.score,
      angle,
    };
  });

  const getScoreColor = (score: number) => {
    if (score >= 75) return "var(--accent)";
    if (score >= 50) return "#f59e0b";
    return "#ef4444";
  };

  return (
    <div className="flex justify-center items-center w-full">
      <svg
        viewBox={viewBox}
        width="100%"
        height="100%"
        className="max-w-[400px] md:max-w-[460px]"
        overflow="visible"
      >
        <defs>
          <linearGradient
            id="radarGradient"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="100%"
          >
            <stop
              offset="0%"
              className="dark:stop-color-[#2bcdee] stop-color-[#135bec]"
              style={{ stopColor: "var(--accent)" }}
              stopOpacity="0.6"
            />
            <stop
              offset="100%"
              className="dark:stop-color-[#8b5cf6] stop-color-[#06b6d4]"
              style={{ stopColor: "var(--accent-secondary)" }}
              stopOpacity="0.3"
            />
          </linearGradient>
          <linearGradient
            id="radarStrokeGradient"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="100%"
          >
            <stop
              offset="0%"
              style={{ stopColor: "var(--accent)" }}
              stopOpacity="1"
            />
            <stop
              offset="100%"
              style={{ stopColor: "var(--accent-secondary)" }}
              stopOpacity="1"
            />
          </linearGradient>
        </defs>

        {/* Grid polygons */}
        {gridPolygons.map((points, i) => (
          <polygon
            key={`grid-${i}`}
            points={points}
            fill="none"
            stroke="var(--border-color)"
            strokeWidth="1"
            opacity={0.5 + i * 0.1}
          />
        ))}

        {/* Axis lines */}
        {axisLines.map((line, i) => (
          <line
            key={`axis-${i}`}
            x1={line.x1}
            y1={line.y1}
            x2={line.x2}
            y2={line.y2}
            stroke="var(--border-color)"
            strokeWidth="1"
            opacity="0.4"
          />
        ))}

        {/* Data polygon */}
        <polygon
          points={dataPoints}
          fill="url(#radarGradient)"
          stroke="url(#radarStrokeGradient)"
          strokeWidth="2.5"
          strokeLinejoin="round"
        />

        {/* Data points (dots) */}
        {axes.map((axis, i) => {
          const p = getPoint(i, axis.score * animationProgress);
          return (
            <circle
              key={`dot-${i}`}
              cx={p.x}
              cy={p.y}
              r="5"
              fill={getScoreColor(axis.score)}
              stroke="white"
              strokeWidth="2"
              className="drop-shadow-md"
            />
          );
        })}

        {/* Labels */}
        {labelPositions.map((pos, i) => {
          const isTop =
            pos.angle < -Math.PI / 4 && pos.angle > (-3 * Math.PI) / 4;
          const isBottom =
            pos.angle > Math.PI / 4 && pos.angle < (3 * Math.PI) / 4;
          const isLeft = Math.abs(pos.angle) > Math.PI / 2;

          let textAnchor: "start" | "middle" | "end" = "middle";
          if (isLeft) textAnchor = "end";
          else if (!isTop && !isBottom) textAnchor = "start";

          // Adjust dy based on position for better vertical centering
          const dy = isTop ? -4 : isBottom ? 4 : 0;

          return (
            <g key={`label-${i}`}>
              <text
                x={pos.x}
                y={pos.y - 7 + dy}
                textAnchor={textAnchor}
                className="fill-[var(--text-primary)] font-semibold"
                style={{ fontSize: "11px" }}
              >
                {pos.label}
              </text>
              <text
                x={pos.x}
                y={pos.y + 9 + dy}
                textAnchor={textAnchor}
                className="font-bold"
                style={{
                  fontSize: "10px",
                  fill: getScoreColor(pos.score),
                }}
              >
                {Math.round(pos.score * animationProgress)}%
              </text>
            </g>
          );
        })}
      </svg>
    </div>
  );
};

export default RadarChart;
