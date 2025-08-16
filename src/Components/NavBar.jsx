import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import MenuIcon from "@mui/icons-material/Menu";
import AnchorLink from "react-anchor-link-smooth-scroll";
import CloseIcon from "@mui/icons-material/Close";
import "../App.css";
// mui
import Button from "@mui/material/Button";
import { useRef } from "react";

const NavBar = () => {
  const menuRef = useRef();
  const openMenu = () => {
    menuRef.current.style.right = "0";
  };
  const closeMenu = () => {
    menuRef.current.style.right = "-250px";
  };

  return (
    <div className="nav-bar">
      <h3 style={{ textAlign: "center" }}>
        <i>Kaled Oudenani</i>
      </h3>
      <ul ref={menuRef}>
        <Button
          color="inherit"
          className="close-btn"
          style={{ display: "none" }}
          onClick={closeMenu}
        >
          <CloseIcon style={{ color: "black", fontSize: "32px" }} />
        </Button>
        <AnchorLink className="anchor-link" href="#home">
          <li>Home</li>
        </AnchorLink>
        <AnchorLink className="anchor-link" href="#about">
          <li>About</li>
        </AnchorLink>
        <AnchorLink className="anchor-link" href="#projects">
          <li>Projects</li>
        </AnchorLink>
        <AnchorLink className="anchor-link" href="#contact">
          <li>Contact</li>
        </AnchorLink>
      </ul>

      <Button
        color="inherit"
        className="side-menu"
        style={{ display: "none" }}
        onClick={openMenu}
      >
        <MenuIcon />
      </Button>
    </div>
  );
};

export default NavBar;
