package com.tealium.migrate.datadog.config;

import javax.enterprise.context.Dependent;
import javax.inject.Singleton;
import javax.ws.rs.Produces;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.datatype.jdk8.Jdk8Module;
import com.fasterxml.jackson.datatype.jsr310.JavaTimeModule;
import com.fasterxml.jackson.module.paramnames.ParameterNamesModule;

@Dependent
public class MigratorModule {

	@Migrator
	@Produces
	@Singleton
	ObjectMapper getObjectMapper() {
		ObjectMapper mapper = new ObjectMapper();
		mapper.registerModule(new JavaTimeModule());
		mapper.registerModule(new Jdk8Module());
		mapper.registerModule(new ParameterNamesModule());
		return mapper;
	}
}
