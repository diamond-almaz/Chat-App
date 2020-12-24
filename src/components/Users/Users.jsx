import React from 'react';
import styles from './users.module.css';
import * as axios from 'axios'
import userPhoto from './../../assets/images/user.png'



class Users extends React.Component {
    getUsers=()=>{
        if (this.props.users.length==0) {
            // axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response=>{
            //     this.props.setUsers(response.data.items);
            // })
                this.props.setUsers([{id: 1, name:"Almaz", status: "i am a boss", photos: {small: null}}]);
        }
    }

    render() {
        return <div>
            <button onClick={this.getUsers}>Get Users</button>
            {
                this.props.users.map((i)=><div key={i.id}>
                <span>
                    <div>
                        <img src={i.photos.small !=null ? i.photos.small : userPhoto} className={styles.userPhoto}/>
                    </div>
                    <div>
                        {i.followed ? <button onClick={()=>{this.props.unfollow(i.id)}}>Unfollow</button>  : <button onClick={()=>{this.props.follow(i.id)}}>Follow</button>}

                    </div>
                </span>
                    <span>
                    <span>
                        <div>{i.name}</div>
                        <div>{i.status}</div>
                    </span>
                    <span>
                        <div>{"i.location.country"}</div>
                        <div>{"i.location.city"}</div>
                    </span>
                </span>
                </div>)
            }
        </div>
    }
}

export default Users;