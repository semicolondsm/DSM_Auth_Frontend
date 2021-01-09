import { useEffect } from "react";

import { BrowserRouter, Route, Switch } from "react-router-dom";

import GlobalStyled from "./GlobalStyled";

import { Main, Login, Register, LoginClient, Consumer, myPage } from "./components";

function App() {
  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <BrowserRouter>
      <GlobalStyled />
      <Switch>
        <Route
          path="/login"
          render={(props) => <Login my={true} {...props} />}
        />
        <Route path="/external/login" component={LoginClient} />
        <Route path="/register" component={Register} />
        <Route path="/consumer" component={Consumer} />
        <Route path="/mypage" component={myPage} />
        <Route path="/" component={Main} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
