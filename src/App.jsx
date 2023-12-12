/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";
import "./app.css";
import useMousePosition from "./utils/useMousePosition";
import { motion } from "framer-motion";

const App = () => {
  const { x, y } = useMousePosition();
  const [hovered, isHovered] = useState(false);

  const size = hovered ? 450 : 50;

  return (
    <main className="main">
      <motion.div
        className="mask"
        animate={{
          webkitMaskPosition: `${x - size / 2}px ${y - size / 2}px`,
          WebkitMaskSize: `${size}px ${size}px`,
          maskPosition: `${x - size / 2}px ${y - size / 2}px`,
          maskSize: `${size}px ${size}px`,
        }}
        transition={{ type: "tween", ease: "backOut" }}
      >
        <p
          onMouseEnter={() => {isHovered(true)}}
          onMouseLeave={() => {isHovered(false)}}
        >
         Lol its all lie. I cant make good shit yet. i just followed a tutorial and did what he did. but im learing something
        </p>
      </motion.div>
      <div className="body">
        <p>
          I'm a <span>skilled</span> Front-end developer with strong focus on
          producing high quality and impactful experience
        </p>
      </div>
    </main>
  );
};

export default App;
