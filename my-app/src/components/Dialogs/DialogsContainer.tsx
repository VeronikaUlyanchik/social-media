import React, {ChangeEvent} from 'react';
import classes from './Dialogs.module.css';
import {DialogsItems} from "./DialogsItems/DialogsItems";
import {MessagesItems} from "./Messages/Messages";
import {dialogsPageStateType, dispatchActionType, stateType} from "../../redux/state";
import {addMessageActionCreator, changeMessageStateActionCreator} from "../../redux/dialogs-reducer";
import {Dialogs} from './Dialogs';
import {connect} from 'react-redux';
import { AppStateType } from '../../redux/reduxState';

let mapStateToProps = (state:AppStateType) => {
    return {
        dialogsPageData: state.dialogsPage,
        isAuth: state.auth.isAuth
    }
}
// let mapDispatchToProps = (dispatch:(action: dispatchActionType) => void) => {
//     return {
//         sendMessage:()=>{
//             dispatch(addMessageActionCreator())
//     },
//         addMessage:(text:string)=>{
//             dispatch(changeMessageStateActionCreator(text))
//         }
//     }
// }


export const DialogsContainer = connect(mapStateToProps, {addMessageActionCreator, changeMessageStateActionCreator})(Dialogs)