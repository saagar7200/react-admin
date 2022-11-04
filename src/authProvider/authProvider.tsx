// const authProvider:any = {
//     // send username and password to the auth server and get back credentials
//     login: (params:any) => Promise.resolve(),
//     // when the dataProvider returns an error, check if this is an authentication error
//     checkError:( error:any) => Promise.resolve(),
//     // when the user navigates, make sure that their credentials are still valid
//     checkAuth: (params:any )=> Promise.resolve(),
//     // remove local credentials and notify the auth server that the user logged out
//     logout: () => Promise.resolve(),
//     // get the user's profile
//     getIdentity: () => Promise.resolve(),
//     // get the user permissions (optional)
//     getPermissions: () => Promise.resolve(),
// };

// export default authProvider;


const authProvider = {
    login: ({ username, password }:{username:string,password:string}) => {
        if (username !== 'john' || password !== '123') {
            return Promise.reject();
        }
        localStorage.setItem('username', username);
        return Promise.resolve();
    },
    logout: () => {
        localStorage.removeItem('username');
        return Promise.resolve();
    },
    checkAuth: () =>
        localStorage.getItem('username') ? Promise.resolve() : Promise.reject(),
    checkError:  (error:any) => {
        const status = error.status;
        if (status === 401 || status === 403) {
            localStorage.removeItem('username');
            return Promise.reject();
        }
        // other error code (404, 500, etc): no need to log out
        return Promise.resolve();
    },
    getIdentity: () =>
        Promise.resolve({
            id: 'user',
            fullName: 'John Doe',
        }),
    getPermissions: () => Promise.resolve(''),
};

export default authProvider;
