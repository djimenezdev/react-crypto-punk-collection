import React from "react";
import CollectionCard from "./CollectionCard";
import "../styles/Collection.css";

const Collection = ({ nfts, setSelectedNFT }) => {
  return (
    <div className="collectionContainer">
      <div className="collection">
        {nfts?.map((nft) => (
          <div key={nft.id} onClick={() => setSelectedNFT(nft)}>
            <CollectionCard
              id={nft.token_id}
              name={nft.name}
              traits={nft.traits}
              image={nft.image_url}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Collection;
