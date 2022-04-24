import React, {ChangeEvent} from 'react';
import {useParams} from 'react-router-dom';
import {Preloader} from '../../Preloader/Preloader';
import classes from './ProfileInfo.module.css';
import {
    useState,useEffect
} from "react";


type ProfileStatusType = {
    status: string
    updateStatus: (status: string) => void
}

export const ProfileStatus = (props: ProfileStatusType) => {

    const [editMode, setEditMode] = useState<boolean>(false);
    const [status, setStatus] = useState<string>(props.status);

    useEffect(()=> {
        setStatus(props.status)
    },[props.status])

    const deactivateEditMode = () => {
       setEditMode(false)
        props.updateStatus(status)
    }
    const onStatusChange = (e:ChangeEvent<HTMLInputElement>)=> {
        setStatus(e.currentTarget.value)
    }
    return (
        <div>
            {!editMode
                ? <div>
                        <span
                            onDoubleClick={()=> setEditMode(true)}>{props.status ? props.status : 'No status'}</span>
                </div>
                : <div>
                    <input onChange={onStatusChange} autoFocus={true} value={status}
                           onBlur={deactivateEditMode}/>
                </div>
            }
        </div>
    )
}