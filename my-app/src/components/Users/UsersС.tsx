import React from 'react';
import {UsersPropsType} from './UsersContainer';
import s from './users.module.css';
import axios from 'axios'
import { UsersStateType } from '../../redux/users-reducer';


export class UsersC extends React.Component<UsersPropsType> {
    // constructor(props: UsersPropsType) {
    //     super(props)
    // }
    componentDidMount(){
        axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
            this.props.setUsers(response.data.items)
        })
    }

    render() {
        return (
            <div>
                {this.props.users.map(u => <div className={s.container}>
                    <span><img src={u.photos.small ? u.photos.small : 'https://www.winhelponline.com/blog/wp-content/uploads/2017/12/user.png'} className={s.avatar}/></span>
                    <span>{u.name} </span>
                    <div>{u.status}</div>
                    {u.followed
                        ? <button onClick={() => this.props.follow(u.id)}> UNFOLLOW </button>
                        : <button onClick={() => this.props.unfollow(u.id)}> FOLLOW </button>}
                    <hr/>
                </div>)}
            </div>
        );
    }
};

