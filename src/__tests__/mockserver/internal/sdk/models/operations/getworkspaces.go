// Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.

package operations

import (
	"mockserver/internal/sdk/models/components"
)

type GetWorkspacesRequest struct {
	// The maximum number of organizations to return.
	Limit *int64 `queryParam:"style=form,explode=true,name=limit"`
	// The number of organizations to skip before starting to return results.
	Offset *int64 `queryParam:"style=form,explode=true,name=offset"`
}

func (o *GetWorkspacesRequest) GetLimit() *int64 {
	if o == nil {
		return nil
	}
	return o.Limit
}

func (o *GetWorkspacesRequest) GetOffset() *int64 {
	if o == nil {
		return nil
	}
	return o.Offset
}

type GetWorkspacesResponse struct {
	HTTPMeta components.HTTPMetadata `json:"-"`
	// OK
	Workspaces []components.Workspace
}

func (o *GetWorkspacesResponse) GetHTTPMeta() components.HTTPMetadata {
	if o == nil {
		return components.HTTPMetadata{}
	}
	return o.HTTPMeta
}

func (o *GetWorkspacesResponse) GetWorkspaces() []components.Workspace {
	if o == nil {
		return nil
	}
	return o.Workspaces
}
