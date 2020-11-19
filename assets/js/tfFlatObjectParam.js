import { TfObjectParam } from "./tfObjectParam.js";
export class TfFlatObjectParam extends TfObjectParam {
    constructor(name, value) {
        super(value);
        this.name = name;
    }
    getName() {
        return this.name;
    }
    parseObjectParam(key, value) {
        return false;
    }
}
