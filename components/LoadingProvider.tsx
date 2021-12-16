import useAuth from "@/hooks/useAuth";
import React from "react";
import FullscreenLoader from "./FullscreenLoader";

const LoadingProvider = ({ children }) => {
  const { loading } = useAuth();
  if (loading) return <FullscreenLoader />;
  return <>{children}</>;
};

export default LoadingProvider;
