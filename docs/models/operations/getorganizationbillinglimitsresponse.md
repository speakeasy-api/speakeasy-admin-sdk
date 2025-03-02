# GetOrganizationBillingLimitsResponse

OK

## Example Usage

```typescript
import { GetOrganizationBillingLimitsResponse } from "speakeasy-admin/models/operations";

let value: GetOrganizationBillingLimitsResponse = {
  billingLimits: [
    {
      organizationId: "<id>",
      targetType: "<value>",
      operationLimit: 617636,
      blocking: false,
      createdAt: new Date("2024-11-01T20:33:57.206Z"),
      updatedAt: new Date("2024-11-07T03:49:54.674Z"),
    },
  ],
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `billingLimits`                                                      | [components.BillingLimit](../../models/components/billinglimit.md)[] | :heavy_check_mark:                                                   | N/A                                                                  |