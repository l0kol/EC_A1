import logo from './A1_logo.png';
import './App.css';
import {Container, Spinner, Navbar, Button} from "react-bootstrap";
import PanelMain from './components/PanelMain';
import PanelStore from './components/PanelStore';
import PanelProfile from './components/PanelProfile';
import PanelForum from './components/PanelForum';
import PanelUgodnosti from './components/PanelUgodnosti';
import PanelRoom from './components/PanelRoom';
import PanelDevices from './components/PanelDevices';
import PanelZrna from './components/PanelZrna';
import Error from './components/Error';
import {AppContext} from "./Context/context";

import Profile from './components/ProfileMock';

import {useContext} from "react";

import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';


function App() {
  const context = useContext(AppContext);

  useEffect(() => {
    // context.setLoadingMain(true);

    const post = context.apiForumPostsFetch()
        .then(data => {
          console.log(data);
            let contectPosts = context.posts;
            contectPosts.posts = data.posts;
        
        context.setPosts({ ...contectPosts })
        }).catch(e => console.log(e))


    //Load user data
    const user = context.apiUserFetch()
        .then(data => {
            console.log(data);
            let user = context.user;
            user.id = data.id;
            user.role = data.role;
            user.name = data.name;
            user.email = data.email;
            user.streak = data.streak;
            user.coins = data.coins;
            user.level = data.level;
            user.xp = data.experience;
            user.streakDate = data.streakDate;

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
            <Route exact path={"/forum"} element={<PanelForum/>}/>
            <Route exact path={"/devices"} element={<PanelDevices/>}/>
            <Route exact path={"/room"} element={<PanelRoom/>}/>
            <Route exact path={"/ugodnosti"} element={<PanelUgodnosti/>}/>
            <Route exact path={"/ugodnosti/zrna"} element={<PanelZrna/>}/>

            <Route exact path={"/p"} element={<Profile/>}/>

            <Route path='*' element={<Error />} />
        </Routes>
    </div>
    </div>
);
}

export default App;
