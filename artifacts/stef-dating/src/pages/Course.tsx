import { motion, useScroll, useTransform } from "framer-motion";
import { FadeIn } from "@/components/FadeIn";

const APPLY_URL = "https://stefvervaet.youcanbook.me/";

export default function Course() {
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
        <a href="/" className="font-script text-3xl text-brand-dark tracking-wider hover:text-brand-blue transition-colors">
          STEF DATING
        </a>
        <a
          href={APPLY_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm font-bold tracking-widest uppercase text-brand-dark hover:text-brand-blue transition-colors px-4 py-2 hover:bg-brand-dark/5 rounded-full"
        >
          Apply
        </a>
      </motion.nav>

      {/* HERO SECTION */}
      <section className="relative pt-16 pb-8 md:pt-20 md:pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex flex-col items-center text-center">
        <FadeIn delay={0.1}>
          <h1 className="text-5xl sm:text-6xl md:text-8xl font-black text-brand-blue tracking-tighter leading-[1.1] mb-8">
            The Direct Method.<br />
            <span className="text-brand-dark">The Course.</span>
          </h1>
        </FadeIn>

        <FadeIn delay={0.2}>
          <p className="text-lg md:text-xl text-brand-dark/80 max-w-2xl mx-auto mb-12 font-medium leading-relaxed">
            Everything I teach my 1-on-1 clients — structured into a step-by-step programme you can start today.
          </p>
        </FadeIn>

        <FadeIn delay={0.3} className="flex flex-col sm:flex-row gap-4 mb-8 w-full sm:w-auto">
          <a
            href={APPLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="px-10 py-5 bg-brand-dark text-white rounded-xl font-bold uppercase tracking-widest text-sm shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:shadow-[0_12px_40px_rgb(0,0,0,0.2)] hover:-translate-y-1 transition-all duration-300 w-full sm:w-auto text-center"
          >
            Apply for Coaching
          </a>
        </FadeIn>
      </section>

      {/* COURSE CONTENT PLACEHOLDER */}
      {/* COURSE CONTENT */}
      <section className="py-24 md:py-32 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto border-t border-brand-dark/10">
        <FadeIn className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-black text-brand-dark mb-6 leading-tight">
            The Cold Approach Blueprint.
          </h2>
          <p className="text-xl text-brand-dark/70 font-medium leading-relaxed max-w-2xl mx-auto">
            The 3-second rule. How to open direct. What happens in her brain in the first 2 minutes. How to get her number without asking. One framework. Repeatable. Anywhere.
          </p>
        </FadeIn>
        <FadeIn delay={0.2}>
          <div className="rounded-3xl overflow-hidden shadow-[0_20px_60px_rgb(0,0,0,0.12)] aspect-video w-full">
            <iframe
              src="https://www.youtube.com/embed/xKoQqkMr0nw"
              title="The Cold Approach Blueprint"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            />
          </div>
        </FadeIn>
      </section>

      {/* TESTIMONIALS SECTION */}
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
                text: "After just 3 days with Stef, I'm meeting my ideal women, beautiful, smart, single women. I'd never go back to dating apps.",
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

      {/* FOOTER */}
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
