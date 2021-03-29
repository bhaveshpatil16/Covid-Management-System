import axios from 'axios';

const USER_API_BASE_URL = 'http://localhost:7171';
class ApiService {

    UserLogin(data) {
        console.log(data)
        return axios.post(USER_API_BASE_URL+"/user/login/"+data.username+"/"+data.password);
    }
    BoothLogin(data) {
        console.log(data)
        return axios.post(USER_API_BASE_URL+"/booth/login/"+data.username+"/"+data.password);
    }
    AdminLogin(data) {
        console.log(data)
        return axios.post(USER_API_BASE_URL+"/admin/login/"+data.username+"/"+data.password);
    }
    regUser(user) {
        return axios.post(USER_API_BASE_URL+"/user/signup",user);
    }
    regbooth(booth) {
        return axios.post(USER_API_BASE_URL+"/admin/createbooth",booth);
    }
    fetchbooth(){
        return axios.get(USER_API_BASE_URL+"/admin/boothdetails");
    }
    deletebooth(boothId) {
        return axios.delete(USER_API_BASE_URL + "/admin/closebooth/" + boothId);
    }
    SendStock(data) {
        console.log(data)
        return axios.put(USER_API_BASE_URL+"/admin/vstock/"+data.boothid,{"vaccinationStock":data.sendstock});
    }
    addUser(user) {
        return axios.post(USER_API_BASE_URL+"/user/firstvaccine",user);
    }
    fetchuser(data){
        return axios.get(USER_API_BASE_URL+"/booth/checkalldetails/"+data.userId);
    }
    // fetch(data){
    //     return axios.get(USER_API_BASE_URL+"/booth/Firstvaccine/"+data.userId);
    // }

    fetchCert(){
        return axios.get(USER_API_BASE_URL+"/");
    }
    sendpic(image){
        return axios.post(USER_API_BASE_URL+"/upload",image);
    }
    firstvacc(data) {
        console.log(data)
        return axios.put(USER_API_BASE_URL+"/booth/Firstvaccine/"+data.userId);
    }
    secondvacc(data) {
        console.log(data)
        return axios.put(USER_API_BASE_URL+"/booth/Secondvaccine/"+data.userId);
    }
    
    // adminLogin(data) {
    //     return axios.post(USER_API_BASE_URL+"/adminLogin",user);
    // }
}

export default  new ApiService();  