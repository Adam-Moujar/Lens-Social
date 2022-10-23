import "./contracts/NFT.sol"


const ERC20TransferABI = [
    {
      constant: false,
      inputs: [
        {
          name: "_to",
          type: "address",
        },
        {
          name: "_value",
          type: "uint256",
        },
      ],
      name: "transfer",
      outputs: [
        {
          name: "",
          type: "bool",
        },
      ],
      payable: false,
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      constant: true,
      inputs: [
        {
          name: "_owner",
          type: "address",
        },
      ],
      name: "balanceOf",
      outputs: [
        {
          name: "balance",
          type: "uint256",
        },
      ],
      payable: false,
      stateMutability: "view",
      type: "function",
    },
  ]

const senderAddress = "0xa3A5BAa55A192FA88D74b3F40e38baB0d946e038"
const receiverAddress = "0xA3A8c7F1888F281D68697048286aB7749BAff94c"

const web3 = new Web3("http://localhost:8545")

const abi = require('../build/contracts/NFT.json').abi;
const counter = new web3.eth.Contract(abi, address);


function createNFT(){
   newToken = NFT.mintToken("bobo",senderAddress);

};


function transfer( ID ){

    





}

const NFT = artifacts.require('NFT');
const nft = await NFT.deployed();