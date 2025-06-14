/* tslint:disable */
/* eslint-disable */
/**
 * TMDB API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 3
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface TvSeriesWatchProviders200ResponseResultsZAFlatrateInner
 */
export interface TvSeriesWatchProviders200ResponseResultsZAFlatrateInner {
    /**
     * 
     * @type {string}
     * @memberof TvSeriesWatchProviders200ResponseResultsZAFlatrateInner
     */
    logoPath?: string;
    /**
     * 
     * @type {number}
     * @memberof TvSeriesWatchProviders200ResponseResultsZAFlatrateInner
     */
    providerId?: number;
    /**
     * 
     * @type {string}
     * @memberof TvSeriesWatchProviders200ResponseResultsZAFlatrateInner
     */
    providerName?: string;
    /**
     * 
     * @type {number}
     * @memberof TvSeriesWatchProviders200ResponseResultsZAFlatrateInner
     */
    displayPriority?: number;
}

/**
 * Check if a given object implements the TvSeriesWatchProviders200ResponseResultsZAFlatrateInner interface.
 */
export function instanceOfTvSeriesWatchProviders200ResponseResultsZAFlatrateInner(value: object): value is TvSeriesWatchProviders200ResponseResultsZAFlatrateInner {
    return true;
}

export function TvSeriesWatchProviders200ResponseResultsZAFlatrateInnerFromJSON(json: any): TvSeriesWatchProviders200ResponseResultsZAFlatrateInner {
    return TvSeriesWatchProviders200ResponseResultsZAFlatrateInnerFromJSONTyped(json, false);
}

export function TvSeriesWatchProviders200ResponseResultsZAFlatrateInnerFromJSONTyped(json: any, ignoreDiscriminator: boolean): TvSeriesWatchProviders200ResponseResultsZAFlatrateInner {
    if (json == null) {
        return json;
    }
    return {
        
        'logoPath': json['logo_path'] == null ? undefined : json['logo_path'],
        'providerId': json['provider_id'] == null ? undefined : json['provider_id'],
        'providerName': json['provider_name'] == null ? undefined : json['provider_name'],
        'displayPriority': json['display_priority'] == null ? undefined : json['display_priority'],
    };
}

export function TvSeriesWatchProviders200ResponseResultsZAFlatrateInnerToJSON(json: any): TvSeriesWatchProviders200ResponseResultsZAFlatrateInner {
    return TvSeriesWatchProviders200ResponseResultsZAFlatrateInnerToJSONTyped(json, false);
}

export function TvSeriesWatchProviders200ResponseResultsZAFlatrateInnerToJSONTyped(value?: TvSeriesWatchProviders200ResponseResultsZAFlatrateInner | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'logo_path': value['logoPath'],
        'provider_id': value['providerId'],
        'provider_name': value['providerName'],
        'display_priority': value['displayPriority'],
    };
}

