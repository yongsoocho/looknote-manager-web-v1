import styles from "../../styles/Reward.module.css";
import AppBar from "../../components/AppBar";
import CoinList from "../../components/CoinList";
import Pagenation from "../../components/Pagenation";
import Search from "../../components/Search";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getCoinRewardList } from "../../redux/coin/action";

export default function Reward() {
  const lastPage = useSelector((state) => state.coin.lastRPage);
  const rewardList = useSelector((state) => state.coin.rewardList);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCoinRewardList());
  }, []);

  return (
    <div>
      <AppBar />
      <Search />
      <Pagenation lastPage={lastPage} />
      <div>
        <CoinList data={rewardList} />
      </div>
    </div>
  );
}
