<!-- Start SDK Example Usage [usage] -->
```typescript
import { SpeakeasyAdmin } from "speakeasy-admin";

const speakeasyAdmin = new SpeakeasyAdmin({
  apiKey: process.env["SPEAKEASY_API_KEY"] ?? "",
});

async function run() {
  const result = await speakeasyAdmin.admin.getOrganizations({});

  // Handle the result
  console.log(result);
}

run();

```
<!-- End SDK Example Usage [usage] -->