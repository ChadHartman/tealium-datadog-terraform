import { WidgetDefinition } from "./widgetDefinition.js";
// interface WidgetGroup {
//     title: string;
//     type: string;
//     layout_type: string;
//     widgets: Array<WidgetModel>;
// }
// interface Widget {
//     // title: string;
//     type: string;
//     // requests: Array<any>;
// }
export class WidgetParam {
    constructor(json) {
        this.param = new WidgetDefinition(`${json.definition.type}_definition`, json);
    }
    toTerraform(prefix) {
        return `${prefix}widget {\n${this.param.toTerraform(prefix + "  ")}${prefix}}\n`;
    }
}
