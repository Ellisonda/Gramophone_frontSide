import {Formik, Form, Field, ErrorMessage} from 'formik'
import * as Yup from 'yup'
import { loginFetch, registerNewUser } from "../core/services/userServices";
import { useDispatch, useSelector } from "react-redux";
import { doLoginActions } from "../components/user/UserActions";
import { useState } from "react";
import HomePage from "./HomePage";
import ErrorGeneralComponent from '../components/registrationForm/ErrorGeneralComponent';
import ErrorComponent from '../components/registrationForm/ErrorComponent';
import Gramophone_Reno from '../assets/images/Gramophone_Reno.png';

const initialValuesForm = {
    name:'', 
    username:'',
    email: '',
     password:'' 
     
}
const userSchema = Yup.object({
    name:Yup.string().required('You must enter a name'), 
    username:Yup.string().required('Must be an unique username'),
    email: Yup.string().email().required('An email is a must'),
     password:Yup.string().required().min(8, 'Pass need to be larger than 8 characters')
})





const LoginPage = () => {


    const user= useSelector((state)=> state.userReducer.user);
    const dispatch = useDispatch()

    const [flagLogin, setFlagLogin] = useState(true);
    const [loginInfo, setLoginInfo] = useState({})

    

    const doLogin = async () => {
        const userInfo = await loginFetch(loginInfo.email, loginInfo.password)
        dispatch(doLoginActions({
            user: userInfo
        }))
        console.log('Usuario logeado')
    }
 
    //Pasamos los valores tomados del formulario formik para que se tomen como body en el backend
    const doRegister = async (values) => {
        const userInfo= await registerNewUser(values)
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

    
  return (
    <div className='login-maincontainer'>

        <div className='login-container'>
        
            
            {
                    !user? (
                        flagLogin
                        ? (
                            <div style={{display: 'flex', flexDirection:'column', justifyContent:'center', alignItems:'center', gap: 10}}>
                                <header>
                                    <img className='logo-login' src={Gramophone_Reno}/>
                                </header>

                            <div style={{display: 'flex', flexDirection:'column', justifyContent:'center', alignItems:'flex-end', gap: 10}}>
                                <div>
                                    <span style={{fontWeight:'bold'}}>Email: </span>
                                    <input type="text" placeholder="Email" name='email' onChange={(e)=>handlerLoginInfo(e.target.name, e.target.value)}/>
                                </div>
                                <div>
                                <span style={{fontWeight:'bold'}}>Password: </span>
                                <input type="password" name='password' placeholder="Password" onChange={(e)=>handlerLoginInfo(e.target.name, e.target.value)}/>
                                </div> 

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
                                    <Formik
                                        initialValues={initialValuesForm}
                                        onSubmit={doRegister}
                                        validationSchema={userSchema}
                                        >
                                        {({errors}) => (
                                            <Form style={{display:'flex', flexDirection: 'column', gap: 5}}>
                                                {
                                                    errors && <ErrorMessage name='name' component={ErrorGeneralComponent}/>
                                                }

                                                    <div style={{display:'flex', flexDirection: 'column', gap: 5}}>
                                                        <span name='name' style={{fontWeight:'bold'}}>Name</span>
                                                        {
                                                            errors && <ErrorMessage name='name' component={ErrorComponent}/>
                                                        }
                                                        <Field type="text" placeholder='name' name='name' ></Field>
                                                    </div>
                                                    <div style={{display:'flex', flexDirection: 'column', gap: 5}}>
                                                        <span style={{fontWeight:'bold'}}>Username</span>
                                                        {
                                                            errors && <ErrorMessage name='username' component={ErrorComponent}/>
                                                        }
                                                        <Field type="text" placeholder='username' name='username'  ></Field>
                                                    </div>
                                                    <div style={{display:'flex', flexDirection: 'column', gap: 5}}>
                                                        <span style={{fontWeight:'bold'}}>Email</span>
                                                        {
                                                            errors && <ErrorMessage name='email' component={ErrorComponent}/>
                                                        }
                                                        <Field type="text" placeholder='email' name='email' ></Field>
                                                    </div>
                                                    <div style={{display:'flex', flexDirection: 'column', gap: 5}}>
                                                        <span style={{fontWeight:'bold'}}>Password</span>
                                                        {
                                                            errors && <ErrorMessage name='password' component={ErrorComponent}/>
                                                        }
                                                        <Field type="password" placeholder='password' name='password' ></Field>
                                                    </div>
                                                    <div>
                                                        <button type='submit'  >Sign up</button>
                                                    </div>
                                                    
                                            </Form>
                                            
                                        )}        
                                    </Formik>

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
    </div>

  )
}

export default LoginPage