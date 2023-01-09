import jwtDecode from 'jwt-decode'

const isDevelopment=window.location.hostname.includes("localhost");


const getServer=()=>{
    return  isDevelopment?"http://localhost:5000":"https://steel-math-374002.uc.r.appspot.com"
}
const decodeUser=()=>{
    const token=localStorage.getItem("token")
    return jwtDecode(token)
}

export {getServer,decodeUser}