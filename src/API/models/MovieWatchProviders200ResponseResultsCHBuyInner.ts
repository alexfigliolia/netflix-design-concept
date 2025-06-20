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
 * @interface MovieWatchProviders200ResponseResultsCHBuyInner
 */
export interface MovieWatchProviders200ResponseResultsCHBuyInner {
    /**
     * 
     * @type {string}
     * @memberof MovieWatchProviders200ResponseResultsCHBuyInner
     */
    logoPath?: string;
    /**
     * 
     * @type {number}
     * @memberof MovieWatchProviders200ResponseResultsCHBuyInner
     */
    providerId?: number;
    /**
     * 
     * @type {string}
     * @memberof MovieWatchProviders200ResponseResultsCHBuyInner
     */
    providerName?: string;
    /**
     * 
     * @type {number}
     * @memberof MovieWatchProviders200ResponseResultsCHBuyInner
     */
    displayPriority?: number;
}

/**
 * Check if a given object implements the MovieWatchProviders200ResponseResultsCHBuyInner interface.
 */
export function instanceOfMovieWatchProviders200ResponseResultsCHBuyInner(value: object): value is MovieWatchProviders200ResponseResultsCHBuyInner {
    return true;
}

export function MovieWatchProviders200ResponseResultsCHBuyInnerFromJSON(json: any): MovieWatchProviders200ResponseResultsCHBuyInner {
    return MovieWatchProviders200ResponseResultsCHBuyInnerFromJSONTyped(json, false);
}

export function MovieWatchProviders200ResponseResultsCHBuyInnerFromJSONTyped(json: any, ignoreDiscriminator: boolean): MovieWatchProviders200ResponseResultsCHBuyInner {
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

export function MovieWatchProviders200ResponseResultsCHBuyInnerToJSON(json: any): MovieWatchProviders200ResponseResultsCHBuyInner {
    return MovieWatchProviders200ResponseResultsCHBuyInnerToJSONTyped(json, false);
}

export function MovieWatchProviders200ResponseResultsCHBuyInnerToJSONTyped(value?: MovieWatchProviders200ResponseResultsCHBuyInner | null, ignoreDiscriminator: boolean = false): any {
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

