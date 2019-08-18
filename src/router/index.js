import React from 'react';
import Button from '@material-ui/core/Button';
import { Switch , Route , BrowserRouter as Router} from 'react-router-dom';
import app from '../pages'

import * as combine from '../utils/config'
function AppRouter() {
  return (
    <div className="App">
        <Router>
            <Switch>
                {combine.combineRouter(app).map((route,index) => 
                    <Route 
                        key={index}
                        path={route.path}
                        exact={route.exact}
                        component={route.main}
                    />    
                )}
            </Switch>
        </Router>
    </div>
  );
}

export default AppRouter;
