import {createClient} from "@connectrpc/connect";
import {createConnectTransport} from "@connectrpc/connect-node";
import {ElizaService} from "../gen/connectrpc/eliza/v1/eliza_pb";

const transport = createConnectTransport({
  baseUrl: "http://127.0.0.1:8080",
  httpVersion: "1.1",
  useBinaryFormat: false,
});

async function main() {
  const client = createClient(ElizaService, transport);
  const res = await client.say({sentence: "I feel happy."});
  console.log(res);
}

void main();