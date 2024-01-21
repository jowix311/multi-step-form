import { FieldErrors } from "react-hook-form";
import { ChangeEvent } from "react";

interface InputFieldProps {
  spacing?: string;
  label: string;
  id: string;
  type: string;
  name: string;
  placeholder: string;
  value?: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  maxLength?: number;
  register: object; //@todo add proper typing
  errors?: FieldErrors;
  options?: object;
}

/**
 *  basis-full or flex-basis: 100% prevents input from increases its width when it has an error message
 *
 * */

const InputField = ({
  spacing,
  label,
  register,
  errors,
  ...otherProps
}: InputFieldProps) => {
  return (
    <div className={`basis-full ${spacing}`}>
      <label
        htmlFor={otherProps.id}
        className={`mb-1 block font-ubuntu text-xs font-bold text-marineBlue  ${
          errors![otherProps.id] ? "text-lightRed" : "text-smokeyGray"
        }`}
      >
        {label}
      </label>
      <input
        {...register}
        {...otherProps}
        className={`font-sm h-10
        w-full rounded-lg border border-solid pl-3 font-ubuntu text-base
        font-medium text-coolGray focus:outline-none ${
          errors![otherProps.id]
            ? "border-lightRed caret-lightRed hover:border-lightRed focus:border-lightRed active:border-lightRed"
            : "caret-purple hover:border-purple focus:border-purple active:border-purple border-lightGray"
        }`}
      />
      {errors![otherProps.id] && (
        <span className="font-poppins text-lightRed text-xs italic">
          {errors![otherProps.id]!.message!.toString()}
        </span>
      )}
    </div>
  );
};

export default InputField;
