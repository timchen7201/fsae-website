import React,{useContext} from 'react'
import Dropzone from 'react-dropzone-uploader'
import 'react-dropzone-uploader/dist/styles.css'

export function Uploader () {
    // specify upload params and url for your files
    const getUploadParams = ({ meta }) => { return { url: 'https://httpbin.org/post' } }
    
    // called every time a file's `status` changes
    const handleChangeStatus = ({ meta, file }, status) => { console.log(status, meta, file) }
    
    // receives array of files that are done uploading when submit button is clicked
    const handleSubmit = (files) => { console.log(files.map(f => f.meta)) }

    return(
    <Dropzone
        getUploadParams={getUploadParams}
        onChangeStatus={handleChangeStatus}
        // onSubmit={handleSubmit}
        inputContent={<span>點擊上傳～</span>}
        submitButtonContent={<span>上傳</span>}
        inputWithFilesContent={<span>增加檔案</span>}
        accept="image/*,audio/*,video/*"
    />    )
}

export default Uploader;