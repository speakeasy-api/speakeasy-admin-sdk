import { formatResult, ResourceDefinition } from "../resources.js";
import fs from 'node:fs/promises';

export const resource$aboutSpeakeasy: ResourceDefinition = {
    name: "About Speakeasy",
    description: "Reads the about Speakeasy PDF",
    resource: "file:///Users/ryanalbert/about_speakeasy.pdf",
    scopes: [],
    read: async (_client, uri, _extra) => {
        try {
            const pdfContent = await fs.readFile(uri, null);
            return formatResult(pdfContent, uri, {
                mimeType: "application/pdf"
            });
        } catch (err) {
            console.error(err);
            return {
                contents: [{
                    isError: true,
                    uri: uri.toString(),
                    mimeType: "application/json",
                    text: `Failed to read PDF file: ${String(err)}`
                }]
            };
        }
    }
}