import "./LoginPage.css"

const LoginPage = () => {
  return (
    <div>
      <div className="login-container">
        <div className="login-layout grid grid-row-2">
            <div className="flex justify-center items-center">
                <div className="login-image-layout"></div>
            </div>
            <div className="flex justify-center items-center">
                <div className="login-form-layout drop1">
                    <div className="login-logo"></div>
                    <form action="/">
                        <div className="sm:col-span-3 mt-5 mb-8">
                            <div className="label">
                                <span className="login-label">Email Adress</span>
                            </div>
                            <input type="email" name="email" id="email" placeholder="xxxxx@gmail.com" data-theme="light" className="input input-bordered input-success w-full" />
                        </div>
                        <div className="sm:col-span-3 my-8">
                            <div className="label">
                                <span className="login-label">password</span>
                            </div>
                            <input type="password" name="password" id="password" placeholder="password" data-theme="light" className="input input-bordered input-success w-full" />
                        </div>
                        <div className="my-5">
                            <button className="login-btn-success">LOGIN</button>
                        </div>
                        <div className="my-2 text-end">
                            <a className="login-link1-color login-forget" href="/">forget password ?</a>
                        </div>
                        <div className="my-5 text-center login-link1-color relative">
                            <hr />    
                            <div className="absolute login-or">or</div>
                        </div>
                        <div className="mb-3 relative">
                            <button className="login-google shadow-lg">Continue with Google</button>
                            <div className="login-google-logo"></div>
                        </div>
                        <div className="login-link2-color text-center mt-5">Need an account ? <span><a className="login-signup" href="/signup">SIGN UP</a></span></div>
                    </form>
                </div>
            </div>

        </div>
      </div>
    </div>
  )
}

export default LoginPage
