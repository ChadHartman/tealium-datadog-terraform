import { TfObjectParam } from "./tfObjectParam.js";

export class Request extends TfObjectParam {
    protected getName() {
        return "request";
    }

    protected parseObjectParam(key: string, value: any): boolean {
        return false;
    }
}