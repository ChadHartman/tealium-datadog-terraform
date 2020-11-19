export class TfStringArrayParam {
    constructor(key, value) {
        this.key = key;
        this.value = value;
    }
    toTerraform(prefix = "") {
        return this.value.length === 0 ? "" : `${prefix}${this.key} = ["${this.value.join(`","`)}"]\n`;
    }
}
