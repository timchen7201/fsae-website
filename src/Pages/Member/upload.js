import React,{useState, useEffect} from 'react';
// import Form from 'react-bootstrap'
import Dropzone from 'react-dropzone-uploader'
import 'react-dropzone-uploader/dist/styles.css'

import {uploadData,askAlreadyUpload} from '../../api/updata'

// Import FilePond styles
import "filepond/dist/filepond.min.css";
// Import the plugin code
import { Button,ButtonGroup } from 'react-bootstrap';
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
            alert('???????????????')
            return
        }
		if(typeof(PDFfile)!==null&&PDFfile.length!==0){
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
                console.log('------------',result)
                setAlreadyfiles([...result])
            }
        })
    }
    return(
        <div className="container">
                
            <div className="float-right">
                <ButtonGroup aria-label="Basic example">
                    <Button variant="secondary" onClick={()=>setUploadPage(!uploadPage)}>?????????</Button>
                    <Button variant="light" onClick={()=>{setUploadPage(!uploadPage);setPDFfile([])}}>?????????</Button>
                </ButtonGroup>         
            </div>
            
            {
                uploadPage?(
                    <>
                <h2>???????????????</h2>
                    <h3>????????????</h3>
                    <p>????????????????????? <i>??????_????????????+??????(ICVor EV)_2021??????????????????</i> ??????????????????????????????????????????</p>
                       <ul>
                           <li>SES</li>
                           <li>ESO_ESA</li>
                           <li>ESF_FMEA</li>
                           <li>SPD</li>
                           <li>Cost_Report</li>
                           <li>Cost_Addendum</li>
                           <li>Design_Report</li>
                           <li>Shakedown_Certificate</li>
                       </ul>
                    <Dropzone
                       // getUploadParams={getUploadParams}
                       onChangeStatus={handlePdfChange}
                       // onSubmit={handleSubmit}
                       inputContent={<span>???????????????</span>}
                       submitButtonContent={<span>??????</span>}
                       maxFiles={8}
                       inputWithFilesContent={<span>????????????</span>}
                       accept='application/vnd.ms-excel,application/vnd.openxmlformats-officedocument.wordprocessingml.document,application/docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
                   />  
                    <h3>??????</h3>
                   <Dropzone
                       // getUploadParams={getUploadParams}
                       onChangeStatus={handleVideoChange}
                       // onSubmit={handleSubmit}
                       maxSize={MAXSIZE}
                       inputContent={<span>???????????????</span>}
                       submitButtonContent={<span>??????</span>}
                       maxFiles={1}
                       inputWithFilesContent={<span>????????????</span>}
                       accept="audio/*,video/*"
                   />  
                   
                   <div className="justify-content-end mt-5">
                       <Button 
                           variant='secondary'
                           onClick={handleSubmission}
                           size="lg"
                       >??????</Button>
                       {passion?(<span className="ml-4 red-text">???????????????</span>):(null)}
                   </div>
                   </>
                   ):(<>
                        <h2>?????????</h2>
                        <div>
                        {alreadyfiles.map((file)=>{
                            return(
                                <li>
                                    <a href={`https://storage.googleapis.com/fsae-media/document/${file.username}/${file.filename}`}>{file.originalname}</a>
                                    <span>&nbsp;????????? {file.upload_times}???</span>
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