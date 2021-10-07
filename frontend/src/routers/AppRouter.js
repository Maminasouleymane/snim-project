import React from "react";
import PersistentDrawerLeft from "../components/Drawer";
import Index from "../components/Index";
import Groupe from "../components/Groupe";
import ArretTable from "../components/ArretTable";
import Laison from "../components/Laison";
import AuxilliersTable from "../components/AuxilliersTable";
import SJMCNDB from "../components/SJMCNDB";
import AjouterArret from "../components/AjouterArret";
import SmlVersSnim from "../components/SmlVersSnim";
import CleTable from "../components/CleTable";
import Operation from "../components/Operation";
import Auxiliaire from "../components/Auxiliaire";
import { BrowserRouter, Route, Switch, Link, NavLink } from "react-router-dom";
import OperationsTable from "../components/OperationsTable";

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <PersistentDrawerLeft />
      <Switch>
        <Route path="/" exact={true} component={Index} />
        <Route path="/groupe" component={Groupe} />
        <Route path="/historique_arret" component={ArretTable} />
        <Route path="/operations" component={OperationsTable} />
        <Route path="/auxiliers" component={AuxilliersTable} />
        <Route path="/laisonsnimsomlec" component={Laison} />
        <Route path="/sjmcndb" component={SJMCNDB} />
        <Route path="/cle" component={CleTable} />
        <Route path="/arret" component={AjouterArret} />
        <Route path="/operationHistory" component={Operation} />
        <Route path="/auxiliaireHistory" component={Auxiliaire} />
        <Route path="/somelec" component={SmlVersSnim} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;
