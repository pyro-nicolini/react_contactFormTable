import { useFormContext } from "react-hook-form";

type Props = {
  options: readonly string[];
  defaultMessage: string;
  label: string;
  name: string;
};

const Select = ({ options, defaultMessage, label, name }: Props) => {
  const { register, formState, getFieldState } = useFormContext();
  const { error } = getFieldState(name, formState);

  return (
    <div className="mb-3">
      <label className="form-label">{label}</label>
      <select
        {...register(name)}
        className="form-select"
        aria-label="Default Select Example"
      >
        <option>{defaultMessage}</option>
        {options.map((o) => (
          <option key={o}>{o}</option>
        ))}
      </select>
      {error && <div className="text-danger">{error.message}</div>}
    </div>
  );
};

export default Select;
