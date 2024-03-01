import "./ActivityForm.css"
import "../../components/progressbar/progressbar.css"
import { useNavigate, useLocation } from 'react-router-dom';
import { useState } from "react";
import axios from 'axios';

function ActivityForm() {

    const location = useLocation();

    const [formData, setFormData] = useState(location.state);
    const [sel, setSel] = useState("0")

    const handleChange= (event)=>{
      setSel(event.target.id);
      setFormData((prevData)=>({
        ...prevData,
        ["activity"]: sel
      }));
    }

    const handleSubmit=async (event)=>{
      event.preventDefault();
      // setFormData((prevData)=>({
      //   ...prevData,
      //   ["activity"]: sel
      // }));
      console.log(formData);
     
      try {
        const response = await axios.post('http://127.0.0.1:8000/api/register', formData);
      } catch(error) {
        console.log('Error sending req', error);
      }

    }
    
  return (
    <div>
      <div className="act-container max-md:px-20 max-xl:px-20">
        <div className="act-layout grid grid-cols-1">
            <div className="flex flex-col justify-center items-center">
              <div className="act-form-layout drop1 bounce">
                <div className="act-heading">Activity</div>
                <div className="act-description">Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
                <form onSubmit={handleSubmit}>
                  <div className="act-form-grid grid gird-cols-1">
                    <div>
                      <div id="1" onClick={handleChange} className={ sel == "1" ? "act-selected" : "act-selector"}>
                        ไม่ได้ออกกำลังกาย หรือ นานๆทีออกกำลังกาย
                      </div>
                    </div>
                    <div>
                      <div id="2" onClick={handleChange} className={ sel == "2" ? "act-selected" : "act-selector"}>
                        ออกกำลังกายหรือขยับร่างกาย ประมาณ 1 - 3 วันต่อสัปดาห์
                      </div>
                    </div>
                    <div>
                      <div id="3" onClick={handleChange} className={ sel == "3" ? "act-selected" : "act-selector"}>
                        ออกกำลังกายหรือขยับร่างกาย ประมาณ 3 - 5 วันต่อสัปดาห์
                      </div>
                    </div>
                    <div>
                      <div id="4" onClick={handleChange} className={ sel == "4" ? "act-selected" : "act-selector"}>
                        ออกกำลังกายหรือขยับร่างกาย ประมาณ 5 - 7 วันต่อสัปดาห์
                      </div>
                    </div>
                    <div>
                      <div id="5" onClick={handleChange} className={ sel == "5" ? "act-selected" : "act-selector"}>
                        ออกกำลังกายหรือขยับร่างกายทุกวัน ช่วงเช้า ช่วงเย็น
                      </div>
                    </div>

                    <div>
                      <div className="mx-auto">
                          <button data-theme="light" className="btn act-btn-success">Finish</button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
              <div className="progress-layout mt-10">
                  <div className="flex justify-between progress-bar">
                      <div className="fill-circle">1</div>
                      <div className='fill-circle'>2</div>
                      <div className="circle-animate-1">3</div>
                  </div>
                  <div className="progress-line">
                      <div className="fill-line-3"></div>
                  </div>
              </div>
            </div>
            <div className="row-span-1 flex justify-center items-center">
            </div>
        </div>
      </div>
    </div>
  )
}

export default ActivityForm
