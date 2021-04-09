import React ,{useState,useContext} from "react";
import {AuthContext} from "../../appContext"
import {emailSignIn} from '../../api/user'
function Login(props){
    const { authDispatch } = useContext(AuthContext);
    const [username, setUsername] = useState(null);
    const [password, setPassword] = useState(null);
    const [loggingStatus, setLoggingStatus] = useState(true);
    const defaultSignIn = async () => {
        try {
          const { access_token } = await emailSignIn({
            username,
            password,
          });
          authDispatch({
            type: "LOGIN",
            user: {
              name: username,
            },
            accessToken: access_token,
          });
          console.log(access_token);
        } catch (error) {
          setLoggingStatus(false);
          console.error(error);
        }
      };
    return(
        <main id="content" role="main" className="main">
        <div className="container py-5 py-sm-7">
          <a className="d-flex justify-content-center mb-5" href="/">
            <img className="z-index-2" src="assets/image/title_pic.jpg" style={{ width: "14rem" }} />
          </a>
  
          <div className="row justify-content-center">
            <div className="col-md-7 col-lg-5">
              <div className="card card-lg mb-5">
                <div className="card-body">
                  <div className="text-center">
                    <div className="mb-5">
                      <h1 className="h3">會員登入</h1>
                      
                    </div>
  
                  </div>
                  <div className="js-form-message form-group">
                    <label className="input-label">電子信箱</label>
  
                    <input
                      default-value={username}
                      onChange={(e) => {
                        setUsername(e.target.value);
                      }}
                      type="email"
                      className="form-control"
                      name="email"
                      id="signinSrEmail"
                      placeholder="email@address.com"
                      aria-label="email@address.com"
                      required
                      data-msg="Please enter a valid email address."
                    />
                  </div>
                  <div className="js-form-message form-group">
                    <label className="input-label">
                      <span className="d-flex justify-content-between align-items-center">
                        密碼
                        <a
                          className="input-label-secondary"
                          href="authentication-reset-password-basic.html"
                        >
                          忘記密碼?
                        </a>
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
                        placeholder="8+ characters required"
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
                      <label className="custom-control-label font-size-sm text-muted">
                        {" "}
                        記住帳號
                      </label>
                    </div>
                  </div>
  
                  {loggingStatus ? (
                    <div></div>
                  ) : (
                    <div className="text-center">
                      <sapn id="name" class="text-danger">
                        帳號密碼有誤
                      </sapn>
                    </div>
                  )}
                  <button
                    onClick={defaultSignIn}
                    className="btn btn-block btn-primary"
                  >
                    登入
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