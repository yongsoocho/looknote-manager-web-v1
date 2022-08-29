import styles from "../styles/Home.module.css";
import { useState, useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import { managerLogout } from "../redux/manager/slice";
import { managerLogin } from "../redux/manager/action";

export default function Home() {
  const dispatch = useDispatch();
  const router = useRouter();
  const manager = useSelector((state) => state.manager.manager);

  const [email, setEmail] = useState("");
  const [pw, setPw] = useState("");

  const submitLogin = useCallback(
    (e) => {
      e.preventDefault();
      dispatch(managerLogin({ email, pw })).then((res) => {
        if (res.type === "ma/login/fulfilled") {
          localStorage.setItem("email", email);
        }
        return alert("login rejected");
      });
    },
    [email, pw]
  );

  const onClickConnect = useCallback(() => {
    router.push("/cody");
  });

  const onClickLogout = useCallback(() => {
    window.localStorage.removeItem("looknote_token");
    dispatch(managerLogout());
  }, []);

  useEffect(() => {
    setEmail(localStorage.getItem("email"));
  }, []);

  if (Object.keys(manager).length === 0) {
    return (
      <div className={styles.container}>
        <form className={styles.form} onSubmit={submitLogin}>
          <h1>LookNote Manager</h1>
          <input
            type="text"
            placeholder="email"
            onChange={(e) => setEmail(e.target.value)}
            className={styles.input}
            value={email}
          />
          <input
            type="password"
            placeholder="password"
            onChange={(e) => setPw(e.target.value)}
            className={styles.input}
            value={pw}
          />
          <button type="submit" className={styles.button}>
            Log in
          </button>
        </form>
      </div>
    );
  } else {
    return (
      <div className={styles.container}>
        <div className={styles.form}>
          <h2>{manager.name} 매니저</h2>
          <button
            type="submit"
            className={styles.button}
            style={{ position: "absolute", bottom: "100px" }}
            onClick={onClickConnect}
          >
            Connect
          </button>
          <button
            type="submit"
            className={styles.button}
            style={{ position: "absolute", bottom: "30px" }}
            onClick={onClickLogout}
          >
            Log out
          </button>
        </div>
      </div>
    );
  }
}
