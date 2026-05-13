import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { z } from "zod";

const server = new McpServer({
  name: "image-generator",
  version: "1.0.0",
});

server.tool(
  "generate_image",
  "Generates an image from a text prompt using Pollinations AI",
  {
    prompt: z.string().describe("The image description to generate"),
  },
  async ({ prompt }) => {
    const encodedPrompt = encodeURIComponent(prompt);
    const imageUrl = `https://image.pollinations.ai/prompt/${encodedPrompt}?width=1024&height=1024&nologo=true`;

    const response = await fetch(imageUrl);
    const arrayBuffer = await response.arrayBuffer();
    const base64 = Buffer.from(arrayBuffer).toString("base64");

    return {
      content: [
        {
          type: "image",
          data: base64,
          mimeType: "image/jpeg",
        },
        {
          type: "text",
          text: `Generated image for: "${prompt}"`,
        },
      ],
    };
  }
);

const transport = new StdioServerTransport();
await server.connect(transport);
console.error("Image Generator MCP Server running...");