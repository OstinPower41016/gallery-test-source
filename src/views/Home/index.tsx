import * as React from "react";

import "./index.scss";
import Container from "../../components/layout/container";
import BaseCard from "../../components/UI/BaseCard";
import { Link } from "react-router-dom";

interface IHomeProps {}

const Home: React.FunctionComponent<IHomeProps> = (props) => {
  return (
    <Container>
      <BaseCard className="home">
        <main className="home__preview">
          <p>
            Это уникальная фотогаллерея поразит ваши глаза и вы больше никогда не забудете ссылку на
            наш сайт после того как просмотрите нашу фото-галлерею, если вам понравилось, поставьте
            лайк и напишите прекрасный комментарий
          </p>
          <Link to="/gallery" className="home__link">
            Перейти к галереи
          </Link>
        </main>
      </BaseCard>
    </Container>
  );
};

export default Home;
