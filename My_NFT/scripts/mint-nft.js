


const { ethers } = require("ethers");

const alchemy_api_key = "9YrA0Y0LRtVnhohnfOAJhbqrZmG2ZGQW";
// const provider = ethers.getDefaultProvider("goerli", { alchemy: alchemy_api_key });
const infura_project_id = "https://mainnet.infura.io/v3/fcef5714610240089b6b3905ef875d28"
const provider = new ethers.providers.InfuraProvider("goerli", infura_project_id);
const contractAddress = "0x6262eB1285873Cc123Cb2CA4927aac88F24662aC";

const contract_json = require('../artifacts/contracts/NFT.sol/NFT.json');

async function mint_func(token_URI) {
  try {
    const signer = provider.getSigner();
    const contract = new ethers.Contract(contractAddress, contract_json.abi, signer);
    const tx = await contract.mintNFT("0xe6a0a94884BD4d690a317eF0e1d8b251E64222BF", token_URI);
    console.log(tx);
  } catch (err) {
    console.log(err);
  }
}

mint_func("https://gateway.pinata.cloud/ipfs/QmShrkF6yhW54NB3UGJxNVzYTSx2aLTBv72VcWfdPeXTRR");
