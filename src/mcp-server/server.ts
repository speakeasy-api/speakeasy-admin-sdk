/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { SpeakeasyAdminCore } from "../core.js";
import { SDKOptions } from "../lib/config.js";
import type { ConsoleLogger } from "./console-logger.js";
import { MCPScope, mcpScopes } from "./scopes.js";
import { createRegisterTool } from "./tools.js";
import { tool$adminGetAddOns } from "./tools/adminGetAddOns.js";
import { tool$adminGetOrganizationAddOns } from "./tools/adminGetOrganizationAddOns.js";
import { tool$adminGetOrganizationBillingLimits } from "./tools/adminGetOrganizationBillingLimits.js";
import { tool$adminGetOrganizations } from "./tools/adminGetOrganizations.js";
import { tool$adminGetOrganizationUsage } from "./tools/adminGetOrganizationUsage.js";
import { tool$adminGetOrganizationWorkspaces } from "./tools/adminGetOrganizationWorkspaces.js";
import { tool$adminGetUsers } from "./tools/adminGetUsers.js";
import { tool$adminGetUserWorkspaces } from "./tools/adminGetUserWorkspaces.js";
import { tool$adminGetWorkspaces } from "./tools/adminGetWorkspaces.js";
import { tool$adminGetWorkspaceUsers } from "./tools/adminGetWorkspaceUsers.js";
import { tool$adminSearchEvents } from "./tools/adminSearchEvents.js";

export function createMCPServer(deps: {
  logger: ConsoleLogger;
  scopes?: MCPScope[] | undefined;
  serverURL?: string | undefined;
  apiKey?: SDKOptions["apiKey"] | undefined;
  server?: SDKOptions["server"] | undefined;
}) {
  const server = new McpServer({
    name: "SpeakeasyAdmin",
    version: "0.1.0",
  });

  const client = new SpeakeasyAdminCore({
    apiKey: deps.apiKey,
    serverURL: deps.serverURL,
    server: deps.server,
  });
  const scopes = new Set(deps.scopes ?? mcpScopes);
  const tool = createRegisterTool(deps.logger, server, client, scopes);

  tool(tool$adminGetOrganizations);
  tool(tool$adminGetOrganizationWorkspaces);
  tool(tool$adminGetOrganizationBillingLimits);
  tool(tool$adminGetOrganizationUsage);
  tool(tool$adminGetAddOns);
  tool(tool$adminGetOrganizationAddOns);
  tool(tool$adminGetUsers);
  tool(tool$adminGetUserWorkspaces);
  tool(tool$adminGetWorkspaces);
  tool(tool$adminGetWorkspaceUsers);
  tool(tool$adminSearchEvents);

  return server;
}
