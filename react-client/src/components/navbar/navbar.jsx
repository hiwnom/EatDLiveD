import "./navbar.css"

export default function Navbar() {
  return (
    <div className="navbar drop1">
      <div className="navbar-start px-5">
      <img
              alt="LOGO"
              src="./src/assets/Logo.svg"
              width="10%"
      />
      </div>
      <div className="navbar-end px-5">
        <div className = "nav-container">
            <div className="flex-items">
                <a href="https://www.leb2.org" className="btn btn-outline">ทดลองใช้</a>
            </div>
            <div className="flex-items">
                <a className="btn btn-success">ลงชื่อเข้าใช้</a>
            </div>
        </div>
        
      </div>
    </div>
  );
}
