import classes from "./Footer.module.css";

const FooterFunctions = (props) => {
  return (
    <div>
      <h4>Functions</h4>

      <ul>
        {props.content.map((item) => {
          return (
            <li className={classes.links}>
              <a href="#top">{item}</a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default FooterFunctions;
