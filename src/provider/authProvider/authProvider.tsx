
const authProvider = {
    login: ({ username, password }:{username:string,password:string}) => {

        // const request = {
        //     method: "POST",
        //     url: "https://kgdevnode.khelgully.com/noauth-api/v1/login/user",
        //     data: {
        //       username,
        //       password,
        //     },
        //     headers: new Headers({ "Content-Type": "application/json" }),
        //   };

        if (username !== 'sagar' || password !== '123') {
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
            fullName: 'Sagar Bhandari',
        }),
    getPermissions: () => Promise.resolve(''),
};

export default authProvider;
