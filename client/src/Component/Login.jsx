import React from 'react'
import signupic from '../img/login.svg'
import { NavLink } from 'react-bootstrap'

function Login() {
    return (
        <>
             <section className=" signup">
            <div className="container mt-5">
                <div className="signup-content">
                <div className="signup-image">
                                    <figure>
                                        <img src={signupic} alt="registration pic" />
                                    </figure>
                                    <NavLink to="/Register" className="signup-image-link">Create an Account</NavLink>
                                </div>
                    <div className="signup-form">
                        <h1 className="form-title">Sign In</h1>
                            <form className="register-form" id="register-form">
                           
                            <div className="form-group">
                                <label htmlFor="Email">
                                <i className="zmdi zmdi-email material-icons-name"></i>
                                </label>
                            <input type="email" name="email" id="email" autoComplete="off" placeholder ="Your email" />
                            </div>
                          
                            <div className="form-group">
                                <label htmlFor="password">
                                <i className="zmdi zmdi-lock material-icons-name"></i>
                                </label>
                            <input type="password" name="password" id="password" autoComplete="off" placeholder ="Your password" />
                            </div>
                           
                            <div className="form-group from-button">
                               <input type="submit" name="signin" id="signin" className="form-submit" 
                               value="Log In" >
                               </input>

                           </div>

                            </form>
                            </div>
                               


                    


                </div>



            </div>



        </section>
        


        </>
    )
}

export default Login
