# BillingAddOn

## Example Usage

```typescript
import { BillingAddOn } from "speakeasy-admin/models/components";

let value: BillingAddOn = "webhooks";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"webhooks" | "sdk_testing" | "custom_code_regions" | Unrecognized<string>
```