import styles from "../../styles/Coin.module.css";
import AppBar from "../../components/AppBar";
import CoinList from "../../components/CoinList";
import Pagenation from "../../components/Pagenation";
import Search from "../../components/Search";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getCoinList } from "../../redux/coin/action";

export default function Coin() {
  const lastPage = useSelector((state) => state.coin.lastPage);
  const coinList = useSelector((state) => state.coin.coinList);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCoinList());
  }, []);

  return (
    <div>
      <AppBar />
      <Search />
      <Pagenation lastPage={lastPage} />
      <div>
        <CoinList data={coinList} />
      </div>
    </div>
  );
}
