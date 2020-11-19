export class TfCommentParam {
    constructor(key, value) {
        this.key = key;
        this.value = value;
    }
    toTerraform(prefix = "") {
        return `${prefix}# !!! Unused Param !!!\n${prefix}# ${this.key} = ${JSON.stringify(this.value)}\n`;
    }
}
