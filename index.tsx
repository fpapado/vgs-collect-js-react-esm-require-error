/*
 * NOTE: This is a simplified example, showing what happens when vgs is loaded
 * in a CJS context. This can happen even if the author has written modules in
 * ESM, but ultimately compiles to CJS, for example due to Node CJS
 * compatibility. This practice is common for SSR scenarios
 */

import { renderToString } from "react-dom/server";
import { VGSCollectForm } from "@vgs/collect-js-react";

const App = () => {
  return (
    <VGSCollectForm
      vaultId="<vault_id>"
      environment="sandbox"
      action="/post"
      submitParameters={{}}
    ></VGSCollectForm>
  );
};

// Fake SSR
function main() {
  console.log(renderToString(<App />));
}

main();
