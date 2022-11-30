// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

import {DEV_GOOGLE_API_KEY} from "../../env.properties";

export const environment = {
  production: false,
  url: "http://localhost:8000",
  googleMapsApiKey: DEV_GOOGLE_API_KEY,
};
