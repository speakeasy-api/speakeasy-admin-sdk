/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { adminGetOrganizationUsage } from "../../funcs/adminGetOrganizationUsage.js";
import * as operations from "../../models/operations/index.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  request: operations.GetOrganizationUsageRequest$inboundSchema,
};

export const tool$adminGetOrganizationUsage: ToolDefinition<typeof args> = {
  name: "admin_get-organization-usage",
  description:
    `Returns a billing usage summary by SDK language for a particular organization ID.

Returns a billing usage summary by SDK language for a particular organization ID.`,
  scopes: ["read"],
  args,
  tool: async (client, args, ctx) => {
    const [result, apiCall] = await adminGetOrganizationUsage(
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
