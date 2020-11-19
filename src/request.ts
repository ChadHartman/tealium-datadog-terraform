import { TfFlatObjectParam } from "./tfFlatObjectParam.js";
import { TfObjectParam } from "./tfObjectParam.js";

export class Request extends TfObjectParam {
    protected getName() {
        return "request";
    }

    protected parseObjectParam(key: string, value: any): boolean {

        switch (key) {
            case "fill":
            case "style":
            case "size":
                this.params.push(new TfFlatObjectParam(key, value));
                return true;

            case "conditional_formats":
            case "metadata":
                this.params.push(...value.map((v: any) => new TfFlatObjectParam(key, v)));
                return true;
        }

        return false;
    }
}