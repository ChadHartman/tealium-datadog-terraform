package com.tealium.migrate.datadog.client;

import javax.enterprise.context.ApplicationScoped;
import javax.ws.rs.core.MultivaluedMap;

import org.eclipse.microprofile.config.inject.ConfigProperty;
import org.eclipse.microprofile.rest.client.ext.ClientHeadersFactory;
import org.jboss.logging.Logger;
import org.jboss.resteasy.specimpl.MultivaluedMapImpl;

@ApplicationScoped
public class DataDogHeaderFactory implements ClientHeadersFactory {

	@ConfigProperty(name = "datadog.api.key")
	String apiKey;

	@ConfigProperty(name = "datadog.app.key")
	String appKey;

	@Override
	public MultivaluedMap<String, String> update(
			MultivaluedMap<String, String> incomingHeaders,
			MultivaluedMap<String, String> clientOutgoingHeaders
	) {
		MultivaluedMap<String, String> toMerge = new MultivaluedMapImpl<>();
		toMerge.add("DD-API-KEY", apiKey);
		toMerge.add("DD-APPLICATION-KEY", appKey);
		return toMerge;
	}
}
