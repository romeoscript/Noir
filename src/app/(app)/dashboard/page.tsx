"use client";

import { useWalletUi } from "@wallet-ui/react";
import { OfferListing } from "@/components/dealforge/offer-listing";
import { WalletButton } from "@/components/solana/solana-provider";

export default function DashboardPage() {
  const { account } = useWalletUi();

  if (!account) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-background">
        <div className="text-center">
          <h1 className="mb-4 font-bold text-2xl text-foreground">
            Connect Wallet
          </h1>
          <p className="mb-8 text-muted-foreground">
            Please connect your wallet to access the trading platform
          </p>
          <WalletButton />
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto py-8">
      <div className="mb-8 text-center">
        <h1 className="mb-2 font-bold text-3xl text-foreground">
          Browse Offers
        </h1>
        <p className="text-muted-foreground">
          Search for and interact with existing offers
        </p>
      </div>
      <OfferListing />
    </div>
  );
}
