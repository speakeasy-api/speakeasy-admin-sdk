/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { adminGetAddOns } from "../funcs/adminGetAddOns.js";
import { adminGetOrganization } from "../funcs/adminGetOrganization.js";
import { adminGetOrganizationAddOns } from "../funcs/adminGetOrganizationAddOns.js";
import { adminGetOrganizationBillingLimits } from "../funcs/adminGetOrganizationBillingLimits.js";
import { adminGetOrganizations } from "../funcs/adminGetOrganizations.js";
import { adminGetOrganizationUsage } from "../funcs/adminGetOrganizationUsage.js";
import { adminGetOrganizationWorkspaces } from "../funcs/adminGetOrganizationWorkspaces.js";
import { adminGetUser } from "../funcs/adminGetUser.js";
import { adminGetUsers } from "../funcs/adminGetUsers.js";
import { adminGetUserWorkspaces } from "../funcs/adminGetUserWorkspaces.js";
import { adminGetWorkspace } from "../funcs/adminGetWorkspace.js";
import { adminGetWorkspaces } from "../funcs/adminGetWorkspaces.js";
import { adminGetWorkspaceUsers } from "../funcs/adminGetWorkspaceUsers.js";
import { adminSearchEvents } from "../funcs/adminSearchEvents.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import * as operations from "../models/operations/index.js";
import { unwrapAsync } from "../types/fp.js";

export class Admin extends ClientSDK {
  /**
   * Returns a paginated list of all speakeasy organizations.
   *
   * @remarks
   * Returns a paginated list of all speakeasy organizations.
   */
  async getOrganizations(
    request: operations.GetOrganizationsRequest,
    options?: RequestOptions,
  ): Promise<Array<components.Organization>> {
    return unwrapAsync(adminGetOrganizations(
      this,
      request,
      options,
    ));
  }

  /**
   * Get a particular organization by ID or slug. Organization slugs are present in speakeasy URLs (https://app.speakeasy.com/org/speakeasy-self/admin-sdk)
   *
   * @remarks
   * Get a particular organization by ID or slug. Organization slugs are present in speakeasy URLs (https://app.speakeasy.com/org/speakeasy-self/admin-sdk)
   */
  async getOrganization(
    request: operations.GetOrganizationRequest,
    options?: RequestOptions,
  ): Promise<components.Organization> {
    return unwrapAsync(adminGetOrganization(
      this,
      request,
      options,
    ));
  }

  /**
   * Get all workspaces for a particular organization by ID
   *
   * @remarks
   * Get all workspaces for a particular organization by ID
   */
  async getOrganizationWorkspaces(
    request: operations.GetOrganizationWorkspacesRequest,
    options?: RequestOptions,
  ): Promise<Array<components.Workspace>> {
    return unwrapAsync(adminGetOrganizationWorkspaces(
      this,
      request,
      options,
    ));
  }

  /**
   * Get billing limits for a particular organization by ID.
   *
   * @remarks
   * Gets billing limits for a particular organization by ID.
   */
  async getOrganizationBillingLimits(
    request: operations.GetOrganizationBillingLimitsRequest,
    options?: RequestOptions,
  ): Promise<operations.GetOrganizationBillingLimitsResponse> {
    return unwrapAsync(adminGetOrganizationBillingLimits(
      this,
      request,
      options,
    ));
  }

  /**
   * Returns a billing usage summary by SDK language for a particular organization ID.
   *
   * @remarks
   * Returns a billing usage summary by SDK language for a particular organization ID.
   */
  async getOrganizationUsage(
    request: operations.GetOrganizationUsageRequest,
    options?: RequestOptions,
  ): Promise<components.OrganizationUsageResponse> {
    return unwrapAsync(adminGetOrganizationUsage(
      this,
      request,
      options,
    ));
  }

  /**
   * Returns a paginated list of all active billing add ons across all organizations.
   *
   * @remarks
   * Returns a paginated list of all active billing add ons across all organizations.
   */
  async getAddOns(
    request: operations.GetAddOnsRequest,
    options?: RequestOptions,
  ): Promise<Array<components.OrganizationBillingAddOn>> {
    return unwrapAsync(adminGetAddOns(
      this,
      request,
      options,
    ));
  }

  /**
   * Get add ons for a particular organization by ID.
   *
   * @remarks
   * Returns add ons for a particular organization by ID.
   */
  async getOrganizationAddOns(
    request: operations.GetOrganizationAddOnsRequest,
    options?: RequestOptions,
  ): Promise<operations.GetOrganizationAddOnsResponse> {
    return unwrapAsync(adminGetOrganizationAddOns(
      this,
      request,
      options,
    ));
  }

  /**
   * Returns a paginated list of all Speakeasy users.
   *
   * @remarks
   * Returns a paginated list of all Speakeasy users.
   */
  async getUsers(
    request: operations.GetUsersRequest,
    options?: RequestOptions,
  ): Promise<Array<components.User>> {
    return unwrapAsync(adminGetUsers(
      this,
      request,
      options,
    ));
  }

  /**
   * Returns all workspaces for a particular user by user ID.
   *
   * @remarks
   * Returns all workspaces for a particular user by user ID.
   */
  async getUserWorkspaces(
    request: operations.GetUserWorkspacesRequest,
    options?: RequestOptions,
  ): Promise<Array<components.Workspace>> {
    return unwrapAsync(adminGetUserWorkspaces(
      this,
      request,
      options,
    ));
  }

  /**
   * Get a particular user by ID or email.
   *
   * @remarks
   * Get a particular user by ID or email.
   */
  async getUser(
    request: operations.GetUserRequest,
    options?: RequestOptions,
  ): Promise<components.User> {
    return unwrapAsync(adminGetUser(
      this,
      request,
      options,
    ));
  }

  /**
   * Returns a paginated list of all Speakeasy workspaces.
   *
   * @remarks
   * Returns a paginated list of all Speakeasy workspaces.
   */
  async getWorkspaces(
    request: operations.GetWorkspacesRequest,
    options?: RequestOptions,
  ): Promise<Array<components.Workspace>> {
    return unwrapAsync(adminGetWorkspaces(
      this,
      request,
      options,
    ));
  }

  /**
   * Returns all users for a particular workspace by workspace ID.
   *
   * @remarks
   * Returns all users for a particular workspace by workspace ID.
   */
  async getWorkspaceUsers(
    request: operations.GetWorkspaceUsersRequest,
    options?: RequestOptions,
  ): Promise<Array<components.User>> {
    return unwrapAsync(adminGetWorkspaceUsers(
      this,
      request,
      options,
    ));
  }

  /**
   * Get a particular workspace by ID or org and workspace slug. Both slugs are present in speakeasy URLs (https://app.speakeasy.com/org/speakeasy-self/admin-sdk)
   *
   * @remarks
   * Get a particular workspace by ID or org and workspace slug. Both slugs are present in speakeasy URLs (https://app.speakeasy.com/org/speakeasy-self/admin-sdk)
   */
  async getWorkspace(
    request: operations.GetWorkspaceRequest,
    options?: RequestOptions,
  ): Promise<components.Workspace> {
    return unwrapAsync(adminGetWorkspace(
      this,
      request,
      options,
    ));
  }

  /**
   * Returns a list of CLI event results that match the search criteria.
   *
   * @remarks
   * Returns a list of CLI event results that match the search criteria.
   */
  async searchEvents(
    request: operations.SearchEventsRequest,
    options?: RequestOptions,
  ): Promise<Array<components.CliEvent>> {
    return unwrapAsync(adminSearchEvents(
      this,
      request,
      options,
    ));
  }
}
