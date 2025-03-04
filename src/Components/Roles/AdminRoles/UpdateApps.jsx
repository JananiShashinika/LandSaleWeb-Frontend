import React, { Component } from 'react'
import UserService from '../../../services/UserService'
import { Button } from 'react-bootstrap'


 class UpdateApps extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
            appointments: [],
        };
    
        this.deleteAppointment = this.deleteAppointment.bind(this); 
        this.toggleChecked = this.toggleChecked.bind(this);
    }

componentDidMount(){
        UserService.getApps().then((res) => {
         this.setState({appointments : res.data});
        });
    }
// addApps(){
//     this.props.history.push('/AppList');
// }


deleteAppointment(app_No) {
    UserService.deleteApps(app_No).then(() => {
        this.setState((prevState) => ({
            appointments: prevState.appointments.filter((app) => app.app_No !== app_No),
        }));
    });
}
toggleChecked(app) {
    const newCheckedStatus = !app.checked;

    UserService.updateAppStatus(app.app_No, newCheckedStatus).then(() => {
        this.setState((prevState) => ({
            appointments: prevState.appointments.map((a) =>
                a.app_No === app.app_No ? { ...a, checked: newCheckedStatus } : a
            ),
        }));
    }).catch(err => {
        console.error("Failed to update status:", err);
    });
}

  render() {
    return (
      <div>
        <h2 className="Appointments-list" style={{ textAlign:"center" , marginTop:"20px"}}> Appointment List</h2>
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
                                 <td>
                                    <Button
                                        onClick={() => this.toggleChecked(app)}
                                        variant={app.checked ? "warning" : "success"}
                                        size="sm"
                                    >
                                        {app.checked ? "Checked" : "Check"}
                                    </Button>{' '}
                                    <Button 
                                        onClick={() => this.deleteAppointment(app.app_No)} 
                                        variant="danger" 
                                        size="sm"
                                    >
                                        Delete
                                    </Button>
                                </td>
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
export default UpdateApps;