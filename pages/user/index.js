import styles from "../../styles/User.module.css";
import AppBar from "../../components/AppBar";
import Pagenation from "../../components/Pagenation";
import UserList from "../../components/UserList";
import Search from "../../components/Search";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getUserList } from "../../redux/user/action";

export default function User() {
  const users = useSelector((state) => state.user.users);
  const lastPage = useSelector((state) => state.user.lastPage);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserList());
  }, []);

  return (
    <div>
      <AppBar />
      <Search />
      <Pagenation lastPage={lastPage} />
      <div className={styles.content}>
        <UserList data={users} />
      </div>
    </div>
  );
}
