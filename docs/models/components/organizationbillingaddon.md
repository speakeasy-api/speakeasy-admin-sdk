# OrganizationBillingAddOn

## Example Usage

```typescript
import { OrganizationBillingAddOn } from "speakeasy-admin/models/components";

let value: OrganizationBillingAddOn = {
  organizationId: "<id>",
  addOn: "webhooks",
  createdAt: new Date("2023-04-06T11:50:56.757Z"),
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `organizationId`                                                                              | *string*                                                                                      | :heavy_check_mark:                                                                            | The unique identifier for the organization.                                                   |
| `addOn`                                                                                       | [components.BillingAddOn](../../models/components/billingaddon.md)                            | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | The timestamp when the add-on was created.                                                    |