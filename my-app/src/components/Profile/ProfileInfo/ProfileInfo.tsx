import React, { memo } from 'react';
import {useParams} from 'react-router-dom';
import {Preloader} from '../../Preloader/Preloader';
import classes from './ProfileInfo.module.scss';
import {ProfileStatus} from './ProfileStatus';
import mainPicture from '../../../assets/social-media.png'
import defaultAvatar from '../../../assets/avatar.webp'
import { UserProfileType } from '../../../api/api';

type ProfileInfoPropsType = {
    state?: UserProfileType
    status: string
    updateStatus: (status: string) => void
}
export const ProfileInfo = memo(({state, ...props}: ProfileInfoPropsType) => {
    const mainPictureS = {
        backgroundImage: `url(${mainPicture})`
    }

    if (!state) {
        return <Preloader/>
    }
    return (
        <div>
            <div className={classes.background_img}
                 style={mainPictureS}></div>
            <div>
                <div className={classes.profileInfo}>
                    <div className={classes.avatarContainer}>
                        <img src={state.photos.large
                            ? state.photos.large
                            : defaultAvatar}
                             className={classes.avatar}/>
                    </div>
                    <div>{state.fullName}</div>
                    <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
                    <div>{state.aboutMe}</div>
                </div>

            </div>
        </div>
    )
}) ;