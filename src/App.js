import { Counter, Component } from './Component';
import { Counter, Autofocus } from './Autofocus';
import { MenuList } from '@material-ui/core';
import './App.css';

function App({ name }) {
  return (
    <div className="App">
      <header className="App-header">
        <p>Hello React</p>
        <Component />
      </header>
    </div>
  );
}
export default App;

const arr = [1, 2];
const obj = {
  a: 3
};

const { a } = obj;

const [one, two, three] = arr;