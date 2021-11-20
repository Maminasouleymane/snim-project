import React, { useState } from "react";

const ScrollButton = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  window.addEventListener("scroll", toggleVisible);

  return (
    <div className="Button">
      <img
        src="./images/back.jpg"
        onClick={scrollToTop}
        style={{
          display: visible ? "inline" : "none",
          height: "66px",
          width: "66px",
        }}
      />
    </div>
  );
};

export default ScrollButton;
