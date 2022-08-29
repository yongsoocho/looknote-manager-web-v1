import { useRouter } from "next/router";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Seo from "./Seo";
import { managerReLogin } from "../redux/manager/action";

export default function Layout({ children }) {
  const dispatch = useDispatch();
  const router = useRouter();
  const manager = useSelector((state) => state.manager.manager);

  useEffect(() => {
    dispatch(managerReLogin()).then((res) => {
      if (res.type !== "mn/relogin/fulfilled") {
        return router.push("/");
      }
      if (!res.payload.admin || !res.payload.manager_id) {
        return router.push("/");
      }
    });
  }, [router.asPath]); // 무한 로딩 조심

  return (
    <>
      <Seo />
      <main>{children}</main>
    </>
  );
}
