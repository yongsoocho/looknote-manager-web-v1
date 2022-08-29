import styles from "../../styles/Cody.module.css";
import AppBar from "../../components/AppBar";
import Pagenation from "../../components/Pagenation";
import CodyItem from "../../components/CodyItem";
import Search from "../../components/Search";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getCodyList } from "../../redux/cody/action";

export default function Cody() {
  const codyList = useSelector((state) => state.cody.codys);
  const lastPage = useSelector((state) => state.cody.lastPage);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCodyList());
  }, []);

  return (
    <div>
      <AppBar />
      <Search />
      <Pagenation lastPage={lastPage} />
      <div className={styles.board}>
        {codyList.map((e) => {
          return <CodyItem key={e.post_id} data={e} />;
        })}
      </div>
    </div>
  );
}
