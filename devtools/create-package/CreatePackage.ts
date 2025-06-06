import { mkdirSync, writeFileSync } from "node:fs";
import { join, resolve } from "node:path";
import { parseArgs } from "node:util";
import { ChildProcess } from "@figliolia/child-process";
import TSConfig from "../../tsconfig.json";

export class CreatePackage {
  public static ROOT = resolve(__dirname, "../../");
  public static SRC = join(this.ROOT, "src");
  public static TSCONFIG_PATH = join(this.ROOT, "tsconfig.json");

  public static async run() {
    const config = this.modifyTSConfig();
    writeFileSync(
      join(this.ROOT, "tsconfig.json"),
      JSON.stringify(config, null, 2),
    );
    await ChildProcess.execute(`npx eslint --fix '${this.ROOT}/tsconfig.json'`);
  }

  private static modifyTSConfig() {
    const name = this.parseName();
    mkdirSync(join(this.SRC, name));
    const { compilerOptions } = TSConfig;
    const packageKey = `${name}/*`;
    const packagePath = `./${name}/*`;
    const newPaths: Record<string, string[]> = {
      ...compilerOptions.paths,
      [packageKey]: [packagePath],
    };
    const sorted = Object.keys(newPaths)
      .sort()
      .reduce<Record<string, string[]>>((acc, next) => {
        acc[next] = newPaths[next];
        return acc;
      }, {});
    return {
      ...TSConfig,
      compilerOptions: {
        ...compilerOptions,
        paths: sorted,
      },
    };
  }

  private static parseName() {
    const args = parseArgs({
      args: process.argv.slice(2),
      options: {
        name: {
          short: "n",
          type: "string",
        },
      },
    });
    const { name } = args.values;
    if (!name) {
      console.log("A --name argument is required");
      process.exit(0);
    }
    return name;
  }
}
