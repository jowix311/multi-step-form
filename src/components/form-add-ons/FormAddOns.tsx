import { NavLink, useNavigate } from "react-router-dom";
import InputCheckboxCustom from "../input-checkbox-custom/InputCheckboxCustom.tsx";
import { RoutePath } from "../../main.tsx";
import { useAppDispatch, useAppSelector } from "../../store/hooks.ts";
import { ChangeEvent, useEffect } from "react";
import { setAddOns } from "../../store/add-ons/add-ons.reducer.ts";
import { useForm } from "react-hook-form";

interface IFormAddons {
  onlineService: string;
  largerStorage: string;
  customizableProfile: string;
}

enum ADD_ONS {
  ONLINE_SERVICE = "onlineService",
  LARGER_STORAGE = "largerStorage",
  CUSTOMIZABLE_PROFILE = "customizableProfile",
}

const addOnRate = {
  onlineService: {
    monthly: 1,
    yearly: 10,
  },
  largerStorage: {
    monthly: 2,
    yearly: 20,
  },
  customizableProfile: {
    monthly: 2,
    yearly: 20,
  },
};

const addOnPriceKeyMap = {
  [ADD_ONS.ONLINE_SERVICE]: "onlineServicePrice",
  [ADD_ONS.LARGER_STORAGE]: "largerStoragePrice",
  [ADD_ONS.CUSTOMIZABLE_PROFILE]: "customizableProfilePrice",
};

const FormAddOns = () => {
  const state = useAppSelector((state) => state.selectAddOns);
  const planState = useAppSelector((state) => state.selectPlan);
  const { handleSubmit, register } = useForm<IFormAddons>();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  //on render check and update add on pricing if monthly or yearly
  useEffect(() => {
    dispatch(
      setAddOns({
        ...state,
        onlineServicePrice: handleAddOnPriceChange(
          ADD_ONS.ONLINE_SERVICE,
          state.onlineService,
        ),
        largerStoragePrice: handleAddOnPriceChange(
          ADD_ONS.LARGER_STORAGE,
          state.largerStorage,
        ),
        customizableProfilePrice: handleAddOnPriceChange(
          ADD_ONS.CUSTOMIZABLE_PROFILE,
          state.customizableProfile,
        ),
      }),
    );
  });

  const onSubmit = () => {
    navigate(RoutePath.STEP_4);
  };

  const handleAddOnPriceChange = (addOnName: ADD_ONS, isChecked: boolean) => {
    if (!isChecked) {
      return 0;
    }

    if (planState.isMonthly) {
      return addOnRate[addOnName].monthly;
    }

    return addOnRate[addOnName].yearly;
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name } = event.target;
    dispatch(
      setAddOns({
        ...state,
        [name]: event.target.checked, //needed to check the checkbox, or we can use if price has value
        [addOnPriceKeyMap[name as ADD_ONS]]: handleAddOnPriceChange(
          name as ADD_ONS,
          event.target.checked,
        ),
      }),
    );
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
