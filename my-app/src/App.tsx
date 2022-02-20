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
import { ReduxStoreType } from './redux/reduxState';
import { DialogsContainer } from './components/Dialogs/DialogsContainer';


type appPropsType={
   store?: ReduxStoreType
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
                        <Route path="/profile" element={<Profile
                            //store={store}
                        />}/>
                        <Route path="/messages/*" element={<DialogsContainer
                            //store={store}
                            //dialogsPageData={state.dialogsPage} addMessage={store.dispatch.bind(state)}
                        />}/>
                        <Route path="/news" element={<News/>}/>
                        <Route path="/music" element={<Music/>}/>
                        <Route path="/settings" element={<Settings/>}/>
                    </Routes>
                </div>
            </div>
    );
}

export default App;
