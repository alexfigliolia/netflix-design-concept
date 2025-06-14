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
 * @interface TvSeriesWatchProviders200ResponseResultsAUFlatrateInner
 */
export interface TvSeriesWatchProviders200ResponseResultsAUFlatrateInner {
    /**
     * 
     * @type {string}
     * @memberof TvSeriesWatchProviders200ResponseResultsAUFlatrateInner
     */
    logoPath?: string;
    /**
     * 
     * @type {number}
     * @memberof TvSeriesWatchProviders200ResponseResultsAUFlatrateInner
     */
    providerId?: number;
    /**
     * 
     * @type {string}
     * @memberof TvSeriesWatchProviders200ResponseResultsAUFlatrateInner
     */
    providerName?: string;
    /**
     * 
     * @type {number}
     * @memberof TvSeriesWatchProviders200ResponseResultsAUFlatrateInner
     */
    displayPriority?: number;
}

/**
 * Check if a given object implements the TvSeriesWatchProviders200ResponseResultsAUFlatrateInner interface.
 */
export function instanceOfTvSeriesWatchProviders200ResponseResultsAUFlatrateInner(value: object): value is TvSeriesWatchProviders200ResponseResultsAUFlatrateInner {
    return true;
}

export function TvSeriesWatchProviders200ResponseResultsAUFlatrateInnerFromJSON(json: any): TvSeriesWatchProviders200ResponseResultsAUFlatrateInner {
    return TvSeriesWatchProviders200ResponseResultsAUFlatrateInnerFromJSONTyped(json, false);
}

export function TvSeriesWatchProviders200ResponseResultsAUFlatrateInnerFromJSONTyped(json: any, ignoreDiscriminator: boolean): TvSeriesWatchProviders200ResponseResultsAUFlatrateInner {
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

export function TvSeriesWatchProviders200ResponseResultsAUFlatrateInnerToJSON(json: any): TvSeriesWatchProviders200ResponseResultsAUFlatrateInner {
    return TvSeriesWatchProviders200ResponseResultsAUFlatrateInnerToJSONTyped(json, false);
}

export function TvSeriesWatchProviders200ResponseResultsAUFlatrateInnerToJSONTyped(value?: TvSeriesWatchProviders200ResponseResultsAUFlatrateInner | null, ignoreDiscriminator: boolean = false): any {
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

