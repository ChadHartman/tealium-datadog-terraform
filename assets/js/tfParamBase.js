import { TfStringParam } from "./tfStringParam.js";
import { TfBoolParam } from "./tfBoolParam.js";
export class TfParamObject {
    constructor() {
        this.params = [];
    }
    parseParam(key, value) {
        switch (typeof value) {
            case "string":
                this.params.push(new TfStringParam(key, value));
                return;
            case "boolean":
                this.params.push(new TfBoolParam(key, value));
                return;
        }
        this.parseObjectParam(key, value);
    }
}
