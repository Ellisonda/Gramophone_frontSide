import { loginFetch, registerNewUser } from "../core/services/userServices";
import { useDispatch, useSelector } from "react-redux";
import { doLoginActions } from "../components/user/UserActions";
import { useState } from "react";
import HomePage from "./HomePage";

const LoginPage = () => {


    const user= useSelector((state)=> state.userReducer.user);
    const dispatch = useDispatch()

    const [flagLogin, setFlagLogin] = useState(true);
    const [loginInfo, setLoginInfo] = useState({})
    const [registerInfo, setRegisterInfo] = useState({});

    

    const doLogin = async () => {
        const userInfo = await loginFetch(loginInfo.email, loginInfo.password)
        dispatch(doLoginActions({
            user: userInfo
        }))
        console.log('Usuario logeado')
    }

    const doRegister = async () => {
        const userInfo= await registerNewUser(registerInfo)
        dispatch(doLoginActions({
            user: userInfo
        }))
        console.log('Usuario registrado')
    }

    const handlerLoginInfo = (name, value) => {
        setLoginInfo({
            ...loginInfo,
            [name]: value
        })
    }

    const handlerRegisterInfo = (name, value) => {
        setRegisterInfo({
            ...registerInfo,
            [name]: value
        })
    }
  return (
    <div>
       
        
        {
                !user? (
                    flagLogin
                    ? (
                        <div>
                             <header>
                                <h1>Gramophone</h1>
                                <h2>Find your music, find yourself and ride a reno.</h2>
                            </header>

                        <h3>Get into the rithm</h3> 
                        
                            <div>
                                <span>Email: </span>
                                <input type="text" placeholder="Email" name='email' onChange={(e)=>handlerLoginInfo(e.target.name, e.target.value)}/>
                            </div>
                            <div>
                            <span>Password: </span>
                            <input type="password" name='password' placeholder="Password" onChange={(e)=>handlerLoginInfo(e.target.name, e.target.value)}/>
                            </div> 
                            <div>
                                <button onClick={doLogin}>Log in</button> 
                            </div>
                            <div>
                                <button onClick={() => setFlagLogin(false)}>Join us?</button>

                            </div>
                            
        
                        
                        <hr />
                    </div>
                    
                    )
                    : (
                        <div>
                            <div>
                                <h3> Here for first time? Sign up now!</h3>
                                <div>
                                    <div>
                                        <span>Name</span>
                                        <input type="text" placeholder='name' name='name' onChange={(e) => handlerRegisterInfo(e.target.name, e.target.value)}/>
                                    </div>
                                    <div>
                                        <span>Username</span>
                                        <input type="text" placeholder='username' name='username' onChange={(e) => handlerRegisterInfo(e.target.name, e.target.value)} />
                                    </div>
                                    <div>
                                        <span>Email</span>
                                        <input type="text" placeholder='text' name='email' onChange={(e) => handlerRegisterInfo(e.target.name, e.target.value)}/>
                                    </div>
                                    <div>
                                        <span>Password</span>
                                        <input type="password" placeholder='password' name='password' onChange={(e) => handlerRegisterInfo(e.target.name, e.target.value)}/>
                                    </div>
                                    <div>
                                        <button onClick={doRegister}>Sign up</button>
                                    </div>
                                </div>
                                

                            </div>
                            <div>
                                 <button onClick={() => setFlagLogin(true)}>Go back to login</button>

                            </div>
                        </div>
                    )
                )
                : (
                    <HomePage/>
                )
        }


        
        
        <footer>
            <p>2024. Gramophone Team. All rights reserved.</p>
        </footer>
    </div>

  )
}

export default LoginPage