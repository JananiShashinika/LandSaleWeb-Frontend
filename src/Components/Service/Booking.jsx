// import React, { Component } from 'react'
// import UserService from '../../services/UserService';

// class Booking extends Component {
//     constructor(props){
//         super(props)

//         this.state = {
//             town:'',
//             landName:'',
//             landNo:'',
//             fullName:'',
//             tel:'',
//             extra:''
//         }

//         this.changeTownHandler = this.changeTownHandler.bind(this);
//         this.changeLandNameHandler = this.changeLandNameHandler.bind(this);
//         this.changeLandNoHandler = this.changeLandNoHandler.bind(this);
//         this.changeFullNameHandler = this.changeFullNameHandler.bind(this);
//         this.changeTelHandler = this.changeTelHandler.bind(this);
//         this.changeExtraHandler = this.changeExtraHandler.bind(this);
//         this.saveBooking = this.saveBooking.bind(this);
//     }

// changeTownHandler=(e) => {
//         this.setState({town:e.target.value});
//     }
// changeLandNameHandler=(e) => {
//         this.setState({landName:e.target.value});
//     }
// changeLandNoHandler=(e) => {
//     this.setState({landNo:e.target.value});
// }
// changeFullNameHandler=(e) => {
//     this.setState({fullName:e.target.value});
// }
// changeTelHandler=(e) => {
//     this.setState({tel:e.target.value});
// }
// changeExtraHandler=(e) => {
//     this.setState({extra:e.target.value});
// }
// saveBooking = (e) => {
//     e.preventDefault();
//     let booking = {town: this.state.town, landName: this.state.landName, landNo: this.state.landNo, fullName: this.state.fullName,
//     tel: this.state.tel, extra: this.state.extra};
//     console.log('booking => ' +JSON.stringify(booking));

//     UserService.addBooking(booking).then(res => {
//         this.props.history.push(href="/BookingSuccess");
//     });
// }
// cancel(){
//     this.props.history.push(href="/contact");
// }
//   render() {
//     return (
//       <div>
//         <div className="container">
//             <div className="row">
//                 <div className="card col-md-6 offset-mt-3 offset-md-3">
//                     <h3 className="text-center">Land Booking Form </h3>
//                     <div className = "card-body">
//                         <form>
//                         <div className = "form-group">
//                                 <label> Town : </label>
//                                 <input placeholder="Town" name="town" className="form-control"
//                                 value={this.state.town} onChange={this.changeTownHandler}/>
//                             </div>
//                             <div className = "form-group">
//                                 <label> Land Name : </label>
//                                 <input placeholder="Land Name" name="landName" className="form-control"
//                                 value={this.state.landName} onChange={this.changeLandNameHandler}/>
//                             </div>
//                             <div className = "form-group">
//                                 <label> Land No/s : </label>
//                                 <input placeholder="Land No" name="landNo" className="form-control"
//                                 value={this.state.landNo} onChange={this.changeLandNoHandler}/>
//                             </div>
//                             <div className = "form-group">
//                                 <label> Full Name : </label>
//                                 <input placeholder="Full Name" name="fullName" className="form-control"
//                                 value={this.state.fullName} onChange={this.changeFullNameHandler}/>
//                             </div>
//                             <div className = "form-group">
//                                 <label> Telephone No : </label>
//                                 <input placeholder="Telephone No" name="tel" className="form-control"
//                                 value={this.state.tel} onChange={this.changeTelHandler}/>
//                             </div>
//                             <div className = "form-group">
//                                 <label> Extra Note : </label>
//                                 <input placeholder="Extra Note" name="extra" className="form-control"
//                                 value={this.state.extra} onChange={this.changExtraHandler}/>
//                             </div>
//                             <button className="btn btn-success" onClick={this.saveBooking}> Save </button>
//                             <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft:"10px"}}> Cancel </button>
//                         </form>
//                     </div>
//                 </div>
//             </div>
//         </div>



        
//       </div>
//     )
//   }
// }
// export default Booking