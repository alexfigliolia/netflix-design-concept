import { TypeGenerator } from "./TypeGenerator";

(async () => {
  await TypeGenerator.generate();
})().catch(console.log);
