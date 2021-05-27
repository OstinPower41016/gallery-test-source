import * as React from "react";

import "./index.scss";
import LiteBox from "../../components/Photo/LiteBox";

interface IPhotoProps {}

const Photo: React.FunctionComponent<IPhotoProps> = (props) => {
  return (
    <section className="photo">
      <LiteBox />
    </section>
  );
};

export default Photo;
