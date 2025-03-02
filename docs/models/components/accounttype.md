# AccountType

## Example Usage

```typescript
import { AccountType } from "speakeasy-admin/models/components";

let value: AccountType = "business";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"free" | "scale-up" | "business" | "enterprise" | Unrecognized<string>
```