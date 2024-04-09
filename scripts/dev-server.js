import { serveDir } from "https://deno.land/std@0.221.0/http/file_server.ts";

Deno.serve((req) => {
  return serveDir(req, {});
});
