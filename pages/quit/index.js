import styles from "../../styles/User.module.css";
import AppBar from "../../components/AppBar";
import Pagenation from "../../components/Pagenation";
import Search from "../../components/Search";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getQuitList } from "../../redux/user/action";
import QuitList from "../../components/QuitList";

export default function Quit() {
  const quits = useSelector((state) => state.user.quits);
  const lastPage = useSelector((state) => state.user.lastQPage);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getQuitList());
  }, []);

  return (
    <div>
      <AppBar />
      <Search />
      <Pagenation lastPage={lastPage} />
      <div className={styles.content}>
        <QuitList data={quits} />
      </div>
    </div>
  );
}
