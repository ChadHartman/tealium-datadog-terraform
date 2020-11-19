import { Dashboard } from "./dashboard.js";
export class Renderer {
    render(input) {
        let json = JSON.parse(input);
        let dashboard = new Dashboard(json);
        return dashboard.toTerraform();
    }
}
