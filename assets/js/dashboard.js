import { TemplateVariablePreset } from "./templateVariablePreset.js";
import { TfObjectParam } from "./tfObjectParam.js";
import { WidgetParam } from "./widgetParam.js";
import { TfStringArrayParam } from "./tfStringArrayParam.js";
import { TfFlatObjectParam } from "./tfFlatObjectParam.js";
export class Dashboard extends TfObjectParam {
    parseObjectParam(key, value) {
        switch (key) {
            case "notify_list":
                this.params.push(new TfStringArrayParam(key, value));
                return true;
            case "template_variables":
                this.params.push(...value.map((v) => new TfFlatObjectParam("template_variable", v)));
                return true;
            case "template_variable_presets": {
                this.params.push(...value.map((v) => new TemplateVariablePreset(v)));
                return true;
            }
            case "widgets":
                this.params.push(...value.map((v) => new WidgetParam(v)));
                return true;
        }
        return false;
    }
    getExcludedKeys() {
        return ["id"];
    }
    getName() {
        return `resource "datadog_dashboard" "tf_dd_detailed"`;
    }
}
