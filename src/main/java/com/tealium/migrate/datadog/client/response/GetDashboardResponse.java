package com.tealium.migrate.datadog.client.response;

import java.time.Instant;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.tealium.migrate.datadog.client.model.DataDogWidget;

public class GetDashboardResponse {
	@JsonProperty("notify_list")
	private List<String> notifyList;

	@JsonProperty
	private String description;

	@JsonProperty("author_name")
	private String author_name;

	@JsonProperty("template_variables")
	private List<TemplateVariable> templateVariables;

	@JsonProperty("is_read_only")
	private Boolean isReadOnly;

	@JsonProperty
	private String id;

	@JsonProperty
	private String title;

	@JsonProperty
	private String url;

	@JsonProperty("created_at")
	private Instant createdAt;

	@JsonProperty("modified_at")
	private Instant modifiedAt;

	@JsonProperty("author_handle")
	private String authorHandle;

	@JsonProperty
	private List<DataDogWidget> widgets;

	@JsonProperty("layout_type")
	private String layoutType;

	public static class TemplateVariable {
		@JsonProperty("default")
		private String defaultValue;

		@JsonProperty
		private String name;

		@JsonProperty
		private String prefix;
	}
}
