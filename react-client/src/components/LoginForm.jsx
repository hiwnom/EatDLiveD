import "../styles/LoginForm.css"
import "../styles/FormElement.css"
import Grahpic from "../assets/Component 1.svg"
import Logo from "../assets/LOGO.svg"
import Google from "../assets/logo googleg 48dp.svg"
import Background from "../assets/Vector.svg"

function LoginForm() {
  return (
    <div>
        <div className="login-content">
            <img className="login-background" src={Background} alt="" />
            <div className="row login-layout">
                <div className="col d-flex justify-content-center">
                    <div className="p-4">
                        <img src={Grahpic} alt="" />

                    </div>
                </div>
                <div className="col d-flex justify-content-center">
                    <form action="" className="login-form-layout d-flex flex-column align-items-center">
                        <div className="login-logo-layout text-center">
                            <img src={Logo} alt="" />
                        </div>
                        <div className="my-3">
                            <label className="form-label">Email address</label>
                            <input type="email" className="form-control" placeholder="xxxxx@mail.com" />
                        </div>
                        <div className="my-3">
                            <label className="form-label">Password</label>
                            <input type="password" className="form-control" placeholder="8 letter or more" />
                        </div>
                        <div className="my-4">
                            <button type="submit" className="btn btn-success">Login</button>
                        </div>
                        <div className="text-end">
                            <a className="login-forget" href="/">Forget Password ?</a>
                        </div>
                        <div className="text-center my-2 position-relative">
                            <div>or</div>
                        </div>
                        <div className="my-2">
                            <button type="submit" className="login-google"><span><img className="login-google-logo" src={Google} alt="" /></span>Continue with google</button>
                            <div className="text-center mt-4">
                                <span>Need an account ?</span>
                                <span><a className="login-sign-up" href="/signup">sign up</a></span>
                            </div>
                        </div>

                    </form>
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default LoginForm

