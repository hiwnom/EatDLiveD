import "./ManualRegister.css"
import "../../components/progressbar/progressbar.css"

function ManualRegister() {
  return (
    <div>
      <div className="regis-container">
        <div className="regis-layout grid grid-rows-5 grid-cols-1">
            <div className="row-span-4 flex justify-center items-center">
                <div className="regis-form-layout drop1">
                    <div className="regis-heading">SIGN UP</div>
                    <form action="/accinfo">
                        <div className="mt-2 mb-5">
                            <div className="label">
                                <span className="regis-label">Username</span>
                            </div>
                            <input type="input" name="username" id="username" placeholder="username" data-theme="light" className="input input-bordered w-full" />
                        </div>
                        <div className="my-5">
                            <div className="label">
                                <span className="regis-label">Email Adress</span>
                            </div>
                            <input type="email" name="email" id="email" placeholder="xxxxx@gmail.com" data-theme="light" className="input input-bordered w-full" />
                        </div>
                        <div className="my-5">
                            <div className="label">
                                <span className="regis-label">Password</span>
                            </div>
                            <input type="password" name="password" id="password" placeholder="8 letter or more" data-theme="light" className="input input-bordered w-full" />
                        </div>
                        <div className="my-5">
                            <div className="label">
                                <span className="regis-label">Confirm Password</span>
                            </div>
                            <input type="password" name="conf-password" id="conf-password" placeholder="confirm password" data-theme="light" className="input input-bordered w-full" />
                        </div>
                        <div className="form-control">
                            <label className="cursor-pointer label justify-start gap-2">
                                <input type="checkbox" className="checkbox checkbox-success" />
                                <span className="regis-label">i agree with</span>
                            </label>
                        </div>
                        <div className="my-5">
                            <button data-theme="light" className="btn regis-btn-success">Next</button>
                        </div>
                    </form>
                </div>
            </div>
            <div className="row-span-1 flex justify-center items-center">
                <div className="progress-layout">
                    <div className="flex justify-between progress-bar">
                        <div className="circle-animate-1">1</div>
                        <div>2</div>
                        <div>3</div>
                    </div>
                    <div className="progress-line">
                        <div className="fill-line-1"></div>
                    </div>
                </div>
            </div>
        </div>
        
      </div>
    </div>
  )
}

export default ManualRegister
