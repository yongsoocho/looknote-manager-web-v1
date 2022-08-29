import styles from "../../styles/Report.module.css";
import AppBar from "../../components/AppBar";
import Pagenation from "../../components/Pagenation";
import CodyItem from "../../components/CodyItem";
import Search from "../../components/Search";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getReportList } from "../../redux/cody/action";

export default function Report() {
  const reportList = useSelector((state) => state.cody.reports);
  const lastRPage = useSelector((state) => state.cody.lastRPage);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getReportList());
  }, []);

  return (
    <div>
      <AppBar />
      <Search />
      <Pagenation lastPage={lastRPage} />
      <div className={styles.board}>
        {reportList.map((e) => {
          return <CodyItem key={e.post_id} data={e} />;
        })}
      </div>
    </div>
  );
}
