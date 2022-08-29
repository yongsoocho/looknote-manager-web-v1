import styles from "../../styles/Manager.module.css";
import AppBar from "../../components/AppBar";
import ManagerList from "../../components/ManagerList";
import Pagenation from "../../components/Pagenation";
import Search from "../../components/Search";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState, useCallback } from "react";
import {
  createManager,
  getManagerList,
  managerQuery,
  managerUpdate,
  pushAll,
} from "../../redux/manager/action";

export default function Manager() {
  const managerList = useSelector((state) => state.manager.managers);
  const lastPage = useSelector((state) => state.manager.lastPage);
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [pw, setPw] = useState("");
  const [name, setName] = useState("");
  const [push, setPush] = useState("");

  useEffect(() => {
    dispatch(getManagerList());
  }, []);

  const onSubmitCreateManager = useCallback(() => {
    dispatch(
      createManager({
        email,
        password: pw,
        name,
      })
    );
  }, [email, pw, name]);

  const onSumbitPush = useCallback(() => {
    const confirm = window.confirm("정말로 전송하시겠습니까?");
    if (confirm) {
      dispatch(pushAll(push));
    }
  }, [push]);

  const onClickUpdate = useCallback(() => {
    const confirm = window.confirm("정말로 업데이트하시겠습니까?");
    if (confirm) {
      dispatch(managerUpdate());
    }
  });

  const onClickQuery = useCallback(() => {
    const confirm = window.confirm("정말로 쿼리를날리시겠습니까?");
    if (confirm) {
      dispatch(managerQuery());
    }
  }, []);

  return (
    <div>
      <AppBar />
      <Search />
      <Pagenation lastPage={lastPage} />
      <div className={styles.content}>
        <ManagerList data={managerList} />
        <div style={{ display: "flex", flexWrap: "wrap" }}>
          <div className={styles.form}>
            <input
              className={styles.text}
              type="text"
              placeholder="이메일"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              className={styles.text}
              type="text"
              placeholder="비밀번호"
              value={pw}
              onChange={(e) => setPw(e.target.value)}
            />
            <input
              className={styles.text}
              type="text"
              placeholder="이름"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <button className={styles.btn} onClick={onSubmitCreateManager}>
              Create
            </button>
          </div>
          <div className={styles.push}>
            <div>
              <textarea
                className={styles.text}
                type="text"
                placeholder="푸쉬내용"
                value={push}
                onChange={(e) => setPush(e.target.value)}
              />
              <button className={styles.btn} onClick={onSumbitPush}>
                Push All
              </button>
            </div>
          </div>
          <div className={styles.update}>
            <div>
              <button className={styles.btn} onClick={onClickUpdate}>
                Update
              </button>
              <button className={styles.btn} onClick={onClickQuery}>
                Query
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
