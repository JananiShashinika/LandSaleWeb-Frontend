import React, { Component } from 'react';
import Navigation from '../Navigation';
import Footer from '../Footer';


class SellLand extends Component {

    constructor(props){
        super(props)

        this.state = {
            town:'',
            landName:'',
            landNo:'',
            fullName:'',
            tel:'',
            extra:''
        }

        this.changeTownHandler = this.changeTownHandler.bind(this);
        this.changeLandNameHandler = this.changeLandNameHandler.bind(this);
        this.changeLandNoHandler = this.changeLandNoHandler.bind(this);
        this.changeFullNameHandler = this.changeFullNameHandler.bind(this);
        this.changeTelHandler = this.changeTelHandler.bind(this);
        this.changeExtraHandler = this.changeExtraHandler.bind(this);
        // this.saveBooking = this.saveBooking.bind(this);
    }

changeTownHandler=(e) => {
        this.setState({town:e.target.value});
    }
changeLandNameHandler=(e) => {
        this.setState({landName:e.target.value});
    }
changeLandNoHandler=(e) => {
    this.setState({landNo:e.target.value});
}
changeFullNameHandler=(e) => {
    this.setState({fullName:e.target.value});
}
changeTelHandler=(e) => {
    this.setState({tel:e.target.value});
}
changeExtraHandler=(e) => {
    this.setState({extra:e.target.value});
}
// saveBooking = (e) => {
//     e.preventDefault();
//     let booking = {town: this.state.town, landName: this.state.landName, landNo: this.state.landNo, fullName: this.state.fullName,
//     tel: this.state.tel, extra: this.state.extra};
//     console.log('booking => ' +JSON.stringify(booking));

    // UserService.addBooking(booking).then(res => {
    //     this.props.history.push(href="/BookingSuccess");
    // });
    // }
// cancel(){
//     this.props.history.push(href="/contact");
// }





  render() {
    return (
      <div>
        <Navigation/>
<br></br>
<br></br>
<br></br>
{/* <img  
          src="/img/sell.jpg" 
           alt="sell"
           className="shadow-1-strong rounded full mt-4 mb-3"
    
            /> */}
        <div className="sell">
            <div className="row">
                <div className="card col-md-10 offset-mt-5 offset-md-1">
                
                    <h2 className="text-center" style={{color:"lightseagreen"}}> Sell Your Land Form </h2>
                    <div className = "card-body text-left">
                    
                        <form>
                            <h4> Contact Infomation - </h4>
                            <br/>
                            
                            <div className = "form-group">
                                <label> Full Name : </label>
                                <input placeholder="Full Name" name="fullName" className="form-control"
                                value={this.state.fullName} onChange={this.changeFullNameHandler}
                                />
                            </div>
                            
                            <div className="row">
                                <div className="col">                            
                            <div className = "form-group">
                                <label> Telephone No : </label>
                                <input placeholder="Telephone No" name="tel" className="form-control"
                                value={this.state.tel} onChange={this.changeTelHandler}
                                /></div>
                                </div>
                                <div className="col">
                                <div className = "form-group">
                                <label> Email : </label>
                                <input placeholder="Email" name="email" className="form-control"
                                value={this.state.email} onChange={this.changeEmailHandler}
                                /></div>
                                </div>
                                </div>
                                
                                <br></br>
                                <h4> Land Infomation - </h4>
                            <br/>
                            <div>
                            <div className = "form-group">
                                <label> Address - </label>
                                <input placeholder="Address" name="address" className="form-control"
                                value={this.state.address} onChange={this.changeAddressHandler}
                                />
                            </div> 
                            <br/>
                            <div className = "form-group">
                                <label> Description - </label>
                                <input placeholder="Description" name="description" className="form-control"
                                value={this.state.description} onChange={this.changeDescriptionHandler}
                                />
                            </div>   
                            <br/>

                            <div className="row">
                                <div className="col">                            
                            <div className = "form-group">
                                    <label> Town - </label>
                            <input placeholder="Town" name="town" className="form-control"
                                value={this.state.town} onChange={this.changeTownHandler}/>
                                </div>
                                </div>
                                <div className="col">
                                <div className = "form-group">
                                <label> No of Perches - </label>
                                <input placeholder="No of Perches" name="perch" className="form-control"
                                value={this.state.perch} onChange={this.changePerchHandler}
                                /></div>
                                </div>
                                <div className="col">
                                <div className = "form-group">
                                <label> Price per perch - </label>
                                <input placeholder="Price" name="price" className="form-control"
                                value={this.state.price} onChange={this.changePriceHandler}
                                /></div>
                                </div>
                                </div>                         
                                
                            </div>
                            <br/>
                            <div className = "form-group">
                                <label> Attach the survey plans &  land images - </label>
                                <input placeholder="Land Name" name="landData" className="form-control" type="file" multiple
                                value={this.state.landData} onChange={this.changeLandDataHandler}
                                />
                            </div>
                           <br></br>
                            
                            <button className="btn btn-success" onClick={this.saveBooking}> Save </button>
                            {/* <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft:"10px"}}> Cancel </button>
                        */}
                        </form>
                    </div>



                </div>
            </div>
        </div>


       
        <Footer/>
      </div>
    )
  }
}

export default SellLand;