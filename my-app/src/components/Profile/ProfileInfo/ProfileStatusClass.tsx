import React, {ChangeEvent} from 'react';
import {useParams} from 'react-router-dom';
import {Preloader} from '../../Preloader/Preloader';
import classes from './ProfileInfo.module.css';

type ProfileStatusType = {
    status: string
    updateStatus: (status: string) => void
}

export class ProfileStatusClass extends React.Component<ProfileStatusType> {
    state: { editMode: boolean, status: string } = {
        editMode: false,
        status: this.props.status
    };

    activateEditMode = () => {
        this.setState({
            editMode: true
        })
    }
    deactivateEditMode = () => {
        this.setState({
            editMode: false
        })
        this.props.updateStatus(this.state.status)
    }
    onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
        this.setState({
            status: e.currentTarget.value
        })
    }

    componentDidUpdate(prevProps:any, prevState:any) {
        if (this.props.status !== prevProps.status) {
            this.setState({
                status: this.props.status
            })
        }
    }

    render() {
        return (
            <div>
                {!this.state.editMode
                    ? <div>
                        <span
                            onDoubleClick={this.activateEditMode}>{this.props.status ? this.props.status : 'No status'}</span>
                    </div>
                    : <div>
                        <input onChange={this.onStatusChange} autoFocus={true} value={this.state.status}
                               onBlur={this.deactivateEditMode}/>
                    </div>
                }
            </div>
        )
    }
}