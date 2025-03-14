// Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.

package handler

import (
	"fmt"
	"log"
	"mockserver/internal/handler/assert"
	"mockserver/internal/logging"
	"mockserver/internal/sdk/models/components"
	"mockserver/internal/sdk/models/operations"
	"mockserver/internal/sdk/types"
	"mockserver/internal/sdk/utils"
	"mockserver/internal/tracking"
	"net/http"
)

func pathGetV1AdminOrganizationsOrganizationIDBillingLimits(dir *logging.HTTPFileDirectory, rt *tracking.RequestTracker) http.HandlerFunc {
	return func(w http.ResponseWriter, req *http.Request) {
		test := req.Header.Get("x-speakeasy-test-name")
		instanceID := req.Header.Get("x-speakeasy-test-instance-id")

		count := rt.GetRequestCount(test, instanceID)

		switch fmt.Sprintf("%s[%d]", test, count) {
		case "getOrganizationBillingLimits[0]":
			dir.HandlerFunc("getOrganizationBillingLimits", testGetOrganizationBillingLimitsGetOrganizationBillingLimits0)(w, req)
		default:
			http.Error(w, fmt.Sprintf("Unknown test: %s[%d]", test, count), http.StatusBadRequest)
		}
	}
}

func testGetOrganizationBillingLimitsGetOrganizationBillingLimits0(w http.ResponseWriter, req *http.Request) {
	if err := assert.SecurityHeader(req, "x-api-key", false); err != nil {
		log.Printf("assertion error: %s\n", err)
		http.Error(w, err.Error(), http.StatusUnauthorized)
		return
	}
	if err := assert.AcceptHeader(req, []string{"application/json"}); err != nil {
		log.Printf("assertion error: %s\n", err)
		http.Error(w, err.Error(), http.StatusBadRequest)
		return
	}
	if err := assert.HeaderExists(req, "User-Agent"); err != nil {
		log.Printf("assertion error: %s\n", err)
		http.Error(w, err.Error(), http.StatusBadRequest)
		return
	}
	respBody := &operations.GetOrganizationBillingLimitsResponseBody{
		BillingLimits: []components.BillingLimit{
			components.BillingLimit{
				OrganizationID: "<id>",
				TargetType:     "<value>",
				OperationLimit: 244756,
				Blocking:       false,
				CreatedAt:      types.MustTimeFromString("2023-03-10T15:04:21.238Z"),
				UpdatedAt:      types.MustTimeFromString("2023-10-22T16:18:01.116Z"),
			},
		},
	}
	respBodyBytes, err := utils.MarshalJSON(respBody, "", true)

	if err != nil {
		http.Error(
			w,
			"Unable to encode response body as JSON: "+err.Error(),
			http.StatusInternalServerError,
		)
		return
	}
	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(http.StatusOK)
	_, _ = w.Write(respBodyBytes)
}
