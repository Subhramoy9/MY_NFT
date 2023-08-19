// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;
// import "@nomicfoundation/hardhat-toolbox";
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";


contract NFT is ERC721URIStorage,Ownable{

    using Counters for Counters.Counter;
    Counters.Counter private _tokenIds;

    constructor() ERC721("Shiba_un", "shiba"){}

    function mintNFT(address adr, string memory token_URI) public onlyOwner returns(uint256)
    {
        _tokenIds.increment();
        uint256 newId = _tokenIds.current();
        _mint(adr, newId);
        _setTokenURI(newId,token_URI);
        return newId;
     }
}
