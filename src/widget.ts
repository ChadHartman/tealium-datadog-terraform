import { Request } from "./request.js";
import { TfFlatObjectParam } from "./tfFlatObjectParam.js";
import { TfObjectParam } from "./tfObjectParam.js";
import { TfStringArrayParam } from "./tfStringArrayParam.js";

export class Widget extends TfObjectParam {

    constructor(json: any) {
        super(json.definition);
    }

    protected getName(): string {
        return "widget";
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
                this.params.push(...value.map((v: any) => new Widget(v)));
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
}