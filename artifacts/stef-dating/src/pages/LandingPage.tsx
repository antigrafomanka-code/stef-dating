import { motion, useScroll, useTransform } from "framer-motion";
import { FadeIn } from "@/components/FadeIn";

const APPLY_URL = "https://stefvervaet.youcanbook.me/";

export default function LandingPage() {
  const { scrollY } = useScroll();
  const headerOpacity = useTransform(scrollY, [0, 50, 100], [1, 0, 1]);
  const headerBg = useTransform(
    scrollY,
    [0, 100],
    ["rgba(245, 241, 236, 0)", "rgba(245, 241, 236, 0.9)"],
  );
  const headerShadow = useTransform(
    scrollY,
    [0, 100],
    ["none", "0 4px 30px rgba(0,0,0,0.05)"],
  );

  return (
    <div className="w-full bg-brand-bg min-h-screen">
      {/* STICKY HEADER */}
      <motion.nav
        style={{
          opacity: headerOpacity,
          backgroundColor: headerBg,
          boxShadow: headerShadow,
        }}
        className="fixed top-0 left-0 right-0 z-50 py-4 px-6 md:px-12 flex justify-between items-center backdrop-blur-md transition-all"
      >
        <span className="font-script text-3xl text-brand-dark tracking-wider">
          STEF DATING
        </span>
        <a
          href={APPLY_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm font-bold tracking-widest uppercase text-brand-dark hover:text-brand-blue transition-colors px-4 py-2 hover:bg-brand-dark/5 rounded-full"
        >
          Apply
        </a>
      </motion.nav>

      {/* 1. HERO SECTION */}
      <section className="relative pt-32 pb-24 md:pt-48 md:pb-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex flex-col items-center text-center">
        <FadeIn delay={0.1}>
          <span className="font-script text-5xl md:text-7xl text-brand-dark mb-12 block tracking-wider">
            STEF DATING
          </span>
        </FadeIn>

        <FadeIn delay={0.2}>
          <h1 className="text-5xl sm:text-6xl md:text-8xl font-black text-brand-blue tracking-tighter leading-[1.1] mb-8">
            Play DIRECT. <br />
            <span className="text-brand-dark">Or stay average forever.</span>
          </h1>
        </FadeIn>

        <FadeIn delay={0.3}>
          <p className="text-lg md:text-xl text-brand-dark/80 max-w-2xl mx-auto mb-12 font-medium leading-relaxed">
            I'm Stef. I coach high-achieving men to cold approach — the most
            direct path to the woman you want and the exit from the game.
          </p>
        </FadeIn>

        <FadeIn
          delay={0.4}
          className="flex flex-col sm:flex-row gap-4 mb-24 w-full sm:w-auto"
        >
          <a
            href={APPLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="px-10 py-5 bg-brand-dark text-white rounded-xl font-bold uppercase tracking-widest text-sm shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:shadow-[0_12px_40px_rgb(0,0,0,0.2)] hover:-translate-y-1 transition-all duration-300 w-full sm:w-auto text-center"
          >
            Apply for Coaching
          </a>
          <a
            href="#how-it-works"
            className="px-10 py-5 bg-transparent border-2 border-brand-dark text-brand-dark rounded-xl font-bold uppercase tracking-widest text-sm hover:bg-brand-dark/5 hover:-translate-y-1 transition-all duration-300 w-full sm:w-auto"
          >
            Watch how it works
          </a>
        </FadeIn>

        <FadeIn delay={0.5} className="w-full">
          {/* HERO VIDEO EMBED */}
          <div className="relative w-full max-w-5xl aspect-video mx-auto rounded-3xl overflow-hidden shadow-2xl">
            <iframe
              src="https://www.youtube.com/embed/OuY_ELB0B8g"
              title="Stef Dating — Play Direct"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute inset-0 w-full h-full"
            />
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
            More lines. Better profile. More swipes. They're optimizing the
            wrong thing.
          </p>
        </FadeIn>

        <FadeIn>
          <p className="text-2xl md:text-3xl font-bold text-brand-dark text-center max-w-4xl mx-auto">
            Apps, social circle, better techniques. None of this gets you out. It just makes you better at being stuck.
          </p>
        </FadeIn>
      </section>

      {/* 3. THE GUT PUNCH SECTION */}
      <section className="bg-brand-dark text-white py-32 md:py-48 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <FadeIn>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-black leading-[1.1] tracking-tight mb-16">
              She doesn't know about your inner work. <br />
              <span className="text-brand-blue">
                The only thing she knows is whether you walked up or you didn't.
              </span>
            </h2>
          </FadeIn>

          <FadeIn delay={0.2} className="mt-24 pt-16 border-t border-white/10">
            <h3 className="text-3xl md:text-5xl font-black text-white leading-tight">
              That's it. That's the whole game. <br />
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
              The most direct path to the relationship you want is the most
              direct approach.
            </h2>
          </FadeIn>

          <FadeIn
            delay={0.2}
            className="text-xl md:text-2xl text-brand-dark font-medium leading-relaxed space-y-8"
          >
            <p>
              High achievers don't wait. They don't hope. They go after what
              they want — in business, in life.
            </p>
            <p className="font-bold text-2xl md:text-3xl">Except here.</p>
            <p>
              In dating, they go indirect. Apps. Algorithms. Social circles.
              Waiting for the perfect moment.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* 5. WHO THIS IS FOR SECTION */}
      <section className="py-24 md:py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-brand-dark/10">
        <FadeIn className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-black text-brand-blue">
            Level up or stay average forever.
          </h2>
        </FadeIn>

        <div className="flex flex-col items-center gap-8 text-2xl md:text-4xl font-bold text-brand-dark text-center max-w-4xl mx-auto mb-20">
          <FadeIn delay={0.1}>
            <p>The woman of your dreams doesn't fall on your lap.</p>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p>You go get her.</p>
          </FadeIn>
        </div>

        <FadeIn delay={0.7}>
          <p className="text-2xl md:text-3xl font-black text-center text-brand-blue bg-brand-blue/10 py-8 px-6 rounded-2xl mx-auto max-w-3xl">
            That's DIRECT.
          </p>
        </FadeIn>
      </section>

      {/* 6. HOW IT WORKS SECTION */}
      <section
        id="how-it-works"
        className="py-24 md:py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
      >
        <FadeIn className="text-center mb-24">
          <h2 className="text-4xl md:text-6xl font-black text-brand-blue">
            The Direct Exit. 3 steps.
          </h2>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 relative">
          {/* Connecting line on desktop */}
          <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-[2px] bg-brand-dark/10 z-0" />

          {[
            {
              num: "01",
              title: "DIAGNOSE",
              text: "We find exactly what's keeping you indirect. Not what you think. What actually is.",
            },
            {
              num: "02",
              title: "BUILD",
              text: "You get a system built for your life. Your city. Your standards. Your schedule.",
            },
            {
              num: "03",
              title: "EXECUTE",
              text: "You approach. You get feedback. You improve. Fast. Until the game is over.",
            },
          ].map((step, i) => (
            <FadeIn key={i} delay={i * 0.1} className="relative z-10">
              <div className="flex flex-col items-center text-center group">
                <div className="w-24 h-24 rounded-full bg-brand-bg border-4 border-brand-bg shadow-[0_0_0_2px_rgba(44,44,42,0.1)] flex items-center justify-center mb-8 relative overflow-hidden group-hover:border-brand-blue transition-colors">
                  <span className="text-3xl font-black text-brand-dark group-hover:scale-110 transition-transform">
                    {step.num}
                  </span>
                </div>
                <h3 className="text-2xl font-black text-brand-dark mb-4 uppercase tracking-widest">
                  {step.title}
                </h3>
                <p className="text-lg text-brand-dark/80 font-medium leading-relaxed max-w-xs">
                  {step.text}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* 7. RESULTS / https://www.youtube.com/watch?v=_oM7g4ns6T0S SECTION */}
      <section
        id="testimonials"
        className="bg-brand-dark py-24 md:py-40 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-7xl mx-auto">
          <FadeIn className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-black text-brand-blue">
              Same man. Direct approach.
              <br />
              Different life.
            </h2>
          </FadeIn>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Steve L., Entrepreneur",
                text: "Getting 1-1 custom feedback from Stef was the most valuable experience.",
                videoUrl: "https://www.youtube.com/embed/SfBsMbJu5d8",
              },
              {
                name: "Rob V., Business Owner",
                text: "Stef helped me take my social skills to the next level.",
                videoUrl: "https://www.youtube.com/embed/x9-kKonPOMs",
              },
              {
                name: "Hitesh, Coach",
                text: "Stef helped me see all the ways I was sabotaging connections and being flaked on as a result.",
                videoUrl: "https://www.youtube.com/embed/_oM7g4ns6T0",
              },
            ].map((t, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="rounded-3xl overflow-hidden h-full flex flex-col border border-white/10 hover:border-brand-blue/50 hover:-translate-y-2 transition-all duration-300">
                  <iframe
                    src={t.videoUrl}
                    title={t.name}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full aspect-video"
                  />
                  {/* Quote + attribution */}
                  <div className="p-8 flex flex-col justify-between flex-1">
                    <p className="text-xl text-white font-medium leading-relaxed mb-6">
                      "{t.text}"
                    </p>
                    <span className="text-brand-blue font-black tracking-widest uppercase text-sm">
                      — {t.name}
                    </span>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* 8. ABOUT STEF SECTION */}
      <section className="py-24 md:py-40 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-brand-dark/10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <FadeIn
            direction="right"
            className="order-2 lg:order-1 w-full flex justify-center"
          >
            {/* PHOTO PLACEHOLDER */}
            <div className="w-full max-w-sm aspect-[3/4] bg-brand-photo rounded-[2rem] flex items-center justify-center relative shadow-[0_20px_60px_rgb(0,0,0,0.1)] overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-tr from-black/10 to-transparent mix-blend-multiply" />
              <div className="absolute inset-0 border-[8px] border-brand-bg rounded-[2rem]" />
              <span className="text-brand-dark/40 font-bold tracking-[0.2em] uppercase text-sm z-10">
                Photo of Stef
              </span>
            </div>
          </FadeIn>

          <div className="order-1 lg:order-2">
            <FadeIn direction="left">
              <h2 className="text-4xl md:text-6xl font-black text-brand-blue mb-10 leading-tight">
                I spent years figuring this out. You don't have to.
              </h2>
            </FadeIn>
            <FadeIn
              direction="left"
              delay={0.2}
              className="text-xl md:text-2xl text-brand-dark font-medium leading-relaxed space-y-8"
            >
              <p>
                Based in Brussels. Coaching high-achieving men across Europe and
                globally.
              </p>
              <p className="font-bold text-2xl md:text-3xl text-brand-blue">
                I don't teach game. I teach the exit from it.
              </p>
              <p>
                One-on-one only. Limited spots. Results or I don't take your
                money.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* 9. FINAL CTA SECTION */}
      <section className="bg-brand-dark text-white py-32 md:py-48 px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        <FadeIn>
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-black leading-[1.1] tracking-tight mb-8">
            Play DIRECT. <br />
            <span className="text-brand-blue">Or stay average forever.</span>
          </h2>
        </FadeIn>

        <FadeIn delay={0.1}>
          <p className="text-xl md:text-3xl text-brand-light font-medium mb-16">
            12 weeks. One-on-one. Built around your life.
          </p>
        </FadeIn>

        <FadeIn delay={0.2} className="w-full">
          <a
            href={APPLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="px-12 py-6 bg-white text-brand-dark rounded-xl font-black uppercase tracking-widest text-lg shadow-[0_0_40px_rgba(255,255,255,0.2)] hover:shadow-[0_0_60px_rgba(255,255,255,0.4)] hover:scale-105 active:scale-100 transition-all duration-300 w-full sm:w-auto text-center"
          >
            Apply for Coaching
          </a>
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
            <span className="font-script text-3xl block mb-2 tracking-wider">
              STEF DATING
            </span>
            <span className="text-brand-light text-sm tracking-widest uppercase">
              Brussels, Belgium
            </span>
          </div>

          <div className="flex gap-8 text-sm font-bold tracking-widest uppercase">
            <a
              href={APPLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-light hover:text-white transition-colors"
            >
              Apply
            </a>
            <a
              href="#"
              className="text-brand-light hover:text-white transition-colors"
            >
              Instagram
            </a>
            <a
              href="#"
              className="text-brand-light hover:text-white transition-colors"
            >
              YouTube
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
