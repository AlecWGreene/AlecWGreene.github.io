import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import { createContext, useReducer } from 'react';

// Component imports 
import NavBar from "./components/NavBar";
import ModalLayer from './components/ModalLayer';
import ContentLayer from "./components/ContentLayer";


export const PageStateContext = createContext();

const pageStateReducer = (state, action) => {
  switch(action.type){
  case "viewPage":
    return {
      ...state,
      breadcrumbs: action.payload
    }
  default:
    throw new Error(`pageStateReducer: action type ${action.type} is not a valid action`);
  }
}

function App() {

  const [state, dispatch] = useReducer(pageStateReducer, {
    breadcrumbs: ["Demos", "Ashen Void"]
  });

  return (
    <PageStateContext.Provider value={[state, dispatch]}>
      {/* Page Wrapper */}
      <div id="Wrapper">
        <NavBar />
        <ContentLayer />
      </div>
    </PageStateContext.Provider>
  );
}

export default App;
