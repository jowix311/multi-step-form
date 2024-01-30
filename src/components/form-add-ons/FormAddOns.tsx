// import InputRadioCustom from "../input-radio-custom/InputRadioCustom.tsx";
// import iconAdvanced from "../../assets/icon-advanced.svg";
// import { NavLink } from "react-router-dom";
// import { RoutePath } from "../../main.tsx";
// import { useForm } from "react-hook-form";

import { NavLink, useNavigate } from "react-router-dom";

interface IFormAddons {
  onlineService: string;
  largerStorage: string;
  customizableProfile: string;
}

import { useForm } from "react-hook-form";

enum ADD_ONS {
  ONLINE_SERVICE = "onlineService",
  LARGER_STORAGE = "largerStorage",
  CUSTOMIZABLE_PROFILE = "customizableProfile",
}

import InputCheckboxCustom from "../input-checkbox-custom/InputCheckboxCustom.tsx";
import { RoutePath } from "../../main.tsx";
import { useAppDispatch, useAppSelector } from "../../store/hooks.ts";
import { ChangeEvent } from "react";
import { setAddOns } from "../../store/add-ons/add-ons.reducer.ts";

const FormAddOns = () => {
  const state = useAppSelector((state) => state.selectAddOns);
  const planState = useAppSelector((state) => state.selectPlan);
  const { handleSubmit, register } = useForm<IFormAddons>();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const onSubmit = () => {
    navigate(RoutePath.STEP_4);
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name } = event.target;
    dispatch(setAddOns({ ...state, [name]: event.target.checked }));
  };

  return (
    <div className="bg-magnolia">
      <form onSubmit={handleSubmit(onSubmit)} noValidate={true}>
        <div className="absolute left-0 right-0 top-20 z-10 m-auto w-[340px] rounded-2xl bg-white p-5 pt-6">
          <h1 className="mb-2 font-ubuntu text-2xl font-bold text-marineBlue">
            Pick add-ons
          </h1>
          <p className="mb-4 font-ubuntu font-medium text-coolGray">
            Add-ons help enhance your gaming experience.
          </p>

          <InputCheckboxCustom
            spacing="mb-3"
            id={ADD_ONS.ONLINE_SERVICE}
            name={ADD_ONS.ONLINE_SERVICE}
            value={ADD_ONS.ONLINE_SERVICE}
            label="Online service"
            rate={planState.isMonthly ? "$1/mo" : "$10/yr"}
            promoMessage="Access to multiplayer games"
            isChecked={state.onlineService}
            onChange={handleChange}
            register={{
              ...register("onlineService"),
            }}
          />
          <InputCheckboxCustom
            spacing="mb-3"
            id={ADD_ONS.LARGER_STORAGE}
            name={ADD_ONS.LARGER_STORAGE}
            value={ADD_ONS.LARGER_STORAGE}
            label="Larger storage"
            rate={planState.isMonthly ? "$2/mo" : "$20/yr"}
            promoMessage="Extra 1TB of cloud save"
            isChecked={state.largerStorage}
            onChange={handleChange}
            register={{
              ...register("largerStorage"),
            }}
          />

          <InputCheckboxCustom
            spacing="mb-3"
            id={ADD_ONS.CUSTOMIZABLE_PROFILE}
            name={ADD_ONS.CUSTOMIZABLE_PROFILE}
            value={ADD_ONS.CUSTOMIZABLE_PROFILE}
            label="Customizable Profile"
            rate={planState.isMonthly ? "$2/mo" : "$20/yr"}
            promoMessage="Custom theme on your profile"
            isChecked={state.customizableProfile}
            onChange={handleChange}
            register={{
              ...register("customizableProfile"),
            }}
          />
        </div>

        <div className="absolute bottom-0 left-0 right-0 flex justify-between bg-white p-6">
          <NavLink
            to={RoutePath.STEP_2}
            className="flex items-center text-sm font-bold text-coolGray"
          >
            Go Back
          </NavLink>
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

export default FormAddOns;
