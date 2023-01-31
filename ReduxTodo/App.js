import * as React from 'react';
import { Provider } from 'react-redux';
import Store from './src/store/store';
import {TodoApp} from './src/features';

const App = ()=>{

  return (
    <Provider store={Store}>
      <TodoApp/>
    </Provider>
  );
}

export default App;
