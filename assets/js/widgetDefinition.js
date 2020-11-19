import { TfFlatObjectParam } from "./tfFlatObjectParam.js";
import { TfObjectParam } from "./tfObjectParam.js";
import { TfStringArrayParam } from "./tfStringArrayParam.js";
import { WidgetParam } from "./widgetParam.js";
import { Request } from "./request.js";
export class WidgetDefinition extends TfObjectParam {
    constructor(name, json) {
        super(json.definition);
        this.name = name;
    }
    getName() {
        return this.name;
    }
    parseObjectParam(key, value) {
        switch (key) {
            case "group":
            case "scope":
                this.params.push(new TfStringArrayParam(key, value));
                return true;
            case "requests":
                if (typeof value.map === "function") {
                    this.params.push(...value.map((v) => new Request(v)));
                }
                else {
                    this.params.push(new Request(value));
                }
                return true;
            case "widgets":
                this.params.push(...value.map((v) => new WidgetParam(v)));
                return true;
            case "style":
            case "yaxis":
                this.params.push(new TfFlatObjectParam(key, value));
                return true;
            case "markers":
                this.params.push(...value.map((v) => new TfFlatObjectParam("marker", v)));
                return true;
        }
        return false;
    }
    getExcludedKeys() {
        return ["type"];
    }
}
