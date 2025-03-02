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
      operationLimit: 456150,
      blocking: false,
      createdAt: new Date("2024-09-15T00:05:11.728Z"),
      updatedAt: new Date("2023-01-21T14:14:48.878Z"),
    },
  ],
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `billingLimits`                                                      | [components.BillingLimit](../../models/components/billinglimit.md)[] | :heavy_check_mark:                                                   | N/A                                                                  |