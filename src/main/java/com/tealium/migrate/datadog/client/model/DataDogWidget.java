package com.tealium.migrate.datadog.client.model;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DataDogWidget {

	@JsonProperty
	private Integer id;

	@JsonProperty
	private Definition definition;

	@JsonProperty
	private Layout layout;

	public static class Definition {

		@JsonProperty("alert_id")
		private String alertId;

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
