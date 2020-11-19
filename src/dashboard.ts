import { TemplateVariablePreset } from "./templateVariablePreset.js"
import { TfObjectParam } from "./tfObjectParam.js";
import { WidgetParam } from "./widgetParam.js";
import { TfStringArrayParam } from "./tfStringArrayParam.js";
import { TfFlatObjectParam } from "./tfFlatObjectParam.js";

export class Dashboard extends TfObjectParam {

    protected parseObjectParam(key: string, value: any): boolean {

        switch (key) {

            case "notify_list":
                this.params.push(new TfStringArrayParam(key, value));
                return true;

            case "template_variables":
                this.params.push(...value.map((v: any) => new TfFlatObjectParam("template_variable", v)));
                return true;

            case "template_variable_presets": {
                this.params.push(...value.map((v: any) => new TemplateVariablePreset(v)));
                return true;
            }

            case "widgets":
                this.params.push(...value.map((v: any) => new WidgetParam(v)));
                return true;
        }

        return false
    }

    protected getExcludedKeys(): Array<string> {
        return ["id"];
    }

    protected getName(): string {
        return `resource "datadog_dashboard" "tf_dd_detailed"`;
    }
}