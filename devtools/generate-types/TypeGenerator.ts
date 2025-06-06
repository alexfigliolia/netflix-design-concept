import { rmSync, writeFileSync } from "fs";
import { ChildProcess } from "@figliolia/child-process";

export class TypeGenerator {
  private static readonly SPEC_FILE = "tmpspec.json";
  public static async generate() {
    await this.fetchSpec();
    await this.generateClient();
    this.cleanUp();
  }

  private static async fetchSpec() {
    const response = await fetch(
      "https://developer.themoviedb.org/openapi/64542913e1f86100738e227f",
    );
    const json = await response.json();
    writeFileSync(this.SPEC_FILE, JSON.stringify(json, null, 2));
  }

  private static async generateClient() {
    return new ChildProcess(
      `yarn openapi-generator-cli generate -i ${this.SPEC_FILE} -g typescript-fetch -o src/API`,
    ).handler;
  }

  private static cleanUp() {
    rmSync(this.SPEC_FILE);
  }
}
