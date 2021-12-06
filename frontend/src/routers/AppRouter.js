import React from "react";
import PersistentDrawerLeft from "../components/Drawer";
import Index from "../components/charts/Index";
import GroupeInsertion from "../components/InsertionTables/GroupeInsertion";
import ArretTable from "../components/DataTables/ArretTable";
import LiaisonTable from "../components/DataTables/LiaisonTable";
import AuxiliaireInsertion from "../components/InsertionTables/AuxiliaireInsertion";
import SjmcndbTable from "../components/DataTables/SjmcndbTable";
import ArretInsertion from "../components/InsertionTables/ArretInsertion";
import LiaisonInsertion from "../components/InsertionTables/LiaisonInsertion";
import CleTable from "../components/DataTables/CleTable";
import OperationTable from "../components/DataTables/OperationTable";
import AuxiliaireTable from "../components/DataTables/AuxiliaireTable";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import OperationInsertion from "../components/InsertionTables/OperationInsertion";

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <PersistentDrawerLeft />
      <Switch>
        // ! charts urls
        <Route path="/" exact={true} component={Index} />
        // ! insertion urls
        <Route path="/arret-insertion" component={ArretInsertion} />
        <Route path="/auxiliair-insertion" component={AuxiliaireInsertion} />
        <Route path="/groupes-insertion" component={GroupeInsertion} />
        <Route path="/liaison-insertion" component={LiaisonInsertion} />
        <Route path="/operation-insertion" component={OperationInsertion} />
        // ! DataTables urls
        <Route path="/arret-archive" component={ArretTable} />
        <Route path="/auxiliaires-archive" component={AuxiliaireTable} />
        <Route path="/cle-archive" component={CleTable} />
        <Route path="/sjmcndb-archive" component={SjmcndbTable} />
        <Route path="/laison-archive" component={LiaisonTable} />
        <Route path="/operation-archive" component={OperationTable} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;
