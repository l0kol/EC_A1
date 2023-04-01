import logo from './A1_logo.png';
import './App.css';
import {Container, Spinner, Navbar, Button} from "react-bootstrap";
import PanelHome from './components/PanelHome';
import PanelStore from './components/PanelStore';
import PanelProfile from './components/PanelProfile';
import PanelForum from './components/PanelForum';
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
            <Route exact path={"/forum"} element={<PanelForum/>}/>
            <Route path='*' element={<Error />} />
        </Routes>
    </div>
    </div>
);
}

export default App;
