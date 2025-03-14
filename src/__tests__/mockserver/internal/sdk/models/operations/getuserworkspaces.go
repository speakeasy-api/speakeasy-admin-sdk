// Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.

package operations

import (
	"mockserver/internal/sdk/models/components"
)

type GetUserWorkspacesRequest struct {
	// Unique identifier of the user.
	UserID string `pathParam:"style=simple,explode=false,name=userID"`
}

func (o *GetUserWorkspacesRequest) GetUserID() string {
	if o == nil {
		return ""
	}
	return o.UserID
}

type GetUserWorkspacesResponse struct {
	HTTPMeta components.HTTPMetadata `json:"-"`
	// OK
	Workspaces []components.Workspace
}

func (o *GetUserWorkspacesResponse) GetHTTPMeta() components.HTTPMetadata {
	if o == nil {
		return components.HTTPMetadata{}
	}
	return o.HTTPMeta
}

func (o *GetUserWorkspacesResponse) GetWorkspaces() []components.Workspace {
	if o == nil {
		return nil
	}
	return o.Workspaces
}
