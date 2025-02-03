require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config(); // Подключаем dotenv для конфиденциальных данных

module.exports = {
  solidity: "0.8.20",
  networks: {
    sepolia: {
      url: process.env.SEPOLIA_RPC_URL || "", // URL RPC-сервера
      accounts: process.env.PRIVATE_KEY ? [process.env.PRIVATE_KEY] : [], // Приватный ключ кошелька
    },
  },
};