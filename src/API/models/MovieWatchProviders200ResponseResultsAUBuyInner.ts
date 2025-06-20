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
 * @interface MovieWatchProviders200ResponseResultsAUBuyInner
 */
export interface MovieWatchProviders200ResponseResultsAUBuyInner {
    /**
     * 
     * @type {string}
     * @memberof MovieWatchProviders200ResponseResultsAUBuyInner
     */
    logoPath?: string;
    /**
     * 
     * @type {number}
     * @memberof MovieWatchProviders200ResponseResultsAUBuyInner
     */
    providerId?: number;
    /**
     * 
     * @type {string}
     * @memberof MovieWatchProviders200ResponseResultsAUBuyInner
     */
    providerName?: string;
    /**
     * 
     * @type {number}
     * @memberof MovieWatchProviders200ResponseResultsAUBuyInner
     */
    displayPriority?: number;
}

/**
 * Check if a given object implements the MovieWatchProviders200ResponseResultsAUBuyInner interface.
 */
export function instanceOfMovieWatchProviders200ResponseResultsAUBuyInner(value: object): value is MovieWatchProviders200ResponseResultsAUBuyInner {
    return true;
}

export function MovieWatchProviders200ResponseResultsAUBuyInnerFromJSON(json: any): MovieWatchProviders200ResponseResultsAUBuyInner {
    return MovieWatchProviders200ResponseResultsAUBuyInnerFromJSONTyped(json, false);
}

export function MovieWatchProviders200ResponseResultsAUBuyInnerFromJSONTyped(json: any, ignoreDiscriminator: boolean): MovieWatchProviders200ResponseResultsAUBuyInner {
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

export function MovieWatchProviders200ResponseResultsAUBuyInnerToJSON(json: any): MovieWatchProviders200ResponseResultsAUBuyInner {
    return MovieWatchProviders200ResponseResultsAUBuyInnerToJSONTyped(json, false);
}

export function MovieWatchProviders200ResponseResultsAUBuyInnerToJSONTyped(value?: MovieWatchProviders200ResponseResultsAUBuyInner | null, ignoreDiscriminator: boolean = false): any {
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

