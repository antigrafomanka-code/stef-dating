import { useMutation } from "@tanstack/react-query";
import { z } from "zod";

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
      const response = await fetch("/api/applications", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        const err = await response.json().catch(() => ({}));
        throw new Error(err.error ?? "Submission failed. Please try again.");
      }

      return response.json();
    },
  });
}
