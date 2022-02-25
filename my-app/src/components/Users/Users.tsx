import React from 'react';
import {UsersPropsType} from './UsersContainer';
import s from './users.module.css';

export const Users = (props: UsersPropsType) => {
    if (props.users.length === 0) {
        props.setUsers([{
            id: 1,
            photo: "https://image.posterlounge.com/images/l/1898631.jpg",
            fullname: 'James',
            status: 'I am James',
            followed: true,
            location: {county: 'Belarus', city: 'Minsk'}
        },
            {
                id: 2,
                photo: "https://image.posterlounge.com/images/l/1898631.jpg",
                fullname: 'Jonny',
                status: 'Все без тебя не так, лечу к тебе словно комета',
                followed: false,
                location: {county: 'Belarus', city: 'Minsk'}
            },
            {
                id: 3,
                photo: "https://image.posterlounge.com/images/l/1898631.jpg",
                fullname: 'Robert',
                status: 'Hey',
                followed: true,
                location: {county: 'Belarus', city: 'Pinsk'}
            }])
    }

    return (
        <div>
            {props.users.map(u => <div>
                <span><img src={u.photo} className={s.avatar}/></span>
                <span>{u.fullname} </span>
                <span>{u.location.city} {u.location.county}</span>
                <div>{u.status}</div>
                {u.followed
                    ? <button onClick={() => props.follow(u.id)}> UNFOLLOW </button>
                    : <button onClick={() => props.unfollow(u.id)}> FOLLOW </button>}
            </div>)}
        </div>
    );
};

