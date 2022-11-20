import React from "react";
import { useEffect, useState } from "react";
import { MdOutlineKeyboardArrowUp } from "react-icons/md";

const ScrollButton = () => {
  const [backToTopButton, setBackToTopButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setBackToTopButton(true);
      } else {
        setBackToTopButton(false);
      }
    });
  }, []);

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div>
      {backToTopButton && (
        <button
          className="btn btn-primary"
          style={{
            position: "fixed",
            bottom: "50px",
            right: "50px",
            zIndex: "1",
          }}
          onClick={scrollUp}
        >
          ^
        </button>
      )}
    </div>
  );
};

export default ScrollButton;
