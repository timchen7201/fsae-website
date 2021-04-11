import React,{useState,useRef} from 'react';
import { Redirect, useParams } from "react-router-dom";
// import Form from 'react-bootstrap'
import Dropzone from 'react-dropzone-uploader'
import 'react-dropzone-uploader/dist/styles.css'

import {uploadData} from '../../api/updata'
import { FilePond, File, registerPlugin } from "react-filepond";
import { useForm } from 'react-hook-form'

// Import FilePond styles
import "filepond/dist/filepond.min.css";
// Import the plugin code
import { Button } from 'react-bootstrap';
// var FormData = require('form-data');


function Upload(){
    const MAXSIZE = 5242880;

    const [Videofile, setVideoFile] = useState(null)
    const [PDFfile,setPDFfile] =useState(null)
    
    // called every time a file's `status` changes
    const handleVideoChange = ({ meta, file }, status) => { 
        console.log("cfile",file)
        setVideoFile(file)
     }
    const handlePdfChange = ({ meta, file }, status) => { 
        console.log("cfile",file)
        setPDFfile(file)
     }
    
    // receives array of files that are done uploading when submit button is clicked
    const handleSubmission = () => {
		const pdfData = new FormData();
        const videoData = new FormData();
        
		if(typeof(PDFfile)!==null&&PDFfile!==null){
            console.log(PDFfile)
            pdfData.append('pdf', PDFfile);
            uploadData(pdfData,'pdf').then((response)=>{            
                alert(response)
            });
        }
        if(typeof(Videofile)!==null&&Videofile!==null){
            console.log('hiiii')
            videoData.append('video',Videofile);
            uploadData(videoData,'video');
        }
        
    }  
      const changeHandler = (event) => {
          console.log(event.target.files[0])
          if(event.target.id==='video'){
            setVideoFile(event.target.files[0])
          }else if(event.target.id==='pdf'){
            console.log('pdf')
		    setPDFfile(event.target.files[0]);
          }
                
	};
    return(
        <div className="container">
            <h2>資料上傳區</h2>
             <h3>書面資料</h3>
             <Dropzone
                // getUploadParams={getUploadParams}
                onChangeStatus={handlePdfChange}
                // onSubmit={handleSubmit}
                maxSize={MAXSIZE}
                inputContent={<span>點擊上傳～</span>}
                submitButtonContent={<span>上傳</span>}
                maxFiles={1}
                inputWithFilesContent={<span>增加檔案</span>}
            />  
             <h3>影片</h3>
            <Dropzone
                // getUploadParams={getUploadParams}
                onChangeStatus={handleVideoChange}
                // onSubmit={handleSubmit}
                maxSize={MAXSIZE}
                inputContent={<span>點擊上傳～</span>}
                submitButtonContent={<span>上傳</span>}
                maxFiles={1}
                inputWithFilesContent={<span>增加檔案</span>}
                accept="image/*,audio/*,video/*"
            />  
            
            <div className="justify-content-end mt-5">
                <Button 
                    variant='secondary'
                    onClick={handleSubmission}
                    size="lg"
                >提交</Button>
			</div>
           
        </div>
    )
}

export {Upload}