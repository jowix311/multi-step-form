import { NavLink } from "react-router-dom";
import { RoutePath } from "../../main.tsx";
import { useAppDispatch, useAppSelector } from "../../store/hooks.ts";
import {
  resetPlan,
  SelectPlan,
} from "../../store/select-plan/select-plan.reducer.ts";
import React, { useState } from "react";
import thankYouIcon from "../../assets/icon-thank-you.svg";
import { resetInfo } from "../../store/your-info/your-info.reducer.ts";
import { resetAddOns } from "../../store/add-ons/add-ons.reducer.ts";
import { FooterDualButtonBlock, MainContentBlock } from "../layout/Layout.tsx";

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
  const [isConfirmed, setIsConfirmed] = useState(false);
  const dispatch = useAppDispatch();
  const handleConfirm = () => {
    setIsConfirmed(true);
    dispatch(resetInfo());
    dispatch(resetPlan());
    dispatch(resetAddOns());
  };
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

  const SummaryDetailContainer = () => {
    return (
      <>
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
      </>
    );
  };

  const SummarySubmittedContainer = () => {
    return (
      <>
        <div className="content-centern inline-flex w-full  justify-center pt-12">
          <img
            className="h-12 w-12 max-w-none"
            src={thankYouIcon}
            alt="thank you icon"
          />
        </div>

        <p className="mb-2 text-center font-ubuntu text-xl font-bold text-marineBlue">
          Thank you!
        </p>
        <p className="font-ubunt pl-9  pr-9  text-center text-xs text-coolGray">
          Thanks for confirming your subscription! We hope you have fun using
          our platform. If you ever need support, please feel free to email us
          at supoprt@loremgaming.com
        </p>
      </>
    );
  };

  return (
    <div className="bg-magnolia">
      <div>
        <MainContentBlock>
          {!isConfirmed && <SummaryDetailContainer />}
          {isConfirmed && <SummarySubmittedContainer />}
        </MainContentBlock>

        {!isConfirmed && (
          <FooterDualButtonBlock>
            <NavLink
              to={RoutePath.STEP_3}
              className="flex items-center text-sm font-bold text-coolGray"
            >
              Go Back
            </NavLink>
            <button
              type="submit"
              className="rounded bg-purplishBlue p-3 pl-4 pr-4 font-ubuntu text-sm font-medium text-lightGray hover:text-white"
              onClick={handleConfirm}
            >
              Confirm
            </button>
          </FooterDualButtonBlock>
        )}
      </div>
    </div>
  );
};

export default FormSummary;
