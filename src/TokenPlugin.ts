/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */

import { result } from "lodash";

/* eslint-disable no-unsafe-finally */
async function token (): Promise<string>{

    const {Octokit, App, Action} = require('octokit');

    const Exception = require('typescript');
    
    try{
        // Create a personal access token at https://github.com/settings/tokens/new?scopes=repo
        const octokit = new Octokit({ auth: `repo-token` });

        // Compare: https://docs.github.com/en/rest/reference/users#get-the-authenticated-user
        const {
            data: { login },
        } = await octokit.rest.users.getAuthenticated();
        console.log("Hello, %s", login);
        const retrieve = await require('./OctokitAppServer.ts');
        retrieve();

// response.

const { request } = require("@octokit/request");
// or: import { request } from "@octokit/request";
// Following GitHub docs formatting:
// https://developer.github.com/v3/repos/#list-organization-repositories
const result = await request("GET /orgs/{org}/repos", {
  headers: {
    authorization: octokit.toString('leaflet-secret'),
  },
  org: "poligonosapp",
  type: "private",
});

console.log(`${result.data.length} repos found.`);

        return new Promise(
            (resolve,reject) => {
                octokit.toString('leaflet-secret')
                setTimeout(
                    () => resolve(result*2, 1000)
                );
                
            }
        );
    }catch{
        throw new Exception('retieve token GitHub error');
    }
    finally{
        // return null;
        console.log('\n GitHub Token.ts finally \n');
    }
    
}

export default token;