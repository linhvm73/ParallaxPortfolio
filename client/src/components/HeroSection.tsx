import { motion } from "framer-motion";
import useScrollReveal from "@/hooks/useScrollReveal";
import useParallax from "@/hooks/useParallax";

export default function HeroSection() {
  const { ref, isVisible } = useScrollReveal();
  const parallaxY = useParallax(0.5);

  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image with Parallax */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
          transform: `translateY(${parallaxY * 0.3}px)`,
          opacity: 0.3,
        }}
      />
      
      {/* Glassmorphism Overlay */}
      <div className="absolute inset-0 glassmorphism-bg z-1" />
      
      {/* Content */}
      <div className="container mx-auto px-6 text-center text-foreground relative z-10">
        <div className="max-w-4xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.3 }}
            className="font-playfair text-5xl md:text-7xl font-bold mb-8 creative-spacing leading-tight"
          >
            MARKETING        <em className="italic">không</em>        <em className="italic">chỉ</em>        LÀ        QUẢNG CÁO,
            <br />
            <em className="italic">mà</em>        <em className="italic">là</em>        <em className="italic">nghệ</em>        <em className="italic">thuật</em>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.6 }}
            className="text-xl md:text-2xl mb-12 text-spacing opacity-90 leading-relaxed"
          >
            Marketing Executive với hơn 1 năm kinh nghiệm trong sáng tạo nội dung, truyền thông và tổ chức sự kiện. Từ viral posts đạt 1 triệu views đến quản lý cộng đồng 55,000 thành viên.
          </motion.p>

          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isVisible ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.9 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={scrollToContact}
            className="inline-block bg-accent text-accent-foreground px-8 py-4 rounded-full text-lg font-medium hover:bg-accent/90 transition-all duration-300"
          >
            Hãy trò chuyện
          </motion.button>
        </div>
      </div>
    </section>
  );
}
