import styles from "../styles/Search.module.css";
import { useRouter } from "next/router";
import { useCallback, useState } from "react";
import { useDispatch } from "react-redux";
import { searchCody, searchVogue } from "../redux/cody/action";
import { searchQuitWithEmail, searchUserWithEmail } from "../redux/user/action";
import { searchCoin } from "../redux/coin/action";

export default function Search() {
  const router = useRouter();
  const dispatch = useDispatch();

  const [search, setSearch] = useState();

  const onChangeSearch = useCallback((e) => {
    return setSearch(e.target.value);
  }, []);

  const onSumbmitSearch = useCallback(
    (e) => {
      e.preventDefault();
      setSearch("");
      if (router.asPath === "/vogue") {
        dispatch(searchVogue(search));
      } else if (router.asPath === "/cody") {
        dispatch(searchCody(search));
      } else if (router.asPath === "/coin") {
        dispatch(searchCoin(search));
      } else if (router.asPath === "/reward") {
        dispatch(searchCoin(search));
      } else if (router.asPath === "/user") {
        dispatch(searchUserWithEmail(search));
      } else if (router.asPath === "/quit") {
        dispatch(searchQuitWithEmail(search));
      }
    },
    [router.asPath, search]
  );

  return (
    <div className={styles.container}>
      <form onSubmit={onSumbmitSearch}>
        <input
          type="text"
          className={styles.input}
          placeholder={
            router.asPath === "/vogue"
              ? "인기함 아이디 입력"
              : router.asPath === "/cody"
              ? "유저 닉네임 입력"
              : router.asPath === "/coin"
              ? "유저 이메일 입력"
              : router.asPath === "/user"
              ? "유저 닉네임 입력"
              : router.asPath === "/quit"
              ? "유저 이메일 입력"
              : ""
          }
          value={search || ""}
          onChange={onChangeSearch}
        />
      </form>
    </div>
  );
}
