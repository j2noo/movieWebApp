import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./routes/Home";
import Detail from "./routes/Detail";

import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
  ${reset}
  body{
    margin: 0;
    width : 100%;
    height : 100%;
};
  #root{
    width : 100%;
    height : 100%;
  };
`;

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <GlobalStyle /> {/* 글로벌css 및 css-reset */}
      <Switch>
        <Route path="/hello">
          <h1>hello router!!</h1>
        </Route>
        <Route path="/:movie/:id">
          <Detail />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
