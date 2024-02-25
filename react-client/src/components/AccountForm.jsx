import "../styles/AccountForm.css"
import "../styles/FormElement.css"
import Background from "../assets/Vector.svg"

function AccountForm() {
  return (
    <div>
      <div className="acc-content d-flex flex-column align-items-center">
        <img className="acc-background" src={Background} alt="" />
        <div className="acc-layout d-flex flex-column align-items-center">
            <form action="/" className="acc-form-layout">
                <div className="acc-heading text-center">Account infomation</div>
                <div className="acc-description text-center">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi, laudantium. Nostrum sequi adipisci, iste cum blanditiis recusandae, unde </div>
                <div className="acc-grid-layout">
                    <div className="row">
                        <div className="col">
                            <label className="form-label">Frist Name</label>
                            <input type="input" className="form-control" placeholder="Frist Name" />
                        </div>
                        <div className="col">
                            <label className="form-label">Last Name</label>
                            <input type="input" className="form-control" placeholder="Last Name" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-2">
                            <label className="form-label">Age</label>
                            <input type="number" className="form-control" placeholder="00" />
                        </div>
                        <div className="col-2">
                            <label className="form-label">Gender</label>
                            <select className="form-select">
                            <option selected value="Male">Male</option>
                            <option value="Female">Female</option>
                            </select>
                        </div>
                        <div className="col-4">
                            <label className="form-label">Weight(kg.)</label>
                            <input type="input" className="form-control" placeholder="Ex. 70" />
                        </div>
                        <div className="col-4">
                            <label className="form-label">Height(kg.)</label>
                            <input type="input" className="form-control" placeholder="Ex. 170" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-5">
                            <label className="form-label">Bodyfat(%)</label>
                            <div className="acc-fat-input"></div>
                        </div>
                        <div className="col-4">
                            <label className="form-label">Background</label>
                            <div className="acc-background-input"></div>
                        </div>
                        <div className="col-3 position-relative">
                            <label className="form-label">Profile</label>
                            <div className="acc-profile-input position-absolute">
                                <div className="acc-profileImg my-2"></div>
                                <div>select avatar</div>
                                <div>or</div>
                                <div>upload Image</div>
                            </div>
                        </div>
                    </div>
                </div>
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

export default AccountForm
