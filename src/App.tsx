import React from 'react';
import 'semantic-ui-css/semantic.min.css';
import {SideBar} from './containers/SideBar/SideBar';
import HeaderNav from './containers/HeaderNav/HeaderNav';

const App: React.FC = () => {
  return (
    <React.Fragment>
      <HeaderNav/>
      <SideBar/>
  </React.Fragment>
  );
}

export default App;
