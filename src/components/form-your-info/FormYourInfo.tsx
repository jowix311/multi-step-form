import { useAppDispatch, useAppSelector } from "../../store/hooks.ts";
import { setYourInfoForm } from "../../store/your-info/your-info.reducer.ts";
import { useEffect } from "react";

const FormYourInfo = () => {
  const data = useAppSelector((state) => state.yourInfo);
  const dispatch = useAppDispatch();
  console.log(data); //@todo delete
  useEffect(() => {
    //simulate form submit //@todo delete
    dispatch(
      setYourInfoForm({ name: "test", email: "test@example.com", phone: "111" })
    );
  }, []);

  return <p>Form Your Info</p>;
};

export default FormYourInfo;
