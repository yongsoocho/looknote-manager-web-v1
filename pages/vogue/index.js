import styles from "../../styles/Cody.module.css";
import AppBar from "../../components/AppBar";
import Pagenation from "../../components/Pagenation";
import CodyItem from "../../components/CodyItem";
import Search from "../../components/Search";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getVogueList } from "../../redux/cody/action";

export default function Cody() {
  const vogueList = useSelector((state) => state.cody.vogues);
  const voguePage = useSelector((state) => state.cody.lastVPage);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getVogueList());
  }, []);

  return (
    <div>
      <AppBar />
      <Search />
      <Pagenation lastPage={voguePage} />
      <div className={styles.board}>
        {vogueList.map((e) => {
          return <CodyItem key={e.post_id} data={e} />;
        })}
      </div>
    </div>
  );
}
