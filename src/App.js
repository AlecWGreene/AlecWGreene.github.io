import logo from './logo.svg';
import './App.css';
import ModalLayer from './components/ModalLayer';
import { createContext, useReducer } from 'react';

export const PageStateContext = createContext();

const pageStateReducer = (action, state) => {

}

const categories = ["Demos", "Projects", "Homework",  "Resume", "About Me"];

const pages= {

}

function App() {

  const [state, dispatch] = useReducer(pageStateReducer, {
    breadcrumbs: ["Demos"]
  });

  return (
    <div className="App">
      <div>

      </div>

      <ModalLayer active={""} />
    </div>
  );
}

export default App;
