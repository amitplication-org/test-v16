import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { AmitList } from "./amit/AmitList";
import { AmitCreate } from "./amit/AmitCreate";
import { AmitEdit } from "./amit/AmitEdit";
import { AmitShow } from "./amit/AmitShow";
import { OfekList } from "./ofek/OfekList";
import { OfekCreate } from "./ofek/OfekCreate";
import { OfekEdit } from "./ofek/OfekEdit";
import { OfekShow } from "./ofek/OfekShow";
import { ShimiList } from "./shimi/ShimiList";
import { ShimiCreate } from "./shimi/ShimiCreate";
import { ShimiEdit } from "./shimi/ShimiEdit";
import { ShimiShow } from "./shimi/ShimiShow";
import { ArielList } from "./ariel/ArielList";
import { ArielCreate } from "./ariel/ArielCreate";
import { ArielEdit } from "./ariel/ArielEdit";
import { ArielShow } from "./ariel/ArielShow";
import { MorList } from "./mor/MorList";
import { MorCreate } from "./mor/MorCreate";
import { MorEdit } from "./mor/MorEdit";
import { MorShow } from "./mor/MorShow";
import { EugeneList } from "./eugene/EugeneList";
import { EugeneCreate } from "./eugene/EugeneCreate";
import { EugeneEdit } from "./eugene/EugeneEdit";
import { EugeneShow } from "./eugene/EugeneShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"My service"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
        <Resource
          name="Amit"
          list={AmitList}
          edit={AmitEdit}
          create={AmitCreate}
          show={AmitShow}
        />
        <Resource
          name="Ofek"
          list={OfekList}
          edit={OfekEdit}
          create={OfekCreate}
          show={OfekShow}
        />
        <Resource
          name="Shimi"
          list={ShimiList}
          edit={ShimiEdit}
          create={ShimiCreate}
          show={ShimiShow}
        />
        <Resource
          name="Ariel"
          list={ArielList}
          edit={ArielEdit}
          create={ArielCreate}
          show={ArielShow}
        />
        <Resource
          name="Mor"
          list={MorList}
          edit={MorEdit}
          create={MorCreate}
          show={MorShow}
        />
        <Resource
          name="Eugene"
          list={EugeneList}
          edit={EugeneEdit}
          create={EugeneCreate}
          show={EugeneShow}
        />
      </Admin>
    </div>
  );
};

export default App;
