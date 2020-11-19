import { TemplateVariable } from "./templateVariable.js"
import { TfObjectParam } from "./tfObjectParam.js";

export class TemplateVariablePreset extends TfObjectParam {

    protected getName(): string {
        return "template_variable_preset";
    }

    protected parseObjectParam(key: string, value: any): boolean {

        if (key === "template_variables") {
            this.params.push(...value.map((v: any) => new TemplateVariable(v)));
            return true;
        }

        return false;
    }
}
