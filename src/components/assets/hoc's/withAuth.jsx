import {Navigate} from "react-router-dom";
import {connect} from "react-redux";
import {authUser} from "../../redux/authSlice";

export const withAuth = (Component) => {
    function CompWithAuth(props) {
        if(!props.isAuth) return <Navigate to='/login'/>
        return (
            <Component props={props}/>
        )
    }
    const mapStateToProps = state => {
        return {
            isAuth: state.auth.isAuth
        }
    }
    return connect(mapStateToProps, {authUser})(CompWithAuth)
}

export default withAuth