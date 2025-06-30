import { motion } from "framer-motion";
import useScrollReveal from "@/hooks/useScrollReveal";

export default function AboutSection() {
  const { ref, isVisible } = useScrollReveal();

  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="about" ref={ref} className="py-24 relative bg-gradient-to-br from-background via-secondary to-background overflow-hidden">
      {/* Background Image with Glassmorphism Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
          alt="Professional background"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-background/80 via-background/70 to-background/80 backdrop-blur-sm"></div>
      </div>
      
      <div className="absolute top-10 right-10 w-24 h-24 bg-accent/10 rounded-full animate-pulse z-20"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="font-playfair text-4xl md:text-6xl font-bold mb-8 creative-spacing text-foreground">
              MỸ LINH        <em className="italic text-accent">không</em>        <em className="italic text-accent">chỉ</em>        LÀ        MARKETER,        <em className="italic text-accent">mà</em>        <em className="italic text-accent">là</em>
              <br />
              <em className="italic text-accent">chiến</em>        <em className="italic text-accent">lược</em>        <em className="italic text-accent">gia</em>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isVisible ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              whileHover={{ scale: 1.02 }}
              className="glass-overlay transition-all duration-500"
            >
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
                alt="Professional workspace"
                className="rounded-2xl shadow-2xl w-full h-auto"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isVisible ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              whileHover={{ scale: 1.02 }}
              className="glass-overlay p-12 transition-all duration-500"
            >
              <p className="text-lg leading-relaxed mb-8 text-foreground/80 font-medium">
                Tốt nghiệp ngành Marketing tại Đại học Kinh tế Quốc dân với <span className="text-accent font-semibold">GPA 3.72/4.0</span> và nhận <span className="text-success font-semibold">học bổng 6/8 kỳ học</span>. Với hơn một năm kinh nghiệm thực tế, tôi mong muốn vận dụng kiến thức để đóng góp vào việc xây dựng và tối ưu hóa các chiến dịch marketing.
              </p>
              <p className="text-lg leading-relaxed mb-8 text-foreground/80 font-medium">
                Từ việc tạo ra <span className="text-accent font-semibold">viral posts đạt 1 triệu views</span>, quản lý <span className="text-success font-semibold">cộng đồng 55,000 thành viên</span> đến tổ chức thành công <span className="text-accent font-semibold">5 sự kiện với 2000+ người tham gia</span>, tôi tin rằng marketing không chỉ là quảng cáo mà là nghệ thuật kết nối thương hiệu với khách hàng.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={scrollToContact}
                className="inline-block glass-overlay px-8 py-4 rounded-full font-semibold text-accent hover:text-accent/80 transition-all duration-300 border-2 border-accent/30 hover:border-accent/50"
              >
                Hãy trò chuyện
              </motion.button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
