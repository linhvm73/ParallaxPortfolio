import { useState } from "react";
import { motion } from "framer-motion";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertContactSchema } from "@shared/schema";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import useScrollReveal from "@/hooks/useScrollReveal";
import { Mail, Phone, MapPin } from "lucide-react";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export default function ContactSection() {
  const { ref, isVisible } = useScrollReveal();
  const { toast } = useToast();

  const form = useForm({
    resolver: zodResolver(insertContactSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      message: "",
    },
  });

  const contactMutation = useMutation({
    mutationFn: async (data: any) => {
      return apiRequest("POST", "/api/contact", data);
    },
    onSuccess: () => {
      toast({
        title: "Cảm ơn bạn đã liên hệ!",
        description: "Tôi sẽ phản hồi sớm nhất có thể.",
      });
      form.reset();
    },
    onError: (error: any) => {
      toast({
        title: "Có lỗi xảy ra",
        description: "Vui lòng thử lại sau hoặc liên hệ trực tiếp qua email.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: any) => {
    contactMutation.mutate(data);
  };

  return (
    <section id="contact" ref={ref} className="py-24 bg-primary text-primary-foreground relative overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80"
          alt="Contact background"
          className="w-full h-full object-cover opacity-15"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/85 via-primary/70 to-primary/85"></div>
      </div>
      
      <div className="absolute top-16 right-12 w-32 h-16 bg-white/10 rounded-full animate-pulse z-1"></div>
      <div className="absolute bottom-20 left-16 w-20 h-20 bg-accent/20 rotate-12 animate-pulse z-1"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="font-playfair text-4xl md:text-7xl font-bold mb-8 creative-spacing leading-tight text-white">
              Hãy        
              <br />
              làm quen        
              <br />
              <em className="italic">với</em>        <em className="italic">nhau</em>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isVisible ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"
                alt="Professional workspace"
                className="rounded-2xl shadow-2xl w-full h-auto mb-8"
              />
              
              <div className="glassmorphism-card p-8 transition-all duration-500">
                <div className="space-y-6">
                  <div>
                    <h3 className="font-playfair text-xl font-semibold mb-2 text-white">Vũ Thị Mỹ Linh</h3>
                    <p className="text-white/80">Marketing Executive</p>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="glassmorphism-card p-3 flex items-center space-x-3 hover:scale-105 transition-all duration-300">
                      <Mail className="w-5 h-5 text-accent" />
                      <span className="text-white/90">vumylinhmkt@gmail.com</span>
                    </div>
                    
                    <div className="glassmorphism-card p-3 flex items-center space-x-3 hover:scale-105 transition-all duration-300">
                      <Phone className="w-5 h-5 text-accent" />
                      <span className="text-white/90">0343464725</span>
                    </div>
                    
                    <div className="glassmorphism-card p-3 flex items-center space-x-3 hover:scale-105 transition-all duration-300">
                      <MapPin className="w-5 h-5 text-accent" />
                      <span className="text-white/90">Quận Thanh Xuân, Hà Nội</span>
                    </div>
                    
                    <a 
                      href="https://facebook.com/vumylinhneu" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="glassmorphism-card p-3 flex items-center space-x-3 hover:scale-105 transition-all duration-300 group"
                    >
                      <svg className="w-5 h-5 text-accent" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                      </svg>
                      <span className="text-white/90 group-hover:text-white transition-colors">facebook.com/vumylinhneu</span>
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isVisible ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mirror-card glassmorphism-card p-8 transition-all duration-500 relative overflow-hidden"
            >
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 relative z-10">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-primary-foreground">Họ và Tên</FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            placeholder="Nhập họ và tên của bạn"
                            className="bg-white/10 border-white/20 text-primary-foreground placeholder:text-white/60"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-primary-foreground">Email</FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            type="email"
                            placeholder="your@email.com"
                            className="bg-white/10 border-white/20 text-primary-foreground placeholder:text-white/60"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="company"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-primary-foreground">Công ty</FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            placeholder="Tên công ty"
                            className="bg-white/10 border-white/20 text-primary-foreground placeholder:text-white/60"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-primary-foreground">Tin nhắn</FormLabel>
                        <FormControl>
                          <Textarea
                            {...field}
                            rows={6}
                            placeholder="Hãy cho tôi biết về dự án của bạn..."
                            className="bg-white/10 border-white/20 text-primary-foreground placeholder:text-white/60 resize-none"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button
                    type="submit"
                    disabled={contactMutation.isPending}
                    className="w-full bg-accent text-accent-foreground py-4 rounded-lg font-medium hover:bg-accent/90 transition-all duration-300"
                  >
                    {contactMutation.isPending ? "Đang gửi..." : "Gửi tin nhắn"}
                  </Button>
                </form>
              </Form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
