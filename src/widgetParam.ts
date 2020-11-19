import { TfParam } from "./tfParam.js";
import { WidgetDefinition } from "./widgetDefinition.js";

interface WidgetModel {
    id: string;
    // definition: WidgetGroup | Widget;
    definition: { type: string };
}

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

export class WidgetParam implements TfParam {

    private param: TfParam;

    constructor(json: WidgetModel) {
        this.param = new WidgetDefinition(`${json.definition.type}_definition`, json);
    }

    public toTerraform(prefix?: string): string {
        return `${prefix}widget {\n${this.param.toTerraform(prefix + "  ")}${prefix}}\n`;
    }
}