import { TfParam } from "./tfParam.js";

export class TfStringArrayParam implements TfParam {
    constructor(
        private key: string,
        private value: Array<string>) { }

    public toTerraform(prefix: string = ""): string {
        return this.value.length === 0 ? "" : `${prefix}${this.key} = ["${this.value.join(`","`)}"]\n`;
    }
}