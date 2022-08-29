import styles from "../styles/UserList.module.css";
import date from "../service/date";
import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { deleteUser } from "../redux/user/action";

export default function UserList({ data }) {
  const dispatch = useDispatch();

  // const onClickDeleteUser = useCallback((user_id) => {
  //   const confirm = window.confirm("삭제하시겠습니까?");
  //   if (confirm) {
  //     dispatch(deleteUser(user_id));
  //   }
  // }, []);

  return (
    <div className={styles.container}>
      <table className={styles.table}>
        <thead>
          <tr>
            <th className={styles.bb}>서버ID</th>
            <th className={styles.bb}>이름</th>
            <th className={styles.bb}>이메일</th>
            <th className={styles.bb}>닉네임</th>
            <th className={styles.bb}>성별</th>
            <th className={styles.bb}>생년월일</th>
            <th className={styles.bb}>가입경로</th>
            <th className={styles.bb}>가입일</th>
            <th className={styles.bb}>활동</th>
            {/*<th className={styles.bb}>유저삭제</th>*/}
          </tr>
        </thead>
        <tbody>
          {data.map((item) => {
            return (
              <tr key={item.user_id}>
                <th className={styles.thc}>{item.user_id}</th>
                <th className={styles.thc}>{item.name}</th>
                <th className={styles.thc}>{item.email}</th>
                <th className={styles.thc}>{item.nickname}</th>
                <th className={styles.thc}>{item.gender}</th>
                <th className={styles.thc}>{item.date_of_birth}</th>
                <th className={styles.thc}>{item.provider}</th>
                <th className={styles.thc}>{date(item.created_at)}</th>
                <th className={styles.thc}>{item.active ? "활동" : ""}</th>
                {/*<th className={styles.thc}>*/}
                {/*  <button*/}
                {/*    className={styles.d}*/}
                {/*    onClick={() => onClickDeleteUser(item.user_id)}*/}
                {/*  >*/}
                {/*    D*/}
                {/*  </button>*/}
                {/*</th>*/}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
