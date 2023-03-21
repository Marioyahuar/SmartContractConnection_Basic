const contract = () => {
  return {
    contractName: "Your contract name",
    network: "The network in which your contract was deployed",
    version: "0.0.1",
    address: "0xD020e993D18788Ac7c1E5099687009d953A041E3",
    abi: [
      {
        inputs: [],
        stateMutability: "nonpayable",
        type: "constructor",
      },
      {
        inputs: [
          {
            internalType: "uint256",
            name: "amountInDollars",
            type: "uint256",
          },
        ],
        name: "convertDollarToEther",
        outputs: [
          {
            internalType: "uint256",
            name: "",
            type: "uint256",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [],
        name: "getDecimals",
        outputs: [
          {
            internalType: "uint8",
            name: "",
            type: "uint8",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [],
        name: "getLatestPrice",
        outputs: [
          {
            internalType: "int256",
            name: "",
            type: "int256",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
    ],
  };
};

export default contract;
