import React from 'react';
import 'semantic-ui-css/semantic.min.css';
import {AppLayout} from './components/AppLayout/AppLayout';
import {Home} from './containers/Home/Home';
import './containers/Home/Home.scss';

const App: React.FC = () => {
  return (
    <AppLayout>
      <Home/>
  </AppLayout>
  );
}

export default App;
