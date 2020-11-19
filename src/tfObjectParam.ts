import { TfParam } from "./tfParam.js";
import { TfStringParam } from "./tfStringParam.js";
import { TfPrimativeParam } from "./tfPrimativeParam.js";
import { TfCommentParam } from "./tfCommentParam.js";

export abstract class TfObjectParam implements TfParam {

    protected params: Array<TfParam> = [];

    constructor(json: any) {
        for (let key of Object.keys(json)) {
            this.parseParam(key, json[key]);
        }
    }

    private parseParam(key: string, value: any) {

        if (this.getExcludedKeys().indexOf(key) !== -1) {
            return;
        }

        switch (typeof value) {
            case "string":
                this.params.push(new TfStringParam(key, value));
                return;

            case "number":
            case "boolean":
                this.params.push(new TfPrimativeParam(key, value));
                return;
        }

        if (!this.parseObjectParam(key, value)) {
            this.params.push(new TfCommentParam(key, value));
        }
    }

    public toTerraform(prefix: string = ""): string {
        let output = `${prefix}${this.getName()} {\n`;
        for (let param of this.params) {
            output += param.toTerraform(prefix + "  ");
        }
        return output + `${prefix}}\n`;
    }

    protected getExcludedKeys(): Array<string> {
        return [];
    }

    protected abstract getName(): string;

    protected abstract parseObjectParam(key: string, value: any): boolean;
}