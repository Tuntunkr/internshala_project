import React from 'react'
import { NavLink } from 'react-bootstrap'
import signupic from '../img/signup.svg'
function Register() {
    return (
        <>
        
        <section className=" signup">
            <div className="container mt-5">
                <div className="signup-content">
                    <div className="signup-form">
                        <h1 className="form-title">Sign up</h1>
                            <form className="register-form" id="register-form">
                            <div className="form-group">
                                <label htmlFor="name">
                                <i className="zmdi zmdi-account material-icons-name"></i>
                                </label>
                            <input type="text" name="name" id="name" autoComplete="off" placeholder ="Your Name" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="Email">
                                <i className="zmdi zmdi-email material-icons-name"></i>
                                </label>
                            <input type="email" name="email" id="email" autoComplete="off" placeholder ="Your email" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="phone">
                                <i className="zmdi zmdi-phone-in-talk material-icons-name"></i>
                                </label>
                            <input type="number" name="phone" id="phone" autoComplete="off" placeholder ="Your phone" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="work">
                                <i className="zmdi zmdi-slideshow material-icons-name"></i>
                                </label>
                            <input type="text" name="work" id="work" autoComplete="off" placeholder ="Your profession" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">
                                <i className="zmdi zmdi-lock material-icons-name"></i>
                                </label>
                            <input type="password" name="password" id="password" autoComplete="off" placeholder ="Your password" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="cpassword">
                                <i className="zmdi zmdi-lock material-icons-name"></i>
                                </label>
                            <input type="password" name="password" id="password" autoComplete="off" placeholder ="Confirm  Your password" />
                            </div>
                           <div className="form-group from-button">
                               <input type="submit" name="register" id="register" className="form-submit" 
                               value="register" >
                               </input>

                           </div>

                            </form>
                            </div>
                                <div className="signup-image">
                                    <figure>
                                        <img src={signupic} alt="registration pic" />
                                    </figure>
                                    <NavLink to="/login" className="signup-image-link">I am already register</NavLink>
                                </div>


                    


                </div>



            </div>



        </section>
        
        
        
        </>
    )
}

export default Register
