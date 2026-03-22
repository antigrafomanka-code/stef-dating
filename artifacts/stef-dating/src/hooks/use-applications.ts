import { useMutation } from "@tanstack/react-query";
import { z } from "zod";

// Validates the coaching application form
export const applicationSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  age: z.coerce.number().min(18, "You must be at least 18 years old").max(100, "Please enter a valid age"),
  stuck: z.string().min(10, "Please provide a bit more detail (min 10 characters)"),
  whyNow: z.string().min(10, "Please provide a bit more detail (min 10 characters)"),
});

export type ApplicationInput = z.infer<typeof applicationSchema>;

export function useCreateApplication() {
  return useMutation({
    mutationFn: async (data: ApplicationInput) => {
      // In a real app, this would be a POST to an API endpoint
      // e.g. await fetch(api.applications.create.path, { ... })
      
      // Simulate network latency for a realistic feel
      await new Promise((resolve) => setTimeout(resolve, 1500));
      
      console.log("[Mock API] Application submitted successfully:", data);
      
      return { success: true, message: "Application received." };
    },
  });
}
