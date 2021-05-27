import * as React from "react";
import { useHistory } from "react-router-dom";

import Container from "../layout/container";
import "./style/Gallery.main.scss";
import girls from "./data";
interface IGalleryMainProps {}

const GalleryMain: React.FunctionComponent<IGalleryMainProps> = (props) => {
  const history = useHistory();

  const openPhotoHandler = (photoid: string) => {
    history.push(`/gallery/${photoid}`);
  };

  return (
    <div className="gallery-main">
      <Container>
        <div className="gallery-main__container">
          {girls.map(({ img, _id }) => {
            return <img src={img} key={_id} onClick={() => openPhotoHandler(_id)} />;
          })}
        </div>
      </Container>
    </div>
  );
};

export default GalleryMain;
