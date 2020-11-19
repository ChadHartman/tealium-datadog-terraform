export class TemplateVariablePresets {
    constructor(json) {
        this.output = `  template_variable {\n`;
        for (let key of Object.keys(json)) {
            this.output += `    ${key} = "${json[key]}\n`;
        }
        this.output += `  }\n`;
    }
    toString() {
        return this.output;
    }
}
