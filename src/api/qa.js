import request from "../utils/request";
import storage from "../utils/storage";

const listQA= async()=>{
    try {
        const { data } = await request.post(`/qa/list`);
        return data;
      } catch (err) {
        return Promise.reject(err);
      }
}
const addQuestion= async (data)=>{
    console.log('q--',data)
    const {category,version,ruleCat,subRuleCat,askquestion:question}=data
    try{
        const {data} = await request.post('/qa/add',{question,category,subRuleCat,version,ruleCat})
        return data;
    }catch(err){
        return Promise.reject(err);
    }
}

const replyQuestion = async(answer,qid)=>{
    const admin_token = storage.getAdminToken()
    try {
        const {data} = await request.post('/qa/reply',{answer,qid},
            {
            headers: {
              Authorization: `Bearer ${admin_token}`,
            },}
        )
        return data
    } catch (error) {
        return Promise.reject(error)
    }
}

export {
    listQA,
    addQuestion,
    replyQuestion,
}