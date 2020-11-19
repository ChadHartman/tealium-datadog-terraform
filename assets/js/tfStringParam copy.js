export class TfStringParam {
    constructor(key, value) {
        this.key = key;
        this.value = value;
    }
    toTerraform(prefix) {
        return `${prefix}${this.key} = "${this.value}"`;
    }
}
