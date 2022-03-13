import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {NavBar} from './components/NavBar/NavBar';
import { Route, Routes, useParams} from 'react-router-dom';
import { News } from './components/News/News';
import { Music } from './components/Music/Music';
import { Settings } from './components/Settings/Settings';
import { stateType} from "./redux/state";
import {AppStateType } from './redux/reduxState';
import { DialogsContainer } from './components/Dialogs/DialogsContainer';
import { UsersContainer } from './components/Users/UsersContainer';
import {ProfileContainerC} from './components/Profile/ProfileContainer';


type appPropsType={
   store?: AppStateType
    state?: stateType
}

function App({state,
                 store,
                 ...props}:appPropsType) {
    return (
            <div className="app-wrapper">
                <Header/>
                <NavBar/>
                <div className="app-wrapper-content">
                    <Routes>

                            <Route path="/profile/:userId" element={<ProfileContainerC/>}>  </Route>
                        <Route path="/messages/*" element={<DialogsContainer
                            //store={store}
                            //dialogsPageData={state.dialogsPage} addMessage={store.dispatch.bind(state)}
                        />}/>
                        <Route path="/news" element={<News/>}/>
                        <Route path="/music" element={<Music/>}/>
                        <Route path="/settings" element={<Settings/>}/>
                        <Route path="/users" element={<UsersContainer/>}/>
                    </Routes>
                </div>
            </div>
    );
}

export default App;
