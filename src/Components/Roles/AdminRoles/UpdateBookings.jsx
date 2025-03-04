import React, { Component } from 'react'
import UserService from '../../../services/UserService'
import { Button } from 'react-bootstrap'


 class UpdateBookings extends Component {
    constructor(props){
        super(props)

        this.state = {
            bookings : []

        }
    }

componentDidMount(){
        UserService.getBookings().then((res) => {
         this.setState({bookings : res.data});
        });
    }
addBooking(){
    this.props.history.push('/BookList');
}
deleteBooking(id){
    UserService.deleteBookings(id).then(() => {
        this.setState((prevState) =>({
            bookings: prevState.bookings.filter((bookings) => bookings.id !== id),
        }));
    });
}



  render() {
    return (
      <div>
        <h2 className="Booking-list" style={{ textAlign:"center" }}> Booking List</h2>
        <div className="row">
            <table className="table table-striped table-bordered">
                <thead>
                    <tr>
                        <th> Booking ID </th>
                        <th> Town </th>
                        <th> Land Name </th>
                        <th> Land No/s </th>
                        <th> Full Name </th>
                        <th> Telephone </th>
                        <th> Extra Note </th>
                        <th> Action </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.state.bookings.map(
                            book =>
                            <tr key = {book.id}>
                                <td> {book.id}</td>
                                <td> {book.town} </td>
                                <td> {book.landName}</td>
                                <td> {book.landNo}</td>
                                <td> {book.fullName}</td>
                                <td> {book.tel}</td>
                                <td> {book.extra}</td>
                                {/* <td> </td>
                                <td> </td> */}
                                <td>
                                <Button onClick = { () => this.sendToAgent(book.id)}  variant="success" size="sm" >Send to Agent</Button>                          
                                </td>
                                <td>
                                <Button onClick = { () => this.deleteBooking(book.id)} variant="danger" size="sm" >Delete</Button> 
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
export default UpdateBookings