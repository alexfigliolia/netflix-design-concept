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
 * @interface TvSeriesWatchProviders200ResponseResultsSAFlatrateInner
 */
export interface TvSeriesWatchProviders200ResponseResultsSAFlatrateInner {
    /**
     * 
     * @type {string}
     * @memberof TvSeriesWatchProviders200ResponseResultsSAFlatrateInner
     */
    logoPath?: string;
    /**
     * 
     * @type {number}
     * @memberof TvSeriesWatchProviders200ResponseResultsSAFlatrateInner
     */
    providerId?: number;
    /**
     * 
     * @type {string}
     * @memberof TvSeriesWatchProviders200ResponseResultsSAFlatrateInner
     */
    providerName?: string;
    /**
     * 
     * @type {number}
     * @memberof TvSeriesWatchProviders200ResponseResultsSAFlatrateInner
     */
    displayPriority?: number;
}

/**
 * Check if a given object implements the TvSeriesWatchProviders200ResponseResultsSAFlatrateInner interface.
 */
export function instanceOfTvSeriesWatchProviders200ResponseResultsSAFlatrateInner(value: object): value is TvSeriesWatchProviders200ResponseResultsSAFlatrateInner {
    return true;
}

export function TvSeriesWatchProviders200ResponseResultsSAFlatrateInnerFromJSON(json: any): TvSeriesWatchProviders200ResponseResultsSAFlatrateInner {
    return TvSeriesWatchProviders200ResponseResultsSAFlatrateInnerFromJSONTyped(json, false);
}

export function TvSeriesWatchProviders200ResponseResultsSAFlatrateInnerFromJSONTyped(json: any, ignoreDiscriminator: boolean): TvSeriesWatchProviders200ResponseResultsSAFlatrateInner {
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

export function TvSeriesWatchProviders200ResponseResultsSAFlatrateInnerToJSON(json: any): TvSeriesWatchProviders200ResponseResultsSAFlatrateInner {
    return TvSeriesWatchProviders200ResponseResultsSAFlatrateInnerToJSONTyped(json, false);
}

export function TvSeriesWatchProviders200ResponseResultsSAFlatrateInnerToJSONTyped(value?: TvSeriesWatchProviders200ResponseResultsSAFlatrateInner | null, ignoreDiscriminator: boolean = false): any {
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

