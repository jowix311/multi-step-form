import { FieldErrors } from "react-hook-form";
import { ChangeEvent } from "react";

interface InputFieldProps {
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
  label,
  register,
  errors,
  ...otherProps
}: InputFieldProps) => {
  return (
    <div className="basis-full">
      <label
        htmlFor={otherProps.id}
        className={`mb-2 block font-poppins text-xs uppercase tracking-wider  ${
          errors![otherProps.id] ? "text-lightRed" : "text-smokeyGray"
        }`}
      >
        {label}
      </label>
      <input
        {...register}
        {...otherProps}
        className={` h-12 w-full rounded-lg
        border border-solid  pl-3
        font-ubuntu text-offBlack focus:outline-none ${
          errors![otherProps.id]
            ? "border-lightRed caret-lightRed hover:border-lightRed focus:border-lightRed active:border-lightRed"
            : "border-lightGray caret-purple hover:border-purple focus:border-purple active:border-purple"
        }`}
      />
      {errors![otherProps.id] && (
        <span className="font-poppins text-xs italic text-lightRed">
          {errors![otherProps.id]!.message!.toString()}
        </span>
      )}
    </div>
  );
};

export default InputField;
