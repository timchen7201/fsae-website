import {React} from 'react'
import {Table} from 'react-bootstrap'

const Register = () => {
    return (
        <div className="container">
            <div className="mt-5">
                <div style={{'width':'80%'}}>
                    {/* <h2>重要文件繳交時程</h2>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>文件名稱</th>
                                <th>開放時間</th>
                                <th>截止日期</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>SES</td>
                                <td>2021/04/15</td>
                                <td>2021/06/25</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>ESO/ESA</td>
                                <td>-</td>
                                <td>2021/04/21</td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>ESF/FMEA</td>
                                <td>2021/05/10</td>
                                <td>2021/07/26</td>
                            </tr>
                            <tr>
                                <td>4</td>
                                <td>SPD</td>
                                <td>-</td>
                                <td>2021/07/04</td>
                            </tr>
                            <tr>
                                <td>5</td>
                                <td>Cost Report</td>
                                <td>-</td>
                                <td>2021/07/18</td>
                            </tr>
                            <tr>
                                <td>6</td>
                                <td>Cost Addendum</td>
                                <td>-</td>
                                <td>2021/08/20</td>
                            </tr>
                            <tr>
                                <td>7</td>
                                <td>Design Report</td>
                                <td>-</td>
                                <td>2021/07/22</td>
                            </tr>
                            <tr>
                                <td>8</td>
                                <td>Shakedown Certificate</td>
                                <td>-</td>
                                <td>2021/08/14</td>
                            </tr>
                        </tbody>
                    </Table> */}
                </div>
                <div style={{'width':'90%'}}>
                    <h2>文件下載</h2>
                    <ul>
                        <li>
                            <a href="../assets/files/FSAE_Rules_2020_V21.pdf">FSAE_Rules_2020_V21</a>
                        </li>
                        <li>
                            <a href="../assets/files/FSAE_Rules_2021_V1.pdf">FSAE_Rules_2021_V1</a>
                        </li>
                        <li>
                            <a href="../assets/files/2021 Taiwan Student Formula.pdf" target="_blank">2021 Taiwan Student Formula</a>
                        </li>
                        <li>
                            <a
                                href="../assets/files/2021 Taiwan Student Formula_participation rule.pdf">2021 Taiwan Student Formula_participation rule</a>
                        </li>
                        <li>
                            <a
                                href="../assets/files/2020-2021-FSAE-Structural-Equivalency-Spreadsheet_Steel-Tube_V1.8.xlsx">2020-2021-FSAE-Structural-Equivalency-Spreadsheet_Steel-Tube_V1.8</a>
                        </li>
                        <li>
                            <a href="../assets/files/2021_ETC_FMEA_Template.xls">2021_ETC_FMEA_Template</a>
                        </li>
                        <li>
                            <a href="../assets/files/2021_FSAE_Design_EV_Spec_Sheet_template.xlsx">2021_FSAE_Design-EV_Spec_Sheet_template</a>
                        </li>
                        <li>
                            <a href="../assets/files/2021_FSAE_Design_IC_Spec_Sheet_template.xlsx">2021_FSAE_Design-IC_Spec_Sheet_template</a>
                        </li>
                        <li>
                            <a href="../assets/files/2021-FMEA-Template.xls">2021-FMEA-Template</a>
                        </li>
                        <li>
                            <a href="../assets/files/affidavit.docx">台灣盃學生方程式聯賽_活動切結書_V1</a>
                        </li>
                        <li>
                            <a href="../assets/files/affidavit.pdf">台灣盃學生方程式聯賽_活動切結書_V3.1</a>
                        </li>
                    </ul>
                </div>
                <div className="">
                    <h2>繳交辦法</h2>
                    <p>請繳交切結書給相關人員後，
                        我們會給予一組帳號密碼，到時候再登入後至"會員服務"的"上傳資料"</p>
                    <img src="../assets/image/upload.png"/>
                </div>
            </div>
        </div>
    )
}

export {Register}