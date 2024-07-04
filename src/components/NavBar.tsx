import { Announcement } from "./Announcement";
import { FaCircleUser } from "react-icons/fa6";
import { NavBarTheme } from "../constants/styles";
export const NavBar = () => {
  return (
    <div>
      <Announcement />
      <div className={NavBarTheme.container}>
        <ul className={NavBarTheme.unorderedList1}>
          <li className={NavBarTheme.listItem1}>BREW</li>
          <li>Shop</li>
          <li>About</li>
          <li>Location & Hours</li>
        </ul>
        <ul className={NavBarTheme.unorderedList2}>
          <li className={NavBarTheme.logIn}>
            <FaCircleUser className={NavBarTheme.logInIcon} /> Log In
          </li>
          <li>Cart</li>
          <li>
            <input
              className={NavBarTheme.button}
              type="button"
              value="Order Online"
            ></input>
          </li>
        </ul>
      </div>
    </div>
  );
};
