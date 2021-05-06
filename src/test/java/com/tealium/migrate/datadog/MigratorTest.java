package com.tealium.migrate.datadog;

import javax.inject.Inject;

import org.jboss.logging.Logger;
import org.junit.jupiter.api.Test;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.tealium.migrate.datadog.client.response.GetDashboardResponse;
import com.tealium.migrate.datadog.config.Migrator;

import io.quarkus.test.junit.QuarkusTest;

@QuarkusTest
class MigratorTest {

	@Inject
	@Migrator
	ObjectMapper objectMapper;

	@Test
	public void test() throws Exception {

		GetDashboardResponse res = objectMapper.readValue(
				getClass().getResourceAsStream("/widget.json"),
				GetDashboardResponse.class
		);
		Logger.getLogger("TEMP").info(res);
	}

}