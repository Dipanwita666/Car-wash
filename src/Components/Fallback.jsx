import { Link } from "react-router-dom";

const Fallback = (props) => {
    return(
    <>
      <div className="container p-50">
            <div className="conatainer w-100 m-auto">
                <div className="row mb-1 mt-1">
      <div> <Link type="button" className="btn btn-info to" to={"/"}>
                  Go back to home </Link>
      </div>
      </div>
      </div>
      </div>
    </>
    );
};

export default Fallback;