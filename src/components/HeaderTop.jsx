import MailOutlineRoundedIcon from "@material-ui/icons/MailOutlineRounded";
import PhoneEnabledRoundedIcon from "@material-ui/icons/PhoneEnabledRounded";
import RoomOutlinedIcon from "@material-ui/icons/RoomOutlined";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

function HeaderTop() {
  return (
    <div className="header_top_bg">
      <div className="header_top container">
        <div className="header_top_left">
          <div className="header_top_left_contact">
            <div className="header_top_left_contact_item">
              <MailOutlineRoundedIcon className="icon" />
              <p>info@brand.com</p>
            </div>
            <div className="header_top_left_contact_item">
              <PhoneEnabledRoundedIcon className="icon" />
              <p>+0288 121 1234</p>
            </div>
            <div className="header_top_left_contact_item">
              <RoomOutlinedIcon className="icon" />
              <p>+0288 121 1234</p>
            </div>
          </div>
        </div>
        <div className="header_top_right">
          <div className="header_top_right_social">
            <FacebookIcon className="icon" />
            <InstagramIcon className="icon" />
            <TwitterIcon className="icon" />
            <LinkedInIcon className="icon" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeaderTop;
