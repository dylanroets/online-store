import { Link } from "react-router-dom";

const NavigationItem = ({ link, title }) => {
  return (
    <li>
      <Link className={"nav-link-style"} to={link}>
        {title}
      </Link>
    </li>
  );
};

export default NavigationItem;
