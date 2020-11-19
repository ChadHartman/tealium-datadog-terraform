import { TfParam } from "./tfParam.js";

export class TfStringParam implements TfParam {
    constructor(
        private key: string,
        private value: string) { }

    public toTerraform(prefix: string = ""): string {
        return `${prefix}${this.key} = "${this.value}"\n`;
    }
}