import logo from './logo.svg';
import './App.css';
import {Container, Spinner, Navbar, Button} from "react-bootstrap";
import PanelHome from './components/PanelHome';
import PanelStore from './components/PanelStore';
import PanelProfile from './components/PanelProfile';
import Error from './components/Error';

import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';


function App() {
  return (
    <div className="App">

        <div>

        <Routes>
            <Route exact path={"/"} element={<PanelHome/>}/>
            <Route exact path={"/store"} element={<PanelStore/>}/>
            <Route exact path={"/profile"} element={<PanelProfile/>}/>
            <Route path='*' element={<Error />} />
        </Routes>
    </div>
    </div>
);
}

export default App;
