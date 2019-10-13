import React from 'react';
import 'semantic-ui-css/semantic.min.css';
import {AppLayout} from './components/AppLayout/AppLayout';
import {Home} from './containers/Home/Home';
import './containers/Home/Home.scss';
import {Route, Switch} from 'react-router-dom';
import { Watch } from './containers/Watch/Watch';

const App: React.FC = () => {
  return (
    <AppLayout>
        <Switch>
          <Route path="/watch" component={Watch}/>
          <Route path="/" component={Home}/>
        </Switch>
    </AppLayout>
  );
}

export default App;
