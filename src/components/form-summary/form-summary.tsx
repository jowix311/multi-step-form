import { NavLink } from "react-router-dom";
import { RoutePath } from "../../main.tsx";
import { useAppSelector } from "../../store/hooks.ts";
import { SelectPlan } from "../../store/select-plan/select-plan.reducer.ts";
import React from "react";

const FormSummary = () => {
  const { isMonthly, price } = useAppSelector((state) => state.selectPlan);
  const {
    onlineService,
    largerStorage,
    customizableProfile,
    onlineServicePrice,
    largerStoragePrice,
    customizableProfilePrice,
  } = useAppSelector((state) => state.selectAddOns);

  const SummaryRowContainer = ({ children }: { children: React.ReactNode }) => {
    return <div className="pb-2">{children}</div>;
  };

  const SummaryRow = ({
    label,
    price,
    isMonthly,
  }: {
    label: string;
    price: number;
    isMonthly: boolean;
  }) => {
    return (
      <div className="grid grid-cols-[1fr_auto]">
        <p className="font-ubuntu text-xs text-coolGray">{label}</p>
        <p className="font-ubuntu text-xs text-marineBlue">
          ${price}/{isMonthly ? "mo" : "yr"}
        </p>
      </div>
    );
  };

  const TotalRow = ({ price, isMonthly }: Partial<SelectPlan>) => {
    return (
      <div className="grid grid-cols-[1fr_auto] pb-1">
        <p className="font-ubuntu text-xs text-coolGray">
          Total (per {isMonthly ? "month" : "year"})
        </p>
        <p className="font-ubuntu  text-sm font-bold text-purplishBlue">
          ${price}/{isMonthly ? "mo" : "yr"}
        </p>
      </div>
    );
  };

  return (
    <div className="bg-magnolia">
      <div>
        <div className="absolute left-0 right-0 top-20 z-10 m-auto w-[340px] rounded-2xl bg-white p-5 pt-6">
          <h1 className="mb-2pla font-ubuntu text-2xl font-bold text-marineBlue">
            Finishing up
          </h1>
          <p className="mb-4 font-ubuntu font-medium text-coolGray">
            Double-check everything looks OK before confirming.
          </p>

          <div className="rounded bg-alabaster p-2">
            <div className="grid grid-cols-[1fr_auto]">
              <div>
                <p className="font-ubuntu text-sm font-bold leading-tight text-marineBlue">
                  Arcade {isMonthly ? "(Monthly)" : "(Yearly)"}
                </p>
                <NavLink
                  to={RoutePath.STEP_2}
                  className="flex font-ubuntu text-xs font-medium leading-tight text-coolGray underline"
                >
                  Change
                </NavLink>
              </div>
              <p className="self-center font-ubuntu text-sm font-bold text-marineBlue ">
                ${price}/{isMonthly ? "mo" : "yr"}
              </p>
            </div>

            <hr className="mb-4 mt-4" />

            {onlineService && (
              <SummaryRowContainer>
                <SummaryRow
                  label="Online service"
                  price={onlineServicePrice}
                  isMonthly={isMonthly}
                />
              </SummaryRowContainer>
            )}
            {largerStorage && (
              <SummaryRowContainer>
                <SummaryRow
                  label="Larger storage"
                  price={largerStoragePrice}
                  isMonthly={isMonthly}
                />
              </SummaryRowContainer>
            )}
            {customizableProfile && (
              <SummaryRow
                label="Customizable Profile"
                price={customizableProfilePrice}
                isMonthly={isMonthly}
              />
            )}
          </div>
          <div className="pb-3 pt-3">
            <TotalRow price={price} isMonthly={isMonthly} />
          </div>
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
            className="rounded bg-purplishBlue p-3 pl-4 pr-4 font-ubuntu text-sm font-medium text-lightGray hover:text-white"
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
};

export default FormSummary;
