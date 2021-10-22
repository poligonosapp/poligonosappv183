/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
// GitHub App server retrieve webhook event request
// https://www.npmjs.com/package/octokit#app-server

import { Octokit } from "@octokit/core";

async function retrieve():Promise<void>{

    const http = require('http');

    const {Request, Response} = require('typescript');

    type RequestReturnType = ReturnType<typeof Request>;
    type ResponseReturnType = ReturnType<typeof Response>;

// Create a local server to receive data from
const server = http.createServer((req:RequestReturnType, res:ResponseReturnType) => {
  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify({
    data: 'Hello World PoligonosApp with GitHub Ocktokit!'
  }));
});

server.listen(8000);
// https://github.com/octokit/core.js#rest-api-example
// Create a personal access token at https://github.com/settings/tokens/new?scopes=repo
const octokit = new Octokit({ auth: `repo-token` });

const response = await octokit.request("GET /orgs/{org}/repos", {
  org: "poligonosapp",
  type: "private",
});

// response.

const { request } = require("@octokit/request");
// or: import { request } from "@octokit/request";
// Following GitHub docs formatting:
// https://developer.github.com/v3/repos/#list-organization-repositories
const result = await request("GET /orgs/{org}/repos", {
  headers: {
    authorization: "token 0000000000000000000000000000000000000001",
  },
  org: "poligonosapp",
  type: "private",
});

console.log(`${result.data.length} repos found.`);



} // end function retrieve

retrieve();

