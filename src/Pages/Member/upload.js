import React,{useState, useEffect} from 'react';
// import Form from 'react-bootstrap'
import Dropzone from 'react-dropzone-uploader'
import 'react-dropzone-uploader/dist/styles.css'

import {uploadData,askAlreadyUpload} from '../../api/updata'

// Import FilePond styles
import "filepond/dist/filepond.min.css";
// Import the plugin code
import { Button,ButtonGroup } from 'react-bootstrap';
import storage from '../../utils/storage';
// var FormData = require('form-data');


function Upload(){
    const MAXSIZE = 25242880;

    const [Videofile, setVideoFile] = useState(null)
    const [PDFfile,setPDFfile] =useState([])
    const [passion,setPassion]= useState(false)
    const [uploadPage,setUploadPage] = useState(true)
    const [alreadyfiles,setAlreadyfiles] = useState([])

    useEffect(()=>{
        alreadyUpload()
    },[uploadPage])
    // called every time a file's `status` changes
    const handleVideoChange = ({ meta, file }, status) => { 
        console.log("cfile")
        setVideoFile(file)
     }
    const handlePdfChange = ({ meta, file }, status) => { 
        console.log("cfile",file)
        if(status==="removed"){
            const index = PDFfile.indexOf(file);
            if (index > -1) {
                PDFfile.splice(index, 1);
            }
            setPDFfile(PDFfile)
        }
        if(status==="preparing"){
            setPDFfile((prev)=>[...prev,file])
        }
     }
     
    const fileNameValidation=(filename)=>{
        const originalname= filename.split('.')[0]
        var validfilenames=['SES','ESO_ESA','ESF_FMAE','SPD','Cost_Report','Cost_Addendum','Design_Report','Shakedown_Certificate']
        if(validfilenames.includes(originalname)) return true
        return false
    }
    const validDate=[
        {filename:'SES',duedate:new Date('2021-06-25 23:59:59')},
        {filename:'ESO_ESA',duedate:new Date('2021-04-25 23:59:59')},
        {filename:'ESF_FMAE',duedate:new Date('2021-07-26 23:59:59')},
        {filename:'SPD',duedate:new Date('2021-07-04 23:59:59')},
        {filename:'Cost_Report',duedate:new Date('2021-07-18 23:59:59')},
        {filename:'Cost_Addendum',duedate:new Date('2021-08-20 23:59:59')},
        {filename:'Design_Report',duedate:new Date('2021-07-22 23:59:59')},
        {filename:'Shakedown_Certificate',duedate:new Date('2021-08-14 23:59:59')},
      ]
    const handleSubmission = () => {
		const pdfData = new FormData();
        const videoData = new FormData();
        if(PDFfile.length===0&&Videofile===null){
            alert('請選擇檔案')
            return
        }
		if(typeof(PDFfile)!==null&&PDFfile.length!==0){
            setPassion(true)
            const uniq=PDFfile.filter(function(item, pos, self) {
                return self.indexOf(item) == pos;
            })
            uniq.map((obj)=>{
                pdfData.append('document', obj);
            })
            console.log(uniq)
            uploadData(pdfData,'document').then((response)=>{  
                var message=''
                response.map((file_msg)=>{
                    message=message.concat(file_msg['filename']+':'+file_msg['msg']+'\n')
                })          
                alert(message)
                // setUploadPage(false)
                window.location.reload();
            });
        }
        if(typeof(Videofile)!==null&&Videofile!==null){
            setPassion(true)
            videoData.append('video',Videofile);
            uploadData(videoData,'video').then((response)=>{  
                var message=''
                response.map((file_msg)=>{
                    message=message.concat(file_msg['filename']+':'+file_msg['msg']+'\n')
                })          
                alert(message)
                // setUploadPage(false)
                window.location.reload();
            });
        }
        
    }  
    const alreadyUpload = () => {
        askAlreadyUpload().then((result)=>{
            if(result.length!==0){
                setAlreadyfiles([...result])
            }
        })
    }
    return(
        <div className="container">
                
            <div className="float-right">
                <ButtonGroup aria-label="Basic example">
                    <Button variant="secondary" onClick={()=>setUploadPage(!uploadPage)}>上傳區</Button>
                    <Button variant="light" onClick={()=>{setUploadPage(!uploadPage);setPDFfile([])}}>已上傳</Button>
                </ButtonGroup>         
            </div>
            
            {
                uploadPage?(
                    <>
                <h2>資料上傳區</h2>
                    <h3>書面資料</h3>
                    <img src="../../assets/image/upload_info.png"></img>

                    <p>繳交檔名請符合 <i>車號_學校名稱+車種(ICVor EV)_2021文件名稱如下</i> 的格式，您需繳交的文件如下：</p>
                       <ul>
                           <li>SES <i className="red-text">(2021-06-25 12:00:00)</i></li>
                           <li>ESO_ESA</li>
                           <li>ESF_FMEA<i className="red-text">(2021-07-26 12:00:00)</i></li>
                           <li>SPD <i className="red-text">(2021-07-04 12:00:00)</i></li>
                           <li>Cost_Report  <i className="red-text">(2021-07-18 12:00:00)</i></li>
                           <li>Cost_Addendum  <i className="red-text">(2021-08-20 12:00:00)</i></li>
                           <li>Design_Report  <i className="red-text">(2021-07-22 12:00:00)</i></li>
                           <li>Shakedown_Certificate  <i className="red-text">(2021-08-14 12:00:00)</i></li>
                       </ul>
                    <Dropzone
                       // getUploadParams={getUploadParams}
                       onChangeStatus={handlePdfChange}
                       // onSubmit={handleSubmit}
                       inputContent={<span>點擊上傳～</span>}
                       submitButtonContent={<span>上傳</span>}
                       maxFiles={1}
                       inputWithFilesContent={<span>增加檔案</span>}
                       accept='application/vnd.ms-excel,application/vnd.openxmlformats-officedocument.wordprocessingml.document,application/docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
                   />  
                    <h3>影片</h3>
                   <Dropzone
                       // getUploadParams={getUploadParams}
                       onChangeStatus={handleVideoChange}
                       // onSubmit={handleSubmit}
                    //    maxSize={MAXSIZE}
                       inputContent={<span>點擊上傳～</span>}
                       submitButtonContent={<span>上傳</span>}
                       maxFiles={1}
                       inputWithFilesContent={<span>增加檔案</span>}
                       accept="audio/*,video/*"
                   />  
                   
                   <div className="justify-content-end mt-5">
                       <Button 
                           variant='secondary'
                           onClick={handleSubmission}
                           size="lg"
                       >提交</Button>
                       {passion?(<span className="ml-4 red-text">請稍等片刻</span>):(null)}
                   </div>
                   </>
                   ):(<>
                        <h2>已上傳</h2>
                        <div>
                        {alreadyfiles.map((file)=>{
                            return(
                                <li>
                                    <a href={`https://storage.googleapis.com/fsae-media/document/${file.username}/${file.filename}`}>{file.originalname}</a>
                                    <span>&nbsp;已上傳 {file.upload_times}次</span>
                                </li>
                            )
                        }
                        )}
                        </div>
                       
                   </>)
            }
           
        </div>
    )
}

export {Upload}