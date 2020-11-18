import { datadog } from "./datadog/model/dashboard.js";
import Dashboard = datadog.Dashboard;

export class Renderer {
    public render(inputJson: string): string {

        let dashboard = <Dashboard>JSON.parse(inputJson);

        let outputString = `resource "datadog_dashboard" "free_dashboard" {
  title         = "${dashboard.title}"
  description   = "${dashboard.description || ""}"
  layout_type   = "${dashboard.layout_type}"
  is_read_only  = true`;
        outputString += "\n}";

        return outputString;
    }
}
