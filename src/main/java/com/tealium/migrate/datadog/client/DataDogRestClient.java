package com.tealium.migrate.datadog.client;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

import org.eclipse.microprofile.rest.client.annotation.RegisterClientHeaders;
import org.eclipse.microprofile.rest.client.inject.RegisterRestClient;

import com.tealium.migrate.datadog.client.response.GetDashboardResponse;
import com.tealium.migrate.datadog.client.response.ListDashboardsResponse;

@RegisterRestClient
@RegisterClientHeaders(DataDogHeaderFactory.class)
public interface DataDogRestClient {

	@GET
	@Path("/dashboard")
	@Produces(MediaType.APPLICATION_JSON)
	ListDashboardsResponse listDashboards();

	@GET
	@Path("/dashboard/{dashboard_id}")
	@Produces(MediaType.APPLICATION_JSON)
	String getDashboard(@PathParam("dashboard_id") String dashboardId);

}
