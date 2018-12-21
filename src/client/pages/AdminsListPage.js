import React, {Component} from 'react';
import { connect } from 'react-redux';
import {fetchAdmins} from '../actions';

class AdminsListPage extends Component{

    componentDidMount(){

this.props.fetchAdmins();

    }
    renderAdmins() {
    return this.props.admins.map((admin, indx) => {
        return <li key = { admin.id } > {admin.name} </li>

    });

}
    render(){

return (
<div>
  <h1>Protected List Of Admins</h1>
    Here is the big list of Admins
    <ul>
       {this.renderAdmins()}
       </ul>
</div>

);

    }

}

function mapStateToProps(state) {

    return {
        admins: state.admins
    };
}

function loadData(store){
  return store.dispatch(fetchAdmins());
}

  

export default 
{
    loadData,
component:  connect(mapStateToProps,{fetchAdmins})(AdminsListPage),

}