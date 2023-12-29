import { useAppDispatch, useAppSelector } from "../../store/hooks.ts";
import { setYourInfoForm } from "../../store/your-info/your-info.reducer.ts";
import { ChangeEvent, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import InputField from "../input-field/InputField.tsx";

interface IFormYourInfo {
  name: string;
  email: string;
  phone: string;
}

const FormYourInfo = () => {
  const state = useAppSelector((state) => state.yourInfo);
  const dispatch = useAppDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormYourInfo>();

  const [formData, setFormData] = useState<IFormYourInfo>({ ...state });
  const onSubmit: SubmitHandler<IFormYourInfo> = (data) => {
    dispatch(setYourInfoForm({ ...data }));
    //@todo proceed to next step
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} noValidate={true}>
        <InputField
          label="Name"
          errors={errors}
          id="name"
          type="text"
          name="name"
          placeholder="e.g. Stepehen King"
          value={formData.name}
          onChange={handleChange}
          register={{
            ...register("name", {
              required: {
                value: true,
                message: "This field is required",
              },
            }),
          }}
        />
        <InputField
          label="Email Address"
          errors={errors}
          id="email"
          type="text"
          name="email"
          placeholder="e.g. Stepehen King"
          value={formData.email}
          onChange={handleChange}
          register={{
            ...register("email", {
              required: {
                value: true,
                message: "This field is required",
              },
            }),
          }}
        />
        <InputField
          label="Phone Number"
          errors={errors}
          id="phone"
          type="text"
          name="phone"
          placeholder="e.g. Stepehen King"
          value={formData.phone}
          onChange={handleChange}
          register={{
            ...register("phone", {
              required: {
                value: true,
                message: "This field is required",
              },
            }),
          }}
        />
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default FormYourInfo;
