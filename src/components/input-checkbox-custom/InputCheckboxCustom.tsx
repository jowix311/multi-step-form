import { ChangeEvent } from "react";
import { FieldErrors } from "react-hook-form";

interface InputCheckboxProps {
  spacing?: string;
  label: string;
  id: string;
  name: string;
  value?: string;
  isChecked: boolean;
  rate: string;
  promoMessage?: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  register: object;
  errors?: FieldErrors;
  options?: object;
}

const InputCheckboxCustom = ({
  spacing,
  label,
  rate,
  register,
  isChecked,
  promoMessage,
  ...otherProps
}: InputCheckboxProps) => {
  return (
    <label
      htmlFor={otherProps.id}
      className={`grid cursor-pointer grid-cols-[min-content_1fr] items-center gap-4 rounded border bg-magnolia p-4 hover:border-purplishBlue ${
        isChecked && "border-purplishBlue"
      } ${spacing}`}
    >
      <input
        {...register}
        {...otherProps}
        className="h-4 w-4 rounded   border border-lightGray text-blue-600 accent-purplishBlue focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600"
        type="checkbox"
        checked={isChecked}
      />
      <div>
        <div className="grid grid-cols-[auto_1fr] items-center">
          <div>
            <p className="font-ubuntu text-base font-medium leading-tight text-marineBlue">
              {label}
            </p>
            <p className="font-ubuntu text-xs font-medium leading-tight text-coolGray">
              {promoMessage}
            </p>
          </div>
          <p className="text-right font-ubuntu text-sm text-purplishBlue">
            {rate}
          </p>
        </div>
      </div>
    </label>
  );
};

export default InputCheckboxCustom;
