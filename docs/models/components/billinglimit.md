# BillingLimit

## Example Usage

```typescript
import { BillingLimit } from "speakeasy-admin/models/components";

let value: BillingLimit = {
  organizationId: "<id>",
  targetType: "<value>",
  operationLimit: 437587,
  blocking: false,
  createdAt: new Date("2025-09-04T09:11:49.246Z"),
  updatedAt: new Date("2025-11-22T04:11:06.908Z"),
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `organizationId`                                                                              | *string*                                                                                      | :heavy_check_mark:                                                                            | The unique identifier for the organization.                                                   |
| `targetType`                                                                                  | *string*                                                                                      | :heavy_check_mark:                                                                            | The type of target for the billing limit.                                                     |
| `operationLimit`                                                                              | *number*                                                                                      | :heavy_check_mark:                                                                            | The maximum allowed operations.                                                               |
| `blocking`                                                                                    | *boolean*                                                                                     | :heavy_check_mark:                                                                            | Whether exceeding the limit blocks operations.                                                |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | The timestamp when the limit was created.                                                     |
| `updatedAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | The timestamp when the limit was last updated.                                                |