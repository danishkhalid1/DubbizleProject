import { Octokit } from "@octokit/rest";
import { createOAuthAppAuth  } from "@octokit/auth-oauth-app";

const octokit = new Octokit({

    auth: "secret123",
    userAgent: 'myApp v1.2.3',
    previews: ['jean-grey', 'symmetra'],
    timeZone: 'Europe/Amsterdam',
    baseUrl: 'https://api.github.com',
    log: {
        debug: () => {},
        info: () => {},
        warn: console.warn,
        error: console.error
      },
      request: {
        agent: undefined,
        fetch: undefined,
        timeout: 0
      }


})
export const getPublicGists = () => octokit.gists.listPublic()

export const getGistForUser = username =>  octokit.gists.listForUser({ username });
