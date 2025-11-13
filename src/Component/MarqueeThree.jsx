import React, { useEffect } from "react";

const webDevTools = [
  "Wordpress","Flutter","Shopify","Wix","C/C++","Java","Python","Html5","CSS3","Javascript",
  "PHP","React Native + React.js","WooCommerce","Tailwind CSS"
];

export default function MarqueeThree() {
  useEffect(() => {
    const track = document.getElementById("marquee3-line");
    track.innerHTML = "";

    // Add items to marquee
    webDevTools.forEach(tool => {
      const span = document.createElement("span");
      span.textContent = tool;
      span.style.margin = "0 24px";
      span.style.color = "#9cc9ff";
      span.style.flex = "none";
      span.style.fontSize = "16px";
      track.appendChild(span);
    });

    // Duplicate for seamless scrolling
    track.innerHTML += track.innerHTML;

    let pos = 0;
    let isPaused = false;

    track.parentElement.addEventListener("mouseenter", () => isPaused = true);
    track.parentElement.addEventListener("mouseleave", () => isPaused = false);

    function animate() {
      if (!isPaused) {
        pos -= 0.5; // speed
        if (pos <= -track.offsetWidth / 2) pos = 0;
        track.style.transform = `translateX(${pos}px)`;
      }
      requestAnimationFrame(animate);
    }
    animate();
  }, []);

  return (
    <div
      className="marquee"
      style={{
        overflow: "hidden",
        marginTop: "10px",
        borderTop: "1px solid #0f2b46",
        borderBottom: "1px solid #0f2b46",
        height: "50px"
      }}
    >
      <div
        id="marquee3-line"
        style={{
          display: "flex",
          whiteSpace: "nowrap",
          alignItems: "center",
          height: "100%"
        }}
      ></div>
    </div>
  );
}
