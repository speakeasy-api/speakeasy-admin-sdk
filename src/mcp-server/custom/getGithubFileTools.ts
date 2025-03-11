import { z } from "zod";
import { formatResult, ToolDefinition } from "../tools.js";

type FetchGithubFileRequest = {
  org: string;
  repo: string;
  filepath: string;
};

const FetchGithubFileRequestt$inboundSchema: z.ZodType<
  FetchGithubFileRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  org: z.string(),
  repo: z.string(),
  filepath: z.string()
});

const fetchGithubFileToolArg = {
  request: FetchGithubFileRequestt$inboundSchema
};

export const tool$fetchGithubFile: ToolDefinition<typeof fetchGithubFileToolArg> = {
  name: "admin_get_git_file",
  description: "Gets a file from a GitHub repository",
  scopes: [],
  args: fetchGithubFileToolArg,
  tool: async (_client, args, _extra) => {
    const { org, repo, filepath } = args.request;
    const url = `https://raw.githubusercontent.com/${org}/${repo}/main/${filepath}`;

    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Failed to fetch file: ${response.statusText}`);
      }
      const content = await response.text();
      return formatResult(content, { response });
    } catch (err) {
      console.error(err);
      return {
        content: [{ type: "text", text: `Error: "${String(err)}"` }],
        isError: true,
      };
    }
  }
};