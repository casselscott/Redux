import './App.css';
import { createStore } from 'redux';

function App() {
  const reducer = (state, action) => {
    switch (action.type) {
      case 'ADD':
        state = state + action.payload;
        break;

      case 'SUBTRACT':
        state = state - action.payload;
        break;

      case 'MULTIPLY':
        state = state * action.payload;
        break;
    }
    return state;
  };

  const Store = createStore(reducer, 20);
  Store.subscribe(() => {
    console.log('NewData!!!', Store.getState());
  });

  Store.dispatch({
    type: 'ADD',
    payload: 200,
  });

  Store.dispatch({
    type: 'SUBTRACT',
    payload: 50,
  });

  Store.dispatch({
    type: 'MULTIPLY',
    payload: 3,
  });

  return (
    <div className="App">
      <header className="App-header"> Understanding Redux</header>
    </div>
  );
}

export default App;
