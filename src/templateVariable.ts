import { TfObjectParam } from "./tfObjectParam.js";

export class TemplateVariable extends TfObjectParam {

    protected getName() {
        return "template_variable";
    }

    protected parseObjectParam(key: string, value: any): boolean {
        return false;
    }
}
