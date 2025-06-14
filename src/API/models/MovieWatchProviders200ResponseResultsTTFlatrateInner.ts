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
 * @interface MovieWatchProviders200ResponseResultsTTFlatrateInner
 */
export interface MovieWatchProviders200ResponseResultsTTFlatrateInner {
    /**
     * 
     * @type {string}
     * @memberof MovieWatchProviders200ResponseResultsTTFlatrateInner
     */
    logoPath?: string;
    /**
     * 
     * @type {number}
     * @memberof MovieWatchProviders200ResponseResultsTTFlatrateInner
     */
    providerId?: number;
    /**
     * 
     * @type {string}
     * @memberof MovieWatchProviders200ResponseResultsTTFlatrateInner
     */
    providerName?: string;
    /**
     * 
     * @type {number}
     * @memberof MovieWatchProviders200ResponseResultsTTFlatrateInner
     */
    displayPriority?: number;
}

/**
 * Check if a given object implements the MovieWatchProviders200ResponseResultsTTFlatrateInner interface.
 */
export function instanceOfMovieWatchProviders200ResponseResultsTTFlatrateInner(value: object): value is MovieWatchProviders200ResponseResultsTTFlatrateInner {
    return true;
}

export function MovieWatchProviders200ResponseResultsTTFlatrateInnerFromJSON(json: any): MovieWatchProviders200ResponseResultsTTFlatrateInner {
    return MovieWatchProviders200ResponseResultsTTFlatrateInnerFromJSONTyped(json, false);
}

export function MovieWatchProviders200ResponseResultsTTFlatrateInnerFromJSONTyped(json: any, ignoreDiscriminator: boolean): MovieWatchProviders200ResponseResultsTTFlatrateInner {
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

export function MovieWatchProviders200ResponseResultsTTFlatrateInnerToJSON(json: any): MovieWatchProviders200ResponseResultsTTFlatrateInner {
    return MovieWatchProviders200ResponseResultsTTFlatrateInnerToJSONTyped(json, false);
}

export function MovieWatchProviders200ResponseResultsTTFlatrateInnerToJSONTyped(value?: MovieWatchProviders200ResponseResultsTTFlatrateInner | null, ignoreDiscriminator: boolean = false): any {
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

