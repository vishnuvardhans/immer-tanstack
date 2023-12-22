import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Page1 from './components/page1';

import TodoComponent from './components/immer';
import Fetch from './fetch';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
                <Routes>
                    <Route  
                        path="/home"
                        element={<Page1/>}
                    />
                     <Route      
                        path="/"
                        element={<Fetch/>}
                    />
                </Routes>
            </BrowserRouter>
            <TodoComponent/>
    </div>
  );
}

export default App;