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
 * @interface TvSeriesWatchProviders200ResponseResultsFIBuyInner
 */
export interface TvSeriesWatchProviders200ResponseResultsFIBuyInner {
    /**
     * 
     * @type {string}
     * @memberof TvSeriesWatchProviders200ResponseResultsFIBuyInner
     */
    logoPath?: string;
    /**
     * 
     * @type {number}
     * @memberof TvSeriesWatchProviders200ResponseResultsFIBuyInner
     */
    providerId?: number;
    /**
     * 
     * @type {string}
     * @memberof TvSeriesWatchProviders200ResponseResultsFIBuyInner
     */
    providerName?: string;
    /**
     * 
     * @type {number}
     * @memberof TvSeriesWatchProviders200ResponseResultsFIBuyInner
     */
    displayPriority?: number;
}

/**
 * Check if a given object implements the TvSeriesWatchProviders200ResponseResultsFIBuyInner interface.
 */
export function instanceOfTvSeriesWatchProviders200ResponseResultsFIBuyInner(value: object): value is TvSeriesWatchProviders200ResponseResultsFIBuyInner {
    return true;
}

export function TvSeriesWatchProviders200ResponseResultsFIBuyInnerFromJSON(json: any): TvSeriesWatchProviders200ResponseResultsFIBuyInner {
    return TvSeriesWatchProviders200ResponseResultsFIBuyInnerFromJSONTyped(json, false);
}

export function TvSeriesWatchProviders200ResponseResultsFIBuyInnerFromJSONTyped(json: any, ignoreDiscriminator: boolean): TvSeriesWatchProviders200ResponseResultsFIBuyInner {
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

export function TvSeriesWatchProviders200ResponseResultsFIBuyInnerToJSON(json: any): TvSeriesWatchProviders200ResponseResultsFIBuyInner {
    return TvSeriesWatchProviders200ResponseResultsFIBuyInnerToJSONTyped(json, false);
}

export function TvSeriesWatchProviders200ResponseResultsFIBuyInnerToJSONTyped(value?: TvSeriesWatchProviders200ResponseResultsFIBuyInner | null, ignoreDiscriminator: boolean = false): any {
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

