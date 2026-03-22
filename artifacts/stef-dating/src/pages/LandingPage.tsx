import { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Play } from "lucide-react";
import { FadeIn } from "@/components/FadeIn";
import { ApplyModal } from "@/components/ApplyModal";

export default function LandingPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  
  const { scrollY } = useScroll();
  const headerOpacity = useTransform(scrollY, [0, 50, 100], [1, 0, 1]);
  const headerBg = useTransform(scrollY, [0, 100], ["rgba(245, 241, 236, 0)", "rgba(245, 241, 236, 0.9)"]);
  const headerShadow = useTransform(scrollY, [0, 100], ["none", "0 4px 30px rgba(0,0,0,0.05)"]);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="w-full bg-brand-bg min-h-screen">
      <ApplyModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

      {/* STICKY HEADER */}
      <motion.nav 
        style={{ opacity: headerOpacity, backgroundColor: headerBg, boxShadow: headerShadow }}
        className="fixed top-0 left-0 right-0 z-50 py-4 px-6 md:px-12 flex justify-between items-center backdrop-blur-md transition-all"
      >
        <span className="font-script text-3xl font-bold text-brand-dark">Stef Dating</span>
        <button 
          onClick={() => setIsModalOpen(true)} 
          className="text-sm font-bold tracking-widest uppercase text-brand-dark hover:text-brand-blue transition-colors px-4 py-2 hover:bg-brand-dark/5 rounded-full"
        >
          Apply
        </button>
      </motion.nav>

      {/* 1. HERO SECTION */}
      <section className="relative pt-32 pb-24 md:pt-48 md:pb-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex flex-col items-center text-center">
        <FadeIn delay={0.1}>
          <span className="font-script text-5xl md:text-7xl text-brand-dark mb-12 block">Stef Dating</span>
        </FadeIn>
        
        <FadeIn delay={0.2}>
          <h1 className="text-5xl sm:text-6xl md:text-8xl font-black text-brand-blue tracking-tighter leading-[1.1] mb-8">
            Play DIRECT. <br />
            <span className="text-brand-dark">Or stay average forever.</span>
          </h1>
        </FadeIn>

        <FadeIn delay={0.3}>
          <p className="text-lg md:text-xl text-brand-dark/80 max-w-2xl mx-auto mb-12 font-medium leading-relaxed">
            I'm Stef. I coach high-achieving men to cold approach — the most direct path to the woman you want and the exit from the game.
          </p>
        </FadeIn>

        <FadeIn delay={0.4} className="flex flex-col sm:flex-row gap-4 mb-24 w-full sm:w-auto">
          <button 
            onClick={() => setIsModalOpen(true)}
            className="px-10 py-5 bg-brand-dark text-white rounded-xl font-bold uppercase tracking-widest text-sm shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:shadow-[0_12px_40px_rgb(0,0,0,0.2)] hover:-translate-y-1 transition-all duration-300 w-full sm:w-auto"
          >
            Apply for Coaching
          </button>
          <a 
            href="#how-it-works"
            className="px-10 py-5 bg-transparent border-2 border-brand-dark text-brand-dark rounded-xl font-bold uppercase tracking-widest text-sm hover:bg-brand-dark/5 hover:-translate-y-1 transition-all duration-300 w-full sm:w-auto"
          >
            Watch how it works
          </a>
        </FadeIn>

        <FadeIn delay={0.5} className="w-full">
          {/* VIDEO PLACEHOLDER */}
          <div className="relative w-full max-w-[340px] aspect-[9/16] bg-brand-dark rounded-3xl mx-auto flex items-center justify-center shadow-2xl overflow-hidden group cursor-pointer border border-brand-dark/10">
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent z-0" />
            <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition-colors z-0" />
            
            <div className="flex flex-col items-center gap-4 z-10 transform group-hover:scale-105 transition-transform duration-500">
              <div className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center shadow-[0_0_40px_rgba(255,255,255,0.2)] border border-white/20">
                <Play className="w-8 h-8 text-white ml-1 fill-white" />
              </div>
              <span className="text-white font-medium tracking-widest uppercase text-sm">Your video here</span>
            </div>
          </div>
        </FadeIn>
      </section>

      {/* 2. THE ENEMY SECTION */}
      <section className="py-24 md:py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <FadeIn className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-brand-blue mb-6">
            Every other coach teaches you how to play the game better.
          </h2>
          <p className="text-xl md:text-2xl text-brand-dark font-medium max-w-3xl mx-auto">
            More lines. Better profile. More swipes. They're optimizing the wrong thing.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-16">
          {[
            { title: "Apps", desc: "You're one of 500 options. She's not even looking at you." },
            { title: "Social circle", desc: "Waiting for the right introduction. Still waiting." },
            { title: "Better techniques", desc: "More videos. More theory. Zero approaches." }
          ].map((card, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <div className="h-full border border-brand-dark/10 rounded-2xl p-10 hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:border-brand-dark/20 transition-all duration-300 bg-brand-bg group">
                <h3 className="text-2xl font-bold text-brand-dark mb-4 group-hover:text-brand-blue transition-colors">{card.title}</h3>
                <p className="text-brand-dark/70 text-lg leading-relaxed">{card.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn>
          <p className="text-2xl md:text-3xl font-bold text-brand-dark text-center max-w-4xl mx-auto">
            None of this gets you out. It just makes you better at being stuck.
          </p>
        </FadeIn>
      </section>

      {/* 3. THE GUT PUNCH SECTION */}
      <section className="bg-brand-dark text-white py-32 md:py-48 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <FadeIn>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-black leading-[1.1] tracking-tight mb-16">
              She doesn't know about your bank account. <br/>
              She doesn't know about your inner work. <br/>
              <span className="text-brand-blue">She doesn't know you exist.</span>
            </h2>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="text-xl md:text-3xl text-brand-light font-medium leading-relaxed space-y-8 max-w-3xl border-l-2 border-brand-light/20 pl-6 md:pl-10">
              <p>You spent 3 years getting fit.<br/>Bought the car.<br/>Read the books.<br/>Did the therapy.</p>
              <p className="text-white font-bold">She still doesn't know you exist.</p>
              <p className="italic text-brand-light/80">Because all of it is indirect.</p>
              <p>She can't see your bank account from across the coffee shop.<br/>She can't feel your confidence from your Instagram profile.<br/>She doesn't know what you drive.</p>
              <p className="text-white">The only thing she knows is whether you walked up or you didn't.</p>
            </div>
          </FadeIn>

          <FadeIn delay={0.4} className="mt-24 pt-16 border-t border-white/10">
            <h3 className="text-3xl md:text-5xl font-black text-white leading-tight">
              That's it. That's the whole game. <br/>
              And the only way to win it is to stop playing it.
            </h3>
          </FadeIn>
        </div>
      </section>

      {/* 4. THE DIRECT PHILOSOPHY SECTION */}
      <section className="py-24 md:py-40 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          <FadeIn>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-brand-blue leading-tight sticky top-32">
              The most direct path to the relationship you want is the most direct approach.
            </h2>
          </FadeIn>
          
          <FadeIn delay={0.2} className="text-xl md:text-2xl text-brand-dark font-medium leading-relaxed space-y-8">
            <p>High achievers don't wait. They don't hope. They go after what they want — in business, in life.</p>
            <p className="font-bold text-2xl md:text-3xl">Except here.</p>
            <p>In dating, they go indirect. Apps. Algorithms. Social circles. Waiting for the perfect moment.</p>
            <p className="text-brand-blue font-bold">It costs them years.</p>
            <p>Cold approach is not a pickup technique. It's the only move that puts you fully in control of who you end up with.</p>
            <p className="font-black text-3xl md:text-4xl mt-12 pt-12 border-t-2 border-brand-dark">That's the exit.</p>
          </FadeIn>
        </div>
      </section>

      {/* 5. WHO THIS IS FOR SECTION */}
      <section className="py-24 md:py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-brand-dark/10">
        <FadeIn className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-black text-brand-blue">
            This is for men who are done settling.
          </h2>
        </FadeIn>

        <div className="flex flex-col items-center gap-8 text-2xl md:text-4xl font-bold text-brand-dark text-center max-w-4xl mx-auto mb-20">
          <FadeIn delay={0.1}><p>You've built a career. You come home alone.</p></FadeIn>
          <FadeIn delay={0.2}><p>The girls you like flake. The rest don't excite you.</p></FadeIn>
          <FadeIn delay={0.3}><p>You've watched 100 videos. Approached 0 women.</p></FadeIn>
          <FadeIn delay={0.4}><p>You're not bad with women. You're using the wrong strategy.</p></FadeIn>
        </div>

        <FadeIn delay={0.5}>
          <p className="text-2xl md:text-3xl font-black text-center text-brand-blue bg-brand-blue/10 py-8 px-6 rounded-2xl mx-auto max-w-3xl">
            If that's you — you're in the right place.
          </p>
        </FadeIn>
      </section>

      {/* 6. HOW IT WORKS SECTION */}
      <section id="how-it-works" className="py-24 md:py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <FadeIn className="text-center mb-24">
          <h2 className="text-4xl md:text-6xl font-black text-brand-blue">
            The Direct Exit. 3 steps.
          </h2>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 relative">
          {/* Connecting line on desktop */}
          <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-[2px] bg-brand-dark/10 z-0" />

          {[
            { num: "01", title: "DIAGNOSE", text: "We find exactly what's keeping you indirect. Not what you think. What actually is." },
            { num: "02", title: "BUILD", text: "You get a system built for your life. Your city. Your standards. Your schedule." },
            { num: "03", title: "EXECUTE", text: "You approach. You get feedback. You improve. Fast. Until the game is over." }
          ].map((step, i) => (
            <FadeIn key={i} delay={i * 0.1} className="relative z-10">
              <div className="flex flex-col items-center text-center group">
                <div className="w-24 h-24 rounded-full bg-brand-bg border-4 border-brand-bg shadow-[0_0_0_2px_rgba(44,44,42,0.1)] flex items-center justify-center mb-8 relative overflow-hidden group-hover:border-brand-blue transition-colors">
                  <span className="text-3xl font-black text-brand-dark group-hover:scale-110 transition-transform">{step.num}</span>
                </div>
                <h3 className="text-2xl font-black text-brand-dark mb-4 uppercase tracking-widest">{step.title}</h3>
                <p className="text-lg text-brand-dark/80 font-medium leading-relaxed max-w-xs">{step.text}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* 7. RESULTS SECTION */}
      <section className="py-24 md:py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <FadeIn className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-black text-brand-blue">
            Same man. Direct approach.<br/>Different life.
          </h2>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {[
            "Ronald spent 6 months getting flaked on by women he actually liked. 8 weeks in — she asked him to be exclusive.",
            "Lokio couldn't get through the first 2 minutes. Week 3 — 5 approaches in one afternoon. Coffee shop, street, bar.",
            "Hitesh had the looks, the career, the presence. Girls kept losing interest on dates. Fixed the frame. Kept the girl."
          ].map((testimonial, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <div className="bg-brand-dark text-white rounded-3xl p-10 h-full flex items-center border-l-4 border-brand-blue shadow-2xl hover:-translate-y-2 transition-transform duration-300">
                <p className="text-xl md:text-2xl font-medium leading-relaxed italic">"{testimonial}"</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* 8. ABOUT STEF SECTION */}
      <section className="py-24 md:py-40 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-brand-dark/10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <FadeIn direction="right" className="order-2 lg:order-1 w-full flex justify-center">
            {/* PHOTO PLACEHOLDER */}
            <div className="w-full max-w-sm aspect-[3/4] bg-brand-photo rounded-[2rem] flex items-center justify-center relative shadow-[0_20px_60px_rgb(0,0,0,0.1)] overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-tr from-black/10 to-transparent mix-blend-multiply" />
              <div className="absolute inset-0 border-[8px] border-brand-bg rounded-[2rem]" />
              <span className="text-brand-dark/40 font-bold tracking-[0.2em] uppercase text-sm z-10">Photo of Stef</span>
            </div>
          </FadeIn>
          
          <div className="order-1 lg:order-2">
            <FadeIn direction="left">
              <h2 className="text-4xl md:text-6xl font-black text-brand-blue mb-10 leading-tight">
                I spent years figuring this out. You don't have to.
              </h2>
            </FadeIn>
            <FadeIn direction="left" delay={0.2} className="text-xl md:text-2xl text-brand-dark font-medium leading-relaxed space-y-8">
              <p>Based in Brussels. Coaching high-achieving men across Europe and globally.</p>
              <p className="font-bold text-2xl md:text-3xl text-brand-blue">I don't teach game. I teach the exit from it.</p>
              <p>One-on-one only. Limited spots. Results or I don't take your money.</p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* 9. FINAL CTA SECTION */}
      <section className="bg-brand-dark text-white py-32 md:py-48 px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        <FadeIn>
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-black leading-[1.1] tracking-tight mb-8">
            Play DIRECT. <br/>
            <span className="text-brand-blue">Or stay average forever.</span>
          </h2>
        </FadeIn>
        
        <FadeIn delay={0.1}>
          <p className="text-xl md:text-3xl text-brand-light font-medium mb-16">
            12 weeks. One-on-one. Built around your life.
          </p>
        </FadeIn>

        <FadeIn delay={0.2} className="w-full">
          <button 
            onClick={() => setIsModalOpen(true)}
            className="px-12 py-6 bg-white text-brand-dark rounded-xl font-black uppercase tracking-widest text-lg shadow-[0_0_40px_rgba(255,255,255,0.2)] hover:shadow-[0_0_60px_rgba(255,255,255,0.4)] hover:scale-105 active:scale-100 transition-all duration-300 w-full sm:w-auto"
          >
            Apply for Coaching
          </button>
        </FadeIn>

        <FadeIn delay={0.3}>
          <p className="mt-8 text-sm md:text-base text-brand-light/60 font-medium tracking-wide uppercase">
            Not for everyone. If you're not ready to do the work — don't apply.
          </p>
        </FadeIn>
      </section>

      {/* 10. FOOTER */}
      <footer className="bg-brand-dark text-white border-t border-white/10 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <span className="font-script text-3xl font-bold block mb-2">Stef Dating</span>
            <span className="text-brand-light text-sm tracking-widest uppercase">Brussels, Belgium</span>
          </div>
          
          <div className="flex gap-8 text-sm font-bold tracking-widest uppercase">
            <button onClick={() => setIsModalOpen(true)} className="text-brand-light hover:text-white transition-colors">Apply</button>
            <a href="#" className="text-brand-light hover:text-white transition-colors">Instagram</a>
            <a href="#" className="text-brand-light hover:text-white transition-colors">YouTube</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
