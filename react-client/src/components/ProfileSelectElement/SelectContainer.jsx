import "./SelectContainer.css"
import img_icon from "../../assets/image-icon.svg"
import { useState, useEffect } from "react"
import avatarImg from "./avatarImg.json"

// eslint-disable-next-line react/prop-types
function SelectContainer({onValueSelect, value1, value2}) {
  const avatar_img = avatarImg["avatar_img"]
  const [avatarId, setAvatarID] = useState("avatar00");

  useEffect(() => {
    setAvatarID(value2)

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value1])
 
  return (
    <div>
      <div onClick={() => onValueSelect({isSel : false, avatarId : value2})} className="sel-container">
        <div onClick={(event) => event.stopPropagation()} className="sel-content bounce">
            <div className="sel-layout grid grid-cols-12">
                <div onClick={() => onValueSelect({sel : false, avatarId : value2})} className="sel-exist-btn">x</div>
                <div className="sel-preview-layout col-span-4 flex justify-center items-center max-lg:col-span-12">
                    <div className="sel-preview-layout max-lg:m-auto">
                        <div className="sel-heading text-center">Select Avatar</div>
                        <div className="sel-preview-avatar mx-auto my-8 ">
                            {avatarId != "avatar00" ? avatar_img[avatarId] : <img src={img_icon} alt="img icon" />}
                            
                            
                        </div>  
                        <div className="flex justify-center">
                            <div onClick={() => onValueSelect({sel : false, avatarId : avatarId})} className="btn sel-btn-success">Selected</div>
                        </div>
                    </div>
                </div>
                <div className="col-span-1 flex justify-center items-center max-lg:hidden">
                    <div className="sel-preview-line">

                    </div>
                </div>
                <div className="col-span-7 flex justify-center items-center max-lg:col-span-12">
                    <div className="sel-group-avatar grid grid-cols-3">
                        <div id="avatar01" onClick={(e) => setAvatarID(e.target.id)}>avatar1</div>
                        <div id="avatar02" onClick={(e) => setAvatarID(e.target.id)}>avatar2</div>
                        <div id="avatar03" onClick={(e) => setAvatarID(e.target.id)}>avatar3</div>
                        <div id="avatar04" onClick={(e) => setAvatarID(e.target.id)}>avatar4</div>
                        <div id="avatar05" onClick={(e) => setAvatarID(e.target.id)}>avatar5</div>
                        <div id="avatar06" onClick={(e) => setAvatarID(e.target.id)}>avatar6</div>
                        <div id="avatar06" onClick={(e) => setAvatarID(e.target.id)}>avatar6</div>
                        <div id="avatar06" onClick={(e) => setAvatarID(e.target.id)}>avatar6</div>
                        <div id="avatar06" onClick={(e) => setAvatarID(e.target.id)}>avatar6</div>

                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default SelectContainer
