const storage = {
    setAccessToken: (token) => {
      localStorage.setItem("access_token", token);
    },
  
    getAccessToken: () => {
      return localStorage.getItem("access_token");
    },
   
    clear: () => {
        console.log('clean')
      localStorage.clear();
    },
};
  
export default storage;
  