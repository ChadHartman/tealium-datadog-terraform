export class TemplateVariable {

    private output: Array<string>;

    constructor(json: any) {

        this.output = [`template_variable {`];

        for (let key of Object.keys(json)) {
            this.output.push(`  ${key} = "${json[key]}"`);
        }

        this.output.push(`}`);
    }

    public toString(prefix: string): string {
        return `${prefix}${this.output.join(`\n${prefix}`)}\n`;
    }

}
