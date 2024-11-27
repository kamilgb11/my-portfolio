import React from "react";
import { motion } from "framer-motion";
import "./AnimatedBackground.css"; 

const AnimatedBackground = () => {
  return (
    <div className="animated-background">
      {}
      <motion.div
        className="gradient-layer"
        initial={{ scale: 1, opacity: 0.7 }}
        animate={{ scale: 1.4, opacity: 1 }}
        transition={{
          duration: 8,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      ></motion.div>
    </div>
  );
};

export default AnimatedBackground;
