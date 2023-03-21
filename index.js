import "https://cdn.jsdelivr.net/npm/web3@latest/dist/web3.min.js";
import contract from "./contract.js";

//Load web3 into browser
async function loadWeb3() {
  if (window.ethereum) {
    window.web3 = new Web3(window.ethereum);
    window.ethereum.enable();
  }
}

//Load your contract from contract.js
async function loadGameContract() {
  await loadWeb3();
  window.contract = await loadContract();
}

async function loadContract() {
  return await new window.web3.eth.Contract(contract().abi, contract().address);
}

const ethereumButton = document.querySelector(".enableEthereumButton");
const showAccount = document.querySelector(".showAccount");
const showAmount = document.querySelector(".showAmount");
const convertButton = document.querySelector(".convertDollar");

ethereumButton.addEventListener("click", () => {
  getAccount();
});

convertButton.addEventListener("click", () => {
  convertDollarToBNB();
});

//Check if Metamask wallet is installed in browser
function CheckMetamaskInstalled() {
  if (typeof window.ethereum !== "undefined") {
    console.log("MetaMask is installed!");
  } else {
    console.log("Install Metamask First");
  }
}

//Get Ethereum Account
async function getAccount() {
  if (window.ethereum.networkVersion != 97) {
    showAccount.innerHTML = "Wrong Chain";
  } else {
    const accounts = await ethereum.request({ method: "eth_requestAccounts" });
    const account = accounts[0];
    showAccount.innerHTML = account;
    //Useraccount = account
    return account;
  }
}

getAccount();

async function convertDollarToBNB() {
  let value = document.getElementById("amount").value;
  await loadGameContract();
  let account = await getAccount();
  const result = await window.contract.methods
    .convertDollarToEther(parseInt(value))
    .call();
  let amount = result / 10 ** 18;
  showAmount.innerHTML = amount;
}

//Retrieve events
async function decodeLog() {
  await loadWeb3();
  const tx =
    "0xcccc9b37ee94737e8869b67ed9885a74e2fc24b5d8378de5cfef8073640cce24";
  const a = await window.web3.eth.getTransactionReceipt(tx);
  /* web3.eth.abi.decodeLog(
          [
            {
              internalType: "uint256[]",
              name: "_productIndex",
              type: "uint256[]",
            },
            {
              internalType: "string",
              name: "_str",
              type: "string",
            },
          ],
          a.logs[0].data,
          a.logs[0].topics
        ); */
  console.log(a);
}
