# @vgs/collect-js-react in CJS (node)

This repository is a simplified demo for the `ERR_REQUIRE_ESM` error showing up with `@vgs/collect-js/react@1.2.0`.

The core issue is the use of `nanoid`, which is an ESM-only module. Node's current resolution mechanism does not allow for a `require()` of an ESM module, so when collect-js-react is used in a CJS context (such as in SSR scenarios), there is a runtime error.

## Quick start

You will need node 20.10.0 and `pnpm`. Other node versions and package managers will also work, these are just the ones that we set up.

You can get `pnpm` via node's `corepack`:

```shell
corepack enable
```

Then:

```shell
pnpm install
pnpm demo
```

Expect to see an output equivalent to:

```txt
/redacted/node_modules/@vgs/collect-js-react/dist/index.js:5
var nanoid = require('nanoid');
             ^

Error [ERR_REQUIRE_ESM]: require() of ES Module /redacted/node_modules/.pnpm/nanoid@5.0.7/node_modules/nanoid/index.js from /redacted/node_modules/.pnpm/@vgs+collect-js-react@1.2.0_react-dom@18.3.1_react@18.3.1/node_modules/@vgs/collect-js-react/dist/index.js not supported.

Instead change the require of /redacted/node_modules/.pnpm/nanoid@5.0.7/node_modules/nanoid/index.js in /redacted/node_modules/.pnpm/@vgs+collect-js-react@1.2.0_react-dom@18.3.1_react@18.3.1/node_modules/@vgs/collect-js-react/dist/index.js to a dynamic import() which is available in all CommonJS modules.
    at Object.<anonymous> (/redacted/node_modules/.pnpm/@vgs+collect-js-react@1.2.0_react-dom@18.3.1_react@18.3.1/node_modules/@vgs/collect-js-react/dist/index.js:5:14) {
  code: 'ERR_REQUIRE_ESM'
}
```
