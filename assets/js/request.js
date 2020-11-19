import { TfFlatObjectParam } from "./tfFlatObjectParam.js";
import { TfObjectParam } from "./tfObjectParam.js";
export class Request extends TfObjectParam {
    getName() {
        return "request";
    }
    parseObjectParam(key, value) {
        switch (key) {
            case "fill":
            case "style":
            case "size":
                this.params.push(new TfFlatObjectParam(key, value));
                return true;
            case "conditional_formats":
            case "metadata":
                this.params.push(...value.map((v) => new TfFlatObjectParam(key, v)));
                return true;
        }
        return false;
    }
}
