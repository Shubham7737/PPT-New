import React, { useEffect, useRef } from "react";

const digitalMarketingTools = [
  "Instagram",
  "Facebook",
  "Twitter",
  "Pinterest",
  "Telegram",
  "WhatsApp",
  "Messenger",
  "Trends",
  "YouTube",
  "ShareChat / Moj",
  "Josh",
  "Roposo",
  "LinkedIn",
  "Snapchat",
  "Google Business Profile (GMB)",
];

export default function MarqueeTwo() {
  const trackRef = useRef(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    // Clear any existing content
    track.innerHTML = "";

    // Add spans for each tool
    digitalMarketingTools.forEach((tool) => {
      const span = document.createElement("span");
      span.textContent = tool;
      span.style.margin = "0 24px";
      span.style.color = "#9cc9ff";
      span.style.flex = "none";
      span.style.fontSize = "16px";
      track.appendChild(span);
    });

    // Duplicate for seamless scroll
    track.innerHTML += track.innerHTML;

    let pos = 0;
    let isPaused = false;
    const speed = 0.5;

    // Hover pause
    track.parentElement.addEventListener("mouseenter", () => (isPaused = true));
    track.parentElement.addEventListener("mouseleave", () => (isPaused = false));

    function animate() {
      if (!isPaused) {
        pos -= speed;
        if (pos <= -track.offsetWidth / 2) pos = 0;
        track.style.transform = `translateX(${pos}px)`;
      }
      requestAnimationFrame(animate);
    }

    animate();
  }, []);

  return (
    <div
      className="marquee overflow-hidden"
      style={{
        marginTop: "10px",
        borderTop: "1px solid #0f2b46",
        borderBottom: "1px solid #0f2b46",
        height: "50px",
      }}
    >
      <div
        ref={trackRef}
        style={{
          display: "flex",
          whiteSpace: "nowrap",
          alignItems: "center",
          height: "100%",
          transform: "translateX(0)",
        }}
      ></div>
    </div>
  );
}
