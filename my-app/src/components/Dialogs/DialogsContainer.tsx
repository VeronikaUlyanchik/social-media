import React, {ChangeEvent} from 'react';
import classes from './Dialogs.module.css';
import {DialogsItems} from "./DialogsItems/DialogsItems";
import {MessagesItems} from "./Messages/Messages";
import {dialogsPageStateType, dispatchActionType, stateType} from "../../redux/state";
import {addMessageActionCreator} from "../../redux/dialogs-reducer";
import {Dialogs} from './Dialogs';
import {connect} from 'react-redux';
import { AppStateType } from '../../redux/reduxState';
import { WithAuthRedirectComponent } from '../../hoc/withAuthRedirectComponent';
import { compose } from 'redux';
import { getDialogsPageSelector } from '../../utils/selectors';

const mapStateToProps = (state:AppStateType) => {
    return {
        dialogsPageData: getDialogsPageSelector(state),
    }
}


export const DialogsContainer = compose(
    WithAuthRedirectComponent,
    connect(mapStateToProps, {addMessageActionCreator})
)(Dialogs)