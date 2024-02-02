/**
 * This will house common layout found on the app
 * The goals we to reduce or save time editing multiple pages
 *
 * **/

import React from "react";

interface ChildrenProp {
  children: React.ReactNode;
}

export const MainContentWrapper = ({ children }: ChildrenProp) => {
  return <div className="bg-magnolia md:h-full md:bg-white">{children}</div>;
};

export const MainContentBlock = ({ children }: ChildrenProp) => {
  return (
    <div className="absolute left-0 right-0 top-20 z-10 m-auto w-[320px]  rounded-2xl bg-white p-5 pt-6 md:static md:m-0 md:w-full">
      {children}
    </div>
  );
};

export const FooterButtonBlock = ({ children }: ChildrenProp) => {
  return (
    <div className="absolute bottom-0 left-0 right-0 flex justify-end bg-white p-6 md:relative md:p-0">
      {children}
    </div>
  );
};

export const FooterDualButtonBlock = ({ children }: ChildrenProp) => {
  return (
    <div className="absolute bottom-0 left-0 right-0 flex justify-between bg-white p-6 md:relative md:p-5">
      {children}
    </div>
  );
};
