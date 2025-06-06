import { CreatePackage } from "./CreatePackage";

(async () => {
  await CreatePackage.run();
})().catch(console.log);
