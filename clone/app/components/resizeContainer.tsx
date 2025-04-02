import { useDispatch, useSelector } from "react-redux";
import { setWindowH } from "../redux/windowH";
import { useEffect } from "react";

export default function ResizeContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  const dispatch = useDispatch();
  useEffect(() => {
    window.addEventListener("resize", (e) => {
      dispatch(setWindowH(e.target!.innerWidth));
    });
    dispatch(setWindowH(window.innerWidth));
  }, []);
  return <>{children}</>;
}
