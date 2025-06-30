import { motion } from "framer-motion";
import useScrollReveal from "@/hooks/useScrollReveal";
import { BarChart3, Edit3, Monitor } from "lucide-react";

export default function ServicesSection() {
  const { ref, isVisible } = useScrollReveal();

  const services = [
    {
      icon: Edit3,
      title: "Quản lý        Mạng        Xã        hội",
      description: "Quản lý đa nền tảng Facebook, TikTok, Instagram, YouTube. Tạo viral content đạt 1 triệu views và quản lý cộng đồng 55,000 thành viên với engagement cao.",
      color: "accent",
    },
    {
      icon: BarChart3,
      title: "Tổ chức        Sự        kiện        &        Workshop",
      description: "Tổ chức thành công 5 sự kiện lớn với tổng 2000+ người tham gia. Từ workshop, webinar đến các sự kiện kỷ niệm và gây quỹ.",
      color: "success",
    },
    {
      icon: Monitor,
      title: "Sáng tạo        Nội        dung        &        PR",
      description: "Viết bài PR đăng báo (Dân Trí, Vietnamnet), sáng tạo content quảng cáo và lập kế hoạch truyền thông theo tuần/tháng với kết quả đo lường được.",
      color: "primary",
    },
  ];

  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="services" ref={ref} className="py-24 bg-secondary relative overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
          alt="Services background"
          className="w-full h-full object-cover opacity-15"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-secondary/85 via-secondary/70 to-secondary/85"></div>
      </div>
      
      <div className="absolute top-20 left-10 w-32 h-16 bg-success/10 rounded-full animate-pulse z-1"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="font-playfair text-4xl md:text-6xl font-bold mb-8 creative-spacing">
              Nơi        <em className="italic">ý</em>        <em className="italic">tưởng</em>        <em className="italic">gặp</em>        <em className="italic">thực</em>        <em className="italic">thi</em>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  animate={isVisible ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="mirror-card glassmorphism-card p-8 transition-all duration-500 relative overflow-hidden"
                >
                  <div className={`w-16 h-16 bg-${service.color}/10 rounded-2xl flex items-center justify-center mb-6`}>
                    <Icon className={`w-8 h-8 text-${service.color}`} />
                  </div>
                  <h3 className="font-playfair text-2xl font-semibold mb-4 creative-spacing">
                    {service.title.split('&').map((part, i) => (
                      <span key={i}>
                        {i > 0 && <em className="italic">&</em>}
                        {part.trim()}
                      </span>
                    ))}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {service.description}
                  </p>
                  <button
                    onClick={scrollToContact}
                    className={`text-${service.color} font-medium hover:text-${service.color}/80 transition-colors`}
                  >
                    Khám phá thêm →
                  </button>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
