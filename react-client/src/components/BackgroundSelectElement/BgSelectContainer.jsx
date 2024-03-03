import "./BgSelectContainer.css"
import img_icon from "../../assets/image-icon.svg"
import "../ProfileSelectElement/SelectContainer.css"
import { useState, useEffect } from "react"
import BackgroundImg from "./backgroundImg.json"

// eslint-disable-next-line react/prop-types
function BgSelectContainer({onValueSelect, value1, value2}) {
    const background_img = BackgroundImg["background_img"]
    const [backgroundId, setbackgroundID] = useState("background00");

    useEffect(() => {
        setbackgroundID(value2)
    
      // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [value1])

      console.log(background_img["background02"])
  return (
    <div>
        <div onClick={() => onValueSelect({isSel : false, backgroundId : value2})} className="sel-container">
        <div onClick={(event) => event.stopPropagation()} className="sel-content bounce">
            <div className="sel-layout grid grid-cols-12">
                <div onClick={() => onValueSelect({isSel : false, backgroundId : value2})} className="sel-exist-btn">x</div>
                <div className="sel-preview-layout col-span-4 flex justify-center items-center max-lg:col-span-12">
                    <div className="sel-preview-layout max-lg:m-auto">
                        <div className="sel-heading text-center">Select Background</div>
                        <div className="sel-preview-background mx-auto my-8 ">
                            {backgroundId != "background00" ?  <img src={background_img[backgroundId]} alt={backgroundId} className="sel-background-frame" /> : <img src={img_icon} alt="img icon" />}
                            
                            
                        </div>  
                        <div className="flex justify-center">
                            <div onClick={() => onValueSelect({issel : false, backgroundId : backgroundId})} className="btn sel-btn-success">Selected</div>
                        </div>
                    </div>
                </div>
                <div className="col-span-1 flex justify-center items-center max-lg:hidden">
                    <div className="sel-preview-line">

                    </div>
                </div>
                <div className="col-span-7 flex justify-center items-center max-lg:col-span-12">
                    <div className="sel-group-background grid grid-cols-3 max-lg:grid-cols-2">
                        <div id="background01" onClick={() => setbackgroundID("background01")}>
                            <img src={background_img["background01"]} alt="background01" className="sel-background-frame" />
                        </div>
                        <div id="background02" onClick={() => setbackgroundID("background02")}>
                            <img src={background_img["background02"]} alt="background02" className="sel-background-frame" />
                        </div>
                        <div id="background03" onClick={() => setbackgroundID("background03")}>
                            <img src={background_img["background03"]} alt="background03" className="sel-background-frame" />
                        </div>
                        <div id="background04" onClick={() => setbackgroundID("background04")}>
                            <img src={background_img["background04"]} alt="background04" className="sel-background-frame" />
                        </div>
                        <div id="background05" onClick={() => setbackgroundID("background05")}>
                            <img src={background_img["background05"]} alt="background05" className="sel-background-frame" />
                        </div>
                        <div id="background06" onClick={() => setbackgroundID("background06")}>
                            <img src={background_img["background06"]} alt="background06" className="sel-background-frame" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default BgSelectContainer
