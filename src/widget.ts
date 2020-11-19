import { Request } from "./request.js";
import { TfObjectParam } from "./tfObjectParam.js";

export class Widget extends TfObjectParam {

    constructor(json: any) {
        super(json.definition);
    }

    protected getName(): string {
        return "widget";
    }

    protected parseObjectParam(key: string, value: any): boolean {

        switch (key) {

            case "requests":
                if (typeof value.map === "function") {
                    this.params.push(...value.map((v: any) => new Request(v)));
                    return true;
                }
                return false;

            case "widgets":
                this.params.push(...value.map((v: any) => new Widget(v)));
                return true;
        }

        return false;
    }
}