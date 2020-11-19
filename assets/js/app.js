import { Renderer } from "./renderer.js";
class App {
    constructor(app) {
        this.app = app;
    }
    start() {
        let renderer = new Renderer();
        this.app.vue = new Vue({
            el: '#app',
            data: {
                // tab_selected: "input_json",
                tab_selected: "output_terraform",
                input_json: localStorage.input_json || "",
                output_terraform: ""
            },
            watch: {
                input_json: function (inputJson) {
                    localStorage.input_json = inputJson;
                    this.output_terraform = renderer.render(inputJson);
                }
            }
        });
        if (localStorage.input_json) {
            this.app.vue.output_terraform = renderer.render(localStorage.input_json);
        }
    }
}
new App(window.app = {}).start();
