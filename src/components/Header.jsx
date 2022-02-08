import "../styles/Header.css";
import punkLogo from "../assets/cryptopunk-logo.png";
import searchIcon from "../assets/search.png";
import themeLogoIcon from "../assets/theme-switch.png";

const Header = () => {
  return (
    <header className="header">
      <div className="logoContainer">
        <img src={punkLogo} className="punkLogo" alt="" />
      </div>
      <div className="searchContainer">
        <div className="searchIconContainer">
          <img src={searchIcon} alt="" />
        </div>
        <input className="searchInput" placeholder="Search for NFT by Name" />
      </div>
      <div className="headerItemsContainer">
        <p>Drops</p>
        <p>Marketplace</p>
        <p>Create</p>
      </div>
      <div className="headerActionsContainer">
        <div className="themeLogoContainer">
          <img src={themeLogoIcon} className="themeLogo" alt="" />
        </div>
      </div>
      <div className="headerButton">GET IN</div>
    </header>
  );
};

export default Header;
