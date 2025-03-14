/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  InteractionType,
  InteractionType$inboundSchema,
  InteractionType$outboundSchema,
} from "./interactiontype.js";

export type CliEvent = {
  continuousIntegrationEnvironment?: string | undefined;
  createdAt: string;
  executionId: string;
  generateRepoUrl?: string | undefined;
  generateTarget?: string | undefined;
  generateTargetName?: string | undefined;
  ghActionOrganization?: string | undefined;
  ghActionRunLink?: string | undefined;
  interactionType: InteractionType;
  lintReportErrorCount?: number | undefined;
  lintReportInfoCount?: number | undefined;
  lintReportWarningCount?: number | undefined;
  speakeasyVersion: string;
  success: boolean;
  workspaceId: string;
};

/** @internal */
export const CliEvent$inboundSchema: z.ZodType<
  CliEvent,
  z.ZodTypeDef,
  unknown
> = z.object({
  continuous_integration_environment: z.string().optional(),
  created_at: z.string(),
  execution_id: z.string(),
  generate_repo_url: z.string().optional(),
  generate_target: z.string().optional(),
  generate_target_name: z.string().optional(),
  gh_action_organization: z.string().optional(),
  gh_action_run_link: z.string().optional(),
  interaction_type: InteractionType$inboundSchema,
  lint_report_error_count: z.number().int().optional(),
  lint_report_info_count: z.number().int().optional(),
  lint_report_warning_count: z.number().int().optional(),
  speakeasy_version: z.string(),
  success: z.boolean(),
  workspace_id: z.string(),
}).transform((v) => {
  return remap$(v, {
    "continuous_integration_environment": "continuousIntegrationEnvironment",
    "created_at": "createdAt",
    "execution_id": "executionId",
    "generate_repo_url": "generateRepoUrl",
    "generate_target": "generateTarget",
    "generate_target_name": "generateTargetName",
    "gh_action_organization": "ghActionOrganization",
    "gh_action_run_link": "ghActionRunLink",
    "interaction_type": "interactionType",
    "lint_report_error_count": "lintReportErrorCount",
    "lint_report_info_count": "lintReportInfoCount",
    "lint_report_warning_count": "lintReportWarningCount",
    "speakeasy_version": "speakeasyVersion",
    "workspace_id": "workspaceId",
  });
});

/** @internal */
export type CliEvent$Outbound = {
  continuous_integration_environment?: string | undefined;
  created_at: string;
  execution_id: string;
  generate_repo_url?: string | undefined;
  generate_target?: string | undefined;
  generate_target_name?: string | undefined;
  gh_action_organization?: string | undefined;
  gh_action_run_link?: string | undefined;
  interaction_type: string;
  lint_report_error_count?: number | undefined;
  lint_report_info_count?: number | undefined;
  lint_report_warning_count?: number | undefined;
  speakeasy_version: string;
  success: boolean;
  workspace_id: string;
};

/** @internal */
export const CliEvent$outboundSchema: z.ZodType<
  CliEvent$Outbound,
  z.ZodTypeDef,
  CliEvent
> = z.object({
  continuousIntegrationEnvironment: z.string().optional(),
  createdAt: z.string(),
  executionId: z.string(),
  generateRepoUrl: z.string().optional(),
  generateTarget: z.string().optional(),
  generateTargetName: z.string().optional(),
  ghActionOrganization: z.string().optional(),
  ghActionRunLink: z.string().optional(),
  interactionType: InteractionType$outboundSchema,
  lintReportErrorCount: z.number().int().optional(),
  lintReportInfoCount: z.number().int().optional(),
  lintReportWarningCount: z.number().int().optional(),
  speakeasyVersion: z.string(),
  success: z.boolean(),
  workspaceId: z.string(),
}).transform((v) => {
  return remap$(v, {
    continuousIntegrationEnvironment: "continuous_integration_environment",
    createdAt: "created_at",
    executionId: "execution_id",
    generateRepoUrl: "generate_repo_url",
    generateTarget: "generate_target",
    generateTargetName: "generate_target_name",
    ghActionOrganization: "gh_action_organization",
    ghActionRunLink: "gh_action_run_link",
    interactionType: "interaction_type",
    lintReportErrorCount: "lint_report_error_count",
    lintReportInfoCount: "lint_report_info_count",
    lintReportWarningCount: "lint_report_warning_count",
    speakeasyVersion: "speakeasy_version",
    workspaceId: "workspace_id",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CliEvent$ {
  /** @deprecated use `CliEvent$inboundSchema` instead. */
  export const inboundSchema = CliEvent$inboundSchema;
  /** @deprecated use `CliEvent$outboundSchema` instead. */
  export const outboundSchema = CliEvent$outboundSchema;
  /** @deprecated use `CliEvent$Outbound` instead. */
  export type Outbound = CliEvent$Outbound;
}

export function cliEventToJSON(cliEvent: CliEvent): string {
  return JSON.stringify(CliEvent$outboundSchema.parse(cliEvent));
}

export function cliEventFromJSON(
  jsonString: string,
): SafeParseResult<CliEvent, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CliEvent$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CliEvent' from JSON`,
  );
}
