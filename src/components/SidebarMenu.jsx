import Styles from "./SidebarMenu.module.css"
const SidebarMenu = ({ deleteButton }) => {
  return (
    <div className={Styles.container}>
      <button onClick={deleteButton}>Delete Selected</button>
    </div>
  );
};

export default SidebarMenu;
