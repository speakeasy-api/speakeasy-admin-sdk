/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { adminGetWorkspaces } from "../../funcs/adminGetWorkspaces.js";
import * as operations from "../../models/operations/index.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  request: operations.GetWorkspacesRequest$inboundSchema,
};

export const tool$adminGetWorkspaces: ToolDefinition<typeof args> = {
  name: "admin-get-workspaces",
  description: `Returns a paginated list of all Speakeasy workspaces.

Returns a paginated list of all Speakeasy workspaces.`,
  scopes: ["read"],
  args,
  tool: async (client, args, ctx) => {
    const [result, apiCall] = await adminGetWorkspaces(
      client,
      args.request,
      { fetchOptions: { signal: ctx.signal } },
    ).$inspect();

    if (!result.ok) {
      return {
        content: [{ type: "text", text: result.error.message }],
        isError: true,
      };
    }

    const value = result.value;

    return formatResult(value, apiCall);
  },
};
