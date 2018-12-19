import React, {Component} from 'react';
import { connect } from 'react-redux';
import {fetchUsers} from '../actions';

class UserList extends Component{

    componentDidMount(){
        console.log(" in the userList ", this.props)

this.props.fetchUsers();

    }
renderUsers() {
    return this.props.users.map((user, indx) => {
        return <li key = { user.id } > {user.name} </li>

    });

}
    render(){
        console.log(" in the userList in the render", this.props.users)

return (
<div>
    Here is the big list of users
    <ul>
       {this.renderUsers()}
       </ul>
</div>

);

    }

}

function mapStateToProps(state) {
    console.log(" in the userList mapStateToProps", state)

    return {
        users: state.users
    };
}

  

export default connect(mapStateToProps,{fetchUsers})(UserList);