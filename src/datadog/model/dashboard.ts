export namespace datadog {

    export interface Dashboard {
        title: string;
        widget: Array<any>;
        layout_type: string;
        description?: string;
        is_read_only?: boolean;
        url?: string;
        notify_list?: Array<any>;
        template_variables?: Array<any>;
        template_variable_presets?: Array<any>
        dashboard_lists?: Array<string>;
    }

}