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
      <section className="relative pt-16 pb-24 md:pt-20 md:pb-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex flex-col items-center text-center">
        <FadeIn delay={0.1}>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-brand-blue tracking-tighter leading-[1.1] mb-8">
            Get the GIRLFRIEND you want. <br />
            <span className="text-brand-dark">Or stay average forever.</span>
          </h1>
        </FadeIn>

        <FadeIn delay={0.3}>
          <p className="text-lg md:text-xl text-brand-dark/80 max-w-2xl mx-auto mb-12 font-medium leading-relaxed">
            I'm Stef. I help high-achieving men get the girlfriend they want in
            less than 12 weeks by mastering cold approach and confidence.
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
            href="#testimonials"
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

      {/* 5. WHO THIS IS FOR SECTION */}
      <section className="py-10 md:py-14 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-brand-dark/10">
        <FadeIn className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-black text-brand-blue">
            Level up or stay average forever.
          </h2>
        </FadeIn>

                  <div className="flex flex-col items-center gap-2 text-2xl md:text-4xl font-bold text-brand-dark text-center max-w-4xl mx-auto mb-4">
          <FadeIn delay={0.1}>
            <p className="whitespace-nowrap">
              The woman of your dreams doesn't fall on your lap.
            </p>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p>You go get her.</p>
          </FadeIn>
              <div className="flex justify-center pt-8">
                              <a
                                                  href="https://stefvervaet.youcanbook.me/"
                                                  target="_blank"
                                                  rel="noopener noreferrer"
                                                  className="text-2xl font-bold tracking-widest uppercase text-brand-dark hover:text-brand-blue transition-colors px-4 py-2 hover:bg-brand-dark/5 rounded-full"
                                                >
                                                That's DIRECT.
                              </a>
              </div>
                  </div>

      </section>

      {/* 7. RESULTS SECTION */}
      <section
        id="testimonials"
        className="bg-brand-dark py-24 md:py-40 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-7xl mx-auto">
          <FadeIn className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-black text-brand-blue">
              What my clients say about the coaching:
              
              <br />
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
              {
                name: "Aaron T., Lawyer",
                text: "Stef showed me how to express myself in the most authentic way.",
                videoUrl: "https://www.youtube.com/embed/Gz1P70osSoY",
              },
              {
                name: "Jason P., Coach",
                text: "Stef helped me live outside of my own limits.",
                videoUrl: "https://www.youtube.com/embed/VdxiWfxckcM",
              },
              {
                name: "Nicholas, Entrepreneur",
                text: "After just 3 days with Stef, I'm meeting my ideal women, beautiful, smart, single women. I'll never go back to dating apps again.",
                videoUrl: "https://www.youtube.com/embed/Fi7tcGc2eB8",
              },
              {
                name: "Vlad M., Business Owner",
                text: "I came out of the bootcamp with a superpower. I approach women I actually want. Anywhere. Anytime.",
                videoUrl: "https://www.youtube.com/embed/0UII9VRiXFM",
              },
              {
                name: "Tamer, Entrepreneur",
                text: "Stef didn't just change my dating life. He showed me what I was capable of across every area of my life.",
                videoUrl: "https://www.youtube.com/embed/pT_nxFQmOLM",
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
              <img src="/stef-profile.png" alt="Stef" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 border-[8px] border-brand-bg rounded-[2rem]" />
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

      {/* 4. THE DIRECT PHILOSOPHY SECTION */}
      <section className="py-24 md:py-40 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-brand-dark/10">
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
            1 week. One-on-one. Built around your life style.
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
              href="https://www.instagram.com/stefdating/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-light hover:text-white transition-colors"
            >
              Instagram
            </a>
            <a
                href="https://www.youtube.com/@stefdating"
                target="_blank"
                rel="noopener noreferrer"
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
