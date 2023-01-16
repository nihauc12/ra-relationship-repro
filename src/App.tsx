import * as React from "react";
import { Admin, Resource, ListGuesser, EditGuesser, DataProvider } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';

import { TableaEdit } from "./Edit";

const App = () => {
  return (
      <Admin dataProvider={jsonServerProvider('http://localhost:3001')}>
        <Resource name="tableA" list={ListGuesser} edit={TableaEdit}/>
      </Admin>
  );
};

export default App;