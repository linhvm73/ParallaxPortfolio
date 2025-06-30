import { motion } from "framer-motion";
import useScrollReveal from "@/hooks/useScrollReveal";

export default function PortfolioSection() {
  const { ref, isVisible } = useScrollReveal();

  const portfolioItems = [
    {
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2139&q=80",
      title: "Gitiho Việt Nam - Marketing Executive",
      description: "Tạo viral content đạt 1 triệu views, quản lý fanpage với engagement cao. Tổ chức thành công 5 workshop/webinar với 2000+ người tham gia, phối hợp thiết kế ấn phẩm sự kiện.",
      size: "large",
    },
    {
      image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
      title: "VJ Việt Nam - Content Creator",
      description: "Quản lý đa nền tảng mạng xã hội, quản lý cộng đồng du học sinh Hàn Quốc 55,000 thành viên. Viết bài PR đăng báo Dân Trí, Vietnamnet và tổ chức các sự kiện lớn.",
      size: "large",
    },
    {
      image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      title: "Nghiên cứu Khoa học",
      description: "Giải Ba Nghiên cứu khoa học cấp Trường năm 2022, thể hiện khả năng phân tích và nghiên cứu thị trường chuyên sâu.",
      size: "small",
    },
    {
      image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      title: "Hoạt động Truyền thông Xã hội",
      description: "Thành viên ban truyền thông Đội Thanh niên vận động hiến máu, tham gia truyền thông vận động hiến máu nhân đạo.",
      size: "small",
    },
    {
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
      title: "Phát triển Kỹ năng Chuyên môn",
      description: "Hoàn thành các khóa học: Tối ưu nội dung quảng cáo, Google Sheet nâng cao, Content Viral và chứng chỉ IC3.",
      size: "small",
    },
  ];

  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="portfolio" ref={ref} className="py-24 relative bg-background overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2126&q=80"
          alt="Portfolio background"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-background/80 via-background/60 to-background/80"></div>
      </div>
      
      <div className="absolute top-32 right-16 w-20 h-20 bg-accent/10 rotate-12 animate-pulse z-1"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="font-playfair text-4xl md:text-6xl font-bold mb-8 creative-spacing !leading-[1.3]">
              Làm cho        thương hiệu        <em className="italic text-purple-600">nổi</em>        <em className="italic text-purple-600">bật</em>        <em className="italic text-purple-600">và</em>        <em className="italic text-purple-600">phát</em>        <em className="italic text-purple-600">triển</em>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            {portfolioItems.slice(0, 2).map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="mirror-card glassmorphism-card overflow-hidden transition-all duration-500 relative"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-64 object-cover"
                />
                <div className="p-8">
                  <h3 className="font-playfair text-xl font-semibold mb-4">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {portfolioItems.slice(2).map((item, index) => (
              <motion.div
                key={index + 2}
                initial={{ opacity: 0, y: 50 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: (index + 2) * 0.2 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="mirror-card glassmorphism-card overflow-hidden transition-all duration-500 relative"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="font-playfair text-lg font-semibold mb-4">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-center mt-12"
          >
            <span className="text-4xl font-bold text-accent mr-8">+25</span>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={scrollToContact}
              className="inline-block bg-primary text-primary-foreground px-8 py-3 rounded-full font-medium hover:bg-primary/90 transition-all duration-300"
            >
              Khám phá thêm
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
