import "../styles/RegistForm.css"
import "../styles/FormElement.css"
import Background from "../assets/Vector.svg"

function RegistForm() {
  return (
    <div>
      <div className="regis-content d-flex flex-column align-items-center">
        <img className="regis-background" src={Background} alt="" />
        <div className="regis-layout d-flex flex-column align-items-center">
            <form action="/accountinfo" className="regis-form-layout">
                <div className="regis-heading text-center">Sign up</div>
                <div className="my-3">
                    <label className="form-label">Username</label>
                    <input type="input" className="form-control" placeholder="Username" />
                </div>
                <div className="my-3">
                    <label className="form-label">Email address</label>
                    <input type="email" className="form-control" placeholder="xxxxx@mail.com" />
                </div>
                <div className="my-3">
                    <label className="form-label">Password</label>
                    <input type="password" className="form-control" placeholder="8 letter or more" />
                </div>
                <div className="my-3">
                    <label className="form-label">Confirm Password</label>
                    <input type="password" className="form-control" placeholder="8 letter or more" />
                </div>
                <div className="regis-checkbox">i agree with</div>
                <div className="my-4">
                    <button type="submit" className="btn btn-success">Next</button>
                </div>
            </form>
            <div className="progress-layout">
                <div className="progress-line"></div>
                <div className="progress-bars">
                    <div className="fill-progress">1</div>
                    <div>2</div>
                    <div>3</div>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default RegistForm
