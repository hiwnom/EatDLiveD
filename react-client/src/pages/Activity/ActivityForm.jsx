import "./ActivityForm.css"
import "../../components/progressbar/progressbar.css"
import { useState } from "react"

function ActivityForm() {

    const [sel, setSel] = useState("act-0")

    
  return (
    <div>
      <div className="act-container max-md:px-20 max-xl:px-20">
        <div className="act-layout grid grid-cols-1">
            <div className="flex flex-col justify-center items-center">
              <div className="act-form-layout drop1 bounce">
                <div className="act-heading">Activity</div>
                <div className="act-description">Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
                <form action="/">
                  <div className="act-form-grid grid gird-cols-1">
                    <div>
                      <div id="act-1" onClick={(e)=>{setSel(e.target.id)}} className={ sel == "act-1" ? "act-selected" : "act-selector"}>
                        ไม่ได้ออกกำลังกาย หรือ นานๆทีออกกำลังกาย
                      </div>
                    </div>
                    <div>
                      <div id="act-2" onClick={(e)=>{setSel(e.target.id)}} className={ sel == "act-2" ? "act-selected" : "act-selector"}>
                        ออกกำลังกายหรือขยับร่างกาย ประมาณ 1 - 3 วันต่อสัปดาห์
                      </div>
                    </div>
                    <div>
                      <div id="act-3" onClick={(e)=>{setSel(e.target.id)}} className={ sel == "act-3" ? "act-selected" : "act-selector"}>
                        ออกกำลังกายหรือขยับร่างกาย ประมาณ 3 - 5 วันต่อสัปดาห์
                      </div>
                    </div>
                    <div>
                      <div id="act-4" onClick={(e)=>{setSel(e.target.id)}} className={ sel == "act-4" ? "act-selected" : "act-selector"}>
                        ออกกำลังกายหรือขยับร่างกาย ประมาณ 5 - 7 วันต่อสัปดาห์
                      </div>
                    </div>
                    <div>
                      <div id="act-5" onClick={(e)=>{setSel(e.target.id)}} className={ sel == "act-5" ? "act-selected" : "act-selector"}>
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
