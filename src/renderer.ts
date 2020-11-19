import { Dashboard } from "./dashboard.js";

export class Renderer {

    public render(input: string): string {
        let json = JSON.parse(input);
        let dashboard = new Dashboard(json);
        return dashboard.toTerraform();
    }
}
