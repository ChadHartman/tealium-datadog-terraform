import { TfObjectParam } from "./tfObjectParam.js";

export class TfFlatObjectParam extends TfObjectParam {

    constructor(
        private name: string,
        value: any) {
        super(value);
    }

    protected getName() {
        return this.name;
    }

    protected parseObjectParam(key: string, value: any): boolean {
        return false;
    }
}
