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
                tab_selected: "input_json",
                input_json: "",
                output_terraform: ""
            },
            watch: {
                input_json: function (inputJson: string) {
                    (<any>this).output_terraform = renderer.render(inputJson);
                }
            }
        });
    }
}

new App(window.app = {}).start();