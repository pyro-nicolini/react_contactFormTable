import { z } from "zod";

export const contactTypeOptions = [
  "Familiar",
  "amigo",
  "Trabajo",
  "Conocido",
  "otro",
] as const;

export const contactSchema = z.object({
  name: z.string().min(3, { message: "nombre de 2 o más caracteres" }).max(50),
  lastname: z
    .string()
    .min(2, { message: "nombre de 2 o más caracteres" })
    .max(50),
  email: z
    .string()
    .min(1, { message: "Correo Requerido" })
    .email({ message: "Correo inválido" }),
  type: z.enum(contactTypeOptions, { errorMap: () => ({ message: " Seleccione un tipo"}),}),
});

export type Contact = z.infer<typeof contactSchema> & { id: string };
