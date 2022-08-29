import styles from "../styles/Pagenation.module.css";
import { useDispatch } from "react-redux";
import { useCallback, useRef, useState, useEffect } from "react";
import { useRouter } from "next/router";
import { setCodyPg, setVoguePg } from "../redux/cody/slice";
import { getCodyList, getVogueList } from "../redux/cody/action";
import { getQuitList, getUserList } from "../redux/user/action";
import { setUserPg, setUserQPg } from "../redux/user/slice";
import { getCoinList, getCoinRewardList } from "../redux/coin/action";

export default function Pagenation({ lastPage }) {
  const swiper = useRef();
  const [indexer, setIndexer] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

  const page = new Array(lastPage).fill(0);

  const router = useRouter();
  const dispatch = useDispatch();

  useEffect(() => {});

  const pagenation = useCallback((page) => {
    if (router.asPath === "/vogue") {
      dispatch(setVoguePg(page));
      setCurrentPage(page);
      return dispatch(getVogueList(page));
    } else if (router.asPath === "/cody") {
      dispatch(setCodyPg(page));
      setCurrentPage(page);
      return dispatch(getCodyList(page));
    } else if (router.asPath === "/coin") {
      dispatch(setUserPg(page));
      setCurrentPage(page);
      return dispatch(getCoinList(page));
    } else if (router.asPath === "/reward") {
      dispatch(setUserPg(page));
      setCurrentPage(page);
      return dispatch(getCoinRewardList(page));
    } else if (router.asPath === "/user") {
      dispatch(setUserPg(page));
      setCurrentPage(page);
      return dispatch(getUserList(page));
    } else if (router.asPath === "/quit") {
      dispatch(setUserQPg(page));
      setCurrentPage(page);
      return dispatch(getQuitList(page));
    }
  }, []);

  const onClickLA = useCallback(() => {
    setIndexer(indexer + 50);
    return (swiper.current.style.transform = `translateX(${indexer}px`);
  }, [indexer]);

  const onClickRA = useCallback(() => {
    setIndexer(indexer - 50);
    return (swiper.current.style.transform = `translateX(${indexer}px`);
  }, [indexer]);

  return (
    <div className={styles.pagenation}>
      <span className={styles.arrow} onClick={onClickLA}>
        L
      </span>
      <div className={styles.content}>
        <div className={styles.swiper} ref={swiper}>
          {page.map((e, i) => {
            return (
              <span
                className={styles.page}
                key={i + 1}
                style={{
                  fontSize: `${currentPage == i + 1 ? "20px" : "15px"}`,
                }}
                onClick={() => pagenation(i + 1)}
              >
                {i + 1}
              </span>
            );
          })}
        </div>
      </div>
      <span className={styles.arrow} onClick={onClickRA}>
        R
      </span>
    </div>
  );
}
