import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';

export default function MagneticButton({ children, className = "", onClick, href, download, target }) {
  const ref = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    setPosition({ x: middleX * 0.2, y: middleY * 0.2 });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  const content = (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 250, damping: 15, mass: 0.1 }}
      className={`inline-block ${className}`}
    >
      {children}
    </motion.div>
  );

  if (href) {
    return (
      <a href={href} download={download} target={target} rel={target === '_blank' ? 'noopener noreferrer' : undefined}>
        {content}
      </a>
    );
  }

  return <button onClick={onClick}>{content}</button>;
}
