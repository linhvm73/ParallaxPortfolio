import { motion } from "framer-motion";

export default function FloatingElements() {
  const elements = [
    {
      size: "w-16 h-16",
      color: "bg-accent/20",
      shape: "rounded-full",
      position: "top-20 left-10",
      delay: 0,
    },
    {
      size: "w-12 h-12",
      color: "bg-success/20",
      shape: "rotate-45",
      position: "top-40 right-20",
      delay: 2,
    },
    {
      size: "w-20 h-8",
      color: "bg-accent/10",
      shape: "rounded-full",
      position: "bottom-40 left-20",
      delay: 4,
    },
    {
      size: "w-24 h-24",
      color: "bg-primary/10",
      shape: "rounded-full",
      position: "top-60 right-40",
      delay: 1,
    },
    {
      size: "w-14 h-14",
      color: "bg-success/15",
      shape: "rotate-12",
      position: "bottom-60 right-10",
      delay: 3,
    },
  ];

  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      {elements.map((element, index) => (
        <motion.div
          key={index}
          className={`absolute ${element.position} ${element.size} glassmorphism-card ${element.shape}`}
          animate={{
            y: [0, -20, 0],
            x: [0, 10, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: element.delay,
          }}
        />
      ))}
    </div>
  );
}
