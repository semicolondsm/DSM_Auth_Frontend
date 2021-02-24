import { useEffect } from "react";

import { BrowserRouter, Route, Switch } from "react-router-dom";

import GlobalStyled from "./GlobalStyled";

import { Main, Login, LoginClient } from "./components";
import newRegister from "./components/Register/newRegister";

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
        <Route path="/register" component={newRegister} />
        <Route path="/" component={Main} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
