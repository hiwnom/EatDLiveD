import "./ActivityForm.css"
import "../../components/progressbar/progressbar.css"

function ActivityForm() {
  return (
    <div>
      <div className="act-container">
        <div className="act-layout grid grid-rows-5 grid-cols-1">
            <div className="row-span-4 flex justify-center items-center">1</div>
            <div className="row-span-1 flex justify-center items-center">
                <div className="progress-layout">
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
        </div>
      </div>
    </div>
  )
}

export default ActivityForm
