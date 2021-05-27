import uniqueId from "lodash/uniqueId";

import girl1 from "./images/girls/1.jpg";
import girl2 from "./images/girls/2.jpg";
import girl3 from "./images/girls/3.jpg";
import girl4 from "./images/girls/4.jpg";
import girl5 from "./images/girls/5.jpg";
import girl6 from "./images/girls/6.jpg";
import girl7 from "./images/girls/7.jpg";
import girl8 from "./images/girls/8.jpg";
import girl9 from "./images/girls/9.jpg";
import girl10 from "./images/girls/10.jpg";
import girl11 from "./images/girls/11.jpg";
import girl12 from "./images/girls/12.jpg";
import girl13 from "./images/girls/13.jpg";
import girl14 from "./images/girls/14.jpg";
import girl15 from "./images/girls/15.jpg";

export default [
  girl1,
  girl2,
  girl3,
  girl4,
  girl5,
  girl6,
  girl7,
  girl8,
  girl9,
  girl10,
  girl11,
  girl12,
  girl13,
  girl14,
  girl15,
].map((image) => ({ img: image, _id: uniqueId() }));
