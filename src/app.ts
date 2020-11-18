import { Renderer } from "./renderer.js";

declare let Vue: any;
declare global {
    interface Window { app: any; }
}

class App {

    constructor(private app: any) { }

    public start() {

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
                input_json: function (inputJson: string) {
                    localStorage.input_json = inputJson;
                    (<any>this).output_terraform = renderer.render(inputJson);
                }
            }
        });

        if (localStorage.input_json) {
            this.app.vue.output_terraform = renderer.render(localStorage.input_json);
        }
    }
}

new App(window.app = {}).start();