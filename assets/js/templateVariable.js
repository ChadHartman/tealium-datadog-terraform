import { TfObjectParam } from "./tfObjectParam.js";
export class TemplateVariable extends TfObjectParam {
    getName() {
        return "template_variable";
    }
    parseObjectParam(key, value) {
        return false;
    }
}
