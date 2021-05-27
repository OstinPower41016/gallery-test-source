import * as React from "react";
import GalleryMain from "../../components/Gallery/Gallery.main";

interface IGalleryProps {}

const Gallery: React.FunctionComponent<IGalleryProps> = (props) => {
  return (
    <div>
      <GalleryMain />
    </div>
  );
};

export default Gallery;
