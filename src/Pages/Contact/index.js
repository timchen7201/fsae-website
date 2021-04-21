import {React} from 'react'
import Card from 'react-bootstrap/Card'
const Contact=()=>{
    return(
        <div className="container">
            <div className="mt-5" id="contact">
            <h2>官方信箱</h2>
            <a href="mailto:formulastudenttaiwan@gmail.com">formulastudenttaiwan@gmail.com</a>
            <h2>聯絡人</h2>
            <div className="row mr-auto">
                <Card className="ml-3 mt-3 card-width">
                    <Card.Body>
                    {/* <Card.Img variant="top" src="../assets/image/Zhuang.jpg" className="mb-3" /> */}
                        <Card.Title><h3>莊淯翔(成功大學)</h3></Card.Title>
                        <Card.Text>
                        電話：0988202189
                        </Card.Text>
                       
                        <Card.Text>地址：701 台南市東區大學路1號 成大機械四樓</Card.Text>
                    </Card.Body>
                </Card>
                <Card className="ml-3 mt-3 card-width">
                    <Card.Body>
                    {/* <Card.Img variant="top" src="../assets/image/Zhuang.jpg" className="mb-3" /> */}
                        <Card.Title><h3>吳佳芬(成功大學)</h3></Card.Title>
                        <Card.Text>
                        電話：0900099037
                        </Card.Text>
                       
                        <Card.Text>地址：701 台南市東區大學路1號 成大機械四樓</Card.Text>
                    </Card.Body>
                </Card>
                <Card className="ml-3 mt-3 card-width">
                    <Card.Body>
                    {/* <Card.Img variant="top" src="../assets/image/Zhuang.jpg" className="mb-3" /> */}
                        <Card.Title><h3>許佑承(交通大學)</h3></Card.Title>
                        <Card.Text>
                        電話：0975474729
                        </Card.Text>
                
                        <Card.Text>地址：300新竹市東區大學路1001號工程五館EE437室</Card.Text>
                    </Card.Body>
                </Card>
            </div>
            </div>
            
                
            {/* <div className="row">
                <Card style={{ width: '24rem' }}>
                    <Card.Body>
                    <Card.Img variant="top" src="../assets/image/Zhuang.jpg" className="mb-3" />
                        <Card.Title><h3>莊淯翔(成功大學)</h3></Card.Title>
                        <Card.Text>
                        電話：0988202189
                        </Card.Text>
                        <Card.Text>
                        信箱：<a href="mailto:fsaeintaiwan@gmail.com">fsaeintaiwan@gmail.com</a>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div> */}
        </div>
    )
}

export{Contact}