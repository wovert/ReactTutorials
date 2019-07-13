import React from "react";
import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

// antd
import { LocaleProvider } from "antd";
import zh_CN from "antd/lib/locale-provider/zh_CN";

// comon css
import "./static/css/reset.min.css";
import "./static/css/common.less";

// common component
import NavTop from "./components/NavTop";
import NavBottom from "./components/NavBottom";

// router component
import Home from "./routes/Home";
import Person from "./routes/Person";
import Mycourse from "./routes/Mycourse";

function App() {
  return (
    <Router>
      <LocaleProvider locale={zh_CN}>
        <div>
          {/*HEADER*/}
          <NavTop />

          {/*MAIN ROUTE*/}
          <main className="container">
            <Switch>
              <Route path="/" component={Home} />
              <Route path="/course" component={Home} />
              <Route path="/person" component={Person} />
              <Route path="/mycourse" component={Mycourse} />
              <Redirect to="/course" />
            </Switch>
          </main>

          {/*FOOTER*/}
          <NavBottom />
        </div>
      </LocaleProvider>
    </Router>
  );
}

export default App;
