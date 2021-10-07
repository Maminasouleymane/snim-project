import ReactDOM from "react-dom";
import AppRouter from "./routers/AppRouter";
import React, { useEffect } from "react";
import { Provider } from "react-redux";
import configureStore from "./store/configureStore";
import { startSetInfo } from "./actions/info";
import { startSetGroupe } from "./actions/groupe";
import { startSetArret } from "./actions/arret";
import { startSetOperation } from "./actions/operation";
import { startSetAuxiliaire } from "./actions/auxiliaire";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import "normalize.css/normalize.css";
import styles from "./styles/styles.scss";
import Loading from "./components/Loading";
import "moment/locale/fr";
import "normalize.css/normalize.css";
import "moment/locale/fr";

const store = configureStore();
store.dispatch(startSetGroupe());
store.dispatch(startSetArret());
store.dispatch(startSetOperation());
store.dispatch(startSetAuxiliaire());

// const AppRouter = lazy(() => import("./routers/AppRouter"));
const App = () => {
  return (
    <div>
      <Provider store={store}>
        <AppRouter />
      </Provider>
    </div>
  );
};

ReactDOM.render(<Loading />, document.getElementById("app"));
store.dispatch(startSetInfo()).then(() => {
  ReactDOM.render(<App />, document.getElementById("app"));
});
