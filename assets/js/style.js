import { TfObjectParam } from "./tfObjectParam.js";
export class Style extends TfObjectParam {
    getName() {
        return "style";
    }
    parseObjectParam(key, value) {
        return false;
    }
}
