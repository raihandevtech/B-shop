import CloseRoundedIcon from "@material-ui/icons/CloseRounded";
import { Link } from "react-router-dom";

function NavMenu({ click, closeMenu }) {
  return (
    <div className="container overflow_nav">
      <div className={`nav_menu_container ${click && "active"}`}>
        <div className="nav_menu">
          <div className="nav_menu_close" onClick={() => closeMenu()}>
            <CloseRoundedIcon className="icon" />
          </div>
          <div className="nav_menu_main">
            <ul>
              <li>
                <a>
                  <Link to="/" onClick={() => closeMenu()}>
                    Home
                  </Link>
                </a>
              </li>
              <li>
                <a>
                  <Link to="/catalog" onClick={() => closeMenu()}>
                    Catalog
                  </Link>
                </a>
              </li>
              <li>
                <a>
                  <Link to="/about" onClick={() => closeMenu()}>
                    About
                  </Link>
                </a>
              </li>
              <li>
                <a>
                  <Link to="/contact" onClick={() => closeMenu()}>
                    Contact
                  </Link>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavMenu;
