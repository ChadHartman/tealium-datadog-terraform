import { TfObjectParam } from "./tfObjectParam.js";
export class TfFlatObject extends TfObjectParam {
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
