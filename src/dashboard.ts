import { TemplateVariable } from "./templateVariable.js"
import { TemplateVariablePreset } from "./templateVariablePreset.js"

export class Dashboard {

    private output: string;

    constructor(json: any) {
        this.output = `resource "datadog_dashboard" "free_dashboard" {\n`;
        for (let key of Object.keys(json)) {
            this.output += this.parseKey(key, json[key]);
        }
        this.output += "}";
    }

    private parseKey(key: string, value: any): string {

        if (typeof value === "string") {
            return value.length === 0 ? `` : `  ${key} = "${value}"\n`;
        }

        if (typeof value === "boolean") {
            return `  ${key} = ${value}\n`;
        }

        switch (key) {

            case "notify_list":
                return value.length === 0 ? `` : `  notify_list = ["${value.join(`","`)}"]`

            case "template_variables": {
                if (value.length === 0) {
                    return "";
                }

                let composite = "";

                for (let v of value) {
                    composite += new TemplateVariable(v).toString("  ");
                }

                return composite;
            }

            case "template_variable_presets": {
                if (value.length === 0) {
                    return "";
                }

                let composite = "";

                for (let v of value) {
                    composite += new TemplateVariablePreset(v).toString();
                }

                return composite;
            }
        }

        return `  # Unused key-value pair:\n  # ${key} = ${JSON.stringify(value)}\n`;
    }

    public toString(): string {
        return this.output;
    }
}