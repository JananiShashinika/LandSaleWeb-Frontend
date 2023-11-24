import React, { Component } from 'react'
import UserService from '../../../services/UserService'
import { Button } from 'react-bootstrap'


 class UpdateApps extends Component {
    constructor(props){
        super(props)

        this.state = {
            appointments : []

        }
    }

componentDidMount(){
        UserService.getApps().then((res) => {
         this.setState({appointments : res.data});
        });
    }
// addApps(){
//     this.props.history.push('/AppList');
// }

  render() {
    return (
      <div>
        <h2 className="text-center"> Appointment List</h2>
        <div className="row">
            <table className="table table-striped table-bordered">
                <thead>
                    <tr>
                        <th> Appointment No</th>
                        <th> Date_Time </th>
                        <th> Name </th>                      
                        <th> Telephone </th>
                        <th> Message </th>
                        {/* <th> UserName </th>
                        <th> Password </th> */}
                        <th> Action </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.state.appointments.map(
                            app =>
                            <tr key = {app.app_No}>
                                <td> {app.app_No}</td>
                                <td> {app.date_Time} </td>
                                <td> {app.name}</td>
                                <td> {app.phone}</td>
                                <td> {app.message}</td>
                                {/* <td> {app.fk_user_name}</td>
                                <td> {app.fk_password}</td> */}
                              
                                {/* <td> </td>
                                <td> </td> */}
                                <Button onClick = { () => this.editUser(app.app_no)}  variant="success" size="sm" >Update</Button>                          
                                <Button onClick = { () => this.editUser(app.app_no)} variant="danger" size="sm" >Delete</Button> 
                        
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
export default UpdateApps