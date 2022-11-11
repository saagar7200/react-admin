// @ts-nocheck

import axios from "axios";
import decodeJwt from "jwt-decode";

const servicesHost = "https://bb02-110-44-127-196.in.ngrok.io";

const authProvider = {
    login: ({ username, password }:{username:string,password:string}) => {

        const request = {
            method: "POST",
            url:`${servicesHost}/auth/signin`,
            data: {
              email:username,
              password,
            },
            headers: new Headers({ "Content-Type": "application/json" }),
          };
          return axios(request)
          .then((response) => {
            if (response?.data?.tokens) {
              const token = response?.data?.tokens?.refreshToken;
              
              const userId = response?.data?.uid;
              const email = response?.data?.email

              const decodedToken = decodeJwt(response?.data?.tokens?.accessToken);


              const user = {
                token,
                userId,
                userName:email.split("@")[0],
                permission:decodedToken.roles
              }

            // console.log("decode access token " , decodedToken.roles)

              localStorage.setItem("user", JSON.stringify(user));             

              if (response.status < 200 || response.status >= 300) {
                throw new Error(response.statusText);
              }
            } else {
                throw new Error("Something went wrong.Please Try again Sometimes Later.");
            }
    
            // return response?.data?.json();
          })
          .catch((err) => { 
            throw new Error("Please enter valid Email or Password.")   
          });

    },
    logout: () => {
        localStorage.removeItem('user');
        return Promise.resolve();
    },
    checkAuth: () =>
        localStorage.getItem('user') ? Promise.resolve() : Promise.reject(),
    checkError:  (error:any) => {
        const status = error.status;
        if (status === 401 || status === 403) {
            localStorage.removeItem('user');
            return Promise.reject();
        }
        // other error code (404, 500, etc): no need to log out
        return Promise.resolve();
    },
    getIdentity: () =>{
        const user:any=JSON.parse(localStorage.getItem("user"))
        console.log("user",user)

 
       return  Promise.resolve({
             id: user.userId,
             fullName:user.userName,
         })
    },
    getPermissions: () => Promise.resolve(''),
};

export default authProvider;