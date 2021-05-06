package com.tealium.migrate.datadog.config;

import java.lang.annotation.Documented;
import java.lang.annotation.ElementType;
import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;
import java.lang.annotation.Target;

import javax.inject.Qualifier;

@Target({ ElementType.FIELD, ElementType.METHOD, ElementType.PARAMETER })
@Qualifier
@Documented
@Retention(RetentionPolicy.RUNTIME)
public @interface Migrator {
}
