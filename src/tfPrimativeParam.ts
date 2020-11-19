import { TfParam } from "./tfParam.js";

export class TfPrimativeParam implements TfParam {
    constructor(
        private key: string,
        private value: any) { }

    toTerraform(prefix: string = ""): string {
        return `${prefix}${this.key} = ${this.value}\n`;
    }
}