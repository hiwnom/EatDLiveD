import './AccountInfo.css'
import "../../components/progressbar/progressbar.css"
import avatarImg from "../../components/ProfileSelectElement/avatarImg.json"
import backgroundImg from "../../components/BackgroundSelectElement/backgroundImg.json"
import img_icon from "../../assets/image-icon.svg"
import SelectContainer from '../../components/ProfileSelectElement/SelectContainer'
import BgSelectContainer from '../../components/BackgroundSelectElement/BgSelectContainer'
import { useState } from 'react'

function AccountInfo() {

  const avatar_img = avatarImg["avatar_img"]
  const background_img = backgroundImg["background_img"]

  const [Sel, setSel] = useState({isSel : false, avatarId : "avatar00"})
  const [SelBg, setSelBg] = useState({isSel : false, backgroundId : "background00"})
  const [fat, setFat] = useState("fat01")

  console.log(fat)

  const handleValueSelect = (values) => {
    setSel(values);
  };

  const BghandleValueSelect = (values) => {
    setSelBg(values);
  };

  return (
    <div className='relative'>
        {Sel.isSel ? <SelectContainer onValueSelect={handleValueSelect} value1={Sel.isSel} value2={Sel.avatarId} /> : <></> }
        {SelBg.isSel ? <BgSelectContainer onValueSelect={BghandleValueSelect} value1={SelBg.isSel} value2={SelBg.backgroundId} /> : <></> }

        
        <div className="acc-container max-md:px-20 max-xl:px-20">
            <div className="acc-layout grid grid-cols-1">
                <div className="flex flex-col justify-center items-center">
                    <div className="acc-form-layout drop1 bounce">
                        <div className="acc-heading my-3">Account infomation</div>
                        <div className="acc-description mb-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae laudantium quae voluptates</div>
                        <form action="/actinfo">
                            <div className='acc-form-grid grid grid-cols-12'>
                                <div className='col-span-6 max-lg:col-span-12'>
                                    <div className="acc-name-input grow">
                                        <div className="label">
                                            <span className="regis-label">Frist Name</span>
                                        </div>
                                        <input type="input" name="fname" id="fname" placeholder="Frist Name" data-theme="light" className="input input-bordered w-full" />
                                    </div>
                                </div>
                                <div className='col-span-6 justify-end max-lg:row-start-2 max-lg:col-span-12'>
                                    <div className="acc-name-input grow">
                                        <div className="label">
                                            <span className="regis-label">Last Name</span>
                                        </div>
                                        <input type="input" name="lname" id="lname" placeholder="Last Name" data-theme="light" className="input input-bordered w-full" />
                                    </div>
                                </div>
                                <div className='col-span-2 max-lg:row-start-3 max-lg:col-span-4'>
                                    <div className="acc-age-input">
                                        <div className="label">
                                            <span className="regis-label">Age</span>
                                        </div>
                                        <input type="number" name="age" id="age" placeholder="Age" data-theme="light" className="input input-bordered w-full" />
                                    </div>
                                </div>
                                <div className='col-span-3 max-lg:row-start-3 max-lg:col-span-8'>
                                    <div className="acc-gender-input grow">
                                        <div className="label">
                                            <span className="regis-label">Gender</span>
                                        </div>
                                        <select name="gender" id='gender' data-theme="light" className="select select-bordered w-full max-w-xs">
                                            <option disabled selected>Gender?</option>
                                            <option>Male</option>
                                            <option>Female</option>
                                        </select>
                                    </div>
                                </div>
                                <div className='col-span-3 max-lg:row-start-4 max-lg:col-span-6'>
                                    <div className="acc-height-input grow">
                                        <div className="label">
                                            <span className="regis-label">Weight (kg.)</span>
                                        </div>
                                        <input type="input" name="weight" id="weight" placeholder="Ex. 70" data-theme="light" className="input input-bordered w-full" />
                                    </div>
                                </div>
                                <div className='col-span-4 justify-end max-lg:row-start-4 max-lg:col-span-6'>
                                    <div className="acc-height-input grow">
                                        <div className="label">
                                            <span className="regis-label">Height (cm.)</span>
                                        </div>
                                        <input type="input" name="height" id="height" placeholder="Ex. 170" data-theme="light" className="input input-bordered w-full" />
                                    </div>
                                </div>
                                <div className='col-span-5 row-span-2 flex-col max-lg:row-start-5 max-lg:col-span-12'>
                                    <div className="label">
                                        <span className="regis-label">Body fat (%)</span>
                                    </div>
                                    <div className="acc-fat-input grid grid-cols-2">
                                        <div>
                                            <div id='fat01' onClick={() => (setFat("fat01"))} className="form-control">
                                                <label className="cursor-pointer label justify-start gap-2">
                                                    <input type="checkbox" checked={fat == "fat01"} data-theme="light" className="checkbox [--chkbg:theme(colors.green.600)] [--chkfg:white]" />
                                                    <span className="regis-label">ต่ำกว่า 10%</span>
                                                </label>
                                            </div>
                                            <div id='fat02' onClick={() => (setFat("fat02"))} className="form-control">
                                                <label className="cursor-pointer label justify-start gap-2">
                                                    <input type="checkbox" checked={fat == "fat02"} data-theme="light" className="checkbox [--chkbg:theme(colors.green.600)] [--chkfg:white]" />
                                                    <span className="regis-label">20 - 30%</span>
                                                </label>
                                            </div>
                                            <div id='fat03' onClick={() => (setFat("fat03"))} className="form-control">
                                                <label className="cursor-pointer label justify-start gap-2">
                                                    <input type="checkbox" checked={fat == "fat03"} data-theme="light" className="checkbox [--chkbg:theme(colors.green.600)] [--chkfg:white]" />
                                                    <span className="regis-label">30 - 40%</span>
                                                </label>
                                            </div>
                                            <div id='fat04' onClick={() => (setFat("fat04"))} className="form-control">
                                                <label className="cursor-pointer label justify-start gap-2">
                                                    <input type="checkbox" checked={fat == "fat04"} data-theme="light" className="checkbox [--chkbg:theme(colors.green.600)] [--chkfg:white]" />
                                                    <span className="regis-label">40 - 50%</span>
                                                </label>
                                            </div>
                                            <div id='fat05' onClick={() => (setFat("fat05"))} className="form-control">
                                                <label className="cursor-pointer label justify-start gap-2">
                                                    <input type="checkbox" checked={fat == "fat05"} data-theme="light" className="checkbox [--chkbg:theme(colors.green.600)] [--chkfg:white]" />
                                                    <span className="regis-label">มากกว่า 50%</span>
                                                </label>
                                            </div>
                                        </div>
                                        <div className='flex justify-center items-center flex-col'>
                                            <img src={img_icon} alt="img icon" />
                                            <p>{fat}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-span-4 flex-col max-lg:row-start-7 max-lg:col-span-7'>
                                    <div className="label">
                                        <span className="regis-label">Background</span>
                                    </div>
                                    <div className="acc-background-input grid grid-cols-4">
                                        <div onClick={() => (setSelBg({isSel : true, backgroundId : SelBg.backgroundId}))} className="background-frame col-span-3 m-auto max-xl:col-span-4">
                                            {SelBg.backgroundId != "background00" ? background_img[SelBg.backgroundId] : <img src={img_icon} alt="img icon" />}
                                        </div>
                                        <div className='col-span-1 my-auto max-xl:hidden'>
                                            <div onClick={() => (setSelBg({isSel : true, backgroundId : SelBg.backgroundId}))} className='cursor-pointer hover:text-black' >
                                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-arrow-bar-up ml-1" viewBox="0 0 16 16">
                                                    <path fillRule="evenodd" d="M8 10a.5.5 0 0 0 .5-.5V3.707l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L7.5 3.707V9.5a.5.5 0 0 0 .5.5m-7 2.5a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 0 1h-13a.5.5 0 0 1-.5-.5"/>
                                                </svg>
                                                Select
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-span-3 justify-end max-lg:row-start-7 max-lg:col-span-5 max-lg:block'>
                                    <div className='flex flex-col'>
                                        <div className="label">
                                            <span className="regis-label">Profile</span>
                                        </div>
                                        <div className="acc-profile-input">
                                            <div onClick={() => (setSel({isSel : true, avatarId : Sel.avatarId}))} className="image-frame my-2">
                                                {Sel.avatarId != "avatar00" ? avatar_img[Sel.avatarId] : <img src={img_icon} alt="img icon" />}
                                                
                                            </div>
                                            <div>Select Avatar</div>
                                            <div>or</div>
                                            <div className='acc-upload-image'>
                                                <label htmlFor="file-upload" className="custom-file-upload">
                                                    Upload picture
                                                </label>
                                                <input id="file-upload" type="file"/>
                                            </div>
                                        </div>
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
