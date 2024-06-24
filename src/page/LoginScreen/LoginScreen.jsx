import { useEffect  } from "react";
import PropTypes from "prop-types";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Google from "../../Components/Google"
import Login from "../../Components/Login";
import "../../login.css"



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
      <div className="listContainer">
        <img
          src="http://getwallpapers.com/wallpaper/full/d/7/8/302180.jpg"
          style={{ width: "100%" }}
        />
      </div>
      <div className="formContainer">
        <div className="loContainer">
        <div className="auth-tabs">
          <Tabs>
            <TabList>
              <Tab>Register</Tab>
              <Tab>Login</Tab>
            </TabList>

            <TabPanel>
        <Google/>
            </TabPanel>
            <TabPanel>
      <Login/>
            </TabPanel>
          </Tabs>
          </div>
        </div>
      </div>
    </div>

  );
}
LoginScreen.propTypes = {
  setActiveTab: PropTypes.func.isRequired,
};
