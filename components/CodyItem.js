import styles from "../styles/CodyItem.module.css";
import { useCallback, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {
  deleteCody,
  deleteVogue,
  moveToVogue,
  patchCodyQuality,
} from "../redux/cody/action";
import { useRouter } from "next/router";

export default function CodyItem({ data }) {
  const dispatch = useDispatch();
  const router = useRouter();

  const [scrap, setScrap] = useState();

  const onClickDelete = useCallback(() => {
    const confirm = window.confirm(
      `정말로 ${data.post_id}번 코디를 삭제하시겠습니까?`
    );
    if (confirm) {
      dispatch(deleteCody(data.post_id)).then((res) => {
        if (res.type === "cd/delete/fulfilled") {
          window.alert(`${data.post_id} 코디 삭제 완료`);
        }
      });
    }
  }, []);

  const onClickVogue = useCallback(() => {
    if (router.asPath === "/vogue") {
      const confirm = window.confirm(
        `정말로 ${data.post_id}번 코디를 인기함에서 삭제하시겠습니까?`
      );
      if (confirm) {
        dispatch(deleteVogue(data.post_id)).then((res) => {
          if (res.type === "cd/delete/fulfilled") {
            window.alert(`${data.post_id} 코디 인기함에서 삭제 완료`);
          }
        });
      }
    } else if (router.asPath === "/cody") {
      dispatch(moveToVogue(data.post_id)).then((res) => {
        if (res.type === "cd/create/vogue/fulfilled") {
          window.alert(`${data.post_id}번 코디가 인기함으로 이동하였습니다`);
        }
      });
    }
  }, []);

  const onClickQuality = useCallback(() => {
    const quality = window.prompt("품질점수 입력");
    dispatch(patchCodyQuality({ post_id: data.post_id, quality }));
  }, []);

  const onClickScrap = useCallback(() => {
    const confirm = window.confirm(
      `정말로 ${data.post_id}번 코디 스크랩을 변경하시겠습니까?`
    );
    if (confirm) {
      window.alert(scrap);
    }
  }, [scrap]);

  const resizing = () => {
    return data.imageURL[0]
      .split(".")
      .map((e) => {
        if (e === "jpeg" || e === "jpg" || e === "png") {
          return "webp";
        } else {
          return e;
        }
      })
      .join(".");
  };

  return (
    <div className={styles.container}>
      <span className={styles.button_v} onClick={onClickVogue}>
        인기함
      </span>
      {router.asPath === "/cody" ? (
        <span className={styles.button_d} onClick={onClickDelete}>
          삭제
        </span>
      ) : (
        ""
      )}
      <div className={styles.thumbnail}>
        <img src={data.imageURL[0]} width="300px" height="360px" alt="cody" />
      </div>
      <div className={styles.tag}>
        <div>
          <span>post:{data.post_id} /</span>
          <span>&nbsp;스크랩:{data.scrap}/</span>
          <span>&nbsp;댓글:{data.comment} /</span>
        </div>
        <div>
          <span>
            닉네임:
            {data.user ? data.user.nickname : ""}
          </span>
        </div>
        <div>
          <span style={{ marginRight: "20px" }}>
            품질점수: {data.quality ? data.quality : "0"}
          </span>
          {data.quality ? <button onClick={onClickQuality}>설정</button> : ""}
        </div>
        <div>
          <input
            placeholder="스크랩 갯수"
            value={scrap}
            onChange={(e) => e.target.value}
          />
          <button onClick={onClickScrap}>스크랩 수정</button>
        </div>
      </div>
    </div>
  );
}
