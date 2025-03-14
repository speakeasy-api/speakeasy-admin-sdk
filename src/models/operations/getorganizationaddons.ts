/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type GetOrganizationAddOnsRequest = {
  /**
   * Unique identifier of the organization.
   */
  organizationID: string;
};

/**
 * OK
 */
export type GetOrganizationAddOnsResponse = {
  addOns: Array<components.BillingAddOn>;
};

/** @internal */
export const GetOrganizationAddOnsRequest$inboundSchema: z.ZodType<
  GetOrganizationAddOnsRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  organizationID: z.string(),
});

/** @internal */
export type GetOrganizationAddOnsRequest$Outbound = {
  organizationID: string;
};

/** @internal */
export const GetOrganizationAddOnsRequest$outboundSchema: z.ZodType<
  GetOrganizationAddOnsRequest$Outbound,
  z.ZodTypeDef,
  GetOrganizationAddOnsRequest
> = z.object({
  organizationID: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetOrganizationAddOnsRequest$ {
  /** @deprecated use `GetOrganizationAddOnsRequest$inboundSchema` instead. */
  export const inboundSchema = GetOrganizationAddOnsRequest$inboundSchema;
  /** @deprecated use `GetOrganizationAddOnsRequest$outboundSchema` instead. */
  export const outboundSchema = GetOrganizationAddOnsRequest$outboundSchema;
  /** @deprecated use `GetOrganizationAddOnsRequest$Outbound` instead. */
  export type Outbound = GetOrganizationAddOnsRequest$Outbound;
}

export function getOrganizationAddOnsRequestToJSON(
  getOrganizationAddOnsRequest: GetOrganizationAddOnsRequest,
): string {
  return JSON.stringify(
    GetOrganizationAddOnsRequest$outboundSchema.parse(
      getOrganizationAddOnsRequest,
    ),
  );
}

export function getOrganizationAddOnsRequestFromJSON(
  jsonString: string,
): SafeParseResult<GetOrganizationAddOnsRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetOrganizationAddOnsRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetOrganizationAddOnsRequest' from JSON`,
  );
}

/** @internal */
export const GetOrganizationAddOnsResponse$inboundSchema: z.ZodType<
  GetOrganizationAddOnsResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  add_ons: z.array(components.BillingAddOn$inboundSchema),
}).transform((v) => {
  return remap$(v, {
    "add_ons": "addOns",
  });
});

/** @internal */
export type GetOrganizationAddOnsResponse$Outbound = {
  add_ons: Array<string>;
};

/** @internal */
export const GetOrganizationAddOnsResponse$outboundSchema: z.ZodType<
  GetOrganizationAddOnsResponse$Outbound,
  z.ZodTypeDef,
  GetOrganizationAddOnsResponse
> = z.object({
  addOns: z.array(components.BillingAddOn$outboundSchema),
}).transform((v) => {
  return remap$(v, {
    addOns: "add_ons",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetOrganizationAddOnsResponse$ {
  /** @deprecated use `GetOrganizationAddOnsResponse$inboundSchema` instead. */
  export const inboundSchema = GetOrganizationAddOnsResponse$inboundSchema;
  /** @deprecated use `GetOrganizationAddOnsResponse$outboundSchema` instead. */
  export const outboundSchema = GetOrganizationAddOnsResponse$outboundSchema;
  /** @deprecated use `GetOrganizationAddOnsResponse$Outbound` instead. */
  export type Outbound = GetOrganizationAddOnsResponse$Outbound;
}

export function getOrganizationAddOnsResponseToJSON(
  getOrganizationAddOnsResponse: GetOrganizationAddOnsResponse,
): string {
  return JSON.stringify(
    GetOrganizationAddOnsResponse$outboundSchema.parse(
      getOrganizationAddOnsResponse,
    ),
  );
}

export function getOrganizationAddOnsResponseFromJSON(
  jsonString: string,
): SafeParseResult<GetOrganizationAddOnsResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetOrganizationAddOnsResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetOrganizationAddOnsResponse' from JSON`,
  );
}
