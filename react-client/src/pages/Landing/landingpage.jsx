import Navbar from "../../components/navbar/navbar";
import "./landing.css";

export const Landing = () => {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div className="scroll-1">
        <div className="grid grid-rows-4 grid-cols-1 firstpage">
          <div className="row text-4xl font-semibold fontcolor-secondary">
            อยากดูแลสุขภาพ แต่ไม่รู้จะเริ่มอย่างไร
          </div>
          <div className="row text-8xl font-bold fontcolor-primary pt-1">
            " กินดีอยู่ดี "
          </div>
          <div className="row text-2xl font-semibold fontcolor-secondary pt-10">
            ตัวช่วยที่จะวางแผนมื้ออาหารให้คุณครบจบในที่เดียว
          </div>
          <div className="row">
            <a href="#">
              <button className="btn btn-start text-3xl">
                START TO DAY
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  class="bi bi-arrow-down-right-circle w-8 h-8"
                  viewBox="0 0 16 16"
                  preserveAspectRatio="xMaxYMid meet"
                >
                  <path
                    fill-rule="evenodd"
                    d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0M5.854 5.146a.5.5 0 1 0-.708.708L9.243 9.95H6.475a.5.5 0 1 0 0 1h3.975a.5.5 0 0 0 .5-.5V6.475a.5.5 0 1 0-1 0v2.768z"
                  />
                </svg>
              </button>
            </a>
          </div>
        </div>
      </div>

      <div className="scroll-2">
        <div className="grid grid-cols-2">
          <div className="col">
            <img src="src/assets/human2.svg" className="h-30" />
          </div>
          <div className="col pl-10 pt-20 fontcolor-white text-4xl">
            <div className="grid grid-cols-1">
              <div className="row">กินดีอยู่ดี คืออะไร ?</div>
              <div className="row fontcolor-white text-2xl">
                <p className="leading-loose">
                  Ipsum is simply dummy text of the printing and typesetting
                  industry. Lorem Ipsum has been the industry's standard dummy text
                  ever since the 1500s, when an unknown printer took a galley of
                  type and scrambled it to make a type specimen book. PageMaker
                  including versions of Lorem Ipsum.
                </p>
            </div>
            </div>

          </div>
        </div>
      </div>

      <div className="scroll-3">
        <div className="grid grid-cols-12">
          <div className="row col-span-12 text-4xl text-center fontcolor-secondary-2">
            <span>
              เริ่มต้นได้ง่ายเพียง{" "}
              <span style={{ color: "#FF7C43" }}>3 ขั้นตอน</span>
            </span>
          </div>

          <div className="row col-span-12 text-2xl text-center fontcolor-secondary-2">
            สามารถเริ่มวางแผนอาหารได้ง่ายเพียงไม่กี่คลิก หรือสามารถ ทดลองใช้
            ได้เลย
          </div>
        </div>

        <div className="scroll-3-1">
        <div className="grid">
          <div className="col col-center">
            <div className="boxland drop1">
              <div className="step3 iconh">
                <div className="iconsize" align="center">
                  <img src="src/assets/3step-1.svg" alt="Step 1" />
                </div>
              </div>
              <div className="step3 text-center text-2xl pt-1 fontcolor-primary-2">
                Login
              </div>
              <div className="step3 text-center text-base pt-3 fontcolor-secondary font-thin leading-loose">
                สามารถลงชื่อเข้าใช้งานด้วย Google Account
              </div>
            </div>
          </div>
          <div className="col col-center">
            <div className="boxland drop1">
              <div className="step3 iconh">
                <div className="iconsize" align="center">
                  <img src="src/assets/3step-2.svg" alt="Step 2" />
                </div>
              </div>
              <div className="step3 text-center text-2xl pt-1 fontcolor-primary-2">
                Information
              </div>
              <div className="step3 text-center text-base pt-3 fontcolor-secondary font-thin leading-loose">
                กรอกข้อมูลส่วนตัวครั้งแรกในการใช้งาน เช่น น้ำหนัก ส่วนสูง
                กิจกรรม เป็นต้น
              </div>
            </div>
          </div>
          <div className="col col-center">
            <div className="boxland drop1">
              <div className="step3 iconh">
                <div className="iconsize" align="center">
                  <img src="src/assets/3step-3.svg" alt="Step 3" />
                </div>
              </div>
              <div className="step3 text-center text-2xl pt-1 fontcolor-primary-2">
                Planning
              </div>
              <div className="step3 text-center text-base pt-3 fontcolor-secondary font-thin leading-loose">
                เข้าสู่หน้าต่างสำหรับวางแผนอาหารพร้อมใช้งาน
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>

     

      <div className="scroll-4">
        <div className="grid">
          <div className="col col-center text-4xl text-center fontcolor-primary">
            มากกว่าการวางแผนคือการใส่ใจ
          </div>
        </div>
        <div className="scroll-4-1">
        <div className="grid">
          
          <div className="col col-center">
            <div className="grid grid-rows-2 grid-cols-1">
              <div className="row col-center">
                <img src="src/assets/fe1.svg" alt="Step 1" className="iconh"/>
              </div>
              <div className="row text-center text-2xl fontcolor-secondary pt-5">
                Login
              </div>
            </div>
          </div>

          <div className="col col-center">
            <div className="grid grid-rows-2 grid-cols-1">
              <div className="row col-center">
                <img src="src/assets/fe2.svg" alt="Step 2" className="iconh"/>
              </div>
              <div className="row text-center text-2xl fontcolor-secondary pt-5">
                Login
              </div>
            </div>
          </div>
          
          <div className="col col-center">
            <div className="grid grid-rows-2 grid-cols-1">
              <div className="row col-center">
                <img src="src/assets/fe3.svg" alt="Step 3" className="iconh"/>
              </div>
              <div className="row text-center text-2xl fontcolor-secondary pt-5">
                Login
              </div>
            </div>
          </div>

          <div className="col col-center">
            <div className="grid grid-rows-2 grid-cols-1">
              <div className="row col-center">
                <img src="src/assets/fe4.svg" alt="Step 4" className="iconh"/>
              </div>
              <div className="row text-center text-2xl fontcolor-secondar pt-5">
                Login
              </div>
            </div>
          </div>
        </div>

      </div>
      </div>

      

      <div className="scroll-5">
        <div className="grid grid-cols-2 grid-rows-3">
          <div className="col row-span-3">
            <img src="src/assets/twohuman.svg"  className="h-500" />
          </div>
          <div className="col text-4xl  fontcolor-secondary-2 pt-10">
            The unseen of spending three years at Pixelgrade
          </div>
          <div className="col text-4xl  fontcolor-secondary-2 pt-0">
            <p className="col text-base fontcolor-secondary font-thin leading-loose">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed porta. Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor. Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec elementum pulvinar odio.
            </p>
          </div>
          <div className="col">
            <a href=""><button className="btn btn-success">Learn More</button></a>
          </div>
        </div>
      </div>

      <div className="footter">

      </div>


    </div>
  );
}
