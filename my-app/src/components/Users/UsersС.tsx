import React from 'react';
import {UsersPropsType} from './UsersContainer';
import s from './users.module.css';
import axios from 'axios'
import {UsersStateType} from '../../redux/users-reducer';


export class UsersC extends React.Component<UsersPropsType> {
    // constructor(props: UsersPropsType) {
    //     super(props)
    // }
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.numberOnPage}`).then(response => {
            this.props.setUsers(response.data.items)
            this.props.setTotalUsersCount(response.data.totalCount)
        })
    }
    changeCurrentPage=(page:number)=> {
        this.props.setCurrentPage(page)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.numberOnPage}`).then(response => {
            this.props.setUsers(response.data.items)
        })
}
    render() {
        let page = Math.ceil(this.props.usersCount / this.props.numberOnPage);
        let pages = [];
        for (let i = 1; i <= page; i++) {
            if (i<21) {
                pages.push(i)
            }
            else break
        }
        return (
            <div>
                <div> {pages.map(p => <span
                    className={this.props.currentPage === p ? s.currenPage : ''}
                onClick={()=>this.changeCurrentPage(p)}> {p} </span>)}</div>
                {this.props.users.map(u => <div className={s.container}>
                    <span><img
                        src={u.photos.small ? u.photos.small : 'https://i0.wp.com/www.cssscript.com/wp-content/uploads/2020/12/Customizable-SVG-Avatar-Generator-In-JavaScript-Avataaars.js.png?fit=438%2C408&ssl=1'}
                        className={s.avatar}/></span>
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

