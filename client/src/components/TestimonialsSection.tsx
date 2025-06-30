import { motion } from "framer-motion";
import useScrollReveal from "@/hooks/useScrollReveal";

export default function TestimonialsSection() {
  const { ref, isVisible } = useScrollReveal();

  const testimonials = [
    {
      id: "1/02",
      text: "Mỹ Linh đã thể hiện khả năng xuất sắc trong việc quản lý truyền thông và tạo content viral. Một số bài viết của cô đạt gần 100 lượt share, và đặc biệt có video reel đạt tới 1 triệu view. Cô luôn chủ động trong việc nghiên cứu thị trường, phân tích insight khách hàng và đưa ra những ý tưởng sáng tạo cho các chiến dịch.",
      author: "Đại diện Gitiho Việt Nam",
      position: "Marketing Team Leader",
    },
    {
      id: "2/02",
      text: "Trong thời gian làm việc tại VJ Việt Nam, Mỹ Linh đã quản lý xuất sắc cộng đồng 'Du học sinh Hàn Quốc' với 55,000 thành viên. Cô có khả năng tổ chức sự kiện ấn tượng và kỹ năng viết PR chuyên nghiệp với các bài viết được đăng trên Dân Trí, Vietnamnet. Đặc biệt, sự kiện 'Rung chuông vàng' do cô tổ chức đã thu hút 100 người tham gia.",
      author: "Đại diện VJ Việt Nam",
      position: "Content Marketing Manager",
    },
  ];

  return (
    <section ref={ref} className="py-24 bg-gradient-to-br from-primary/5 via-accent/5 to-primary/5 relative overflow-hidden border-y border-border/20">
      {/* Background Image with Glassmorphism Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
          alt="Testimonials background"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent/5 to-primary/10 backdrop-blur-sm"></div>
      </div>
      
      <div className="absolute top-20 right-20 w-16 h-32 bg-accent/20 rotate-45 animate-pulse z-20"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="font-playfair text-4xl md:text-6xl font-bold mb-8 creative-spacing text-foreground">
              Đồng nghiệp        <em className="italic text-accent">nói</em>        <em className="italic text-accent">gì</em>
            </h2>
          </motion.div>

          <div className="space-y-12">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 50 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.3 }}
                whileHover={{ scale: 1.02 }}
                className="glass-overlay p-12 transition-all duration-500 relative overflow-hidden hover:shadow-xl bg-background/30 border border-accent/20"
              >
                <div className="text-sm text-accent mb-4 font-semibold">( {testimonial.id} )</div>
                <p className="text-lg leading-relaxed text-foreground/80 mb-8 font-medium">
                  "{testimonial.text}"
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-accent/20 rounded-full mr-4 flex items-center justify-center">
                    <div className="w-6 h-6 bg-accent/40 rounded-full"></div>
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">{testimonial.author}</div>
                    <div className="text-sm text-foreground/60 font-medium">{testimonial.position}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
