
const config = {
    appName : process.env.REACT_APP_NAME ?? "react-App",
    baseUrl : process.env.REACT_APP_BASEURL ?? '',
    apis : {
        users:{
            list: '/users/',
            extraList:'/users/',
            auth: '/auth/login',
        }   
    }
}


export default config;