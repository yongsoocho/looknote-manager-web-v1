import styles from "../styles/AppBar.module.css";
import Link from "next/link";
import { useCallback } from "react";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { managerLogout } from "../redux/manager/slice";

export default function AppBar() {
  const router = useRouter();
  const dispatch = useDispatch();

  const logout = useCallback(() => {
    localStorage.removeItem("looknote_token");
    dispatch(managerLogout());
    return router.push("/");
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <Link href="/report">
          <span
            className={styles.link}
            style={{
              color: `${
                router.asPath === "/report" ? "black " : "rgba(0, 0, 0, 0.25)"
              }`,
            }}
          >
            신고함 관리
          </span>
        </Link>
        <Link href="/vogue">
          <span
            className={styles.link}
            style={{
              color: `${
                router.asPath === "/vogue" ? "black " : "rgba(0, 0, 0, 0.25)"
              }`,
            }}
          >
            인기함 관리
          </span>
        </Link>
        <Link href="/cody">
          <span
            className={styles.link}
            style={{
              color: `${
                router.asPath === "/cody" ? "black " : "rgba(0, 0, 0, 0.25)"
              }`,
            }}
          >
            코디 관리
          </span>
        </Link>
        <Link href="/coin">
          <span
            className={styles.link}
            style={{
              color: `${
                router.asPath === "/coin" ? "black " : "rgba(0, 0, 0, 0.25)"
              }`,
            }}
          >
            코인 관리
          </span>
        </Link>
        {/*<Link href="/reward">*/}
        {/*  <span*/}
        {/*    className={styles.link}*/}
        {/*    style={{*/}
        {/*      color: `${*/}
        {/*        router.asPath === "/reward" ? "black " : "rgba(0, 0, 0, 0.25)"*/}
        {/*      }`,*/}
        {/*    }}*/}
        {/*  >*/}
        {/*    코인(오름차순)*/}
        {/*  </span>*/}
        {/*</Link>*/}
        <Link href="/user">
          <span
            className={styles.link}
            style={{
              color: `${
                router.asPath === "/user" ? "black " : "rgba(0, 0, 0, 0.25)"
              }`,
            }}
          >
            유저 관리
          </span>
        </Link>
        <Link href="/quit">
          <span
            className={styles.link}
            style={{
              color: `${
                router.asPath === "/quit" ? "black " : "rgba(0, 0, 0, 0.25)"
              }`,
            }}
          >
            탈퇴 관리
          </span>
        </Link>
        {/* <Link href="/shop">
          <span
            className={styles.link}
            style={{
              color: `${
                router.asPath === "/shop" ? "black " : "rgba(0, 0, 0, 0.25)"
              }`,
            }}
          >
            코인샵 관리
          </span>
        </Link> */}
        <Link href="/manager">
          <span
            className={styles.link}
            style={{
              color: `${
                router.asPath === "/manager" ? "black " : "rgba(0, 0, 0, 0.25)"
              }`,
            }}
          >
            매니저 관리
          </span>
        </Link>
        <span className={styles.logout} onClick={logout}>
          로그아웃
        </span>
      </div>
    </div>
  );
}
