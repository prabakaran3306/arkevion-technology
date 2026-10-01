import React from "react";

const nodes = [
  { cx: "10%", cy: "25%", r: 7 },
  { cx: "25%", cy: "65%", r: 9 },
  { cx: "42%", cy: "30%", r: 6 },
  { cx: "55%", cy: "75%", r: 10 },
  { cx: "68%", cy: "35%", r: 7 },
  { cx: "82%", cy: "65%", r: 9 },
  { cx: "92%", cy: "25%", r: 6 },
];

const lines = [
  ["10%", "25%", "25%", "65%"],
  ["25%", "65%", "42%", "30%"],
  ["42%", "30%", "55%", "75%"],
  ["55%", "75%", "68%", "35%"],
  ["68%", "35%", "82%", "65%"],
  ["82%", "65%", "92%", "25%"],
  ["10%", "25%", "42%", "30%"],
  ["42%", "30%", "68%", "35%"],
  ["55%", "75%", "82%", "65%"],
];

export default function BackgroundAnimation() {
  return (
    <div className="background-animation">
      <svg
        className="network-svg"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        {lines.map((line, index) => (
          <line
            key={index}
            x1={line[0]}
            y1={line[1]}
            x2={line[2]}
            y2={line[3]}
            className="network-line"
          />
        ))}

        {nodes.map((node, index) => (
          <circle
            key={index}
            cx={node.cx}
            cy={node.cy}
            r={node.r / 4}
            className="network-node"
          />
        ))}
      </svg>

      <div className="glow glow-1"></div>
      <div className="glow glow-2"></div>
      <div className="glow glow-3"></div>
    </div>
  );
}