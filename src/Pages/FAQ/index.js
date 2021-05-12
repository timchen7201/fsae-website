import React, { useState,useContext, useEffect } from 'react';
import Accordion from '../../Component/Accordion/index'
import Dropzone from 'react-dropzone-uploader'
import 'react-dropzone-uploader/dist/styles.css'
import {Form,Button} from 'react-bootstrap'
import { AuthContext,AdminAuthContext } from "../../appContext";
import {
    listQA,
    addQuestion
} from '../../api/qa'
import{sub_rule_category} from './options'

const rules_category=[
    "GR - General Regulations",
    "AD - Administrative Regulations",
    "DR - Document Requirements",
    "V - Vehicle Requirements",
    "F - Chassis and Structural",
    "T - Technical Aspects",
    "VE - Vehicle and Driver Equipment",
    "IC - Internal Combustion Engine Vehicles",
    "EV - Electric Vehicles",
    "IN - Technical Inspection",
    "S - Static Events",
    "D - Dynamic Events",
]
// const sub_rule_category={
//     'GR - General Regulations':['Formula SAE Competition Objective','Formula SAE Rules and Organizer Authority','Rules of Conduct ','Rules Format and Use','Rules Questions','Protests','Vehicle Eligibility'],
//     'AD - Administrative Regulations':['The Formula SAE Series','Official Information Sources','Individual Participation Requirements','Individual Registration Requirements','Team Advisors and Officers','Competition Registration']
// }

const FAQ=(props)=>{
    const { authState, authDispatch } = useContext(AuthContext);
    const { adminAuth,AdminDispatch } = useContext(AdminAuthContext);
    const [askquestion,setAskQuestion] = useState(null);
    const [questions,setQuestions] = useState([]);
    const [category,setCategory] = useState('Rule')
    const [version,setVersion] = useState('2021')
    const [ruleCat,setRuleCat]=useState(rules_category[0])
    const [subRuleCat,setSubRuleCat] = useState('Formula SAE Competition Objective')

    useEffect(()=>{
        listQA().then((qs)=>setQuestions(qs))
    },[])

    function handleCategory(e){
        setCategory(e.target.value)
        if(e.target.value==="Others"){
            setVersion('')
            setRuleCat('')
            setSubRuleCat('')
        }
        else{
            setVersion('2021')
            setRuleCat(rules_category[0])
            setSubRuleCat('Formula SAE Competition Objective')
        }
    }
    function handleVersion(e){
        setVersion(e.target.value)
    }

    function handleRule(e){
        setRuleCat(e.target.value)
    }

    function handleText(e){
        setAskQuestion(e.target.value)
    }
    function handleSubmit(){
        if(askquestion===null){
            alert('請輸入問題');
            return
        }
        addQuestion({category,version,ruleCat,subRuleCat,askquestion}).then((msg)=>{
            alert(msg) 
            window.location.reload();
        })
        
    }
    
    return(
    <div className="container mt-5 text-center mb-5">
        <h2>Q&A</h2>
        {
            authState.user?(
            <div className="pd-5 div-select">
                <Form.Group>
                <div className="qa-select">
                <Form.Label>Category</Form.Label>    
                    <Form.Control as="select" custom className="select1"  onChange={(e)=>{handleCategory(e)}}>
                    <option>Rule</option>
                    <option>Others</option>
                    </Form.Control>
                </div>
                {
                    category==='Rule'?(
                        <>
                    <div className="qa-select">
                    <Form.Label>Version</Form.Label>    
                        <Form.Control as="select" custom className="select1"  onChange={(e)=>{handleVersion(e)}}>
                        <option>2021</option>
                        <option>2020</option>
                        </Form.Control>
                    </div>
                    <div className="qa-select">
                    <Form.Label>Rule Category</Form.Label>    
                        <Form.Control as="select" custom className="select1"  onChange={(e)=>{handleRule(e)}}>
                        {
                            rules_category.map((cat)=>{
                               return( <option>{cat}</option>)
                            })
                        }
                        </Form.Control>
                    </div>
                    <div className="qa-select">
                    <Form.Label>SubRule </Form.Label>    
                        <Form.Control as="select" custom className="select1"  onChange={(e)=>{setSubRuleCat(e.target.value)}}>
                        {
                            sub_rule_category[ruleCat].map((sub_rule)=>{
                               return( <option>{sub_rule}</option>)
                            })
                        }
                        </Form.Control>
                    </div>
                    </>
                    ):(null)
                }
                <hr></hr>
                <div className="text-left mt-5">
                <Form.Label>Question</Form.Label>
                <Form.Control as="textarea" rows={3}  placeholder={`以${authState.user}身份發問`} onChange={(e)=>handleText(e)}/>
                </div>
                </Form.Group>
                <Button variant="primary" onClick={handleSubmit}>送出</Button>
                <Accordion data={questions} role={authState.user}/>
            </div>
            
            ):(
                adminAuth.user?(           
                    <Accordion data={questions} role='root'/>
                ):(null)
            )
        }

    </div>
    )
}
export {FAQ}