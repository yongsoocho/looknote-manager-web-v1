import styles from "../../styles/Shop.module.css";
import AppBar from "../../components/AppBar";
import ManagerList from "../../components/ManagerList";
import Pagenation from "../../components/Pagenation";
import Search from "../../components/Search";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState, useCallback } from "react";
import { createManager, getManagerList } from "../../redux/manager/action";

export default function Shop() {
  const managerList = useSelector((state) => state.manager.managers);
  const lastPage = useSelector((state) => state.manager.lastPage);
  const dispatch = useDispatch();

  useEffect(() => {}, []);

  const onSubmitCreateShop = useCallback(() => {
    dispatch(createManager({}));
  }, []);

  return (
    <div>
      <AppBar />
      <Search />
      <Pagenation lastPage={lastPage} />
      <div className={styles.content}>
        <div>
          <form className={styles.form} onSubmit={onSubmitCreateShop}>
            <input type="file" className={styles.text} />
            <div></div>
            <input type="text" placeholder="name" className={styles.text} />
            <input type="text" placeholder="price" className={styles.text} />
            <input type="text" placeholder="link" className={styles.text} />
          </form>
        </div>
        <div></div>
      </div>
    </div>
  );
}
