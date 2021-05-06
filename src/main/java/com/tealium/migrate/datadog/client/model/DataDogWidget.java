package com.tealium.migrate.datadog.client.model;

import java.util.List;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DataDogWidget {

	@JsonProperty
	private Long id;

	@JsonProperty
	private Definition definition;

	@JsonProperty
	private Layout layout;

	public static class Definition {

		@JsonProperty("global_time_target")
		private String globalTimeTarget;

		@JsonProperty("show_error_budget")
		private Boolean showErrorBudget;

		@JsonProperty("slo_id")
		private String sloId;

		@JsonProperty("time_windows")
		private List<String> timeWindows;

		@JsonProperty("view_mode")
		private String viewMode;

		@JsonProperty("view_type")
		private String viewType;

		@JsonProperty("alert_id")
		private String alertId;

		@JsonProperty("custom_links")
		private List<CustomLink> customLinks;

		@JsonProperty
		private List<Request> requests;

		@JsonProperty("has_search_bar")
		private String hasSearchBar;

		@JsonProperty
		private Time time;

		@JsonProperty
		private String title;

		@JsonProperty("title_align")
		private String titleAlign;

		@JsonProperty("title_size")
		private String titleSize;

		@JsonProperty
		private String type;

		@JsonProperty("viz_type")
		private String vizType;

		@JsonProperty("events")
		private List<Event> events;

		@JsonProperty("legend_columns")
		private List<String> legendColumns;

		@JsonProperty("legend_layout")
		private String legendLayout;

		@JsonProperty("legend_size")
		private String legendSize;

		@JsonProperty("markers")
		private List<Marker> markers;

		@JsonProperty("right_yaxis")
		private YAxis rightYaxis;

		@JsonProperty("show_legend")
		private Boolean showLegend;

		@JsonProperty("yaxis")
		private YAxis yaxis;

		@JsonProperty("show_tick")
		private Boolean showTick;

		@JsonProperty("tick_edge")
		private String tickEdge;

		@JsonProperty("tick_pos")
		private String tickPos;

		@JsonProperty("text_align")
		private String textAlign;

		@JsonProperty
		private String content;

		@JsonProperty("font_size")
		private String fontSize;

		@JsonProperty("background_color")
		private String backgroundColor;

		@JsonProperty
		private Integer precision;

		@JsonProperty
		private Boolean autoscale;
	}

	public static class MetaData {
		@JsonProperty("alias_name")
		private String aliasName;

		@JsonProperty
		private String expression;
	}

	public static class YAxis {
		@JsonProperty("include_zero")
		private Boolean includeZero;

		@JsonProperty
		private String label;

		@JsonProperty
		private String max;

		@JsonProperty
		private String min;

		@JsonProperty
		private String scale;

	}

	public static class Marker {

	}

	public static class Event {

	}

	public static class Request {
		@JsonProperty
		private String aggregator;

		@JsonProperty
		private String alias;

		@JsonProperty("apm_query")
		private ApmQuery apmQuery;

		@JsonProperty("apm_stats_query")
		private ApmStatsQuery apmStatsQuery;

		@JsonProperty("cell_display_mode")
		private List<String> cellDisplayMode;

		@JsonProperty("conditional_formats")
		private List<ConditionalFormat> conditionalFormats;

		@JsonProperty("display_type")
		private String displayType;

		@JsonProperty("event_query")
		private EventQuery eventQuery;

		@JsonProperty
		private Long limit;

		@JsonProperty("log_query")
		private LogQuery logQuery;

		@JsonProperty("network_query")
		private NetworkQuery networkQuery;

		@JsonProperty
		private String order;

		@JsonProperty("process_query")
		private ProcessQuery processQuery;

		@JsonProperty("profile_metrics_query")
		private ProfileMetricsQuery profileMetricsQuery;

		@JsonProperty
		private String q;

		@JsonProperty("rum_query")
		private RumQuery rumQuery;

		@JsonProperty("security_query")
		private SecurityQuery securityQuery;

		@JsonProperty
		private Style style;
		
		@JsonProperty
		private List<MetaData> metadata;
	}

	public static class Style {
		@JsonProperty("line_type")
		private String lineType;

		@JsonProperty("line_width")
		private String lineWidth;

		@JsonProperty
		private String palette;

	}

	public static class SecurityQuery {
	}

	public static class RumQuery {

	}

	public static class ProfileMetricsQuery {
	}

	public static class ProcessQuery {
	}

	public static class NetworkQuery {
	}

	public static class LogQuery {
	}

	public static class EventQuery {
	}

	public static class ConditionalFormat {

		@JsonProperty
		private String comparator;

		@JsonProperty("custom_bg_color")
		private String customBgColor;

		@JsonProperty("custom_fg_color")
		private String customFgColor;

		@JsonProperty("hide_value")
		private Boolean hideValue;

		@JsonProperty("image_url")
		private String imageUrl;

		@JsonProperty
		private String metric;

		@JsonProperty
		private String palette;

		@JsonProperty
		private String timeframe;

		@JsonProperty
		private Double value;

	}

	public static class ApmStatsQuery {
	}

	public static class ApmQuery {

	}

	public static class CustomLink {

		@JsonProperty
		private String label;

		@JsonProperty
		private String link;
	}

	public static class Time {
		@JsonProperty("live_span")
		private String liveSpan;
	}

	public static class Layout {

		@JsonProperty
		private Integer height;

		@JsonProperty("is_column_break")
		private Boolean isColumnBreak;

		@JsonProperty
		private Integer width;

		@JsonProperty
		private Integer x;

		@JsonProperty
		private Integer y;
	}
}
