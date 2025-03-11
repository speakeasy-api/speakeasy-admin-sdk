# CliEvent

## Example Usage

```typescript
import { CliEvent } from "speakeasy-admin/models/components";

let value: CliEvent = {
  createdAt: "1724565246241",
  executionId: "<id>",
  interactionType: "AUTHENTICATE",
  speakeasyVersion: "<value>",
  success: false,
  workspaceId: "<id>",
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `continuousIntegrationEnvironment`                                       | *string*                                                                 | :heavy_minus_sign:                                                       | N/A                                                                      |
| `createdAt`                                                              | *string*                                                                 | :heavy_check_mark:                                                       | N/A                                                                      |
| `executionId`                                                            | *string*                                                                 | :heavy_check_mark:                                                       | N/A                                                                      |
| `generateRepoUrl`                                                        | *string*                                                                 | :heavy_minus_sign:                                                       | N/A                                                                      |
| `generateTarget`                                                         | *string*                                                                 | :heavy_minus_sign:                                                       | N/A                                                                      |
| `generateTargetName`                                                     | *string*                                                                 | :heavy_minus_sign:                                                       | N/A                                                                      |
| `ghActionOrganization`                                                   | *string*                                                                 | :heavy_minus_sign:                                                       | N/A                                                                      |
| `ghActionRunLink`                                                        | *string*                                                                 | :heavy_minus_sign:                                                       | N/A                                                                      |
| `interactionType`                                                        | [components.InteractionType](../../models/components/interactiontype.md) | :heavy_check_mark:                                                       | N/A                                                                      |
| `lintReportErrorCount`                                                   | *number*                                                                 | :heavy_minus_sign:                                                       | N/A                                                                      |
| `lintReportInfoCount`                                                    | *number*                                                                 | :heavy_minus_sign:                                                       | N/A                                                                      |
| `lintReportWarningCount`                                                 | *number*                                                                 | :heavy_minus_sign:                                                       | N/A                                                                      |
| `speakeasyVersion`                                                       | *string*                                                                 | :heavy_check_mark:                                                       | N/A                                                                      |
| `success`                                                                | *boolean*                                                                | :heavy_check_mark:                                                       | N/A                                                                      |
| `workspaceId`                                                            | *string*                                                                 | :heavy_check_mark:                                                       | N/A                                                                      |