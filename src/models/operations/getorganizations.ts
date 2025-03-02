/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type GetOrganizationsRequest = {
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
export const GetOrganizationsRequest$inboundSchema: z.ZodType<
  GetOrganizationsRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  limit: z.number().int().optional(),
  offset: z.number().int().optional(),
});

/** @internal */
export type GetOrganizationsRequest$Outbound = {
  limit?: number | undefined;
  offset?: number | undefined;
};

/** @internal */
export const GetOrganizationsRequest$outboundSchema: z.ZodType<
  GetOrganizationsRequest$Outbound,
  z.ZodTypeDef,
  GetOrganizationsRequest
> = z.object({
  limit: z.number().int().optional(),
  offset: z.number().int().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetOrganizationsRequest$ {
  /** @deprecated use `GetOrganizationsRequest$inboundSchema` instead. */
  export const inboundSchema = GetOrganizationsRequest$inboundSchema;
  /** @deprecated use `GetOrganizationsRequest$outboundSchema` instead. */
  export const outboundSchema = GetOrganizationsRequest$outboundSchema;
  /** @deprecated use `GetOrganizationsRequest$Outbound` instead. */
  export type Outbound = GetOrganizationsRequest$Outbound;
}

export function getOrganizationsRequestToJSON(
  getOrganizationsRequest: GetOrganizationsRequest,
): string {
  return JSON.stringify(
    GetOrganizationsRequest$outboundSchema.parse(getOrganizationsRequest),
  );
}

export function getOrganizationsRequestFromJSON(
  jsonString: string,
): SafeParseResult<GetOrganizationsRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetOrganizationsRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetOrganizationsRequest' from JSON`,
  );
}
