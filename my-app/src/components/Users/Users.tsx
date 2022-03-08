import React from 'react';
import {UsersPropsType} from './UsersContainer';
import s from './users.module.css';
import { UserType } from '../../redux/users-reducer';

export type UsersType = {
    users: Array<UserType>
    usersCount: number
    numberOnPage: number
    currentPage: number
    changeCurrentPage: (currentPage: number) => void
    follow: (userId: number) => void
    unfollow: (userId: number) => void
}

export const Users = (props: UsersType) => {
    let page = Math.ceil(props.usersCount / props.numberOnPage);
    let pages = [];
    for (let i = 1; i <= page; i++) {
        if (i < 21) {
            pages.push(i)
        } else break
    }
    return (
        <div>
            <div> {pages.map(p => <span
                className={props.currentPage === p ? s.currenPage : ''}
                onClick={() => props.changeCurrentPage(p)}> {p} </span>)}</div>
            {props.users.map(u => <div className={s.container}>
                    <span><img
                        src={u.photos.small ? u.photos.small : 'https://i0.wp.com/www.cssscript.com/wp-content/uploads/2020/12/Customizable-SVG-Avatar-Generator-In-JavaScript-Avataaars.js.png?fit=438%2C408&ssl=1'}
                        className={s.avatar}/></span>
                <span>{u.name} </span>
                <div>{u.status}</div>
                {u.followed
                    ? <button onClick={() => props.follow(u.id)}> UNFOLLOW </button>
                    : <button onClick={() => props.unfollow(u.id)}> FOLLOW </button>}
                <hr/>
            </div>)}
        </div>
    );
};


