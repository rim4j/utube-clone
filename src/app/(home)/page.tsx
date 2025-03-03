import { HydrateClient, trpc } from "@/trpc/server";
import PageClient from "./client";
import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";

export default function Home() {
  void trpc.hello.prefetch({ text: "rimaj" });

  return (
    <HydrateClient>
      <Suspense fallback={<p>loading ...</p>}>
        <ErrorBoundary fallback={<p>error ...</p>}>
          <PageClient />
        </ErrorBoundary>
      </Suspense>
    </HydrateClient>
  );
}
