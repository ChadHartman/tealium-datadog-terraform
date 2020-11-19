import { TfStringParam } from "./tfStringParam.js";
import { TfPrimativeParam } from "./tfPrimativeParam.js";
import { TfCommentParam } from "./tfCommentParam.js";
export class TfObjectParam {
    constructor(json) {
        this.params = [];
        for (let key of Object.keys(json)) {
            this.parseParam(key, json[key]);
        }
    }
    parseParam(key, value) {
        if (this.getExcludedKeys().indexOf(key) !== -1) {
            return;
        }
        switch (typeof value) {
            case "string":
                this.params.push(new TfStringParam(key, value));
                return;
            case "number":
            case "boolean":
                this.params.push(new TfPrimativeParam(key, value));
                return;
        }
        if (!this.parseObjectParam(key, value)) {
            this.params.push(new TfCommentParam(key, value));
        }
    }
    toTerraform(prefix = "") {
        let output = `${prefix}${this.getName()} {\n`;
        for (let param of this.params) {
            output += param.toTerraform(prefix + "  ");
        }
        return output + `${prefix}}\n`;
    }
    getExcludedKeys() {
        return [];
    }
}
