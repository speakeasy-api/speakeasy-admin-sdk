# Admin
(*admin*)

## Overview

REST APIs for Admin utilities

### Available Operations

* [getOrganizations](#getorganizations) - Returns a paginated list of all speakeasy organizations.
* [getOrganization](#getorganization) - Get a particular organization by ID or slug. Organization slugs are present in speakeasy URLs (https://app.speakeasy.com/org/speakeasy-self/admin-sdk). Slugs are always in snakecase and often match the organization name converted to snake case.
* [getOrganizationWorkspaces](#getorganizationworkspaces) - Get all workspaces for a particular organization by ID
* [getOrganizationBillingLimits](#getorganizationbillinglimits) - Get billing limits for a particular organization by ID.
* [getOrganizationUsage](#getorganizationusage) - Returns a billing usage summary by SDK language for a particular organization ID.
* [getAddOns](#getaddons) - Returns a paginated list of all active billing add ons across all organizations.
* [getOrganizationAddOns](#getorganizationaddons) - Get add ons for a particular organization by ID.
* [getUsers](#getusers) - Returns a paginated list of all Speakeasy users.
* [getUserWorkspaces](#getuserworkspaces) - Returns all workspaces for a particular user by user ID.
* [getUser](#getuser) - Get a particular user by ID or email.
* [getWorkspaces](#getworkspaces) - Returns a paginated list of all Speakeasy workspaces.
* [getWorkspaceUsers](#getworkspaceusers) - Returns all users for a particular workspace by workspace ID.
* [getWorkspace](#getworkspace) - Get a particular workspace by ID or org and workspace slug. Both slugs are present in speakeasy URLs (https://app.speakeasy.com/org/speakeasy-self/admin-sdk). Slugs are always in snake case and often match the name of the entity converted to snake case.
* [searchEvents](#searchevents) - Returns a list of CLI event results that match the search criteria.

## getOrganizations

Returns a paginated list of all speakeasy organizations.

### Example Usage

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

### Standalone function

The standalone function version of this method:

```typescript
import { SpeakeasyAdminCore } from "speakeasy-admin/core.js";
import { adminGetOrganizations } from "speakeasy-admin/funcs/adminGetOrganizations.js";

// Use `SpeakeasyAdminCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const speakeasyAdmin = new SpeakeasyAdminCore({
  apiKey: process.env["SPEAKEASY_API_KEY"] ?? "",
});

async function run() {
  const res = await adminGetOrganizations(speakeasyAdmin, {});

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result);
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetOrganizationsRequest](../../models/operations/getorganizationsrequest.md)                                                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.Organization[]](../../models/.md)\>**

### Errors

| Error Type       | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.ErrorT    | 4XX              | application/json |
| errors.APIError  | 5XX              | \*/\*            |

## getOrganization

Get a particular organization by ID or slug. Organization slugs are present in speakeasy URLs (https://app.speakeasy.com/org/speakeasy-self/admin-sdk). Slugs are always in snakecase and often match the organization name converted to snake case.

### Example Usage

```typescript
import { SpeakeasyAdmin } from "speakeasy-admin";

const speakeasyAdmin = new SpeakeasyAdmin({
  apiKey: process.env["SPEAKEASY_API_KEY"] ?? "",
});

async function run() {
  const result = await speakeasyAdmin.admin.getOrganization({});

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SpeakeasyAdminCore } from "speakeasy-admin/core.js";
import { adminGetOrganization } from "speakeasy-admin/funcs/adminGetOrganization.js";

// Use `SpeakeasyAdminCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const speakeasyAdmin = new SpeakeasyAdminCore({
  apiKey: process.env["SPEAKEASY_API_KEY"] ?? "",
});

async function run() {
  const res = await adminGetOrganization(speakeasyAdmin, {});

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result);
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetOrganizationRequest](../../models/operations/getorganizationrequest.md)                                                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.Organization](../../models/components/organization.md)\>**

### Errors

| Error Type       | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.ErrorT    | 4XX              | application/json |
| errors.APIError  | 5XX              | \*/\*            |

## getOrganizationWorkspaces

Get all workspaces for a particular organization by ID

### Example Usage

```typescript
import { SpeakeasyAdmin } from "speakeasy-admin";

const speakeasyAdmin = new SpeakeasyAdmin({
  apiKey: process.env["SPEAKEASY_API_KEY"] ?? "",
});

async function run() {
  const result = await speakeasyAdmin.admin.getOrganizationWorkspaces({
    organizationID: "<id>",
  });

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SpeakeasyAdminCore } from "speakeasy-admin/core.js";
import { adminGetOrganizationWorkspaces } from "speakeasy-admin/funcs/adminGetOrganizationWorkspaces.js";

// Use `SpeakeasyAdminCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const speakeasyAdmin = new SpeakeasyAdminCore({
  apiKey: process.env["SPEAKEASY_API_KEY"] ?? "",
});

async function run() {
  const res = await adminGetOrganizationWorkspaces(speakeasyAdmin, {
    organizationID: "<id>",
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result);
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetOrganizationWorkspacesRequest](../../models/operations/getorganizationworkspacesrequest.md)                                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.Workspace[]](../../models/.md)\>**

### Errors

| Error Type       | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.ErrorT    | 4XX              | application/json |
| errors.APIError  | 5XX              | \*/\*            |

## getOrganizationBillingLimits

Gets billing limits for a particular organization by ID.

### Example Usage

```typescript
import { SpeakeasyAdmin } from "speakeasy-admin";

const speakeasyAdmin = new SpeakeasyAdmin({
  apiKey: process.env["SPEAKEASY_API_KEY"] ?? "",
});

async function run() {
  const result = await speakeasyAdmin.admin.getOrganizationBillingLimits({
    organizationID: "<id>",
  });

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SpeakeasyAdminCore } from "speakeasy-admin/core.js";
import { adminGetOrganizationBillingLimits } from "speakeasy-admin/funcs/adminGetOrganizationBillingLimits.js";

// Use `SpeakeasyAdminCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const speakeasyAdmin = new SpeakeasyAdminCore({
  apiKey: process.env["SPEAKEASY_API_KEY"] ?? "",
});

async function run() {
  const res = await adminGetOrganizationBillingLimits(speakeasyAdmin, {
    organizationID: "<id>",
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result);
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetOrganizationBillingLimitsRequest](../../models/operations/getorganizationbillinglimitsrequest.md)                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetOrganizationBillingLimitsResponse](../../models/operations/getorganizationbillinglimitsresponse.md)\>**

### Errors

| Error Type       | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.ErrorT    | 4XX              | application/json |
| errors.APIError  | 5XX              | \*/\*            |

## getOrganizationUsage

Returns a billing usage summary by SDK language for a particular organization ID.

### Example Usage

```typescript
import { SpeakeasyAdmin } from "speakeasy-admin";

const speakeasyAdmin = new SpeakeasyAdmin({
  apiKey: process.env["SPEAKEASY_API_KEY"] ?? "",
});

async function run() {
  const result = await speakeasyAdmin.admin.getOrganizationUsage({
    organizationID: "<id>",
  });

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SpeakeasyAdminCore } from "speakeasy-admin/core.js";
import { adminGetOrganizationUsage } from "speakeasy-admin/funcs/adminGetOrganizationUsage.js";

// Use `SpeakeasyAdminCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const speakeasyAdmin = new SpeakeasyAdminCore({
  apiKey: process.env["SPEAKEASY_API_KEY"] ?? "",
});

async function run() {
  const res = await adminGetOrganizationUsage(speakeasyAdmin, {
    organizationID: "<id>",
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result);
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetOrganizationUsageRequest](../../models/operations/getorganizationusagerequest.md)                                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.OrganizationUsageResponse](../../models/components/organizationusageresponse.md)\>**

### Errors

| Error Type       | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.ErrorT    | 4XX              | application/json |
| errors.APIError  | 5XX              | \*/\*            |

## getAddOns

Returns a paginated list of all active billing add ons across all organizations.

### Example Usage

```typescript
import { SpeakeasyAdmin } from "speakeasy-admin";

const speakeasyAdmin = new SpeakeasyAdmin({
  apiKey: process.env["SPEAKEASY_API_KEY"] ?? "",
});

async function run() {
  const result = await speakeasyAdmin.admin.getAddOns({});

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SpeakeasyAdminCore } from "speakeasy-admin/core.js";
import { adminGetAddOns } from "speakeasy-admin/funcs/adminGetAddOns.js";

// Use `SpeakeasyAdminCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const speakeasyAdmin = new SpeakeasyAdminCore({
  apiKey: process.env["SPEAKEASY_API_KEY"] ?? "",
});

async function run() {
  const res = await adminGetAddOns(speakeasyAdmin, {});

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result);
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetAddOnsRequest](../../models/operations/getaddonsrequest.md)                                                                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.OrganizationBillingAddOn[]](../../models/.md)\>**

### Errors

| Error Type       | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.ErrorT    | 4XX              | application/json |
| errors.APIError  | 5XX              | \*/\*            |

## getOrganizationAddOns

Returns add ons for a particular organization by ID.

### Example Usage

```typescript
import { SpeakeasyAdmin } from "speakeasy-admin";

const speakeasyAdmin = new SpeakeasyAdmin({
  apiKey: process.env["SPEAKEASY_API_KEY"] ?? "",
});

async function run() {
  const result = await speakeasyAdmin.admin.getOrganizationAddOns({
    organizationID: "<id>",
  });

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SpeakeasyAdminCore } from "speakeasy-admin/core.js";
import { adminGetOrganizationAddOns } from "speakeasy-admin/funcs/adminGetOrganizationAddOns.js";

// Use `SpeakeasyAdminCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const speakeasyAdmin = new SpeakeasyAdminCore({
  apiKey: process.env["SPEAKEASY_API_KEY"] ?? "",
});

async function run() {
  const res = await adminGetOrganizationAddOns(speakeasyAdmin, {
    organizationID: "<id>",
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result);
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetOrganizationAddOnsRequest](../../models/operations/getorganizationaddonsrequest.md)                                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetOrganizationAddOnsResponse](../../models/operations/getorganizationaddonsresponse.md)\>**

### Errors

| Error Type       | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.ErrorT    | 4XX              | application/json |
| errors.APIError  | 5XX              | \*/\*            |

## getUsers

Returns a paginated list of all Speakeasy users.

### Example Usage

```typescript
import { SpeakeasyAdmin } from "speakeasy-admin";

const speakeasyAdmin = new SpeakeasyAdmin({
  apiKey: process.env["SPEAKEASY_API_KEY"] ?? "",
});

async function run() {
  const result = await speakeasyAdmin.admin.getUsers({});

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SpeakeasyAdminCore } from "speakeasy-admin/core.js";
import { adminGetUsers } from "speakeasy-admin/funcs/adminGetUsers.js";

// Use `SpeakeasyAdminCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const speakeasyAdmin = new SpeakeasyAdminCore({
  apiKey: process.env["SPEAKEASY_API_KEY"] ?? "",
});

async function run() {
  const res = await adminGetUsers(speakeasyAdmin, {});

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result);
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetUsersRequest](../../models/operations/getusersrequest.md)                                                                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.User[]](../../models/.md)\>**

### Errors

| Error Type       | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.ErrorT    | 4XX              | application/json |
| errors.APIError  | 5XX              | \*/\*            |

## getUserWorkspaces

Returns all workspaces for a particular user by user ID.

### Example Usage

```typescript
import { SpeakeasyAdmin } from "speakeasy-admin";

const speakeasyAdmin = new SpeakeasyAdmin({
  apiKey: process.env["SPEAKEASY_API_KEY"] ?? "",
});

async function run() {
  const result = await speakeasyAdmin.admin.getUserWorkspaces({
    userID: "<id>",
  });

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SpeakeasyAdminCore } from "speakeasy-admin/core.js";
import { adminGetUserWorkspaces } from "speakeasy-admin/funcs/adminGetUserWorkspaces.js";

// Use `SpeakeasyAdminCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const speakeasyAdmin = new SpeakeasyAdminCore({
  apiKey: process.env["SPEAKEASY_API_KEY"] ?? "",
});

async function run() {
  const res = await adminGetUserWorkspaces(speakeasyAdmin, {
    userID: "<id>",
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result);
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetUserWorkspacesRequest](../../models/operations/getuserworkspacesrequest.md)                                                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.Workspace[]](../../models/.md)\>**

### Errors

| Error Type       | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.ErrorT    | 4XX              | application/json |
| errors.APIError  | 5XX              | \*/\*            |

## getUser

Get a particular user by ID or email.

### Example Usage

```typescript
import { SpeakeasyAdmin } from "speakeasy-admin";

const speakeasyAdmin = new SpeakeasyAdmin({
  apiKey: process.env["SPEAKEASY_API_KEY"] ?? "",
});

async function run() {
  const result = await speakeasyAdmin.admin.getUser({});

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SpeakeasyAdminCore } from "speakeasy-admin/core.js";
import { adminGetUser } from "speakeasy-admin/funcs/adminGetUser.js";

// Use `SpeakeasyAdminCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const speakeasyAdmin = new SpeakeasyAdminCore({
  apiKey: process.env["SPEAKEASY_API_KEY"] ?? "",
});

async function run() {
  const res = await adminGetUser(speakeasyAdmin, {});

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result);
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetUserRequest](../../models/operations/getuserrequest.md)                                                                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.User](../../models/components/user.md)\>**

### Errors

| Error Type       | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.ErrorT    | 4XX              | application/json |
| errors.APIError  | 5XX              | \*/\*            |

## getWorkspaces

Returns a paginated list of all Speakeasy workspaces.

### Example Usage

```typescript
import { SpeakeasyAdmin } from "speakeasy-admin";

const speakeasyAdmin = new SpeakeasyAdmin({
  apiKey: process.env["SPEAKEASY_API_KEY"] ?? "",
});

async function run() {
  const result = await speakeasyAdmin.admin.getWorkspaces({});

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SpeakeasyAdminCore } from "speakeasy-admin/core.js";
import { adminGetWorkspaces } from "speakeasy-admin/funcs/adminGetWorkspaces.js";

// Use `SpeakeasyAdminCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const speakeasyAdmin = new SpeakeasyAdminCore({
  apiKey: process.env["SPEAKEASY_API_KEY"] ?? "",
});

async function run() {
  const res = await adminGetWorkspaces(speakeasyAdmin, {});

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result);
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetWorkspacesRequest](../../models/operations/getworkspacesrequest.md)                                                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.Workspace[]](../../models/.md)\>**

### Errors

| Error Type       | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.ErrorT    | 4XX              | application/json |
| errors.APIError  | 5XX              | \*/\*            |

## getWorkspaceUsers

Returns all users for a particular workspace by workspace ID.

### Example Usage

```typescript
import { SpeakeasyAdmin } from "speakeasy-admin";

const speakeasyAdmin = new SpeakeasyAdmin({
  apiKey: process.env["SPEAKEASY_API_KEY"] ?? "",
});

async function run() {
  const result = await speakeasyAdmin.admin.getWorkspaceUsers({
    workspaceID: "<id>",
  });

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SpeakeasyAdminCore } from "speakeasy-admin/core.js";
import { adminGetWorkspaceUsers } from "speakeasy-admin/funcs/adminGetWorkspaceUsers.js";

// Use `SpeakeasyAdminCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const speakeasyAdmin = new SpeakeasyAdminCore({
  apiKey: process.env["SPEAKEASY_API_KEY"] ?? "",
});

async function run() {
  const res = await adminGetWorkspaceUsers(speakeasyAdmin, {
    workspaceID: "<id>",
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result);
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetWorkspaceUsersRequest](../../models/operations/getworkspaceusersrequest.md)                                                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.User[]](../../models/.md)\>**

### Errors

| Error Type       | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.ErrorT    | 4XX              | application/json |
| errors.APIError  | 5XX              | \*/\*            |

## getWorkspace

Get a particular workspace by ID or org and workspace slug. Both slugs are present in speakeasy URLs (https://app.speakeasy.com/org/speakeasy-self/admin-sdk). Slugs are always in snake case and often match the name of the entity converted to snake case.

### Example Usage

```typescript
import { SpeakeasyAdmin } from "speakeasy-admin";

const speakeasyAdmin = new SpeakeasyAdmin({
  apiKey: process.env["SPEAKEASY_API_KEY"] ?? "",
});

async function run() {
  const result = await speakeasyAdmin.admin.getWorkspace({});

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SpeakeasyAdminCore } from "speakeasy-admin/core.js";
import { adminGetWorkspace } from "speakeasy-admin/funcs/adminGetWorkspace.js";

// Use `SpeakeasyAdminCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const speakeasyAdmin = new SpeakeasyAdminCore({
  apiKey: process.env["SPEAKEASY_API_KEY"] ?? "",
});

async function run() {
  const res = await adminGetWorkspace(speakeasyAdmin, {});

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result);
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetWorkspaceRequest](../../models/operations/getworkspacerequest.md)                                                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.Workspace](../../models/components/workspace.md)\>**

### Errors

| Error Type       | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.ErrorT    | 4XX              | application/json |
| errors.APIError  | 5XX              | \*/\*            |

## searchEvents

Returns a list of CLI event results that match the search criteria.

### Example Usage

```typescript
import { SpeakeasyAdmin } from "speakeasy-admin";

const speakeasyAdmin = new SpeakeasyAdmin({
  apiKey: process.env["SPEAKEASY_API_KEY"] ?? "",
});

async function run() {
  const result = await speakeasyAdmin.admin.searchEvents({});

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SpeakeasyAdminCore } from "speakeasy-admin/core.js";
import { adminSearchEvents } from "speakeasy-admin/funcs/adminSearchEvents.js";

// Use `SpeakeasyAdminCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const speakeasyAdmin = new SpeakeasyAdminCore({
  apiKey: process.env["SPEAKEASY_API_KEY"] ?? "",
});

async function run() {
  const res = await adminSearchEvents(speakeasyAdmin, {});

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result);
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.SearchEventsRequest](../../models/operations/searcheventsrequest.md)                                                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.CliEvent[]](../../models/.md)\>**

### Errors

| Error Type       | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.ErrorT    | 4XX              | application/json |
| errors.APIError  | 5XX              | \*/\*            |