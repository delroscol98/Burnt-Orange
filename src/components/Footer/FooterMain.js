import facebook from "../../assets/icons/facebook copy.svg";
import instagram from "../../assets/icons/instagram copy.svg";

import classes from "./Footer.module.css";

const FooterMain = (props) => {
  return (
    <div>
      <h4>Details</h4>
      <ul>
        {props.content.map((item) => {
          return <li className={classes.links}>{item}</li>;
        })}
        <div className={classes["icons-container"]}>
          <a href="#top">
            <img className={classes.icon} src={facebook} alt="facebook icon" />
          </a>
          <a href="#top">
            <img
              className={classes.icon}
              src={instagram}
              alt="instagram icon"
            />
          </a>
        </div>
      </ul>
    </div>
  );
};

export default FooterMain;
