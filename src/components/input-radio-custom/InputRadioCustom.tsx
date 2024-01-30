import { ChangeEvent } from "react";
import { FieldErrors } from "react-hook-form";
interface InputRadioProps {
  spacing?: string;
  label: string;
  id: string;
  name: string;
  value?: string;
  iconSource?: string;
  iconAlt?: string;
  rate: string;
  promoMessage?: string;
  isSelected: boolean;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  register: object;
  errors?: FieldErrors;
  options?: object;
}

const InputRadioCustom = ({
  spacing,
  label,
  register,
  iconSource,
  iconAlt,
  isSelected,
  rate,
  promoMessage,
  ...otherProps
}: InputRadioProps) => {
  return (
    <div className={`basis-full ${spacing}`}>
      <label
        htmlFor={otherProps.id}
        className={`mb-1 grid auto-cols-min grid-cols-[min-content_1fr] gap-x-1 rounded border border-lightGray p-3 font-ubuntu text-xs font-bold text-marineBlue ${
          isSelected ? "border-purplishBlue bg-magnolia" : ""
        }`}
      >
        <div className="row-span-2 flex items-center">
          <img
            className="ma h-8 w-8 max-w-none"
            src={iconSource}
            alt={iconAlt}
          />
        </div>
        <div>
          <p className="font-ubuntu text-base font-medium text-marineBlue">
            {label}
          </p>
          <p className="font-ubuntu text-xs font-normal text-coolGray">
            {rate}
          </p>
          {promoMessage && (
            <p className="font-ubuntu text-sm font-normal text-marineBlue">
              {promoMessage}
            </p>
          )}
        </div>
      </label>

      <input {...register} {...otherProps} type="radio" className={`hidden`} />
    </div>
  );
};

export default InputRadioCustom;
