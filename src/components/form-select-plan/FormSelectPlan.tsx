import InputRadioCustom from "../input-radio-custom/InputRadioCustom.tsx";
import { SubmitHandler, useForm } from "react-hook-form";
import { useAppDispatch, useAppSelector } from "../../store/hooks.ts";
import { NavLink, useNavigate } from "react-router-dom";
import { RoutePath } from "../../main.tsx";
import { ChangeEvent, useState } from "react";
import { setPlan } from "../../store/select-plan/select-plan.reducer.ts";
import iconArcade from "../../assets/icon-arcade.svg";
import iconAdvanced from "../../assets/icon-advanced.svg";
import iconPro from "../../assets/icon-pro.svg";
import FormToggle from "../form-toggle/FormToggle.tsx";

interface IFormPlan {
  plan: string;
  isMonthly: boolean;
}
enum PLAN {
  ARCADE = "arcade",
  ADVANCED = "advanced",
  PRO = "pro",
}

interface rateInfo {
  monthly: {
    rate: number;
    promoMessage: string;
  };
  yearly: {
    rate: number;
    promoMessage: string;
  };
}

//simulate API data
const planRateInfo = {
  arcade: {
    monthly: {
      rate: 9,
      promoMessage: "",
    },
    yearly: {
      rate: 90,
      promoMessage: "2 months free",
    },
  },
  advanced: {
    monthly: {
      rate: 12,
      promoMessage: "",
    },
    yearly: {
      rate: 120,
      promoMessage: "2 months free",
    },
  },
  pro: {
    monthly: {
      rate: 50,
      promoMessage: "",
    },
    yearly: {
      rate: 150,
      promoMessage: "2 months free",
    },
  },
};

const FormSelectPlan = () => {
  const state = useAppSelector((state) => state.selectPlan);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormPlan>();

  const [formData, setFormData] = useState<IFormPlan>({ ...state });

  const { arcade, advanced, pro } = planRateInfo;

  const dispatch = useAppDispatch();

  const navigate = useNavigate();
  const onSubmit: SubmitHandler<IFormPlan> = (data) => {
    //save to redux and redirect
    dispatch(setPlan({ ...data }));

    navigate(RoutePath.STEP_3);
  };

  const handleBillingTermChange = (isChecked: boolean) => {
    //save to redux
    dispatch(setPlan({ ...state, isMonthly: isChecked }));
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const createRateLabel = (isMonthly: boolean, info: rateInfo) => {
    if (isMonthly) {
      return `$${info.monthly.rate}/mo`;
    }

    return `$${info.yearly.rate}/yr`;
  };

  return (
    <div className="flex h-screen bg-magnolia">
      <form onSubmit={handleSubmit(onSubmit)} noValidate={true}>
        <div className="absolute left-0 right-0 top-20 z-10 m-auto w-[340px] rounded-2xl bg-white p-5 pt-6">
          <h1 className="mb-2 font-ubuntu text-2xl font-bold text-marineBlue">
            Select your plan
          </h1>
          <p className="mb-4 font-ubuntu font-medium text-coolGray">
            You have the option of monthly or yearly billing.
          </p>
          <InputRadioCustom
            spacing="mb-3"
            label="Arcade"
            rate={createRateLabel(state.isMonthly, arcade)}
            promoMessage={
              state.isMonthly
                ? planRateInfo.arcade.monthly.promoMessage
                : planRateInfo.arcade.yearly.promoMessage
            }
            errors={errors}
            id="plan-arcade"
            name="plan"
            value="arcade"
            onChange={handleChange}
            register={{
              ...register("plan"),
            }}
            iconSource={iconArcade}
            iconAlt="aracde icon"
            isSelected={PLAN.ARCADE === formData.plan}
          />
          <InputRadioCustom
            spacing="mb-3"
            label="Advanced"
            rate={createRateLabel(state.isMonthly, advanced)}
            promoMessage={
              state.isMonthly
                ? advanced.monthly.promoMessage
                : advanced.yearly.promoMessage
            }
            errors={errors}
            id="plan-advanced"
            name="plan"
            value="advanced"
            onChange={handleChange}
            register={{
              ...register("plan"),
            }}
            iconSource={iconAdvanced}
            iconAlt="advanced icon"
            isSelected={PLAN.ADVANCED === formData.plan}
          />
          <InputRadioCustom
            spacing="mb-3"
            label="Pro"
            rate={createRateLabel(state.isMonthly, pro)}
            promoMessage={
              state.isMonthly
                ? pro.monthly.promoMessage
                : pro.yearly.promoMessage
            }
            errors={errors}
            id="plan-pro"
            name="plan"
            value="pro"
            onChange={handleChange}
            register={{
              ...register("plan"),
            }}
            iconSource={iconPro}
            iconAlt="pro icon"
            isSelected={PLAN.PRO === formData.plan}
          />
          <FormToggle
            leftLabel="Monthly"
            rightLabel="Yearly"
            flag={state.isMonthly}
            handleBillingTermChange={handleBillingTermChange}
          />
        </div>

        <div className="absolute bottom-0 left-0 right-0 flex justify-between bg-white p-6">
          <NavLink
            to={RoutePath.STEP_3}
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

export default FormSelectPlan;
