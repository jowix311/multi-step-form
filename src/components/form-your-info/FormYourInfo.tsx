import { useAppDispatch, useAppSelector } from "../../store/hooks.ts";
import { setYourInfoForm } from "../../store/your-info/your-info.reducer.ts";
import { ChangeEvent, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import InputField from "../input-field/InputField.tsx";
import { useNavigate } from "react-router-dom";
import { RoutePath } from "../../main.tsx";
import {
  FooterButtonBlock,
  MainContentBlock,
  MainContentWrapper,
} from "../layout/Layout.tsx";

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
    <MainContentWrapper>
      <form
        onSubmit={handleSubmit(onSubmit)}
        noValidate={true}
        className="h-full md:flex md:flex-col md:justify-between lg:pr-24"
      >
        <MainContentBlock>
          <h1 className="mb-2 font-ubuntu text-2xl font-bold text-marineBlue">
            Personal Info
          </h1>
          <p className="mb-4 font-ubuntu font-medium text-coolGray md:mb-8">
            Please provide your name, email address, and phone number.
          </p>
          <InputField
            spacing="mb-6"
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
            spacing="mb-6"
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
        </MainContentBlock>
        <FooterButtonBlock>
          <button
            type="submit"
            className="rounded bg-marineBlue p-3 pl-4 pr-4 font-ubuntu text-sm font-medium text-lightGray hover:text-white"
          >
            Next Step
          </button>
        </FooterButtonBlock>
      </form>
    </MainContentWrapper>
  );
};

export default FormYourInfo;
