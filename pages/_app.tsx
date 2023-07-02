import type { AppProps } from "next/app";
import { QueryClientProvider } from "react-query";
import { useStore } from "zustand";
import { queryClient } from "../components/query/queryClient";
import "reactflow/dist/style.css";
import "../components/styled/reset.css";
import "../components/styled/global.css";
import { modalStore } from "../components/layout/useModal";
import { Modal } from "../components/layout/Modal";

// _app.tsx is sort of like our "TopLevelLayout" component from GatsbyJS frontdoor build
const CGCApp = ({ Component, pageProps }: AppProps) => {
  const modal = useStore(modalStore);
  // RENDER
  return (
    <QueryClientProvider client={queryClient}>
      {/* Page */}
      <Component {...pageProps} />
      {/* Portal for Modals */}
      {modal.isOpen && modal.component != null ? (
        <Modal>{modal.component}</Modal>
      ) : null}
    </QueryClientProvider>
  );
};

export default CGCApp;
