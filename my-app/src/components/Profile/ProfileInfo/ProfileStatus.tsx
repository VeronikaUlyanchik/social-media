import React from 'react';
import {useParams} from 'react-router-dom';
import {Preloader} from '../../Preloader/Preloader';
import {APIUserType} from '../ProfileContainer';
import classes from './ProfileInfo.module.css';

type ProfileStatusType={
    status:string | null
}

export class ProfileStatus extends React.Component<ProfileStatusType>{
    state: { editMode: boolean } = {
        editMode: false
    };

    activateEditMode() {
        this.setState({
            editMode: true
        })
    }
    deactivateEditMode() {
        this.setState({
            editMode: false
        })
    }


    render() {
        return (
            <div>
                {!this.state.editMode
                    ? <div>
                        <span onDoubleClick={this.activateEditMode.bind(this)}>{this.props.status ? this.props.status : 'No status' }</span>
                    </div>
                    : <div>
                        <input autoFocus={true} onBlur={this.deactivateEditMode.bind(this)}>{this.props.status}</input>
                    </div>
                }
                    </div>
                    )
                }
                }