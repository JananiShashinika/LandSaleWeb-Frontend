import axios from 'axios';

const REGISTERED_USERS = "http://localhost:8080/api/v1/userRegistration/getData";

const BOOKING_LIST = "http://localhost:8080/api/v1/bookLand/getBookings";

const ADD_BOOKING = "http://localhost:8080/api/v1/bookLand/addBook";

const APP_LIST = "http://localhost:8080/api/v1/getAppointments";

class UserService {

    getUsers(){
        return axios.get(REGISTERED_USERS);
    }
 
    addBooking(booking){
        return axios.post(ADD_BOOKING, booking);
    }
    getBookings(){
        return axios.get(BOOKING_LIST);
    }
    getApps(){
        return axios.get(APP_LIST);
    }
}
export default new UserService()