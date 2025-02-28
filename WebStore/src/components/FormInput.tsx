import c from "../styles/modules/addNewProduct.module.css";

type FormInputProps = {
  label?: string;
  type: "text" | "number" | "select";
  value: string | number;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => void;
  placeholder?: string;
  min?: number;
  options?: string[]; // Za select
};

export default function FormInput({
  label,
  type,
  value,
  onChange,
  placeholder,
  min,
  options,
}: FormInputProps) {
  return (
    <div className={c.inputWrapper}>
      {label && <label>{label}</label>}
      {type === "select" ? (
        <select value={value} onChange={onChange} className={c.input}>
          {options?.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      ) : (
        <input
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          min={min}
          className={c.input}
          required
        />
      )}
    </div>
  );
}
