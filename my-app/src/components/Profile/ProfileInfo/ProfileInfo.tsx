import React from 'react';
import {useParams} from 'react-router-dom';
import {Preloader} from '../../Preloader/Preloader';
import {APIUserType} from '../ProfileContainer';
import classes from './ProfileInfo.module.css';
import { ProfileStatus } from './ProfileStatus';

type ProfileInfoPropsType = {
    state?: APIUserType
    status:string
}
export const ProfileInfo = ({state, ...props}: ProfileInfoPropsType) => {
    if (!state) {
        return <Preloader/>
    }
    return (
        <div>
            <img className={classes.background_img}
                 src="https://cutewallpaper.org/21/cool-water-pics/Cool-Water-Background-61-images-.jpg"/>
            <div>
            <div>
                <img src={state.photos.large
                    ? state.photos.large
                    : "https://w7.pngwing.com/pngs/980/886/png-transparent-male-portrait-avatar-computer-icons-icon-design-avatar-flat-face-icon-people-head-cartoon.png"}
                     className={classes.avatar}/>
            </div>
                <div>{state.fullName}</div>
                <ProfileStatus status={props.status}/>
                <div>{state.aboutMe}</div>
            </div>
        </div>
    )
}