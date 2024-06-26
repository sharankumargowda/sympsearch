import { useEffect  } from "react";
import PropTypes from "prop-types";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";





export default function LoginScreen({ setActiveTab }) {
  useEffect(() => {
    try {
      axios
        .get("")
        .then((res) => console.log(res))
        .catch((err) => console.log(err));
    } catch (error) {
      ///////////// 
    }
    setActiveTab(5);
  }, [setActiveTab]);

  return (
    <div className="loginScreen">

<div>login Screen</div>
   
    </div>

  );
}
LoginScreen.propTypes = {
  setActiveTab: PropTypes.func.isRequired,
};
