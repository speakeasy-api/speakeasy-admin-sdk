# User

## Example Usage

```typescript
import { User } from "speakeasy-admin/models/components";

let value: User = {
  id: "<id>",
  email: "Orlando46@hotmail.com",
  emailVerified: false,
  displayName: "Billy_Conroy",
  confirmed: false,
  whitelisted: false,
  admin: false,
  createdAt: new Date("2023-10-17T22:52:14.955Z"),
  updatedAt: new Date("2025-04-28T13:26:34.681Z"),
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `id`                                                                                          | *string*                                                                                      | :heavy_check_mark:                                                                            | Unique identifier for the user.                                                               |
| `email`                                                                                       | *string*                                                                                      | :heavy_check_mark:                                                                            | Email address of the user.                                                                    |
| `emailVerified`                                                                               | *boolean*                                                                                     | :heavy_check_mark:                                                                            | Indicates whether the email address has been verified.                                        |
| `githubHandle`                                                                                | *string*                                                                                      | :heavy_minus_sign:                                                                            | GitHub handle of the user.                                                                    |
| `displayName`                                                                                 | *string*                                                                                      | :heavy_check_mark:                                                                            | Display name of the user.                                                                     |
| `photoUrl`                                                                                    | *string*                                                                                      | :heavy_minus_sign:                                                                            | URL of the user's photo.                                                                      |
| `defaultWorkspaceId`                                                                          | *string*                                                                                      | :heavy_minus_sign:                                                                            | Identifier of the default workspace.                                                          |
| `confirmed`                                                                                   | *boolean*                                                                                     | :heavy_check_mark:                                                                            | Indicates whether the user has been confirmed.                                                |
| `whitelisted`                                                                                 | *boolean*                                                                                     | :heavy_check_mark:                                                                            | Indicates whether the user has been whitelisted.                                              |
| `lastLoginAt`                                                                                 | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | Timestamp of the last login.                                                                  |
| `admin`                                                                                       | *boolean*                                                                                     | :heavy_check_mark:                                                                            | Indicates whether the user is an admin.                                                       |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | Timestamp of the user's creation.                                                             |
| `updatedAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | Timestamp of the user's last update.                                                          |
| `internal`                                                                                    | *boolean*                                                                                     | :heavy_minus_sign:                                                                            | Indicates whether the user is internal.                                                       |
| `pylonIdentityHash`                                                                           | *string*                                                                                      | :heavy_minus_sign:                                                                            | Hash used for pylon identity verification returned on v1/user.                                |
| `hasCreatedApiKey`                                                                            | *boolean*                                                                                     | :heavy_minus_sign:                                                                            | Indicates whether the user has created an API key. Not always populated                       |