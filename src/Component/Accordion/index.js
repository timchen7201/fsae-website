import React, {useEffect, useState} from 'react'
import styled from 'styled-components';
import {GoChevronDown,GoChevronUp } from 'react-icons/go';
import {FaReply} from 'react-icons/fa';
import {Form,Button} from 'react-bootstrap'
import { replyQuestion } from '../../api/qa';


const AccordionSection = styled.div`
  display: flex;
  height:100%;
  flex-direction: column;
  margin-top:50px;
  align-items: center;
  position: relative;
  background: #fff;
  font-family: 'NotoSansCJKtc','conthraxsb-regular';

`;

const Container = styled.div`
  width:100%;
  position: absolute;
  margin-bottom:50px;

  box-shadow: 1px 1px 50px 1px rgba(234, 55, 55, 0.1);
  //rgba(153, 153, 153, 0.3)
  font-family: 'NotoSansCJKtc','conthraxsb-regular';
  margin-bottom:10px;

`;

const Wrap = styled.div`
  background: #fff;
  color: #000;
  display: flex;
  justify-content: space-between;
  align-items: center;
  // margin-bottom:30px;

  width: 100%;
  text-align: left;
  cursor: pointer;
  box-shadow: 1px 15px 35px 1px rgba(234, 55, 55, 0.2);

  h1 {
    padding-left: 1.7rem;
    padding-top: 2rem;
    color:#ea5514;
    font-size: 1.5rem;
    font-family: 'conthraxsb-regular';

  }

  h2 {
    padding-right: 1.5rem;
    font-size: 1.2rem;
    font-family: 'conthraxsb-regular';

  }
  p {
    padding-left: 2rem;
    font-size: 1.5rem;
    font-family: 'conthraxsb-regular';
    color:#000;
  }

  span {
    margin-right: 1.2rem;
    font-family: 'conthraxsb-regular';

  }
  
`;

const Dropdown = styled.div`
  padding:10px;
  background: #fff;
  color: #000;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom:50px;
  p {
    font-family: 'conthraxsb-regular';
    font-size: 1.2rem;
  }
`;

const Accordion = (props) => {
    const [clicked, setClicked] = useState(false);
    const [isRoot,setIsRoot] = useState(false);
    const [Answer,setAnswer] = useState('')
    const [Idx,setIdx]= useState()
    const toggle = index => {
      if (clicked === index) {
        //if clicked question is already active, then close it
        // setIdx(index)
        return setClicked(null);
      }
  
      setClicked(index);
    };
    const {data,role} = props
    useEffect(()=>{    
          if(role==='root') setIsRoot(true)
    },[])

    const hanldeAnswer=(answer,qid)=>{
      setIdx(qid)
      setAnswer(answer)
    }

    const submitAnswer=()=>{
      console.log(Answer,Idx)
      replyQuestion(Answer,Idx).then((msg)=>{
        alert(msg);
        window.location.reload()
      })
    }
  
    return (
    //   <IconContext.Provider value={{ color: '#00FFB9', size: '25px' }}>
      
        <AccordionSection>
          <Container>
            {
              isRoot?(
                data.map((item, index) => {
                  return (
                    <>
                      <Wrap onClick={() => toggle(index)} key={item.id}>
                        <div>
                        <h1><i>{item.team_name}</i></h1>
                        <p  style={{'font-size':'1rem'}}><i>{item.version} {item.rule_category}--{item.subRuleCat}</i></p>

                        <p>{item.question}</p>
                        </div>
                        <hr className="style-six"></hr>
                        <div className="mr-1">
                        <span id={item.id}><FaReply/></span>
                       
                        </div>            
                      </Wrap>
                      {clicked === index? (
                         <Dropdown>
                            <div className="mt-1 ml-3 mr-3 mb-1 text-left english-font">

                         <span>Original Answer: {item.answer}</span>
                         <Form.Group>
                           <Form.Control as="textarea" rows={3} onChange={(e)=>{hanldeAnswer(e.target.value,e.target.id)}} id={item.id}/>
                       </Form.Group>
                       <Button variant="primary" onClick={submitAnswer}>Answer</Button>
                      </div>
                         </Dropdown>
                        
                      ):null}
                     
                    </>)})
                    ):(
                      data.map((item, index) => {
                        return (
                          <>
                            <Wrap onClick={() => toggle(index)} key={item.id}>
                              <div>
                              <h1>{item.team_name} 
                              </h1>
                              <p  style={{'font-size':'1rem'}}><i>{item.rule_category}--{item.subRuleCat}</i></p>
                              <p>{item.question}</p>
                              </div>
                              <hr className="style-six"></hr>
                              <div>
                              <span><i>{clicked === index?<GoChevronUp/>:<GoChevronDown/>}</i></span>
                             
                              </div>            
                            </Wrap>
                            {clicked === index? (
                              <Dropdown>
                              <p>{item.answer}</p>
                      
                             </Dropdown>
                            ):null}
                            
                          </>)})
                    )
            }
            
            </Container>

            </AccordionSection>
            
                    
         
    );
  };
  
  export default Accordion;
