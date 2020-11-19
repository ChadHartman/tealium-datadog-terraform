import { TfParam } from "./tfParam.js";

export class TfCommentParam implements TfParam {
    constructor(
        private key: string,
        private value: any) { }

    public toTerraform(prefix: string = ""): string {
        return `${prefix}# !!! Unused Param !!!\n${prefix}# ${this.key} = ${JSON.stringify(this.value)}\n`;
    }
}