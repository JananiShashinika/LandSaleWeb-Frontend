import axios from 'axios';

const REGISTERED_USERS = "http://localhost:8080/api/v1/userRegistration/getData";

// Appointments
const APP_LIST = "http://localhost:8080/api/v1/getAppointments";

const APP_DELETE = "http://localhost:8080/api/v1/deleteAppointment";

const SET_STATUS = "http://localhost:8080/api/v1/checkAppointment";

// Booking Lands
const BOOKING_LIST = "http://localhost:8080/api/v1/bookLand/getBookings";

const ADD_BOOKING = "http://localhost:8080/api/v1/bookLand/addBook";

const BOOKING_DELETE = "http://localhost:8080/api/v1/bookLand/deleteBook";

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
    deleteBookings(id){
        return axios.delete(`${BOOKING_DELETE}/${id}`,{
            headers: {
                 'Content-Type': 'application/json'
            }
        });
    }
    getApps(){
        return axios.get(APP_LIST);
    }
    deleteApps(app_No) {
        return axios.delete(`${APP_DELETE}/${app_No}`, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
    }
    updateAppStatus(app_No, checked) {
        return axios.put(`${SET_STATUS}/${app_No}/status`, { checked });
    }
    
}
export default new UserService();