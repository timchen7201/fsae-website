import request from "../utils/request";

const fetchUser = async () => {
  try {
    const { data } = await request.get(`/users/info`);
    return data;
  } catch (err) {
    return Promise.reject(err);
  }
};
const emailSignIn = async ({ username, password }) => {
    try {
      const { data } = await request.post(`/users/signin`, {
        username,
        password,
      });
      return data;
    } catch (err) {
      return Promise.reject(err);
    }
  };

export{fetchUser,emailSignIn}