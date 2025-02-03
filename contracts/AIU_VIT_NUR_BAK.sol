// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract AIU_VIT_NUR_BAK is ERC20, Ownable {
    event TransactionDetails(
        address indexed sender,
        address indexed receiver,
        uint256 amount,
        uint256 blockTimestamp
    );

    constructor(address initialOwner) ERC20("AIU_VIT_NUR_BAK", "AIU") Ownable(initialOwner) {
        _mint(initialOwner, 2000 * 10 ** decimals()); // Mint 2000 tokens
    }

    function getTransactionDetails(
        address sender,
        address receiver,
        uint256 amount
    ) external {
        uint256 blockTimestamp = block.timestamp;
        emit TransactionDetails(sender, receiver, amount, blockTimestamp);
    }

    function getLatestTransactionTimestamp() external view returns (string memory) {
        uint256 timestamp = block.timestamp;
        return _timestampToString(timestamp);
    }

    function getTransactionSender() external view returns (address) {
        return msg.sender;
    }

    function getTransactionReceiver(address receiver) external pure returns (address) {
        return receiver;
    }

    function _timestampToString(uint256 timestamp) internal pure returns (string memory) {
        return string(abi.encodePacked("Timestamp: ", uint2str(timestamp)));
    }

    function uint2str(uint256 _i) internal pure returns (string memory) {
        if (_i == 0) {
            return "0";
        }
        uint256 j = _i;
        uint256 length;
        while (j != 0) {
            length++;
            j /= 10;
        }
        bytes memory bstr = new bytes(length);
        uint256 k = length;
        while (_i != 0) {
            k = k - 1;
            uint8 temp = uint8(48 + (_i % 10));
            bytes1 b1 = bytes1(temp);
            bstr[k] = b1;
            _i /= 10;
        }
        return string(bstr);
    }
}