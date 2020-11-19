import { TfParam } from "./tfParam.js";

export class TfStringParam implements TfParam {
    constructor(
        private key: string,
        private value: string) {

        this.value = this.value.replace(/\n/g, "\\n");
    }

    public toTerraform(prefix: string = ""): string {
        return `${prefix}${this.key} = "${this.value}"\n`;
    }
}