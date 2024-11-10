import { createThirdwebClient, getContract } from "thirdweb";
import { polygon-zkevm-cardona-testnet } from "thirdweb/chains";

/** Change these values to configure the application for your own use. **/

export const client = createThirdwebClient({
  clientId: import.meta.env.VITE_TEMPLATE_CLIENT_ID,
});

export const nftContract = getContract({
  // Your smart contract address (available on the thirdweb dashboard)
  address: "0x440fbb3e61A30973C3471b48eEC02020a1fbC9e7",
  // The chain object of the chain your contract is deployed to.
  // If that chain isn't in the default list of our SDK, use `defineChain` - for example: defineChain(666666)
  chain: polygon-zkevm-cardona-testnet,
  client,
});

// The block explorer you want to use (Opens when user clicks on history of events. i.e. transfers)
export const blockExplorer = "https://cardona-zkevm.polygonscan.com/";
