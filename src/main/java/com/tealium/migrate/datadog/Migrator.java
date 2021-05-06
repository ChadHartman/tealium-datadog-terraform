package com.tealium.migrate.datadog;

import javax.inject.Inject;

import org.eclipse.microprofile.rest.client.inject.RestClient;
import org.jboss.logging.Logger;

import com.tealium.migrate.datadog.client.DataDogRestClient;
import com.tealium.migrate.datadog.client.response.ListDashboardsResponse;
import com.tealium.migrate.datadog.client.response.ListDashboardsResponse.Dashboard;

import io.quarkus.runtime.QuarkusApplication;
import io.quarkus.runtime.annotations.QuarkusMain;

@QuarkusMain
public class Migrator implements QuarkusApplication {

	@Inject
	@RestClient
	DataDogRestClient client;

	@Inject
	Logger logger;

	@Override
	public int run(String... args) throws Exception {

//		ListDashboardsResponse res = client.listDashboards();
//		logger.info(res.getDashboards().size() + " dashboards retrieved.");
//
//		for (Dashboard d : res.getDashboards()) {
//			logger.info(d.getId() + ": " + d.getTitle());
			//			GetDashboardResponse dashRes = 
//			client.getDashboard(d.getId());
		client.getDashboard("jdr-eap-fad");
//		}

		logger.info("Import complete");

		return 0;
	}
}