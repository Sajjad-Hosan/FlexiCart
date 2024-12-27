import PropTypes from "prop-types";

const AuthProvider = ({ children }) => {
  return <>{children}</>;
};

export default AuthProvider;
AuthProvider.propTypes = {
  children: PropTypes.node,
};
