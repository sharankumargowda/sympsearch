import { useEffect } from "react";
import PropTypes from "prop-types";

export default function MoreScreen({setActiveTab}) {
  useEffect(() => {
    setActiveTab(4);
  }, [setActiveTab]);
  return (
    <div>MoreScreen</div>
  )
}
MoreScreen.propTypes = {
  setActiveTab: PropTypes.func.isRequired,
};
