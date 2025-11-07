import {
  createSolanaDevnet,
  createWalletUiConfig,
  WalletUi,
} from "@wallet-ui/react";
import dynamic from "next/dynamic";
import type { ReactNode } from "react";

export const WalletButton = dynamic(
  async () => (await import("@wallet-ui/react")).WalletUiDropdown,
  {
    ssr: false,
  }
);
export const ClusterButton = dynamic(
  async () => (await import("@wallet-ui/react")).WalletUiClusterDropdown,
  {
    ssr: false,
  }
);

// Using devnet by default. To add localnet, import createSolanaLocalnet and add it to the clusters array,
// then start the validator with: bun run anchor-localnet
const config = createWalletUiConfig({
  clusters: [createSolanaDevnet()],
});

export function SolanaProvider({ children }: { children: ReactNode }) {
  return <WalletUi config={config}>{children}</WalletUi>;
}
