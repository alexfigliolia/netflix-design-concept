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
 * @interface MovieWatchProviders200ResponseResultsAUFlatrateInner
 */
export interface MovieWatchProviders200ResponseResultsAUFlatrateInner {
    /**
     * 
     * @type {string}
     * @memberof MovieWatchProviders200ResponseResultsAUFlatrateInner
     */
    logoPath?: string;
    /**
     * 
     * @type {number}
     * @memberof MovieWatchProviders200ResponseResultsAUFlatrateInner
     */
    providerId?: number;
    /**
     * 
     * @type {string}
     * @memberof MovieWatchProviders200ResponseResultsAUFlatrateInner
     */
    providerName?: string;
    /**
     * 
     * @type {number}
     * @memberof MovieWatchProviders200ResponseResultsAUFlatrateInner
     */
    displayPriority?: number;
}

/**
 * Check if a given object implements the MovieWatchProviders200ResponseResultsAUFlatrateInner interface.
 */
export function instanceOfMovieWatchProviders200ResponseResultsAUFlatrateInner(value: object): value is MovieWatchProviders200ResponseResultsAUFlatrateInner {
    return true;
}

export function MovieWatchProviders200ResponseResultsAUFlatrateInnerFromJSON(json: any): MovieWatchProviders200ResponseResultsAUFlatrateInner {
    return MovieWatchProviders200ResponseResultsAUFlatrateInnerFromJSONTyped(json, false);
}

export function MovieWatchProviders200ResponseResultsAUFlatrateInnerFromJSONTyped(json: any, ignoreDiscriminator: boolean): MovieWatchProviders200ResponseResultsAUFlatrateInner {
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

export function MovieWatchProviders200ResponseResultsAUFlatrateInnerToJSON(json: any): MovieWatchProviders200ResponseResultsAUFlatrateInner {
    return MovieWatchProviders200ResponseResultsAUFlatrateInnerToJSONTyped(json, false);
}

export function MovieWatchProviders200ResponseResultsAUFlatrateInnerToJSONTyped(value?: MovieWatchProviders200ResponseResultsAUFlatrateInner | null, ignoreDiscriminator: boolean = false): any {
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

