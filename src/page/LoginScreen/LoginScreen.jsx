import { useEffect } from "react";
import PropTypes from "prop-types";

export default function LoginScreen({ setActiveTab }) {
  useEffect(() => {
    setActiveTab(3);
  }, [setActiveTab]);
  return <div>LoginScreen</div>;
}
LoginScreen.propTypes = {
  setActiveTab: PropTypes.func.isRequired,
};