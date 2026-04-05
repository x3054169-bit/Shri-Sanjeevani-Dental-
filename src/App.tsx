import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Phone, 
  MessageCircle, 
  MapPin, 
  Clock, 
  Star, 
  CheckCircle2, 
  ChevronRight, 
  Menu, 
  X,
  Stethoscope,
  Sparkles,
  ShieldCheck,
  HeartPulse,
  Smile,
  ArrowRight,
  Plus,
  Mail,
  ChevronDown
} from 'lucide-react';
import Lenis from 'lenis';
import { cn } from './lib/utils';

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'Dentists', href: '#team' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-6 py-6",
      isScrolled ? "bg-white/95 backdrop-blur-md py-3 shadow-lg" : "bg-transparent"
    )}>
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-11 h-11 bg-dentia-blue rounded-xl flex items-center justify-center text-white shadow-lg shadow-dentia-blue/20">
            <HeartPulse size={26} />
          </div>
          <div className="flex flex-col">
            <span className={cn("text-xl font-extrabold tracking-tight leading-none", isScrolled ? "text-slate-900" : "text-white")}>Shri Sanjeevani</span>
            <span className={cn("text-[10px] font-bold uppercase tracking-[0.25em] mt-1 opacity-80", isScrolled ? "text-dentia-blue" : "text-white/80")}>Dental Care</span>
          </div>
        </div>

        <div className="hidden lg:flex items-center gap-10">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className={cn(
                "text-[13px] font-bold uppercase tracking-widest transition-all hover:scale-105",
                isScrolled ? "text-slate-600 hover:text-dentia-blue" : "text-white/90 hover:text-white"
              )}
            >
              {link.name}
            </a>
          ))}
          <div className="flex items-center gap-3">
            <a href="tel:+918770797521" className={cn(
              "p-3 rounded-full transition-all border",
              isScrolled ? "border-gray-200 text-slate-900 hover:bg-gray-50" : "border-white/20 text-white hover:bg-white/10"
            )}>
              <Phone size={18} />
            </a>
            <a href="https://wa.me/918770797521?text=I%20want%20to%20book%20an%20appointment" target="_blank" className="btn-dentia shadow-xl shadow-dentia-blue/30">
              Book Appointment
            </a>
          </div>
        </div>

        <button 
          className={cn("lg:hidden p-2", isScrolled ? "text-slate-900" : "text-white")}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="absolute top-full left-0 right-0 bg-white border-b border-gray-100 p-6 flex flex-col gap-4 lg:hidden shadow-xl"
          >
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-lg font-semibold py-2 border-b border-gray-50 text-slate-900"
              >
                {link.name}
              </a>
            ))}
            <a href="tel:+918770797521" className="btn-dentia w-full mt-2">
              Book Appointment
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex flex-col">
      <div className="relative flex-grow flex items-center pt-20">
        <div className="absolute inset-0 -z-10">
          <img 
            src="https://images.unsplash.com/photo-1606811971618-4486d14f3f99?q=80&w=2070&auto=format&fit=crop" 
            alt="Dental Care" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 hero-overlay" />
        </div>
        
        <div className="container-wide text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <p className="text-sm font-bold uppercase tracking-widest mb-4 text-white/80">Family Dental Care</p>
            <h1 className="text-5xl md:text-7xl font-black leading-[1.05] mb-8 tracking-tight">
              Elevating Smiles with <span className="text-dentia-blue">Expert Care</span> and a Gentle Touch
            </h1>
            <div className="flex flex-col sm:flex-row gap-5 mb-12">
              <a href="https://wa.me/918770797521?text=I%20want%20to%20book%20an%20appointment" target="_blank" className="btn-dentia py-5 px-10 text-lg shadow-2xl shadow-dentia-blue/40">
                Book via WhatsApp
              </a>
              <a href="tel:+918770797521" className="btn-dentia-outline py-5 px-10 text-lg border-2 backdrop-blur-sm hover:bg-white hover:text-dentia-dark">
                Call Now: +91 87707 97521
              </a>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex text-yellow-400">
                {[1, 2, 3, 4, 5].map(i => <Star key={i} size={16} fill="currentColor" />)}
              </div>
              <p className="text-sm font-medium text-white/80">Google Rating 5.0 Based on 59 Reviews</p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Info Bar */}
      <div className="bg-dentia-dark text-white">
        <div className="container-wide grid md:grid-cols-3">
          <div className="info-bar-item">
            <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-dentia-blue">
              <Phone size={24} />
            </div>
            <div>
              <p className="text-sm font-bold opacity-80">Need Dental Services?</p>
              <p className="text-lg font-bold">Call: +91 87707 97521</p>
            </div>
          </div>
          <div className="info-bar-item">
            <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-dentia-blue">
              <Clock size={24} />
            </div>
            <div>
              <p className="text-sm font-bold opacity-80">Opening Hours</p>
              <p className="text-lg font-bold">Mon to Sat 11:00 - 21:00</p>
            </div>
          </div>
          <div className="info-bar-item">
            <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-dentia-blue">
              <Mail size={24} />
            </div>
            <div>
              <p className="text-sm font-bold opacity-80">Email Us</p>
              <p className="text-lg font-bold">contact@shrisanjeevani.com</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const About = () => {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="container-wide grid lg:grid-cols-2 gap-20 items-center">
        <div className="relative flex gap-4">
          <div className="w-1/2 pt-12">
            <img 
              src="https://images.unsplash.com/photo-1667133295308-9ef24f71952e?q=80&w=1074&auto=format&fit=crop" 
              alt="Clinic" 
              className="rounded-2xl shadow-xl aspect-[3/4] object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="w-1/2">
            <img 
              src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=1074&auto=format&fit=crop" 
              alt="Treatment" 
              className="rounded-2xl shadow-xl aspect-[3/4] object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
        
        <div>
          <p className="text-sm font-bold text-dentia-blue uppercase tracking-widest mb-4">About Us</p>
          <h2 className="text-4xl md:text-5xl mb-8">Professionals and Personalized Dental Excellence</h2>
          <p className="text-gray-500 mb-8 leading-relaxed">
            We offer high-quality dental care tailored for the whole family. From routine checkups to advanced treatments, our compassionate team ensures your smile stays healthy and confident.
          </p>
          <div className="grid sm:grid-cols-2 gap-4 mb-10">
            {[
              "Personalized Treatment Plans",
              "State-of-the-Art Technology",
              "Gentle Care for Kids and Adults",
              "Flexible Appointment Scheduling"
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3">
                <CheckCircle2 className="text-dentia-blue" size={20} />
                <span className="font-semibold text-slate-700 text-sm">{item}</span>
              </div>
            ))}
          </div>
          <a href="tel:+918770797521" className="btn-dentia inline-flex">
            Book Appointment
          </a>
        </div>
      </div>
    </section>
  );
};

