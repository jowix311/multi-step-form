import InputRadioCustom from "../input-radio-custom/InputRadioCustom.tsx";
import { SubmitHandler, useForm } from "react-hook-form";
import { useAppDispatch, useAppSelector } from "../../store/hooks.ts";
import { NavLink, useNavigate } from "react-router-dom";
import { RoutePath } from "../../main.tsx";
import { ChangeEvent } from "react";
import {
  SelectPlan,
  setPlan,
} from "../../store/select-plan/select-plan.reducer.ts";
import iconArcade from "../../assets/icon-arcade.svg";
import iconAdvanced from "../../assets/icon-advanced.svg";
import iconPro from "../../assets/icon-pro.svg";
import FormToggle from "../form-toggle/FormToggle.tsx";
import {
  FooterDualButtonBlock,
  MainContentBlock,
  MainContentWrapper,
} from "../layout/Layout.tsx";

interface IFormPlan {
  plan: string;
  isMonthly: boolean;
  price: number;
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

  const { arcade, advanced, pro } = planRateInfo;

  const dispatch = useAppDispatch();

  const navigate = useNavigate();
  const onSubmit: SubmitHandler<IFormPlan> = () => {
    //no need for checking here

    navigate(RoutePath.STEP_3);
  };

  const handlePriceChange = (
    selectedPlanType: string,
    currentState: SelectPlan,
  ) => {
    let price = 0;

    if (PLAN.ARCADE === selectedPlanType) {
      price = currentState.isMonthly ? arcade.monthly.rate : arcade.yearly.rate;
    }
    if (PLAN.ADVANCED === selectedPlanType) {
      price = currentState.isMonthly
        ? advanced.monthly.rate
        : advanced.yearly.rate;
    }
    if (PLAN.PRO === selectedPlanType) {
      price = currentState.isMonthly ? pro.monthly.rate : pro.yearly.rate;
    }

    return price;
  };

  const handleBillingTermChange = (isChecked: boolean) => {
    //save to redux
    dispatch(
      setPlan({
        ...state,
        isMonthly: isChecked,
        price: handlePriceChange(state.plan, {
          ...state,
          isMonthly: isChecked,
        }),
      }),
    );
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    dispatch(
      setPlan({
        ...state,
        [name]: value,
        price: handlePriceChange(value, state),
      }),
    );
  };

  const createRateLabel = (isMonthly: boolean, info: rateInfo) => {
    if (isMonthly) {
      return `$${info.monthly.rate}/mo`;
    }

    return `$${info.yearly.rate}/yr`;
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
            Select your plan
          </h1>
          <p className="mb-4 font-ubuntu font-medium text-coolGray md:mb-8">
            You have the option of monthly or yearly billing.
          </p>

          <div className="grid md:grid-cols-3 md:gap-x-4">
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
              isSelected={PLAN.ARCADE === state.plan}
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
              isSelected={PLAN.ADVANCED === state.plan}
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
              isSelected={PLAN.PRO === state.plan}
            />
          </div>
          <FormToggle
            leftLabel="Monthly"
            rightLabel="Yearly"
            isMonthly={state.isMonthly}
            handleBillingTermChange={handleBillingTermChange}
          />
        </MainContentBlock>

        <FooterDualButtonBlock>
          <NavLink
            to={RoutePath.STEP_1}
            className="flex items-center text-sm font-medium text-coolGray"
          >
            Go Back
          </NavLink>
          <button
            type="submit"
            className="rounded bg-marineBlue p-3 pl-4 pr-4 font-ubuntu text-sm font-medium text-lightGray hover:text-white"
          >
            Next Step
          </button>
        </FooterDualButtonBlock>
      </form>
    </MainContentWrapper>
  );
};

export default FormSelectPlan;
