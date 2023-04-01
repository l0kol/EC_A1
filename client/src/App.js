import logo from './logo.svg';
import './App.css';
import {Container, Spinner, Navbar, Button} from "react-bootstrap";
import PanelMain from './components/PanelMain';
import PanelStore from './components/PanelStore';
import PanelProfile from './components/PanelProfile';
import Error from './components/Error';
import {AppContext} from "./Context/context";

import {useContext} from "react";

import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';


function App() {
  const context = useContext(AppContext);

  useEffect(() => {
    // context.setLoadingMain(true);


    //Load user data
    const user = context.apiUserFetch()
        .then(data => {
            console.log(data);
            let user = context.user;
            user.id = data.id;
            user.type = data.type;
            user.name = data.name;

            context.setUser({
                ...user
            })

        }).catch(e => console.log(e))

        Promise.all([user]).then(() => {
            context.setLoadingMain(false);
        });

}, [])


  return (
    <div className="App">

        <div>

        <Routes>
            <Route exact path={"/"} element={<PanelMain/>}/>
            <Route exact path={"/store"} element={<PanelStore/>}/>
            <Route exact path={"/profile"} element={<PanelProfile/>}/>
            <Route path='*' element={<Error />} />
        </Routes>
    </div>
    </div>
);
}

export default App;
