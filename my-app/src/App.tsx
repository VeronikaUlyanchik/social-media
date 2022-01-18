import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {NavBar} from './components/NavBar/NavBar';
import {Profile} from './components/Profile/Profile';
import {Dialogs} from './components/Dialogs/Dialogs';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import { News } from './components/News/News';
import { Music } from './components/Music/Music';
import { Settings } from './components/Settings/Settings';
import {dialogsDataArrayType} from "./components/Dialogs/DialogsItems/DialogsItems";
import {messagesItemsProps} from "./components/Dialogs/Messages/Messages";
import {postsDataType} from "./components/Profile/MyPosts/MyPosts";

type appPropsType={
    dialogsData:Array<dialogsDataArrayType>
    messagesData:Array<messagesItemsProps>
    postData: Array<postsDataType>
}

function App(props:appPropsType) {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <NavBar/>
                <div className="app-wrapper-content">
                    <Routes>
                        <Route path="/profile" element={<Profile postData={props.postData}/>}/>
                        <Route path="/messages/*" element={<Dialogs dialogsData={props.dialogsData} messagesData={props.messagesData} />}/>
                        <Route path="/news" element={<News/>}/>
                        <Route path="/music" element={<Music/>}/>
                        <Route path="/settings" element={<Settings/>}/>
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
