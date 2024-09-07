import clsx from "clsx";
import styles from "../Header/header.module.scss";
function NavMain({ navContent }) {
  if (!navContent || !navContent.title || !navContent.content) {
    return <div className={clsx(styles.NavMain)}></div>;
  }

  return (
    <div style={{ marginLeft: "10px" }} className={clsx(styles.NavMain)}>
      <h2>{navContent.title}</h2>
      <ul>
        {navContent.content.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default NavMain;
