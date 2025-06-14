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
 * @interface TvSeriesWatchProviders200ResponseResultsKEFlatrateInner
 */
export interface TvSeriesWatchProviders200ResponseResultsKEFlatrateInner {
    /**
     * 
     * @type {string}
     * @memberof TvSeriesWatchProviders200ResponseResultsKEFlatrateInner
     */
    logoPath?: string;
    /**
     * 
     * @type {number}
     * @memberof TvSeriesWatchProviders200ResponseResultsKEFlatrateInner
     */
    providerId?: number;
    /**
     * 
     * @type {string}
     * @memberof TvSeriesWatchProviders200ResponseResultsKEFlatrateInner
     */
    providerName?: string;
    /**
     * 
     * @type {number}
     * @memberof TvSeriesWatchProviders200ResponseResultsKEFlatrateInner
     */
    displayPriority?: number;
}

/**
 * Check if a given object implements the TvSeriesWatchProviders200ResponseResultsKEFlatrateInner interface.
 */
export function instanceOfTvSeriesWatchProviders200ResponseResultsKEFlatrateInner(value: object): value is TvSeriesWatchProviders200ResponseResultsKEFlatrateInner {
    return true;
}

export function TvSeriesWatchProviders200ResponseResultsKEFlatrateInnerFromJSON(json: any): TvSeriesWatchProviders200ResponseResultsKEFlatrateInner {
    return TvSeriesWatchProviders200ResponseResultsKEFlatrateInnerFromJSONTyped(json, false);
}

export function TvSeriesWatchProviders200ResponseResultsKEFlatrateInnerFromJSONTyped(json: any, ignoreDiscriminator: boolean): TvSeriesWatchProviders200ResponseResultsKEFlatrateInner {
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

export function TvSeriesWatchProviders200ResponseResultsKEFlatrateInnerToJSON(json: any): TvSeriesWatchProviders200ResponseResultsKEFlatrateInner {
    return TvSeriesWatchProviders200ResponseResultsKEFlatrateInnerToJSONTyped(json, false);
}

export function TvSeriesWatchProviders200ResponseResultsKEFlatrateInnerToJSONTyped(value?: TvSeriesWatchProviders200ResponseResultsKEFlatrateInner | null, ignoreDiscriminator: boolean = false): any {
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

