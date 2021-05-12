import React, { useEffect, useState } from 'react'
import {listAllFiles} from '../../api/admin'
import storage from '../../utils/storage';
const Files=(props)=>{
    const [files,setFiles] = useState([]);
    useEffect(()=>{
        const admin_token=storage.getAdminToken
        listAllFiles(admin_token).then((data)=>{setFiles(data)})
        
    },[])

    return(
        <div className="container">
            {
            files.length===0?(<div className="text-center"><h2>目前無資料</h2></div>):(files.map(file=>{
                return(
               <>
                <h2>{file.team_name}({file.car_num})</h2>
                <div>
                    <ul>
                    {file.filenames.map((filename,index)=>{
                        return (<li><a href={`https://storage.googleapis.com/fsae-media/document/${file.username}/${filename}`} target="_blank">{file.originalname[index]}</a></li>)
                    })}
                    </ul>
                    
                </div>
               </>
                )
                
            }))
            }
        </div>
    )
}

export{Files}