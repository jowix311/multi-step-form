import { useAppDispatch, useAppSelector } from "../../store/hooks.ts";
import { setYourInfoForm } from "../../store/your-info/your-info.reducer.ts";
import { ChangeEvent, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import InputField from "../input-field/InputField.tsx";
import { useNavigate } from "react-router-dom";
import { RoutePath } from "../../main.tsx";

interface IFormYourInfo {
  name: string;
  email: string;
  phone: string;
}

const FormYourInfo = () => {
  const state = useAppSelector((state) => state.yourInfo);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormYourInfo>();

  const [formData, setFormData] = useState<IFormYourInfo>({ ...state });
  const onSubmit: SubmitHandler<IFormYourInfo> = (data) => {
    //save to redux and redirect
    dispatch(setYourInfoForm({ ...data, isInfoComplete: true }));

    navigate(RoutePath.STEP_2);
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="bg-magnolia">
      <form onSubmit={handleSubmit(onSubmit)} noValidate={true}>
        <div className="absolute left-0 right-0 top-20 z-10 m-auto w-[340px] rounded-2xl bg-white p-5 pt-6">
          <h1 className="mb-2 font-ubuntu text-2xl font-bold text-marineBlue">
            Personal Info
          </h1>
          <p className="mb-4 font-ubuntu font-medium text-coolGray">
            Please provide your name, email address, and phone number.
          </p>
          <InputField
            spacing="mb-3"
            label="Name"
            errors={errors}
            id="name"
            type="text"
            name="name"
            placeholder="e.g. Stephen King"
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
            spacing="mb-3"
            label="Email Address"
            errors={errors}
            id="email"
            type="text"
            name="email"
            placeholder="e.g. stephenking@lorem.com"
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
            placeholder="e.g. 4456171"
            value={formData.phone}
            onChange={handleChange}
            register={{
              ...register("phone", {
                required: {
                  value: true,
                  message: "This field is required",
                },
                pattern: {
                  value: /^\d{7}$/,
                  message: "Please enter a valid phone number",
                },
              }),
            }}
          />
        </div>
        <div className="absolute bottom-0 left-0 right-0 flex justify-end bg-white p-6">
          <button
            type="submit"
            className="rounded bg-marineBlue p-3 pl-4 pr-4 font-ubuntu text-sm font-medium text-lightGray hover:text-white"
          >
            Next Step
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormYourInfo;
