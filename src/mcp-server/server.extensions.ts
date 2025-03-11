import { resource$aboutSpeakeasy } from "./custom/aboutSpeakeasyResource.js";
import { tool$fetchGithubFile } from "./custom/getGithubFileTools.js";
import { Register } from "./extensions.js";

export function registerMCPExtensions(register: Register): void {
    register.tool(tool$fetchGithubFile)
    register.resource(resource$aboutSpeakeasy);
}