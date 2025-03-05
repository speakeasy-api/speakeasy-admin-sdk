# GetWorkspaceRequest

## Example Usage

```typescript
import { GetWorkspaceRequest } from "speakeasy-admin/models/operations";

let value: GetWorkspaceRequest = {};
```

## Fields

| Field                                        | Type                                         | Required                                     | Description                                  |
| -------------------------------------------- | -------------------------------------------- | -------------------------------------------- | -------------------------------------------- |
| `workspaceId`                                | *string*                                     | :heavy_minus_sign:                           | Unique identifier of the workspace.          |
| `organizationSlug`                           | *string*                                     | :heavy_minus_sign:                           | URL-friendly identifier of the organization. |
| `workspaceSlug`                              | *string*                                     | :heavy_minus_sign:                           | URL-friendly identifier of the workspace.    |