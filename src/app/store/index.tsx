import { ReactNode } from "react";
import { useGlobalStore } from "./global";

type StoreProviderProps = {
  children: ReactNode;
};

export function StoreProvider({ children }: StoreProviderProps) {
  return <>{children}</>;
}

export { useGlobalStore };
