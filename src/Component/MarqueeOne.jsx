import React, { useEffect, useRef } from "react";

const products = [
  "Flipkart",
  "Meesho",
  "Snapdeal",
  "Zepto",
  "Blinkit (Zomato)",
  "BigBasket",
  "Myntra",
  "Ajio",
  "Tata CLiQ / CLiQ",
  "Nykaa",
  "Purplle",
  "Limeroad",
  "ShopClues",
  "Paytm Mall",
];

export default function Marquee() {
  const trackRef = useRef(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    function setupMarquee() {
      track.innerHTML = "";
      products.forEach((p) => {
        const span = document.createElement("span");
        span.textContent = p;
        span.style.margin = "0 24px";       // horizontal spacing only
        span.style.color = "#9cc9ff";
        span.style.flex = "none";
        span.style.fontSize = "16px";
        span.style.whiteSpace = "nowrap";
        span.style.lineHeight = "1";        // remove extra vertical spacing
        track.appendChild(span);
      });
      track.innerHTML += track.innerHTML; // duplicate for seamless scroll
    }

    setupMarquee();

    let pos = 0;
    let isPaused = false;
    const speed = 2;

    // Hover directly on track
    track.addEventListener("mouseenter", () => (isPaused = true));
    track.addEventListener("mouseleave", () => (isPaused = false));

    function animate() {
      if (!isPaused) {
        pos -= speed;
        if (pos <= -track.scrollWidth / 2) pos = 0;
        track.style.transform = `translateX(${pos}px)`;
      }
      requestAnimationFrame(animate);
    }

    animate();

    // Responsive resize fix
    const handleResize = () => {
      pos = 0;
      setupMarquee();
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div
      className="marquee overflow-hidden flex items-center"
      style={{
        margin: 0,              // remove container margin
        padding: 0,             // remove padding
        borderTop: "1px solid #0f2b46",
        borderBottom: "1px solid #0f2b46",
        height: "50px",         // fixed height
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
