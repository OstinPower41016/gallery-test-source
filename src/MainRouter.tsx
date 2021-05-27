import * as React from "react";
import { Route, Switch } from "react-router";

import NavBar from "./components/NavBar";
import Home from "./views/Home";
import Gallery from "./views/Gallery";
import Photo from "./views/Photo";

interface IAppProps {}

const App: React.FunctionComponent<IAppProps> = (props) => {
  return (
    <>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
      <Route path="/gallery" component={Gallery} />
      <Route path="/gallery/:photoId" component={Photo} />
    </>
  );
};

export default App;
