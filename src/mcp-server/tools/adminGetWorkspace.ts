/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { adminGetWorkspace } from "../../funcs/adminGetWorkspace.js";
import * as operations from "../../models/operations/index.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  request: operations.GetWorkspaceRequest$inboundSchema,
};

export const tool$adminGetWorkspace: ToolDefinition<typeof args> = {
  name: "admin_get-workspace",
  description:
    `Get a particular workspace by ID or org and workspace slug. Both slugs are present in speakeasy URLs (https://app.speakeasy.com/org/speakeasy-self/admin-sdk)

Get a particular workspace by ID or org and workspace slug. Both slugs are present in speakeasy URLs (https://app.speakeasy.com/org/speakeasy-self/admin-sdk)`,
  scopes: ["read"],
  args,
  tool: async (client, args, ctx) => {
    const [result, apiCall] = await adminGetWorkspace(
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
