import { TemplateVariable } from "./templateVariable.js"

export class TemplateVariablePreset {

    private output: string;

    constructor(json: any) {

        this.output = `  template_variable_preset {\n`;

        for (let key of Object.keys(json)) {
            this.output += this.parseKey(key, json[key]);
        }

        this.output += `  }\n`;
    }

    private parseKey(key: string, value: any): string {

        if (typeof value === "string") {
            return `    ${key} = "${value}"\n`;
        }

        switch (key) {
            case "template_variables": {

                if (value.length === 0) {
                    return "";
                }

                let composite = "";

                for (let v of value) {
                    composite += new TemplateVariable(v).toString("    ");
                }

                return composite;
            }


            default:
                return `  # Unused key-value pair:\n  # ${key} = ${JSON.stringify(value)}\n`;
        }
    }

    public toString(): string {
        return this.output;
    }

}
