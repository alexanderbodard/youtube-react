import React from 'react';
import 'semantic-ui-css/semantic.min.css';
import {SideBar} from './containers/SideBar/SideBar';
import HeaderNav from './containers/HeaderNav/HeaderNav';
import {Home} from './containers/Home/Home';
import './containers/Home/Home.scss';

const App: React.FC = () => {
  return (
    <React.Fragment>
      <HeaderNav/>
      <SideBar/>
      <Home/>
  </React.Fragment>
  );
}

export default App;
