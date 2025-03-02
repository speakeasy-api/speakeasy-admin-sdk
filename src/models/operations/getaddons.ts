/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type GetAddOnsRequest = {
  /**
   * The maximum number of organizations to return.
   */
  limit?: number | undefined;
  /**
   * The number of organizations to skip before starting to return results.
   */
  offset?: number | undefined;
};

/** @internal */
export const GetAddOnsRequest$inboundSchema: z.ZodType<
  GetAddOnsRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  limit: z.number().int().optional(),
  offset: z.number().int().optional(),
});

/** @internal */
export type GetAddOnsRequest$Outbound = {
  limit?: number | undefined;
  offset?: number | undefined;
};

/** @internal */
export const GetAddOnsRequest$outboundSchema: z.ZodType<
  GetAddOnsRequest$Outbound,
  z.ZodTypeDef,
  GetAddOnsRequest
> = z.object({
  limit: z.number().int().optional(),
  offset: z.number().int().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetAddOnsRequest$ {
  /** @deprecated use `GetAddOnsRequest$inboundSchema` instead. */
  export const inboundSchema = GetAddOnsRequest$inboundSchema;
  /** @deprecated use `GetAddOnsRequest$outboundSchema` instead. */
  export const outboundSchema = GetAddOnsRequest$outboundSchema;
  /** @deprecated use `GetAddOnsRequest$Outbound` instead. */
  export type Outbound = GetAddOnsRequest$Outbound;
}

export function getAddOnsRequestToJSON(
  getAddOnsRequest: GetAddOnsRequest,
): string {
  return JSON.stringify(
    GetAddOnsRequest$outboundSchema.parse(getAddOnsRequest),
  );
}

export function getAddOnsRequestFromJSON(
  jsonString: string,
): SafeParseResult<GetAddOnsRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetAddOnsRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetAddOnsRequest' from JSON`,
  );
}
