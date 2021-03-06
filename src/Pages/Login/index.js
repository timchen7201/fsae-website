import React ,{useState,useContext} from "react";
import {AuthContext,AdminAuthContext} from "../../appContext"
import {emailSignIn} from '../../api/user'
import {normalSignIn} from '../../api/admin'

import {InputGroup,FormControl} from "react-bootstrap"
function Login(props){
    const { authDispatch } = useContext(AuthContext);
    const { AdminDispatch } = useContext(AdminAuthContext);
    const [username, setUsername] = useState(null);
    const [password, setPassword] = useState(null);
    const [loggingStatus, setLoggingStatus] = useState(true);
    const [memberCheck,setMemberCheck] = useState(true)
    const [adminCheck,setAdminCheck] = useState(false)
    const defaultSignIn = async () => {
      if(memberCheck===true&&adminCheck===false){
        try {
          const { access_token } = await emailSignIn({
            username,
            password,
          });
          authDispatch({
            type: "LOGIN",
            user: username,
            accessToken: access_token,
          });
          console.log(access_token);
        } catch (error) {
          setLoggingStatus(false);
          console.error(error);
        }
      }
      else if(memberCheck===false&&adminCheck===true){
        try {
          const { access_token } = await normalSignIn({
            username,
            password,
          });
          AdminDispatch({
            type: "LOGIN",
            user: username,
            AdminToken: access_token,
          });
          console.log("admin token",access_token);
        } catch (error) {
          setLoggingStatus(false);
          console.error(error);
        }
      }
      

      };
    return(
        <main id="content" role="main" className="main">
        <div className="container py-5 py-sm-7">
          <a className="d-flex justify-content-center mb-5" href="/">
            <img className="z-index-2" src="../../assets/image/logo.jpg" style={{ width: "14rem" }} />
          </a>
  
          <div className="row justify-content-center">
            <div className="col-md-7 col-lg-5">
              <div className="card card-lg mb-5">
                <div className="card-body">
                  <div className="text-center">
                    <div className="mb-2">
                      <h1 className="h3">Please select your role</h1>
                      <div className="checkbox">
                      <label><input name="member" type="checkbox" checked={memberCheck} onChange={()=>{setMemberCheck(!memberCheck);setAdminCheck(!adminCheck);}}/> Member&nbsp;&nbsp;&nbsp;</label>
                        
                      <label><input name="admin" type="checkbox" checked={adminCheck} onChange={()=>{setAdminCheck(!adminCheck);setMemberCheck(!memberCheck)}}/> Administrator</label>
                      </div>
                     

                    </div>
  
                  </div>
                  <div className="js-form-message form-group">
                    <label className="input-label">Account Name</label>
  
                    <input
                      default-value={username}
                      onChange={(e) => {
                        setUsername(e.target.value);
                      }}
                      type="email"
                      className="form-control"
                      name="email"
                      id="signinSrEmail"
                      aria-label="email@address.com"
                      required
                      data-msg="Please enter a valid email address."
                    />
                  </div>
                  <div className="js-form-message form-group">
                    <label className="input-label">
                      <span className="d-flex justify-content-between align-items-center">
                        Password
                        
                      </span>
                    </label>
  
                    <div className="input-group input-group-merge">
                      <input
                        default-value={password}
                        onChange={(e) => {
                          setPassword(e.target.value);
                        }}
                        type="password"
                        className="js-toggle-password form-control"
                        name="password"
                        id="signupSrPassword"
                        aria-label="8+ characters required"
                        required
                        data-msg="Your password is invalid. Please try again."
                        data-hs-toggle-password-options='{
                               "target": "#changePassTarget",
                               "defaultClass": "tio-hidden-outlined",
                               "showClass": "tio-visible-outlined",
                               "classChangeTarget": "#changePassIcon"
                             }'
                      />
                      <div id="changePassTarget" className="input-group-append">
                        <a className="input-group-text">
                          <i
                            id="changePassIcon"
                            className="tio-visible-outlined"
                          ></i>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="custom-control custom-checkbox">
                      <input
                        type="checkbox"
                        className="custom-control-input"
                        id="termsCheckbox"
                        name="termsCheckbox"
                      />
                     
                    </div>
                  </div>
  
                  {loggingStatus ? (
                    <div></div>
                  ) : (
                    <div className="text-center">
                      <sapn id="name" class="text-danger">
                      Incorrect account name or password 
                      </sapn>
                    </div>
                  )}
                  <button
                    onClick={defaultSignIn}
                    className="btn btn-block btn-primary"
                  >
                    Login
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    )
}

export{Login}