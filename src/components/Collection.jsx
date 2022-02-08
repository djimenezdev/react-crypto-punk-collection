import React from "react";
import CollectionCard from "./CollectionCard";
import "../styles/Collection.css";
import { useEffect, useState } from "react";

const Collection = ({ nfts, setSelectedNFT, nftSearch }) => {
  const [filtered, setFiltered] = useState([]);
  useEffect(() => {
    if (nftSearch?.length > 0) {
      setFiltered(
        nfts?.filter((nft) => nft.name.toLowerCase().startsWith(nftSearch))
      );
    }
  }, [nftSearch, nfts]);

  useEffect(() => {
    if (nftSearch?.length > 0) {
      setSelectedNFT(filtered[0]);
    }
  }, [nftSearch, filtered, setSelectedNFT]);

  return (
    <div className="collectionContainer">
      <div className="collection">
        {nftSearch?.length > 0
          ? filtered.map((nft) => (
              <div key={nft.id} onClick={() => setSelectedNFT(nft)}>
                <CollectionCard
                  id={nft.token_id}
                  name={nft.name}
                  traits={nft.traits}
                  image={nft.image_url}
                />
              </div>
            ))
          : nfts?.map((nft) => (
              <div key={nft.id} onClick={() => setSelectedNFT(nft)}>
                <CollectionCard
                  id={nft.token_id}
                  name={nft.name}
                  traits={nft.traits}
                  image={nft.image_url}
                />
              </div>
            ))}

        {/* {nfts?.map((nft) => (
          <div key={nft.id} onClick={() => setSelectedNFT(nft)}>
            <CollectionCard
              id={nft.token_id}
              name={nft.name}
              traits={nft.traits}
              image={nft.image_url}
            />
          </div>
        ))} */}
      </div>
    </div>
  );
};

export default Collection;
