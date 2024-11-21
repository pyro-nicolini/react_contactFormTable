import { FormProvider, useForm } from "react-hook-form";
import Input from "./Input";
import Button from "./Button";
import { Contact, contactSchema, contactTypeOptions } from "../Schemas/Contact";
import { zodResolver } from "@hookform/resolvers/zod";
import Select from "./Select";

type Props = {
  onSubmit: (contact: Contact) => void;
};

const ContactForm = ({ onSubmit }: Props) => {
  const method = useForm<Contact>({
    resolver: zodResolver(contactSchema),
  });

  return (
    <FormProvider {...method}>
      <form onSubmit={method.handleSubmit(onSubmit)}>
        <Input name="name">Nombre</Input>
        <Input name="lastname">Apellido</Input>
        <Input name="email">correo</Input>
        <Select
          name="type"
          label="tipo"
          defaultMessage="--Selecciona el tipo--"
          options={contactTypeOptions}
        />
        <Button type="submit">Enviar</Button>
        <Button onClick={() => method.reset()} variant="secondary">Limpiar</Button>
      </form>
    </FormProvider>
  );
};

export default ContactForm;
