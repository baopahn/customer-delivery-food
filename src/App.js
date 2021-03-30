import React, { useState } from "react";
import { Provider, useDispatch } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import store from "./storage";
import "./libs/fontawesome";

import Header from "./component/Header";
import Footer from "./component/Footer";
import SignIn from "./component/SignIn";
import VertifyPhonge from "./component/VertifyPhone";
import HomePage from "./component/HomePage";
import ListRestaurant from "./component/ListRestaurant";

import Error404 from "./component/Error/404";

import LangConfig from "./config/LangConfig.js";
import Localization from "./config/Localization.js";
import Loading from "./component/Loading";

function App() {
  const [language, setLanguage] = useState(LangConfig.DEFAULT_LANGUAGE);

  const onChangeLanguage = (langType) => {
    Localization.getInstance().changeLanguage(langType);
    setLanguage(langType);
  };

  return (
    <Provider store={store}>
      <Loading />

      <Router>
        <Header onChangeLanguage={onChangeLanguage} />

        <Switch>
          <Route path={"/sign-in"}>
            <SignIn />
          </Route>

          <Route path={"/vertify-phone"}>
            <VertifyPhonge />
          </Route>

          <Route path={"/"}>
            <ListRestaurant />
          </Route>
        </Switch>

        <Footer />
      </Router>
    </Provider>
  );
}

export default App;
