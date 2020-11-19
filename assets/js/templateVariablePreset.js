import { TfFlatObjectParam } from "./tfFlatObjectParam.js";
import { TfObjectParam } from "./tfObjectParam.js";
export class TemplateVariablePreset extends TfObjectParam {
    getName() {
        return "template_variable_preset";
    }
    parseObjectParam(key, value) {
        if (key === "template_variables") {
            this.params.push(...value.map((v) => new TfFlatObjectParam("template_variable", v)));
            return true;
        }
        return false;
    }
}
