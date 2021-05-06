package com.tealium.migrate.datadog.client.response;

import java.time.Instant;
import java.util.Collections;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonProperty;

public class ListDashboardsResponse {

	@JsonProperty
	private List<Dashboard> dashboards;

	public List<Dashboard> getDashboards() {
		return dashboards == null ? Collections.emptyList() : dashboards;
	}

	public static class Dashboard {
		@JsonProperty("created_at")
		private Instant createdAt;

		@JsonProperty("author_handle")
		private String authorHandle;

		@JsonProperty("is_read_only")
		private Boolean is_read_only;

		@JsonProperty("description")
		private String description;

		@JsonProperty("title")
		private String title;

		@JsonProperty("url")
		private String url;

		@JsonProperty("layout_type")
		private String layout_type;

		@JsonProperty("modified_at")
		private Instant modified_at;

		@JsonProperty("id")
		private String id;

		public String getTitle() {
			return title;
		}

		public String getId() {
			return id;
		}
	}
}
