import React, { Component } from 'react'
import UserService from '../../../services/UserService';
import { Button } from 'react-bootstrap';

 class UpdateUserData extends Component {
    constructor(props){
        super(props)

        this.state = {
            users : []
        }
    }
    componentDidMount(){
        UserService.getUsers().then((res) => {
            this.setState({ users : res.data});
            
        });
    }

  render() {
    return (
      <div >
        <br></br>
       <h2 className="text-center mt-2"> Registered Users</h2>
        <div className="row">
            <table className="table table-responsive table-striped table-bordered p-2">
                <thead>
                    <tr>
                        <th> User ID </th>
                        <th> Role </th>
                        <th> User Name </th>
                        <th> Full Name </th>
                        <th> Password </th>
                        <th> Address </th>
                        <th> Telephone </th>
                        <th> Email</th>
                        <th> NIC </th>
                        <th> Action </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.state.users.map (
                            user =>
                            <tr key = {user.UserID}>
                                <td> {user.UserID} </td>
                                <td> {user.role} </td>
                                <td> {user.UserName}</td>
                                <td> {user.fullName}</td>
                                <td> {user.password}</td>
                                <td> {user.address}</td>
                                <td> {user.telephone}</td>
                                <td> {user.email}</td>
                                <td> {user.nic}</td> 
                                <Button onClick = { () => this.editUser(user.id)}  variant="success" size="sm" >Update</Button>                          
                                <Button onClick = { () => this.editUser(user.id)} variant="danger" size="sm" >Delete</Button> 
                        </tr>
                        )
                    }
                </tbody>
            </table>
        </div>


      </div>
    )
  }
}
export default UpdateUserData