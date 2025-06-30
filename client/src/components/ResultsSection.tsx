import { motion } from "framer-motion";
import useScrollReveal from "@/hooks/useScrollReveal";

export default function ResultsSection() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section ref={ref} className="py-24 relative bg-gradient-to-br from-background via-secondary to-background overflow-hidden">
      {/* Background Image with Glassmorphism Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
          alt="Results background"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-background/80 via-background/70 to-background/80 backdrop-blur-sm"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="font-playfair text-4xl md:text-6xl font-bold mb-8 creative-spacing text-foreground">
              Thành        tích        <em className="italic text-accent">đã</em>        <em className="italic text-accent">đạt</em>        được
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isVisible ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              whileHover={{ scale: 1.05 }}
              className="glass-overlay p-12 text-center transition-all duration-500 hover:scale-105"
            >
              <div className="text-6xl md:text-8xl font-bold text-accent mb-4">1M+</div>
              <p className="text-xl text-foreground/80 font-medium">
                lượt xem đạt được từ viral content, với video reel đạt đỉnh 1 triệu views
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isVisible ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"
                alt="Marketing portfolio success"
                className="rounded-2xl shadow-2xl w-full h-auto"
              />
            </motion.div>
          </div>

          <div className="grid md:grid-cols-2 gap-16 mt-16">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
              whileHover={{ scale: 1.05 }}
              className="glass-overlay p-12 text-center transition-all duration-500 hover:scale-105"
            >
              <div className="text-6xl md:text-8xl font-bold text-success mb-4">55K</div>
              <p className="text-xl text-foreground/80 font-medium">
                thành viên trong cộng đồng du học sinh Hàn Quốc được quản lý thành công
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.8 }}
              whileHover={{ scale: 1.05 }}
              className="glass-overlay p-12 text-center transition-all duration-500 hover:scale-105"
            >
              <div className="text-6xl md:text-8xl font-bold text-accent mb-4">2K+</div>
              <p className="text-xl text-foreground/80 font-medium">
                người tham gia các sự kiện workshop và webinar đã tổ chức
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
