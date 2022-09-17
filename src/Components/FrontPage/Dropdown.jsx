import { Link } from "react-router-dom";

const DropDown = (props) => {
    return(
    <>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" type="button"  to={"/"}  >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" type="button"  to={"/"}>
                  Profile
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" type="button"  to={"/"}>
                  About Us
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" type="button"  to={"/"}>
                  Help
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" type="button"  to={"/login"}>
                  Login
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" type="button"  to={"/register"}>
                  Sign Up
                </Link>
              </li>
              {/* <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  to={"/"}
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Dropdown
                </Link>
                <ul className="dropdown-menu">
                  <li>
                    <Link className="dropdown-item" to={"/"}>
                      Action
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to={"/"}>
                      Another action
                    </Link>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <Link className="dropdown-item" to={"/"}>
                      Something else here
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <Link className="nav-link disabled">Disabled</Link>
              </li> */}
            </ul>
            {/* <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form> */}
          </div>
    </>
    );
};

export default DropDown;