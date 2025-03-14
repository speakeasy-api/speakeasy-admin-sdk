/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { adminSearchEvents } from "../../funcs/adminSearchEvents.js";
import * as operations from "../../models/operations/index.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  request: operations.SearchEventsRequest$inboundSchema,
};

export const tool$adminSearchEvents: ToolDefinition<typeof args> = {
  name: "admin-search-events",
  description:
    `Returns a list of CLI event results that match the search criteria.

Returns a list of CLI event results that match the search criteria.`,
  scopes: ["read"],
  args,
  tool: async (client, args, ctx) => {
    const [result, apiCall] = await adminSearchEvents(
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
