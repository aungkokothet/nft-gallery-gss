import { createThirdwebClient, getContract, defineChain } from "thirdweb";
import type { Chain } from "thirdweb/types";

/** Define the Polygon zkEVM Cardona Testnet as a custom chain **/
export const cardonaTestnet: Chain = defineChain({
  id: 2442,
  name: "Polygon zkEVM Cardona Testnet",
  network: "polygon-zkevm-cardona-testnet",
  nativeCurrency: {
    name: "Ether",
    symbol: "ETH",
    decimals: 18,
  },
  rpcUrls: ["https://rpc.cardona.zkevm-rpc.com", "https://2442.rpc.thirdweb.com/${THIRDWEB_API_KEY}"],
  blockExplorers: {
    default: { name: "polygonscan", url: "https://cardona-zkevm.polygonscan.com" },
  },
  testnet: true,
});

/** Initialize the thirdweb client **/
export const client = createThirdwebClient({
  clientId: import.meta.env.VITE_TEMPLATE_CLIENT_ID,
});

/** Set up your NFT contract using the defined custom chain **/
export const nftContract = getContract({
  address: "0x440fbb3e61A30973C3471b48eEC02020a1fbC9e7",
  chain: cardonaTestnet,
  client,
});

/** Optional block explorer link **/
export const blockExplorer = "https://cardona-zkevm.polygonscan.com";
