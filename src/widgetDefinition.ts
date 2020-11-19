import { TfFlatObjectParam } from "./tfFlatObjectParam.js";
import { TfObjectParam } from "./tfObjectParam.js";
import { TfStringArrayParam } from "./tfStringArrayParam.js";
import { WidgetParam } from "./widgetParam.js";
import { Request } from "./request.js";

export class WidgetDefinition extends TfObjectParam {

    constructor(
        private name: string,
        json: any) {

        super(json.definition);
    }

    protected getName(): string {
        return this.name;
    }

    protected parseObjectParam(key: string, value: any): boolean {
        switch (key) {

            case "group":
            case "scope":
                this.params.push(new TfStringArrayParam(key, value));
                return true;

            case "requests":
                if (typeof value.map === "function") {
                    this.params.push(...value.map((v: any) => new Request(v)));
                } else {
                    this.params.push(new Request(value));
                }
                return true;

            case "widgets":
                this.params.push(...value.map((v: any) => new WidgetParam(v)));
                return true;

            case "style":
            case "yaxis":
                this.params.push(new TfFlatObjectParam(key, value));
                return true;

            case "markers":
                this.params.push(...value.map((v: any) => new TfFlatObjectParam(key, v)));
                return true;

        }

        return false;
    }

    protected getExcludedKeys(): Array<string> {
        return ["type"];
    }
}