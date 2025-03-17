/**
 * @author
 * @file App.tsx
 * @fileBase App
 * @path projects\visiting-admin-web\src\App.tsx
 * @from
 * @desc
 * @example
 */

import { ApolloProvider } from "@apollo/client";
import { client } from "./api/apollo";
export interface AppProps {
  // value: any
}
export const App: React.FC<AppProps> = () => {
  return <ApolloProvider client={client}>App</ApolloProvider>;
};

// 默认导出
export default App;
