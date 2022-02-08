import React from "react";
import instaLogo from "../assets/instagram.png";
import twitLogo from "../assets/twitter.png";
import moreLogo from "../assets/more.png";
import "../styles/Main.css";

const Main = ({ selected }) => {
  console.log(selected);
  return (
    <div className="main">
      <div className="mainContent">
        <div className="cardHighlight">
          <div className="cardContainer">
            <img
              src={selected?.image_url ? selected.image_url : ""}
              className="selectedCard"
              alt=""
            />
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            flex: 0.75,
          }}
        >
          <div className="cardDetails" style={{ color: "#fff" }}>
            <div className="cardTitle">
              {selected?.name ? selected.name : ""}
            </div>
            <span className="cardNumber">
              &#8226;{selected?.token_id ? selected.token_id : ""}
            </span>
          </div>
          <div className="owner">
            <div className="ownerImageContainer">
              <img
                src={
                  selected?.owner?.profile_img_url
                    ? selected.owner.profile_img_url
                    : ""
                }
                alt=""
              />
            </div>
            <div className="ownerDetails">
              <div className="ownerNameAndHandle">
                <div style={{ color: "#fff" }}>
                  {selected?.owner?.address ? selected?.owner.address : ""}
                </div>
                <div className="ownerHandle">
                  {" "}
                  @
                  {selected?.owner?.user?.username
                    ? selected.owner.user.username
                    : ""}
                </div>
              </div>
              <div className="ownerLink">
                <img src={instaLogo} alt="" />
              </div>
              <div className="ownerLink">
                <img src={twitLogo} alt="" />
              </div>
              <div className="ownerLink">
                <img src={moreLogo} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
