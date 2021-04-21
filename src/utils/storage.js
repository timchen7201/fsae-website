const storage = {
    setAccessToken: (token) => {
      localStorage.setItem("access_token", token);
    },
  
    getAccessToken: () => {
      return localStorage.getItem("access_token");
    },

    setAdminToken: (token) =>{
      localStorage.setItem("admin_token", token);
    },
    getAdminToken: (token) =>{
      return localStorage.getItem("admin_token")
    },
    clear: () => {
        console.log('clean')
      localStorage.clear();
    },
};
  
export default storage;
  