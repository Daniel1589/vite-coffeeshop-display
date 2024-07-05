import { FaRegCopyright } from "react-icons/fa";
import { FooterTheme } from "../constants/styles";

export const Footer = () => {
  return (
    <div className={FooterTheme.mainContainer}>
      <div className={FooterTheme.bottomInfo}>
        <ul className={FooterTheme.ul1}>
          <li>TERMS & CONDITIONS</li>
          <li>PRIVACY POLICY</li>
          <li>SHIPPING POLICY</li>
          <li>REFUND POLICY</li>
          <li>COOKIE POLICY</li>
        </ul>
        <div className={FooterTheme.copyright}>
          <FaRegCopyright className={FooterTheme.icon} />
          <div>2035 by BREW.</div>
        </div>
      </div>
      <div className={FooterTheme.info1}>
        <h1 className={FooterTheme.header}>COME VISIT US</h1>
        <ul className={FooterTheme.ul2}>
          <li>500 TERRY FRANCINE STREET</li>
          <li>SAN FRANCISCO, CA 94158</li>
        </ul>
        <ul className={FooterTheme.ul3}>
          <li>MON - FRI: 8AM - 8PM</li>
          <li>​​SATURDAY: 9AM - 7PM</li>
          <li>SUNDAY: 9AM - 8PM</li>
        </ul>
        <ul className={FooterTheme.ul4}>
          <li>INSTAGRAM</li>
          <li>FACEBOOK</li>
          <li>TWITTER</li>
        </ul>
      </div>

      <div className={FooterTheme.info2}>
        <h1 className={FooterTheme.header}>TALK TO US</h1>
        <ul className={FooterTheme.ul5}>
          <li>INFO@MYSITE.COM</li>
          <li>123 456 6780</li>
        </ul>
        <div className={FooterTheme.subscribebox}>
          <div className={FooterTheme.header2}>
            Subscribe to our Newsletter *
          </div>
          <input
            className={FooterTheme.textArea}
            type="text"
            value="Email adress"
          />
          <input
            className={FooterTheme.button}
            type="button"
            value="Subscribe"
          />
        </div>
      </div>
    </div>
  );
};
