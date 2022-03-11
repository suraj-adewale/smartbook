import axios from "axios";

function  Login (data) {
    // make api call to our FastAPI backend.
    const url = "http://localhost:8000/login";
   return axios.post(url, data).then( (response) => response.data);


    }
export default Login