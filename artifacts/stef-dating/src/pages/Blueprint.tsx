import { motion, useScroll, useTransform } from "framer-motion";
import { FadeIn } from "@/components/FadeIn";
import { useState } from "react";
import { useLocation } from "wouter";

const APPLY_URL = "https://stefvervaet.youcanbook.me/";

export default function Blueprint() {
  const [loading, setLoading] = useState(false);
  const [, navigate] = useLocation();
  const { scrollY } = useScroll();
  const headerOpacity = useTransform(scrollY, [0, 50, 100], [1, 0, 1]);
  const headerBg = useTransform(
    scrollY,
    [0, 100],
    ["rgba(245, 241, 236, 0)", "rgba(245, 241, 236, 0.9)"]
  );

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const form = e.target;
    const data = new FormData(form);

    await fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(data).toString(),
    });

    navigate("/course");
  };

  return (
    <div className="w-full bg-brand-bg min-h-screen">
      {/* STICKY HEADER */}
      <motion.nav
        style={{
          opacity: headerOpacity,
          backgroundColor: headerBg,
        }}
        className="fixed top-0 left-0 right-0 z-50 py-4 px-6 md:px-12 flex justify-between items-center backdrop-blur-md"
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

      {/* HERO */}
      <section className="relative pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto flex flex-col items-center text-center">
        <FadeIn delay={0.1}>
          <span className="text-sm font-bold tracking-widest uppercase text-brand-blue mb-6 block">
            Free Mini-Course
          </span>
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-black text-brand-dark tracking-tighter leading-[1.1] mb-6">
            Get instant access to the{" "}
            <span className="text-brand-blue">Cold Approach Blueprint.</span>
          </h1>
        </FadeIn>

        <FadeIn delay={0.2}>
          <p className="text-lg md:text-xl text-brand-dark/70 max-w-xl mx-auto mb-12 font-medium leading-relaxed">
            Everything I teach my 1-on-1 clients — structured into a step-by-step programme you can start today.
          </p>
        </FadeIn>

        {/* FORM */}
        <FadeIn delay={0.3} className="w-full max-w-md">
          <form
            name="blueprint"
            method="POST"
            data-netlify="true"
            onSubmit={handleSubmit}
            className="flex flex-col gap-4"
          >
            <input type="hidden" name="form-name" value="blueprint" />

            <input
              type="text"
              name="name"
              placeholder="Your first name"
              required
              className="w-full px-6 py-4 rounded-xl border border-brand-dark/20 bg-white text-brand-dark font-medium text-base focus:outline-none focus:border-brand-blue transition-colors"
            />

            <input
              type="email"
              name="email"
              placeholder="Your email address"
              required
              className="w-full px-6 py-4 rounded-xl border border-brand-dark/20 bg-white text-brand-dark font-medium text-base focus:outline-none focus:border-brand-blue transition-colors"
            />

            <input
              type="tel"
              name="phone"
              placeholder="Your phone number"
              required
              className="w-full px-6 py-4 rounded-xl border border-brand-dark/20 bg-white text-brand-dark font-medium text-base focus:outline-none focus:border-brand-blue transition-colors"
            />

            <button
              type="submit"
              disabled={loading}
              className="w-full px-10 py-5 bg-brand-dark text-white rounded-xl font-bold uppercase tracking-widest text-sm shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:shadow-[0_12px_40px_rgb(0,0,0,0.2)] hover:-translate-y-1 transition-all duration-300"
            >
              {loading ? "Loading..." : "Get instant access →"}
            </button>

            <p className="text-sm text-brand-dark/40 font-medium">
              No spam. Ever.
            </p>
          </form>
        </FadeIn>
      </section>

      {/* FOOTER */}
      <footer className="bg-brand-dark text-white py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <span className="font-script text-2xl tracking-wider">STEF DATING</span>
          <span className="text-brand-light text-sm tracking-widest uppercase">Brussels, Belgium</span>
        </div>
      </footer>
    </div>
  );
}