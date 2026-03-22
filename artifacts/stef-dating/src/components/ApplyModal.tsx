import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { X, CheckCircle2, Loader2 } from "lucide-react";
import { applicationSchema, type ApplicationInput, useCreateApplication } from "@/hooks/use-applications";

interface ApplyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ApplyModal({ isOpen, onClose }: ApplyModalProps) {
  const [showSuccess, setShowSuccess] = useState(false);
  const mutation = useCreateApplication();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ApplicationInput>({
    resolver: zodResolver(applicationSchema),
  });

  // Lock body scroll when open
  useEffect(() => {
    if (isOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "unset";
    return () => { document.body.style.overflow = "unset"; };
  }, [isOpen]);

  // Reset state when modal completely closes
  useEffect(() => {
    if (!isOpen) {
      setTimeout(() => {
        reset();
        setShowSuccess(false);
        mutation.reset();
      }, 500);
    }
  }, [isOpen, reset, mutation]);

  const onSubmit = (data: ApplicationInput) => {
    mutation.mutate(data, {
      onSuccess: () => {
        setShowSuccess(true);
      },
    });
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={onClose}
            className="absolute inset-0 bg-brand-dark/40 backdrop-blur-sm"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.4, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="relative w-full max-w-2xl bg-brand-bg rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-8 py-6 border-b border-brand-dark/10 bg-brand-bg z-10">
              <h2 className="text-2xl font-bold text-brand-blue tracking-tight">
                {showSuccess ? "Application Received" : "Apply for Coaching"}
              </h2>
              <button
                onClick={onClose}
                className="p-2 rounded-full hover:bg-brand-dark/5 text-brand-dark/60 hover:text-brand-dark transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Scrollable Body */}
            <div className="p-8 overflow-y-auto no-scrollbar">
              <AnimatePresence mode="wait">
                {showSuccess ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center justify-center py-16 text-center"
                  >
                    <div className="w-20 h-20 bg-brand-dark rounded-full flex items-center justify-center mb-6 text-white shadow-lg">
                      <CheckCircle2 className="w-10 h-10" />
                    </div>
                    <h3 className="text-3xl font-bold text-brand-dark mb-4">You took the first step.</h3>
                    <p className="text-brand-dark/80 text-lg max-w-md">
                      We'll review your application and reach out within 48 hours if you're a fit for the program.
                    </p>
                    <button
                      onClick={onClose}
                      className="mt-10 px-8 py-4 bg-brand-dark text-white rounded-xl font-bold uppercase tracking-widest text-sm hover:bg-brand-dark/90 transition-colors"
                    >
                      Close Window
                    </button>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit(onSubmit)}
                    className="flex flex-col gap-6"
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="flex flex-col gap-2">
                        <label className="text-sm font-bold text-brand-dark uppercase tracking-wider">Name</label>
                        <input
                          {...register("name")}
                          disabled={mutation.isPending}
                          className="px-4 py-3 rounded-xl bg-white border border-brand-dark/10 focus:outline-none focus:ring-2 focus:ring-brand-blue/50 focus:border-brand-blue transition-all disabled:opacity-50"
                          placeholder="John Doe"
                        />
                        {errors.name && <span className="text-red-500 text-sm font-medium">{errors.name.message}</span>}
                      </div>

                      <div className="flex flex-col gap-2">
                        <label className="text-sm font-bold text-brand-dark uppercase tracking-wider">Age</label>
                        <input
                          {...register("age")}
                          type="number"
                          disabled={mutation.isPending}
                          className="px-4 py-3 rounded-xl bg-white border border-brand-dark/10 focus:outline-none focus:ring-2 focus:ring-brand-blue/50 focus:border-brand-blue transition-all disabled:opacity-50"
                          placeholder="30"
                        />
                        {errors.age && <span className="text-red-500 text-sm font-medium">{errors.age.message}</span>}
                      </div>
                    </div>

                    <div className="flex flex-col gap-2">
                      <label className="text-sm font-bold text-brand-dark uppercase tracking-wider">Email</label>
                      <input
                        {...register("email")}
                        type="email"
                        disabled={mutation.isPending}
                        className="px-4 py-3 rounded-xl bg-white border border-brand-dark/10 focus:outline-none focus:ring-2 focus:ring-brand-blue/50 focus:border-brand-blue transition-all disabled:opacity-50"
                        placeholder="john@example.com"
                      />
                      {errors.email && <span className="text-red-500 text-sm font-medium">{errors.email.message}</span>}
                    </div>

                    <div className="flex flex-col gap-2">
                      <label className="text-sm font-bold text-brand-dark uppercase tracking-wider">What's keeping you stuck?</label>
                      <textarea
                        {...register("stuck")}
                        disabled={mutation.isPending}
                        rows={3}
                        className="px-4 py-3 rounded-xl bg-white border border-brand-dark/10 focus:outline-none focus:ring-2 focus:ring-brand-blue/50 focus:border-brand-blue transition-all resize-none disabled:opacity-50"
                        placeholder="Apps, social circle, not approaching..."
                      />
                      {errors.stuck && <span className="text-red-500 text-sm font-medium">{errors.stuck.message}</span>}
                    </div>

                    <div className="flex flex-col gap-2">
                      <label className="text-sm font-bold text-brand-dark uppercase tracking-wider">Why now?</label>
                      <textarea
                        {...register("whyNow")}
                        disabled={mutation.isPending}
                        rows={3}
                        className="px-4 py-3 rounded-xl bg-white border border-brand-dark/10 focus:outline-none focus:ring-2 focus:ring-brand-blue/50 focus:border-brand-blue transition-all resize-none disabled:opacity-50"
                        placeholder="I'm tired of settling."
                      />
                      {errors.whyNow && <span className="text-red-500 text-sm font-medium">{errors.whyNow.message}</span>}
                    </div>

                    {mutation.isError && (
                      <div className="p-4 bg-red-50 border border-red-100 rounded-xl text-red-600 text-sm font-medium">
                        Something went wrong. Please try again.
                      </div>
                    )}

                    <div className="pt-4 mt-2 border-t border-brand-dark/5">
                      <button
                        type="submit"
                        disabled={mutation.isPending}
                        className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-brand-dark text-white rounded-xl font-bold uppercase tracking-widest text-sm hover:bg-brand-dark/90 hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 transition-all disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none"
                      >
                        {mutation.isPending ? (
                          <>
                            <Loader2 className="w-5 h-5 animate-spin" />
                            Submitting...
                          </>
                        ) : (
                          "Apply Now"
                        )}
                      </button>
                    </div>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
