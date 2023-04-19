import type { AppProps } from "next/app";
import { QueryClientProvider } from "react-query";
import { queryClient } from "../components/query/queryClient";
import "reactflow/dist/style.css";
import "../components/styled/reset.css";
import "../components/styled/global.css";

// _app.tsx is sort of like our "TopLevelLayout" component from GatsbyJS frontdoor build
const CGCApp = ({ Component, pageProps }: AppProps) => (
  <QueryClientProvider client={queryClient}>
    <Component {...pageProps} />
  </QueryClientProvider>
);

export default CGCApp;
