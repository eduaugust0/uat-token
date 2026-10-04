import hardhatToolboxMochaEthersPlugin from "@nomicfoundation/hardhat-toolbox-mocha-ethers";
import { defineConfig } from "hardhat/config";

export default defineConfig({
  plugins: [hardhatToolboxMochaEthersPlugin],
  solidity: {
    profiles: {
      default: {
        version: "0.8.34",
      },
      production: {
        version: "0.8.34",
        settings: {
          optimizer: {
            enabled: true,
            runs: 200,
          },
        },
      },
    },
  },
  networks: {
    hardhatMainnet: {
      type: "edr-simulated",
      chainType: "l1",
    },
    hardhatOp: {
      type: "edr-simulated",
      chainType: "op",
    },
    sepolia: {
      type: "http",
      chainType: "l1",
      // Cole a sua URL da Alchemy diretamente aqui entre aspas para testar
      url: "https://eth-sepolia.g.alchemy.com/v2/alch_IiUGorOwdC0o1TZU-_q5y",
      // E coloque a sua chave privada da MetaMask aqui entre aspas (começando com 0x...)
      accounts: [
        "0xb1a9f66f1b9d59cda60ec81e287f523ff2907694a0638652ad262700a3b3380a",
      ],
    },
  },
});
