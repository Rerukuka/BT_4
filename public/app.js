// Адрес и ABI контракта
const tokenAddress = "0xeff2fa37a7515c2628764af3f9d53c413d447130"; // Замените на свой адрес контракта
const tokenABI =[
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "initialOwner",
          "type": "address"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "spender",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "allowance",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "needed",
          "type": "uint256"
        }
      ],
      "name": "ERC20InsufficientAllowance",
      "type": "error"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "sender",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "balance",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "needed",
          "type": "uint256"
        }
      ],
      "name": "ERC20InsufficientBalance",
      "type": "error"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "approver",
          "type": "address"
        }
      ],
      "name": "ERC20InvalidApprover",
      "type": "error"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "receiver",
          "type": "address"
        }
      ],
      "name": "ERC20InvalidReceiver",
      "type": "error"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "sender",
          "type": "address"
        }
      ],
      "name": "ERC20InvalidSender",
      "type": "error"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "spender",
          "type": "address"
        }
      ],
      "name": "ERC20InvalidSpender",
      "type": "error"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "owner",
          "type": "address"
        }
      ],
      "name": "OwnableInvalidOwner",
      "type": "error"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "account",
          "type": "address"
        }
      ],
      "name": "OwnableUnauthorizedAccount",
      "type": "error"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "owner",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "spender",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "value",
          "type": "uint256"
        }
      ],
      "name": "Approval",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "previousOwner",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "newOwner",
          "type": "address"
        }
      ],
      "name": "OwnershipTransferred",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "sender",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "receiver",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "blockTimestamp",
          "type": "uint256"
        }
      ],
      "name": "TransactionDetails",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "from",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "value",
          "type": "uint256"
        }
      ],
      "name": "Transfer",
      "type": "event"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "owner",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "spender",
          "type": "address"
        }
      ],
      "name": "allowance",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "spender",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "value",
          "type": "uint256"
        }
      ],
      "name": "approve",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "account",
          "type": "address"
        }
      ],
      "name": "balanceOf",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "decimals",
      "outputs": [
        {
          "internalType": "uint8",
          "name": "",
          "type": "uint8"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "getLatestTransactionTimestamp",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "sender",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "receiver",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "getTransactionDetails",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "receiver",
          "type": "address"
        }
      ],
      "name": "getTransactionReceiver",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "pure",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "getTransactionSender",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "name",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "owner",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "renounceOwnership",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "symbol",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "totalSupply",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "value",
          "type": "uint256"
        }
      ],
      "name": "transfer",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "from",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "value",
          "type": "uint256"
        }
      ],
      "name": "transferFrom",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "newOwner",
          "type": "address"
        }
      ],
      "name": "transferOwnership",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ]

let web3;
let account;


async function connectWallet() {
    if (window.ethereum) {
        try {
            // Запрашиваем доступ к кошельку MetaMask
            await window.ethereum.request({ method: 'eth_requestAccounts' });

            // Устанавливаем Web3
            web3 = new Web3(window.ethereum);

            // Получаем аккаунт
            const accounts = await web3.eth.getAccounts();
            if (accounts.length > 0) {
                account = accounts[0];
                console.log('Connected account:', account);
                document.getElementById('walletAddress').textContent = `Wallet Address: ${account}`;
                await getTokenBalance(account); // Получаем баланс
            } else {
                alert("No accounts found. Please unlock your MetaMask wallet.");
            }
        } catch (error) {
            console.error("Error connecting to MetaMask:", error);
            alert("Failed to connect to MetaMask. Please try again.");
        }
    } else {
        alert("MetaMask is not installed. Please install MetaMask.");
    }
}

async function getTokenBalance(account) {
    const contract = new web3.eth.Contract(tokenABI, tokenAddress);

    try {
        // Получаем баланс токенов для текущего аккаунта
        const balance = await contract.methods.balanceOf(account).call();
        const tokenBalance = web3.utils.fromWei(balance, 'ether'); // Преобразуем баланс в удобный формат

        // Обновляем отображение баланса на сайте
        document.getElementById('tokenBalance').textContent = `Token Balance: ${tokenBalance} AIU`;
    } catch (error) {
        console.error("Error getting token balance:", error);
        document.getElementById('tokenBalance').textContent = "Token Balance: Error fetching balance";
    }
}

document.getElementById('connectButton').addEventListener('click', connectWallet);

window.ethereum.on('accountsChanged', (accounts) => {
    if (accounts.length > 0) {
        document.getElementById('walletAddress').textContent = `Wallet Address: ${accounts[0]}`;
        getTokenBalance(accounts[0]);  // Обновляем баланс при смене аккаунта
    } else {
        alert('MetaMask account disconnected!');
        document.getElementById('walletAddress').textContent = 'Wallet Address: Not connected';
        document.getElementById('tokenBalance').textContent = 'Token Balance: 0 AIU';
    }
});

// Функция для создания нового лота
async function createModelListing(event) {
  event.preventDefault();

  const modelName = document.getElementById("model-name").value;
  const modelDescription = document.getElementById("model-description").value;
  const modelPrice = document.getElementById("model-price").value;
  const modelFile = document.getElementById("model-file").files[0];

  // Получаем адрес кошелька (продавца) из MetaMask
  const sellerAddress = document.getElementById('walletAddress').textContent.split(': ')[1];

  if (!sellerAddress) {
    alert("Please connect your wallet first.");
    return;
  }

  // Отправка данных на сервер для хранения модели
  const formData = new FormData();
  formData.append("name", modelName);
  formData.append("description", modelDescription);
  formData.append("price", modelPrice);
  formData.append("file", modelFile);
  formData.append("seller", sellerAddress); // Добавляем адрес продавца

  const response = await fetch("/api/createModel", {
    method: "POST",
    body: formData,
  });

  if (response.ok) {
    alert("Model listed successfully!");
    loadModels(); // Перезагружаем список моделей
  } else {
    alert("Error listing model!");
  }
}

document.getElementById("create-model-form").addEventListener("submit", createModelListing);

// Функция для отображения моделей
async function loadModels() {
  const response = await fetch("/api/getModels");
  const models = await response.json();
  const modelsList = document.getElementById("models-list");

  modelsList.innerHTML = ""; // Очищаем список перед добавлением новых моделей

  models.forEach(model => {
    const modelItem = document.createElement("div");
    modelItem.classList.add("model-item");
    modelItem.innerHTML = `
      <h3>${model.name}</h3>
      <p>${model.description}</p>
      <p>Price: ${model.price} AIU</p>
      <p>Seller: ${model.seller}</p>
      <button onclick="buyModel('${model.seller}', '${model.price}')">Buy</button>
    `;
    modelsList.appendChild(modelItem);
  });
}

async function buyModel(sellerAddress, amount) {
  try {
      // Преобразуем цену в Wei
      const amountInWei = web3.utils.toWei(amount, 'ether');

      // Проверяем, что текущий адрес кошелька правильно получен
      const accounts = await web3.eth.getAccounts();
      const account = accounts[0]; // первый адрес из списка аккаунтов
      const contract = new web3.eth.Contract(tokenABI, tokenAddress);
      // Отправка транзакции
      const transaction = await contract.methods.transfer(sellerAddress, amountInWei).send({ from: account });

      // Ждем завершения транзакции
      await transaction.wait();

      alert("Purchase successful!");
  } catch (error) {
      console.error("Transaction failed:", error);
      alert('Transaction failed: ' + error.message);
  }
}

window.onload = loadModels;

