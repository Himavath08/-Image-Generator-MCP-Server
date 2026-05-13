# Image Generator MCP Server

A local MCP server that gives Claude the ability to generate images using Pollinations AI — completely free, no API key needed.

## What it does
- Connects to Claude Desktop as an MCP tool
- Claude can call `generate_image` mid-conversation
- Uses Pollinations.ai for free image generation

## Setup

1. Clone this repo
   git clone https://github.com/Himavath08/-Image-Generator-MCP-Server.git

2. Install dependencies
   cd image-mcp
   npm install

3. Add to Claude Desktop config
   Edit: C:\Users\YOUR_NAME\AppData\Roaming\Claude\claude_desktop_config.json
   ```

   {
     "mcpServers": {
       "image-generator": {
         "command": "node",
         "args": ["C:\\Users\\YOUR_NAME\\Documents\\image-mcp\\index.js"]
       }
     }
   }

5. Restart Claude Desktop — the tool appears automatically.

## Tech
- Node.js
- @modelcontextprotocol/sdk
