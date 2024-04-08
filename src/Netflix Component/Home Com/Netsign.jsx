import React,{useState,useEffect} from 'react'

export default function Netsign() {

    const [accessToken, setAccessToken] = useState('');

    const handleLogin = () => {
        const CLIENT_ID = "410554796046-r94qhusc6e496duufqochg4tph4k662m.apps.googleusercontent.com";
        const REDIRECT_URL = "http://localhost:3000/inbox";
        const SCOPE = "https://www.googleapis.com/auth/gmail.readonly";
        const AUTH_URL = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URL}&scope=${SCOPE}&response_type=token`;
        window.location.href = AUTH_URL;
    }

    const getAccessToken = () => {
        const url = window.location.href;
        const token = url.match(/access_token=([^&]+)/);
        localStorage.setItem("Token", token && token[1]);
    }

    useEffect(() => {
        getAccessToken();
    }, []);

  return (
      <>
        <header class="showcase">
                 
                  

                      <div className="logo">
                          <img src="https://i.ibb.co/r5krrdz/logo.png" />
                      </div>

                      <div className="showcase-content">
                          <div className="formm">
                              <form>
                                  <h1>Sign In</h1>
                                  <div className="info">
                                      <input className="email" type="email" placeholder="Email or phone number" /> <br />
                                      <input className="email" type="password" placeholder="Password" />
                                  </div>
                                  <div className="btn">
                                      <button class="btn-primary" type="submit" onClick={handleLogin}>Sign In</button>
                                  </div>
                                  <div className="help">
                                      <div>
                                          <input value="true" type="checkbox" /><label>Remember me</label>
                                      </div>

                                      <a href="https://www.netflix.com/dz-en/LoginHelp">Need Help ?</a>
                    
                                  </div>

                              </form>

                          </div>
            
                          <div className="fcbk">
                              <a href="https://facebook.com">
                                  <img src="https://i.ibb.co/LrVMXNR/social-fb.png" alt="Facebook" />
                              </a>
                              <p>Login with Facebook</p>
                          </div>
                          <div className="signup">
                              <p>New to Netflix ?</p>
                              <a href="https://www.netflix.com/dz-en/">Sign up now</a>
                          </div>
                          <div className="more">
                              <p>
                                  This page is protected by Google reCAPTCHA to ensure you're not a bot. <a href="#">Learn more.</a>
                              </p>
                          </div>


                      </div>

   
                      <footer>
            
                          <div className="ftr-content">
                              <div className="contact">
                                  <a href="#">Quesions? Contact us.</a>
                              </div>
                              <div className="ftr">
                                  <a href="#">Gift Card Terms</a>
                                  <a href="#">Terms of Use</a>
                                  <a href="#">Privacy Statement</a>
                              </div>
                              <div className="select">
                                  <select>
                                      <option>English</option>
                                      <option>العربية</option>
                                      <option>Français</option>
                        
                                  </select>
                              </div>
                          </div>
           
                      </footer>
                  </header>
      </>
    )
}

// const [accessToken, setAccessToken] = useState('');

//     const handleLogin = () => {
//         const CLIENT_ID = "230525863646-460goh0l2t54ehgqp7964pfn3jduds8m.apps.googleusercontent.com";
//         const REDIRECT_URL = "http://localhost:3000/inbox";
//         const SCOPE = "https://www.googleapis.com/auth/gmail.readonly";
//         const AUTH_URL = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URL}&scope=${SCOPE}&response_type=token`;
//         window.location.href = AUTH_URL;
//     }

//     const getAccessToken = () => {
//         const url = window.location.href;
//         const token = url.match(/access_token=([^&]+)/);
//         localStorage.setItem("Token", token && token[1]);
//     }

//     useEffect(() => {
//         getAccessToken();
//     }, []);

    

    
//     return (
//         <>
//             <div>
//                 {accessToken ? (
//                     <div>
//                         <h1>Access token obtained</h1>
//                         <p>Access Token: {accessToken}</p>
//                     </div>
//                 ) : (
//                     <>
//                         <button onClick={handleLogin}>Login with Google</button>
//                         {/* <button onClick={getEmailData}>Get Email</button>
//                         <button onClick={() => fetchMail("18e5a3c34967be03")}>Fetch Emails</button> */}
//                     </>
//                 )}
//             </div>
//         </>