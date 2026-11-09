import { useEffect, useState } from "react";

function ScrollButtons() {
  const [activeButton, setActiveButton] = useState("bottom");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      const isAtTop = scrollPosition <= 5;
      const isAtBottom =
        scrollPosition + windowHeight >= documentHeight - 5;

      if (isAtTop) {
        setActiveButton("bottom");
      } else if (isAtBottom) {
        setActiveButton("top");
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    setActiveButton("top");

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const scrollToBottom = () => {
    setActiveButton("bottom");

    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  };

  return (
    <div className="scroll-buttons">
      {activeButton === "bottom" ? (
        <button
          className="scroll-button"
          onClick={scrollToBottom}
          aria-label="Go to bottom"
        >
          <span aria-hidden="true">↓</span>
          Go to Bottom
        </button>
      ) : (
        <button
          className="scroll-button"
          onClick={scrollToTop}
          aria-label="Back to top"
        >
          <span aria-hidden="true">↑</span>
          Back to Top
        </button>
      )}
    </div>
  );
}

export default ScrollButtons;