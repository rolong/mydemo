var nodeABI = [
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "address",
				"name": "nid",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "address",
				"name": "addr",
				"type": "address"
			}
		],
		"name": "join",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "address",
				"name": "nid",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "address",
				"name": "addr",
				"type": "address"
			}
		],
		"name": "quit",
		"type": "event"
	},
	{
		"stateMutability": "nonpayable",
		"type": "fallback"
	},
	{
		"inputs": [],
		"name": "baseCost",
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
		"name": "charge",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "countOnlineNode",
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
		"name": "countReleasedNode",
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
		"name": "countTotalNode",
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
		"name": "getInfo",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "totalBalance",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "totalNodes",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "onlineNodes",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "releaseNodes",
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
				"name": "nid",
				"type": "address"
			}
		],
		"name": "getInvestor",
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
		"inputs": [
			{
				"internalType": "address",
				"name": "addr",
				"type": "address"
			}
		],
		"name": "getReleaseInfo",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "balanceMint",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "pendingAsset",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "lockedAsset",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "releaseTime",
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
				"name": "nid",
				"type": "address"
			}
		],
		"name": "has",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "investor2nid",
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
		"name": "lastNode",
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
		"name": "lastOnlineNode",
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
		"name": "logout",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "nodeCost",
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
				"name": "",
				"type": "address"
			}
		],
		"name": "nodes",
		"outputs": [
			{
				"internalType": "address",
				"name": "preNode",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "nextNode",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "preOnlineNode",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "nextOnlineNode",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "investor",
				"type": "address"
			},
			{
				"internalType": "uint8",
				"name": "status",
				"type": "uint8"
			},
			{
				"internalType": "uint256",
				"name": "blockRegister",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "blockOnline",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "blockLastWithdraw",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "balancePledge",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "balancePledgeDebt",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "balanceMint",
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
				"name": "nid",
				"type": "address"
			}
		],
		"name": "pendingCalc",
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
				"internalType": "address payable",
				"name": "nid",
				"type": "address"
			}
		],
		"name": "register",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address payable",
				"name": "nid",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "owner",
				"type": "address"
			}
		],
		"name": "registerAgent",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "releaseBlocks",
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
		"name": "withdrawMint",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "withdrawPledge",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	}
]
