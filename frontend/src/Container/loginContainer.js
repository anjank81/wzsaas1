import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import {getLogin,updatePassword} from "../actions/login.action";
import Login from "../Components/Login";
const mapDispatchToProps = dispatch => {
  return {
    getLogin: userDetails => {
      dispatch(getLogin(userDetails));
    },
    updatePassword: userDetails => {
      dispatch(updatePassword(userDetails));
    }
  };
};
const mapStateToProps = state => {
  return {
   login: state.loginreducer.loginDetails,
   loginError: state.loginreducer,
   updatePassword:state
  };
};
const loginContainer = withRouter(
  connect(mapStateToProps, mapDispatchToProps)(Login)
);

export default loginContainer;
