import "./styles/App.css";
import Header from "./components/Header";
import { useState, useEffect } from "react";
import axios from "axios";
import Collection from "./components/Collection";
import Main from "./components/Main";

function App() {
  const [nfts, setNFTs] = useState([]);
  const [selectedNFT, setSelectedNFT] = useState(null);
  const [nftSearch, setNFTSearch] = useState("");

  useEffect(() => {
    const getNFTs = async () => {
      const openSeaData = await axios.get(
        "https://testnets-api.opensea.io/api/v1/assets?asset_contract_address=0x43C699dcf81fDc7A97c799Ca9F971C734d5A88ea&order_direction=asc"
      );
      if (openSeaData) {
        setSelectedNFT(openSeaData.data.assets[0]);
        setNFTs(openSeaData.data.assets);
      }
    };
    getNFTs();
  }, []);

  return (
    <div className="app">
      <Header setNFTSearch={setNFTSearch} nftSearch={nftSearch} />
      <Main selected={selectedNFT} />
      <Collection
        nfts={nfts}
        setSelectedNFT={setSelectedNFT}
        nftSearch={nftSearch}
      />
    </div>
  );
}

export default App;
