"use client";
import dynamic from "next/dynamic";
import { Suspense } from "react";

// Add a loading component
const Loading = () => <div>Loading...</div>;

// Dynamically import the Community component
const CommunityPage = dynamic(
  () => import("@/components/Dashboard/Community"),
  {
    ssr: false,
    loading: Loading,
  }
);

// Wrap the export in Suspense
export default function Page() {
  return (
    <Suspense fallback={<Loading />}>
      <CommunityPage />
    </Suspense>
  );
}
