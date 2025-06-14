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
 * @interface TvSeriesWatchProviders200ResponseResultsCOFlatrateInner
 */
export interface TvSeriesWatchProviders200ResponseResultsCOFlatrateInner {
    /**
     * 
     * @type {string}
     * @memberof TvSeriesWatchProviders200ResponseResultsCOFlatrateInner
     */
    logoPath?: string;
    /**
     * 
     * @type {number}
     * @memberof TvSeriesWatchProviders200ResponseResultsCOFlatrateInner
     */
    providerId?: number;
    /**
     * 
     * @type {string}
     * @memberof TvSeriesWatchProviders200ResponseResultsCOFlatrateInner
     */
    providerName?: string;
    /**
     * 
     * @type {number}
     * @memberof TvSeriesWatchProviders200ResponseResultsCOFlatrateInner
     */
    displayPriority?: number;
}

/**
 * Check if a given object implements the TvSeriesWatchProviders200ResponseResultsCOFlatrateInner interface.
 */
export function instanceOfTvSeriesWatchProviders200ResponseResultsCOFlatrateInner(value: object): value is TvSeriesWatchProviders200ResponseResultsCOFlatrateInner {
    return true;
}

export function TvSeriesWatchProviders200ResponseResultsCOFlatrateInnerFromJSON(json: any): TvSeriesWatchProviders200ResponseResultsCOFlatrateInner {
    return TvSeriesWatchProviders200ResponseResultsCOFlatrateInnerFromJSONTyped(json, false);
}

export function TvSeriesWatchProviders200ResponseResultsCOFlatrateInnerFromJSONTyped(json: any, ignoreDiscriminator: boolean): TvSeriesWatchProviders200ResponseResultsCOFlatrateInner {
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

export function TvSeriesWatchProviders200ResponseResultsCOFlatrateInnerToJSON(json: any): TvSeriesWatchProviders200ResponseResultsCOFlatrateInner {
    return TvSeriesWatchProviders200ResponseResultsCOFlatrateInnerToJSONTyped(json, false);
}

export function TvSeriesWatchProviders200ResponseResultsCOFlatrateInnerToJSONTyped(value?: TvSeriesWatchProviders200ResponseResultsCOFlatrateInner | null, ignoreDiscriminator: boolean = false): any {
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

