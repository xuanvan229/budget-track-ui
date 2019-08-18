import React from 'react';
import Button from '@material-ui/core/Button';
import AppRouter from './router'

import configureStore from './store'
import { Provider } from 'react-redux'
import rootSaga from './store/sagas'

const store = configureStore()
store.runSaga(rootSaga)

function App() {
  return (
    <Provider store={store}>
        <AppRouter/>
    </Provider>
  );
}

export default App;
