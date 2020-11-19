export class TfStringParam {
    constructor(key, value) {
        this.key = key;
        this.value = value;
        this.value = this.value.replace(/\n/g, "\\n");
    }
    toTerraform(prefix = "") {
        return `${prefix}${this.key} = "${this.value}"\n`;
    }
}
