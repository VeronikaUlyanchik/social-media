import React, {ReactNode} from 'react';
import {
    createContext
} from "../../../../Program Files/JetBrains/WebStorm 2021.3.1/plugins/JavaScriptLanguage/jsLanguageServicesImpl/external/react";
import {ReduxStoreType, store} from './redux/reduxState';
import {stateType, storeType} from './redux/state';


export const StoreContext = React.createContext({} as ReduxStoreType) // дефолтное значение

type ProviderType = {
    store?: ReduxStoreType
    children: any
}

// export const Provider = (props: ProviderType) => {
//     return ( <StoreContext.Provider value = {props.store}>
//             {props.children}
//             < /StoreContext.Provider>
//     )
// };