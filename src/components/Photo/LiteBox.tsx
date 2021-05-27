import * as React from "react";
import { useParams, useHistory } from "react-router-dom";
import { FcLike } from "react-icons/fc";

import "./style/LiteBox.scss";
import styles from "./style/backdrop.module.scss";
import girls from "../Gallery/data";

interface ILiteBoxProps {}
interface IBackDrop {
  onClick: any;
}

const BackDrop: React.FC<IBackDrop> = (props) => {
  return <div className={styles.backdrop} {...props}></div>;
};

const getImage = () => {};

const LiteBox: React.FunctionComponent<ILiteBoxProps> = (props) => {
  // @ts-ignore
  const { photoId } = useParams();
  const [like, toggleLike] = React.useState(false);
  const history = useHistory();

  const getLike = () => {
    return like === false ? "rgba(194, 17, 17, 0)" : "rgba(194, 17, 17, 1)";
  };

  const getImage = () => {
    const girl = girls.find(({ _id }) => _id === photoId);
    return girl?.img;
  };

  const onCommentHandler = () => {
    history.push("/gallery");
  };

  return (
    <div>
      <BackDrop onClick={onCommentHandler} />
      <dialog open className="lite-box__modal">
        <div className="lite-box__image">
          <img src={getImage()} alt="" />
        </div>
        <div className="lite-box__info">
          <div className="lite-box__info-people">
            <p>На фото: Алена Шатрова</p>
            <p>Фотограф: Евгений Жуков</p>
          </div>
          <div>
            <textarea
              name=""
              id=""
              className="lite-box__comment"
              placeholder="Ваш комментарий..."
            ></textarea>
          </div>
          <div className="lite-box__actions">
            <button onClick={onCommentHandler}>Комментировать</button>
            <FcLike
              className="lite-box__icon"
              style={{ "--color-like": getLike() } as React.CSSProperties}
              onClick={() => toggleLike(!like)}
              strokeWidth="1"
            />
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default LiteBox;
