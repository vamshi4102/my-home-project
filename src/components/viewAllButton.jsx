import React from "react";
import "./styles/reusable-styles.scss"
function ViewAllButton({ title, onPress }) {
  return (
   <center>
     <button className="view-all-button my-3" onClick={onPress}>
      {title}
    </button>
   </center>
  );
}

export default ViewAllButton;
