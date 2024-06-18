import { useEffect } from "react";
import PropTypes from "prop-types";

export default function LoginScreen({ setActiveTab }) {
  useEffect(() => {
  try {
    axios.get('')
      .then(res=>console.log(res))
      .catch(err => console.log(err))
    
  } catch (error) {
    /////////////
  }
    setActiveTab(5);
  }, [setActiveTab]);
  return <div>LoginScreen</div>;
}
LoginScreen.propTypes = {
  setActiveTab: PropTypes.func.isRequired,
}; 