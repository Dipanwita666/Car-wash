import { Link } from "react-router-dom";

const Welcome = (props) => {
    return (
        <div className="card" id="welcome-box" style={{ width: "30rem"}}>
            <div className="card-body ">
                <h1 className="card-title">
                Bring back the new car feelings
                    <br />
                    
                </h1>
                <p className="card-text">
                    The best care that your car can get is right here with our
                    verified washers
                </p>
                <Link to={"/login"} type="button" className="btn me-5 buttonc">
                    Book Now
                </Link>
                <Link to={"/login"} type="button" className="btn buttonc">
                    Schedule Later
                </Link>
            </div>
        </div>
    );
};

export default Welcome;