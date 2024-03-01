import "./ManualRegister.css"
import "../../components/progressbar/progressbar.css"
import {useNavigate} from "react-router-dom";
import { useState } from "react";

function ManualRegister() {
    const [formData, setFormData] = useState({
        username:'',
        fName:'',
        lName:'',
        email:'',
        password:'',
        password_confirmation:'',
        weight:'',
        height:'',
        age:'',
        gender:'',
        activity:''
    });

    const handleChange = (event) => {
        const {name, value} = event.target;
        setFormData( (prevData) => ({
            ...prevData,
            [name]: value,
        }));
    }

    const navigate = useNavigate();

    const toAccInfo=(event)=> {
        event.preventDefault();
        navigate('/accinfo', {state:formData});
    }

  return (
    <div>
      <div className="regis-container">
        <div className="regis-layout grid grid-cols-1">
            <div className="flex flex-col justify-center items-center">
                <div className="regis-form-layout drop1 bounce">
                    <div className="regis-heading">SIGN UP</div>
                    <form onSubmit={toAccInfo}>
                        <div className="mt-2 mb-5">
                            <div className="label">
                                <span className="regis-label">Username</span>
                            </div>
                            <input type="input" name="username" value={formData.username} onChange={handleChange} id="username" placeholder="username" data-theme="light" className="input input-bordered w-full" />
                        </div>
                        <div className="my-5">
                            <div className="label">
                                <span className="regis-label">Email Adress</span>
                            </div>
                            <input type="email" name="email" value={formData.email} onChange={handleChange} id="email" placeholder="xxxxx@gmail.com" data-theme="light" className="input input-bordered w-full" />
                        </div>
                        <div className="my-5">
                            <div className="label">
                                <span className="regis-label">Password</span>
                            </div>
                            <input type="password" name="password" value={formData.password} onChange={handleChange} id="password" placeholder="8 letter or more" data-theme="light" className="input input-bordered w-full" />
                        </div>
                        <div className="my-5">
                            <div className="label">
                                <span className="regis-label">Confirm Password</span>
                            </div>
                            <input type="password" name="password_confirmation"value={formData.password_confirmation} onChange={handleChange} id="conf-password" placeholder="confirm password" data-theme="light" className="input input-bordered w-full" />
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
                <div className="progress-layout mt-10">
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