const Services = () => {
  const services = [
    {
      title: "General Dentistry",
      desc: "Complete oral care for every smile with cleanings, exams, and more.",
      icon: <Stethoscope size={32} />,
    },
    {
      title: "Cosmetic Dentistry",
      desc: "Enhance your smile's beauty with whitening, veneers, and more.",
      icon: <Sparkles size={32} />,
    },
    {
      title: "Pediatric Dentistry",
      desc: "Gentle and fun dental care for kids to grow healthy, happy smiles.",
      icon: <Smile size={32} />,
    },
    {
      title: "Restorative Dentistry",
      desc: "Repair and restore your teeth for lasting comfort and function.",
      icon: <ShieldCheck size={32} />,
    },
  ];

  return (
    <section id="services" className="section-padding bg-slate-50">
      <div className="container-wide">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <p className="text-sm font-bold text-dentia-blue uppercase tracking-widest mb-4">Our Services</p>
          <h2 className="text-4xl md:text-5xl mb-6">Complete Care for Every Smile</h2>
          <p className="text-gray-500">From routine cleanings to advanced restorations, we provide personalized dental solutions for patients of all ages.</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {services.map((service, i) => (
            <div key={i} className="service-card-dentia group">
              <div className="text-dentia-blue mb-6 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl mb-4">{service.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-8">{service.desc}</p>
              <button className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:bg-dentia-blue hover:text-white hover:border-dentia-blue transition-all">
                <Plus size={20} />
              </button>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <button className="btn-dentia inline-flex">View All Services</button>
        </div>
      </div>
    </section>
  );
};

const Stats = () => {
  return (
    <section className="bg-dentia-dark text-white">
      <div className="container-wide grid grid-cols-2 lg:grid-cols-4">
        {[
          { label: "Happy Patients", value: "5000+" },
          { label: "Teeth Whitened", value: "1200+" },
          { label: "Dental Implants", value: "800+" },
          { label: "Years of Experience", value: "10+" },
        ].map((stat, i) => (
          <div key={i} className="stat-item">
            <p className="text-4xl md:text-5xl font-bold mb-2">{stat.value}</p>
            <p className="text-sm font-bold opacity-60 uppercase tracking-widest">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

const WhyChooseUs = () => {
  return (
    <section className="section-padding bg-white">
      <div className="container-wide grid lg:grid-cols-2 gap-20 items-center">
        <div>
          <p className="text-sm font-bold text-dentia-blue uppercase tracking-widest mb-4">Why Choose Our Dental Care</p>
          <h2 className="text-4xl md:text-5xl mb-8">Exceptional Service With a Personal Touch</h2>
          <p className="text-gray-500 mb-12 leading-relaxed">
            Choosing the right dental provider matters. We combine expert care, advanced technology, and a warm atmosphere to ensure every visit is comfortable, efficient, and tailored to your unique needs.
          </p>
          
          <div className="grid sm:grid-cols-2 gap-10">
            {[
              { title: "Experienced Dental", desc: "Skilled care backed by years of trusted dental experience." },
              { title: "Advanced Technology", desc: "Modern tools ensure accurate and efficient treatments." },
              { title: "Personalized Treatment", desc: "Custom care plans made to fit your smile and lifestyle." },
              { title: "Family-Friendly", desc: "Welcoming space for kids, teens, adults, and seniors." },
            ].map((item, i) => (
              <div key={i}>
                <h4 className="text-lg font-bold mb-2">{item.title}</h4>
                <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
        
        <div className="grid grid-cols-2 gap-6">
          <div className="space-y-6">
            <div className="relative group overflow-hidden rounded-2xl shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1598256989800-fe5f95da9787?q=80&w=1470&auto=format&fit=crop" 
                alt="Dentist" 
                className="w-full aspect-square object-cover group-hover:scale-110 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="relative group overflow-hidden rounded-2xl shadow-lg translate-x-12">
              <img 
                src="https://images.unsplash.com/photo-1667133295352-ef4c83620e8e?q=80&w=1074&auto=format&fit=crop" 
                alt="Care" 
                className="w-full aspect-square object-cover group-hover:scale-110 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
          <div className="flex items-center -translate-x-6">
            <div className="relative group overflow-hidden rounded-2xl shadow-xl w-full">
              <img 
                src="https://images.unsplash.com/photo-1667133295315-820bb6481730?q=80&w=1074&auto=format&fit=crop" 
                alt="Smile" 
                className="w-full aspect-[3/4] object-cover group-hover:scale-110 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-dentia-blue/10 group-hover:bg-transparent transition-colors duration-500" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Team = () => {
  return (
    <section id="team" className="section-padding bg-white">
      <div className="container-wide">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="relative">
            <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl relative group">
              <img 
                src="https://images.unsplash.com/photo-1594824476967-48c8b964273f?q=80&w=1974&auto=format&fit=crop" 
                alt="Dr. Priyanka Gupta" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dentia-dark/80 via-transparent to-transparent opacity-60" />
            </div>
            <div className="absolute -bottom-10 -right-10 bg-dentia-blue text-white p-10 rounded-3xl shadow-2xl hidden md:block">
              <p className="text-4xl font-bold mb-1">10+</p>
              <p className="text-xs font-bold uppercase tracking-widest opacity-80">Years of Experience</p>
            </div>
          </div>
          
          <div>
            <p className="text-sm font-bold text-dentia-blue uppercase tracking-widest mb-4">Meet Our Expert</p>
            <h2 className="text-4xl md:text-6xl font-bold mb-8 tracking-tight">Dr. Priyanka Gupta</h2>
            <p className="text-xl font-semibold text-slate-700 mb-6 italic">Senior Dental Surgeon & Clinic Founder</p>
            <p className="text-gray-500 mb-8 leading-relaxed text-lg">
              Dr. Priyanka Gupta is a highly skilled and compassionate dental surgeon dedicated to providing the highest standard of oral healthcare. With over a decade of experience, she specializes in painless treatments, cosmetic transformations, and family dentistry.
            </p>
            <div className="space-y-4 mb-10">
              {[
                "Bachelor of Dental Surgery (BDS)",
                "Specialist in Painless Root Canal Treatment",
                "Certified Cosmetic & Aesthetic Dentist",
                "Expert in Pediatric (Child) Dental Care"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className="w-6 h-6 rounded-full bg-dentia-blue/10 flex items-center justify-center text-dentia-blue">
                    <CheckCircle2 size={14} />
                  </div>
                  <span className="font-bold text-slate-800">{item}</span>
                </div>
              ))}
            </div>
            <div className="flex gap-4">
              <a href="https://wa.me/918770797521?text=I%20want%20to%20book%20an%20appointment" target="_blank" className="btn-dentia">
                Book Consultation
              </a>
              <a href="tel:+918770797521" className="btn-dentia-outline border-dentia-blue text-dentia-blue hover:bg-dentia-blue hover:text-white">
                Contact Dr. Priyanka
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    { q: "How often should I visit the dentist?", a: "Generally, every six months for a routine checkup and cleaning is recommended to maintain optimal oral health and catch potential issues early." },
    { q: "What should I do in a dental emergency?", a: "Contact us immediately at +91 87707 97521. We prioritize emergency cases to provide quick relief and necessary treatment." },
    { q: "Do you offer services for kids?", a: "Yes, we provide gentle pediatric dentistry for children of all ages in a friendly and comfortable environment." },
    { q: "What are my options for replacing missing teeth?", a: "We offer several options including dental implants, bridges, and dentures, tailored to your specific needs and oral health." },
    { q: "Is teeth whitening safe?", a: "Yes, professional teeth whitening is safe and effective when performed by dental experts using approved materials." },
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container-wide grid lg:grid-cols-2 gap-20">
        <div>
          <p className="text-sm font-bold text-dentia-blue uppercase tracking-widest mb-4">Everything You Need To Know</p>
          <h2 className="text-4xl md:text-5xl mb-8">Frequently Asked Questions</h2>
          <p className="text-gray-500 max-w-md">Find answers to common questions about our dental services and what to expect during your visit.</p>
        </div>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div 
              key={i} 
              className="faq-item group cursor-pointer border-b border-gray-100 pb-4"
              onMouseEnter={() => setOpenIndex(i)}
              onMouseLeave={() => setOpenIndex(null)}
            >
              <div className="flex justify-between items-center py-2">
                <h4 className={cn(
                  "text-lg font-bold transition-colors",
                  openIndex === i ? "text-dentia-blue" : "text-slate-900 group-hover:text-dentia-blue"
                )}>
                  {faq.q}
                </h4>
                <motion.div
                  animate={{ rotate: openIndex === i ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown size={20} className={cn(
                    "transition-colors",
                    openIndex === i ? "text-dentia-blue" : "text-gray-400"
                  )} />
                </motion.div>
              </div>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <p className="text-gray-500 py-4 leading-relaxed">
                      {faq.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const reviews = [
    { name: "Alex P.", role: "Customer", text: "Dr. Priyanka and her team are professional, friendly, and genuinely care about your dental health. I trust them completely and recommend them to anyone looking for great care." },
    { name: "Michael S.", role: "Customer", text: "I've always been nervous about dental visits, but the staff at Shri Sanjeevani made me feel completely comfortable. Their gentle care and attention to detail truly stand out." },
    { name: "Robert L.", role: "Customer", text: "My family and I have been coming here for years. The service is exceptional, and Dr. Priyanka always goes the extra mile to make sure we're happy and well taken care of." },
    { name: "Sneha M.", role: "Customer", text: "Best dental clinic in Indore! The treatment was painless and the results are amazing. Highly recommend for anyone seeking quality dental care." },
  ];

  const next = () => setActiveIndex((prev) => (prev + 1) % reviews.length);
  const prev = () => setActiveIndex((prev) => (prev - 1 + reviews.length) % reviews.length);

  return (
    <section id="testimonials" className="section-padding bg-slate-50 overflow-hidden">
      <div className="container-wide">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <p className="text-sm font-bold text-dentia-blue uppercase tracking-widest mb-4">Testimonials</p>
          <h2 className="text-4xl md:text-5xl mb-6">Our Happy Customers</h2>
          <p className="text-gray-500">Join thousands of happy patients who trust us for gentle, expert care and beautiful smiles. Your perfect dental experience starts here!</p>
        </div>
        
        <div className="relative max-w-4xl mx-auto">
          <div className="flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
                className="testimonial-card-dentia w-full"
              >
                <div className="text-dentia-blue mb-6">
                  <MessageCircle size={48} fill="currentColor" className="opacity-20" />
                </div>
                <p className="text-xl md:text-2xl text-gray-700 italic mb-10 leading-relaxed font-medium">
                  "{reviews[activeIndex].text}"
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-gray-200 overflow-hidden border-2 border-white shadow-sm">
                    <img src={`https://i.pravatar.cc/150?img=${activeIndex + 40}`} alt={reviews[activeIndex].name} referrerPolicy="no-referrer" />
                  </div>
                  <div>
                    <p className="font-bold text-slate-900 text-lg">{reviews[activeIndex].name}</p>
                    <p className="text-xs font-bold text-dentia-blue uppercase tracking-widest">{reviews[activeIndex].role}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex justify-center gap-4 mt-12">
            <button 
              onClick={prev}
              className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:bg-white hover:text-dentia-blue hover:border-dentia-blue transition-all shadow-sm"
            >
              <ChevronRight size={24} className="rotate-180" />
            </button>
            <button 
              onClick={next}
              className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:bg-white hover:text-dentia-blue hover:border-dentia-blue transition-all shadow-sm"
            >
              <ChevronRight size={24} />
            </button>
          </div>
          
          <div className="flex justify-center gap-2 mt-8">
            {reviews.map((_, i) => (
              <button 
                key={i}
                onClick={() => setActiveIndex(i)}
                className={cn(
                  "w-2 h-2 rounded-full transition-all",
                  activeIndex === i ? "w-8 bg-dentia-blue" : "bg-gray-300"
                )}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const StrongCTA = () => {
  return (
    <section className="bg-dentia-blue py-16">
      <div className="container-wide flex flex-col md:flex-row justify-between items-center gap-8 text-white">
        <h2 className="text-3xl md:text-5xl font-black tracking-tight">Ready to book your dental care session?</h2>
        <div className="flex gap-4">
          <a href="tel:+918770797521" className="btn-dentia-outline border-2 py-4 px-8">
            Call Now
          </a>
          <a href="https://wa.me/918770797521?text=I%20want%20to%20book%20an%20appointment" target="_blank" className="bg-white text-dentia-blue py-4 px-8 rounded-full font-bold hover:bg-opacity-90 transition-all shadow-xl">
            Book via WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
};

const MapSection = () => {
  return (
    <section id="contact" className="w-full h-[400px] relative">
      <iframe 
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14720.382905142655!2d75.8046582871582!3d22.7246831!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fdd9987cdbb7%3A0xf2b06b09f32c8025!2sShri%20Sanjeevani%20Dental%20Care%20Clinic%20By%20Dr%20Priyanka%20Gupta!5e0!3m2!1sen!2sin!4v1775387359199!5m2!1sen!2sin" 
        width="100%" 
        height="100%" 
        style={{ border: 0 }} 
        allowFullScreen={true} 
        loading="lazy" 
        referrerPolicy="no-referrer-when-downgrade"
      />
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-dentia-dark text-white pt-24 pb-12">
      <div className="container-wide">
        <div className="grid md:grid-cols-4 gap-16 mb-20">
          <div className="col-span-1">
            <div className="flex items-center gap-2 mb-8">
              <div className="w-10 h-10 bg-dentia-blue rounded-full flex items-center justify-center text-white">
                <HeartPulse size={24} />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold tracking-tight leading-none">Shri Sanjeevani</span>
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] mt-1 opacity-70">Dental Care</span>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-8">
              At Shri Sanjeevani Dental Care Clinic, we're dedicated to providing high-quality, personalized dental care for patients of all ages in Indore. Our skilled team, led by Dr. Priyanka Gupta, uses the latest technology to ensure comfortable, efficient treatments.
            </p>
            <div className="flex gap-4">
              {[1, 2, 3, 4, 5].map(i => (
                <a key={i} href="#" className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center hover:bg-dentia-blue transition-colors">
                  <Smile size={16} />
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-8">Company</h4>
            <ul className="space-y-4">
              <li><a href="#" className="footer-link">Home</a></li>
              <li><a href="#" className="footer-link">Our Services</a></li>
              <li><a href="#" className="footer-link">Gallery</a></li>
              <li><a href="#" className="footer-link">About Us</a></li>
              <li><a href="#" className="footer-link">Blog</a></li>
              <li><a href="#" className="footer-link">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-8">Our Services</h4>
            <ul className="space-y-4">
              <li><a href="#" className="footer-link">General Dentistry</a></li>
              <li><a href="#" className="footer-link">Cosmetic Dentistry</a></li>
              <li><a href="#" className="footer-link">Pediatric Dentistry</a></li>
              <li><a href="#" className="footer-link">Restorative Dentistry</a></li>
              <li><a href="#" className="footer-link">Preventive Dentistry</a></li>
              <li><a href="#" className="footer-link">Orthodontics</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-8">Contact Us</h4>
            <ul className="space-y-6">
              <li className="flex gap-4">
                <MapPin size={20} className="text-dentia-blue shrink-0" />
                <div>
                  <p className="text-sm font-bold mb-1">Clinic Location</p>
                  <p className="text-gray-400 text-sm">G3, Fortune 7, Kalani Nagar Square, Indore</p>
                </div>
              </li>
              <li className="flex gap-4">
                <Phone size={20} className="text-dentia-blue shrink-0" />
                <div>
                  <p className="text-sm font-bold mb-1">Call Us</p>
                  <p className="text-gray-400 text-sm">+91 87707 97521</p>
                </div>
              </li>
              <li className="flex gap-4">
                <Mail size={20} className="text-dentia-blue shrink-0" />
                <div>
                  <p className="text-sm font-bold mb-1">Send a Message</p>
                  <p className="text-gray-400 text-sm">contact@shrisanjeevani.com</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6 text-gray-500 text-xs font-medium">
          <p>Copyright 2026 - Dentia by on3step</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Terms & Conditions</a>
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

const FloatingCTA = () => {
  return (
    <div className="fixed bottom-8 right-8 z-50 flex flex-col gap-4">
      <motion.a 
        whileHover={{ scale: 1.1, y: -5 }}
        whileTap={{ scale: 0.9 }}
        href="tel:+918770797521"
        className="w-14 h-14 bg-dentia-blue text-white rounded-full flex items-center justify-center shadow-2xl"
      >
        <Phone size={24} />
      </motion.a>
      <motion.a 
        whileHover={{ scale: 1.1, y: -5 }}
        whileTap={{ scale: 0.9 }}
        href="https://wa.me/918770797521?text=I%20want%20to%20book%20an%20appointment"
        target="_blank"
        className="w-14 h-14 bg-green-500 text-white rounded-full flex items-center justify-center shadow-2xl"
      >
        <MessageCircle size={28} />
      </motion.a>
    </div>
  );
};

// --- Main App ---

export default function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
      infinite: false,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="min-h-screen selection:bg-dentia-blue selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Stats />
        <WhyChooseUs />
        <Team />
        <FAQ />
        <Testimonials />
        <StrongCTA />
        <MapSection />
      </main>
      <Footer />
      <FloatingCTA />
    </div>
  );
}
