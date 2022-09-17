import DropDown from "./Dropdown";

const Navbar = (props) => {
  return (
    <>
      <nav nav className="navbar navbar-dark bg-dark border-bottom border-5 border-primary" >
        <div className="container-fluid">
    
          <a className="navbar-brand ms-2 fs-3" href="#">
          <img className="me-3" id='logo' src="logo.jpg"  style={{ width: "5%" , height: "5%" }}/>
            Green Wash
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

<DropDown/>


        </div>
      </nav>
    </>
  );
};

export default Navbar;
