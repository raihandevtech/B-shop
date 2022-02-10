import { useState } from "react";
import HeaderBottom from "./HeaderBottom";
import HeaderSearchBar from "./HeaderSearchBar";
import HeaderTop from "./HeaderTop";
import NavMenu from "./NavMenu";

function Header() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMenu = () => setClick(false);

  const heightMenu = () => {
    if (window.scrollY >= 200) {
      setClick(false);
    }
  };

  window.addEventListener("scroll", heightMenu);

  return (
    <div>
      <HeaderTop />
      <div>
        <HeaderSearchBar />
        <HeaderBottom handleClick={handleClick} />
        <NavMenu click={click} closeMenu={closeMenu} />
      </div>
    </div>
  );
}

export default Header;
