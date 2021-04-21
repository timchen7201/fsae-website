import request from "../utils/request";

const fetchAdmin = async () => {
  try {
    const { data } = await request.get(`/admin/info`);
    return data;
  } catch (err) {
    return Promise.reject(err);
  }
}

const normalSignIn = async ({ username, password })=>{
  try {
    const { data } = await request.post(`/admin/signin`, {
      username,
      password,
    });
    return data;
  } catch (err) {
    return Promise.reject(err);
  }
}
const listAllFiles = async()=>{
  try{
    const {data} = await request.get(`/admin/allFiles`)
    console.log('jjjo',data)
    return data
  }catch(err){
    return Promise.reject(err)
  }
}

export {fetchAdmin,normalSignIn,listAllFiles}