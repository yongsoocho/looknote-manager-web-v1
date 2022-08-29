import styles from "../styles/ManagerList.module.css";
import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { deleteManager } from "../redux/manager/action";

export default function ManagerList({ data }) {
  const dispatch = useDispatch();

  const onClickDeleteManager = useCallback((manager_id) => {
    const confirm = window.confirm(
      `${manager_id}번 매니저를 삭제하시겠습니까?`
    );
    if (confirm) {
      dispatch(deleteManager(manager_id));
    }
  });

  return (
    <div className={styles.container}>
      <table className={styles.table}>
        <thead>
          <tr>
            <th className={styles.bb}>아이디</th>
            <th className={styles.bb}>이름</th>
            <th className={styles.bb}>이메일</th>
            <th className={styles.bb}>허가자</th>
            <th className={styles.bb}>삭제</th>
          </tr>
        </thead>
        <tbody>
          {data.map((e) => {
            return (
              <tr key={e.manager_id}>
                <th className={styles.thc}>{e.manager_id}</th>
                <th className={styles.thc}>{e.name}</th>
                <th className={styles.thc}>{e.email}</th>
                <th className={styles.thc}>{e.creator}</th>
                <th className={styles.thc}>
                  <button
                    className={styles.btn}
                    onClick={() => onClickDeleteManager(e.manager_id)}
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
