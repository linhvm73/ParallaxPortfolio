import { motion } from "framer-motion";
import useScrollReveal from "@/hooks/useScrollReveal";

export default function InsightsSection() {
  const { ref, isVisible } = useScrollReveal();

  const insights = [
    {
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
      category: "Thương hiệu",
      date: "05.22.2025",
      readTime: "5 phút đọc",
      title: "Thương hiệu Tiến bộ: Tập 1",
    },
    {
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=815&q=80",
      category: "Thương hiệu",
      date: "05.21.2025",
      readTime: "4 phút đọc",
      title: "Đổi Thương hiệu: Vai trò của Agency",
    },
    {
      image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      category: "Quản lý",
      date: "05.20.2025",
      readTime: "4 phút đọc",
      title: "Công việc Khó khăn của CMO Ngày nay",
    },
    {
      image: "https://pixabay.com/get/gddd3c4ba90f49f5bb7d315f819e7deb450ae4382eb640a974ea010275a2112531cdea39cc757079d0d902835126344293d8d8fea944a7ac950b32c15c8e921ae_1280.jpg",
      category: "Thương hiệu",
      date: "05.16.2025",
      readTime: "6 phút đọc",
      title: "Kiến trúc Thương hiệu: Đòn bẩy Hiệu suất",
    },
  ];

  return (
    <section ref={ref} className="py-24 relative bg-gradient-to-br from-background via-secondary to-background overflow-hidden">
      {/* Background Image with Glassmorphism Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1542744094-3a31f272c490?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
          alt="Insights background"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-background/80 via-background/70 to-background/80 backdrop-blur-sm"></div>
      </div>
      
      <div className="absolute top-24 left-16 w-24 h-12 bg-accent/10 rounded-full animate-pulse z-20"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="font-playfair text-4xl md:text-6xl font-bold mb-8 creative-spacing text-foreground">
              Liều thuốc        <em className="italic text-accent">ý</em>        <em className="italic text-accent">tưởng</em>        của bạn
            </h2>
            <p className="text-xl text-foreground/80 font-medium leading-relaxed">
              Làm cho thương hiệu nổi bật và phát triển.
              Khám phá các phân tích và phát hiện của tôi về thương hiệu, xã hội, văn hóa và đổi mới.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {insights.map((insight, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="glass-overlay overflow-hidden transition-all duration-500 cursor-pointer relative hover:shadow-xl"
              >
                <div className="relative overflow-hidden rounded-t-2xl">
                  <img
                    src={insight.image}
                    alt={insight.title}
                    className="w-full h-48 object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <span className={`text-xs font-semibold px-3 py-1 rounded-full ${
                    insight.category === 'Thương hiệu' ? 'bg-accent/20 text-accent' : 'bg-success/20 text-success'
                  }`}>
                    {insight.category}
                  </span>
                  <div className="text-xs text-foreground/60 mb-3 mt-2 font-medium">
                    {insight.date} • {insight.readTime}
                  </div>
                  <h3 className="font-playfair text-lg font-semibold mb-2 text-foreground leading-tight">
                    {insight.title}
                  </h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
