
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
// import { Navigate } from "react-router-dom";
// import setProfileStage from "../../Actions/ProfileStageAction";


const ViewProfile = (props) => {
    
    // const dispatch = useDispatch();
    const navigate= useNavigate()

    const goToEdit = () => {
        navigate("/profile/edit")
    
        // dispatch(setProfileStage("edit"));
        
    };

    return (
        <> 
            <div className="container p-5 tab-component">
                <div className="row user-info-row border-top border-2 border-primary">
                    <div className="row text-primary">Name</div>
                    <div className="row fs-4 placeholder-glow text-light">
                        {props.user.firstName}&nbsp;{props.user.lastName}
                    </div>
                </div>

                <div className="row user-info-row ">
                    <div className="row text-primary">Email Id</div>
                    <div className="row fs-4 placeholder-glow text-light">{props.user.email}</div>
                </div>
                <div className="row user-info-row ">
                    <div className="row text-primary">Contact number</div>
                    <div className="row fs-4 placeholder-glow text-light">{props.user.phoneNumber}</div>
                </div>
                <div className="row user-info-row ">
                    <div className="row text-primary">Gender</div>
                    {/* The JsUtils Service is to be used here to change it from all Caps */}
                    <div className="row fs-4 placeholder-glow text-light">{props.user.gender}</div>
                </div>
                <div className="row user-info-row ">
                    <div className="row text-primary">Birthday</div>
                    <div className="row fs-4 placeholder-glow text-light">{props.user.dateOfBirth}</div>
                </div>

                <div className="container-fluid py-2 mt-4 d-flex flex-row-reverse">
                    <button
                        onClick={goToEdit}
                        className="btn btn-outline-primary text-light"
                    >
                        Edit Profile
                    </button>

                </div>
            </div>
           
        </>
    );
};

export default ViewProfile;
