//SPDX-License-Identifier: MITs
pragma solidity ^0.8.0;

import "@chainlink/contracts/src/v0.8/interfaces/AggregatorV3Interface.sol";

contract oracle {
    AggregatorV3Interface internal priceFeed;

    constructor() {
        priceFeed = AggregatorV3Interface(
            0x2514895c72f50D8bd4B4F9b1110F0D6bD2c97526
        );
    }

    function convertDollarToEther(
        uint256 amountInDollars
    ) public view returns (uint256) {
        uint256 etherPrice = uint256(getLatestPrice());
        uint256 amountInWei = (amountInDollars *
            10 ** 18 *
            10 ** getDecimals()) / etherPrice;
        return amountInWei;
    }

    function getLatestPrice() public view returns (int) {
        (, int price, , , ) = priceFeed.latestRoundData();
        return price;
    }

    function getDecimals() public view returns (uint8) {
        return priceFeed.decimals();
    }
}
