import styles from "../styles/QuitList.module.css";
import date from "../service/date";
import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { deleteUser, undoQuit } from "../redux/user/action";

export default function QuitList({ data }) {
  const dispatch = useDispatch();

  const onClickUndoQuit = useCallback((user_id) => {
    dispatch(undoQuit(user_id));
  }, []);

  const onClickDeleteUser = useCallback((user_id) => {
    const confirm = window.confirm("삭제하시겠습니까?");
    if (confirm) {
      dispatch(deleteUser(user_id));
    }
  }, []);

  return (
    <div className={styles.container}>
      <table className={styles.table}>
        <thead>
          <tr>
            <th className={styles.bb}>서버ID</th>
            <th className={styles.bb}>이메일</th>
            <th className={styles.bb}>이름</th>
            <th className={styles.bb}>사유</th>
            <th className={styles.bb}>사유</th>
            <th className={styles.bb}>탈퇴 신청일</th>
            <th className={styles.bb}>탈퇴 취소</th>
            <th className={styles.bb}>유저 삭제</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => {
            return (
              <tr key={item.user_id}>
                <th className={styles.thc}>{item.user_id}</th>
                <th className={styles.thc}>{item.email}</th>
                <th className={styles.thc}>{item.user.name}</th>
                <th className={styles.thc}>{item.reason}</th>
                <th className={styles.thc}>{item.user.provider}</th>
                <th className={styles.thc}>{date(item.created_at)}</th>
                <th className={styles.thc}>
                  <button
                    className={styles.c}
                    onClick={() => onClickUndoQuit(item.user_id)}
                  >
                    C
                  </button>
                </th>
                <th className={styles.thc}>
                  <button
                    className={styles.d}
                    onClick={() => onClickDeleteUser(item.user_id)}
                  >
                    D
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
