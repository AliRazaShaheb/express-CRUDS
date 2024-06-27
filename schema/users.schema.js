import { z } from "zod";

export const createUserSchema = z.object({
  body: z.object({
    name: z
      .string()
      .regex(/^[A-Za-z]/g, "Name must start with text [a-z]")
      .min(1, "Name is required"),
    email: z.string().email("Invalid email!"),
  }),
});
