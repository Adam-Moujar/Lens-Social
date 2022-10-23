// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

// Import Auth from the access-control subdirectory
import "../@openzeppelin/contracts/token/ERC721/ERC721.sol";

contract NFT is ERC721{

address public owner;
uint256 ID =1;

struct color{
    uint ID;
    string name;
    address owner;
}

color[] public allTokens;

mapping(address => color[]) public tokenAdress;
mapping(string =>bool) public tokenExists;

    constructor()ERC721("colour","clr"){
        owner = msg.sender;

    }

    function getAllTokens() public view returns(color[] memory){
        return allTokens;
    }

    function getMyTokens(address owned) public view returns(color[] memory){
        return tokenAdress[owned];
    } 

    function mintToken(string calldata _tokenName,address owned) public payable
    returns(uint){
        require(!tokenExists[_tokenName],"hh");

        _safeMint(owned,ID);

        allTokens.push(color(ID,_tokenName,owned));

        tokenAdress[owned].push(color(ID,_tokenName,owned));

        tokenExists[_tokenName] = true;

        ID++;
        return ID--;

    }
}
