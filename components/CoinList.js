import styles from "../styles/CoinList.module.css";
import { useCallback } from "react";
import date from "../service/date";
import { useDispatch } from "react-redux";
import { minusCoin, setCoin } from "../redux/coin/action";

export default function CoinList({ data }) {
  const dispatch = useDispatch();

  const onClickMinus = useCallback((user_id) => {
    const coin = window.prompt("감소할 코인");
    dispatch(minusCoin({ user_id, coin }));
  }, []);

  const onClickPlus = useCallback((user_id) => {
    const coin = window.prompt("증가할 코인");
    dispatch(setCoin({ user_id, coin }));
  }, []);

  return (
    <div className={styles.container}>
      <table className={styles.table}>
        <thead>
          <tr>
            <th className={styles.bb}>서버ID</th>
            <th className={styles.bb}>이름</th>
            <th className={styles.bb}>이메일</th>
            <th className={styles.bb}>닉네임</th>
            <th className={styles.bb}>가입경로</th>
            <th className={styles.bb}>사용가능 코인</th>
            <th className={styles.bb}>사용한 코인</th>
            <th className={styles.bb}>총 코인</th>
            <th className={styles.bb}>코인 수정일</th>
            <th className={styles.bb}>코인 설정</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => {
            return (
              <tr key={item.user.user_id}>
                <th className={styles.thc}>{item.coin_id}</th>
                <th className={styles.thc}>
                  {item.user.user_id}&nbsp;
                  {item.user.name}
                </th>
                <th className={styles.thc}>{item.user.email}</th>
                <th className={styles.thc}>{item.user.nickname}</th>
                <th className={styles.thc}>{item.user.provider}</th>
                <th className={styles.thc}>{item.coin}</th>
                <th className={styles.thc}>{item.coin_sum - item.coin}</th>
                <th className={styles.thc}>{item.coin_sum}</th>
                <th className={styles.thc}>{date(item.updated_at)}</th>
                <th className={styles.thc}>
                  <button
                    onClick={() => onClickMinus(item.user.user_id)}
                    style={{ marginRight: "10px", color: "orangered" }}
                  >
                    감소
                  </button>
                  <button onClick={() => onClickPlus(item.user.user_id)}>
                    증가
                  </button>
                </th>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
