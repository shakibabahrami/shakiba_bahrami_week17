import React from "react";

const SidebarMenu = ({ deleteButton }) => {
  return (
    <div>
      <button onClick={deleteButton}>Delete Selected</button>
    </div>
  );
};

export default SidebarMenu;
