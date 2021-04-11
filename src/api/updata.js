import request from "../utils/request";

async function uploadData(body,type) {
    try {
      const { data } = await request.post(`/upload/${type}Upload`, body);
      return data;
    } catch (err) {
      return Promise.reject(err);
    }
}
export {uploadData}