import './AccountInfo.css'
import "../../components/progressbar/progressbar.css"
import { useNavigate, useLocation } from 'react-router-dom';
import { useState } from "react";

function AccountInfo() {

    const location = useLocation();

    const [formData, setFormData] = useState(location.state);

    const handleChange = (event) => {
        const {name, value} = event.target;
        setFormData( (prevData) => ({
            ...prevData,
            [name]: value
        }));
    }

    const navigate = useNavigate();

    const toActInfo=(event)=> {
        event.preventDefault();
        navigate('/actinfo', {state:formData});
    }


  return (
    <div>
        <div className="acc-container max-md:px-20 max-xl:px-20">
            <div className="acc-layout grid grid-cols-1">
                <div className="flex flex-col justify-center items-center">
                    <div className="acc-form-layout drop1 bounce">
                        <div className="acc-heading my-3">Account infomation</div>
                        <div className="acc-description mb-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae laudantium quae voluptates doloremque explicabo tempora!</div>
                        <form onSubmit={toActInfo}>
                            <div className='acc-form-grid grid grid-cols-12'>
                                <div className='col-span-6 max-lg:col-span-12'>
                                    <div className="acc-name-input grow">
                                        <div className="label">
                                            <span className="regis-label">Frist Name</span>
                                        </div>
                                        <input type="input" name="fName" value={formData.fName} onChange={handleChange} id="fname" placeholder="Frist Name" data-theme="light" className="input input-bordered w-full" />
                                    </div>
                                </div>
                                <div className='col-span-6 justify-end max-lg:row-start-2 max-lg:col-span-12'>
                                    <div className="acc-name-input grow">
                                        <div className="label">
                                            <span className="regis-label">Last Name</span>
                                        </div>
                                        <input type="input" name="lName" value={formData.lName} onChange={handleChange} id="lname" placeholder="Last Name" data-theme="light" className="input input-bordered w-full" />
                                    </div>
                                </div>
                                <div className='col-span-2 max-lg:row-start-3 max-lg:col-span-4'>
                                    <div className="acc-age-input">
                                        <div className="label">
                                            <span className="regis-label">Age</span>
                                        </div>
                                        <input type="number" name="age" value={formData.age} onChange={handleChange} id="age" placeholder="Age" data-theme="light" className="input input-bordered w-full" />
                                    </div>
                                </div>
                                <div className='col-span-3 max-lg:row-start-3 max-lg:col-span-8'>
                                    <div className="acc-gender-input grow">
                                        <div className="label">
                                            <span className="regis-label">Gender</span>
                                        </div>
                                        <select name="gender" value={formData.gender} onChange={handleChange} id='gender' data-theme="light" className="select select-bordered w-full max-w-xs">
                                            <option disabled selected>Gender?</option>
                                            <option value="male">Male</option>
                                            <option value="female">Female</option>
                                        </select>
                                    </div>
                                </div>
                                <div className='col-span-3 max-lg:row-start-4 max-lg:col-span-6'>
                                    <div className="acc-height-input grow">
                                        <div className="label">
                                            <span className="regis-label">weight</span>
                                        </div>
                                        <input type="input" name="weight" value={formData.weight} onChange={handleChange}id="weight" placeholder="Ex. 70" data-theme="light" className="input input-bordered w-full" />
                                    </div>
                                </div>
                                <div className='col-span-4 justify-end max-lg:row-start-4 max-lg:col-span-6'>
                                    <div className="acc-height-input grow">
                                        <div className="label">
                                            <span className="regis-label">height</span>
                                        </div>
                                        <input type="input" name="height"value={formData.height} onChange={handleChange} id="height" placeholder="Ex. 170" data-theme="light" className="input input-bordered w-full" />
                                    </div>
                                </div>
                                <div className='col-span-5 row-span-2 max-lg:row-start-5 max-lg:col-span-12'>
                                    <div className="acc-fat-input mt-7">

                                    </div>
                                </div>
                                <div className='col-span-4 max-lg:row-start-7 max-lg:col-span-7'>
                                    <div className="acc-background-input mt-7">

                                    </div>
                                </div>
                                <div className='col-span-3 justify-end max-lg:row-start-7 max-lg:col-span-5'>
                                    <div className="acc-profile-input mt-7">

                                    </div>
                                </div>

                                <div className='col-span-12 mt-auto max-lg:row-start-8'>
                                    <div className="mt-7 mb-8 mx-auto">
                                        <button data-theme="light" className="btn acc-btn-success">Next</button>
                                    </div>
                                </div>

                            </div>
                        </form>
                    </div>
                    <div className="progress-layout mt-10">
                        <div className="flex justify-between progress-bar">
                            <div className="fill-circle">1</div>
                            <div className='circle-animate-1'>2</div>
                            <div>3</div>
                        </div>
                        <div className="progress-line">
                            <div className="fill-line-2"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AccountInfo
