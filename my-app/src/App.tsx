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
import { stateType, storeType} from "./redux/state";


type appPropsType={
    state: stateType
    store: storeType
}

function App({state,store, ...props}:appPropsType) {
    return (
            <div className="app-wrapper">
                <Header/>
                <NavBar/>
                <div className="app-wrapper-content">
                    <Routes>
                        <Route path="/profile" element={<Profile postData={state.profilePage.postData} addPost={store.dispatch.bind(store)} changePostState={store.dispatch.bind(store)}/>}/>
                        <Route path="/messages/*" element={<Dialogs dialogsPageData={state.dialogsPage} addMessage={store.dispatch.bind(store)} />}/>
                        <Route path="/news" element={<News/>}/>
                        <Route path="/music" element={<Music/>}/>
                        <Route path="/settings" element={<Settings/>}/>
                    </Routes>
                </div>
            </div>
    );
}

export default App;
