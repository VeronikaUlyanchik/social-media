import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {NavBar} from './components/NavBar/NavBar';
import {Profile} from './components/Profile/Profile';
import {Dialogs} from './components/Dialogs/Dialogs';
import { Route, Routes} from 'react-router-dom';
import { News } from './components/News/News';
import { Music } from './components/Music/Music';
import { Settings } from './components/Settings/Settings';
import {addMessage, stateType} from "./redux/state";


type appPropsType={
    state: stateType
    addPost: ()=> void
    addMessage: (messageText:string)=>void
    changePostState: (text:string)=> void
}

function App({state,addPost,addMessage ,changePostState, ...props}:appPropsType) {
    return (

            <div className="app-wrapper">
                <Header/>
                <NavBar/>
                <div className="app-wrapper-content">
                    <Routes>
                        <Route path="/profile" element={<Profile postData={state.profilePage.postData} addPost={addPost} changePostState={changePostState}/>}/>
                        <Route path="/messages/*" element={<Dialogs dialogsPageData={state.dialogsPage} addMessage={addMessage} />}/>
                        <Route path="/news" element={<News/>}/>
                        <Route path="/music" element={<Music/>}/>
                        <Route path="/settings" element={<Settings/>}/>
                    </Routes>
                </div>
            </div>
    );
}

export default App;
