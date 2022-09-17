import { useSelector } from "react-redux";
import EditProfile from "./EditProfile";
import ViewProfile from "./ViewProfile";

const Profile = (props) => {
    // const user = useSelector( state => state.user);
    // const profileStage = useSelector(state => state.profileStage);
    
    const user = {
        firstName: "Dipanwita",
        lastName: "Dutta",
        email: "dipanwitadutta.666@gmail.com",
        phoneNumber: "6382639283",
        gender: "female",
        dateOfBirth: "18.04.2000"
    };
    const body = {
        "view": <ViewProfile user={user} />,
        "edit": <EditProfile user={user} /> 
    }

    return (
        <>
        {body["view"]}
        </>
    );
};

export default Profile;
