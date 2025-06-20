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
 * @interface TvEpisodeCredits200ResponseGuestStarsInner
 */
export interface TvEpisodeCredits200ResponseGuestStarsInner {
    /**
     * 
     * @type {string}
     * @memberof TvEpisodeCredits200ResponseGuestStarsInner
     */
    character?: string;
    /**
     * 
     * @type {string}
     * @memberof TvEpisodeCredits200ResponseGuestStarsInner
     */
    creditId?: string;
    /**
     * 
     * @type {number}
     * @memberof TvEpisodeCredits200ResponseGuestStarsInner
     */
    order?: number;
    /**
     * 
     * @type {boolean}
     * @memberof TvEpisodeCredits200ResponseGuestStarsInner
     */
    adult?: boolean;
    /**
     * 
     * @type {number}
     * @memberof TvEpisodeCredits200ResponseGuestStarsInner
     */
    gender?: number;
    /**
     * 
     * @type {number}
     * @memberof TvEpisodeCredits200ResponseGuestStarsInner
     */
    id?: number;
    /**
     * 
     * @type {string}
     * @memberof TvEpisodeCredits200ResponseGuestStarsInner
     */
    knownForDepartment?: string;
    /**
     * 
     * @type {string}
     * @memberof TvEpisodeCredits200ResponseGuestStarsInner
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof TvEpisodeCredits200ResponseGuestStarsInner
     */
    originalName?: string;
    /**
     * 
     * @type {number}
     * @memberof TvEpisodeCredits200ResponseGuestStarsInner
     */
    popularity?: number;
    /**
     * 
     * @type {string}
     * @memberof TvEpisodeCredits200ResponseGuestStarsInner
     */
    profilePath?: string;
}

/**
 * Check if a given object implements the TvEpisodeCredits200ResponseGuestStarsInner interface.
 */
export function instanceOfTvEpisodeCredits200ResponseGuestStarsInner(value: object): value is TvEpisodeCredits200ResponseGuestStarsInner {
    return true;
}

export function TvEpisodeCredits200ResponseGuestStarsInnerFromJSON(json: any): TvEpisodeCredits200ResponseGuestStarsInner {
    return TvEpisodeCredits200ResponseGuestStarsInnerFromJSONTyped(json, false);
}

export function TvEpisodeCredits200ResponseGuestStarsInnerFromJSONTyped(json: any, ignoreDiscriminator: boolean): TvEpisodeCredits200ResponseGuestStarsInner {
    if (json == null) {
        return json;
    }
    return {
        
        'character': json['character'] == null ? undefined : json['character'],
        'creditId': json['credit_id'] == null ? undefined : json['credit_id'],
        'order': json['order'] == null ? undefined : json['order'],
        'adult': json['adult'] == null ? undefined : json['adult'],
        'gender': json['gender'] == null ? undefined : json['gender'],
        'id': json['id'] == null ? undefined : json['id'],
        'knownForDepartment': json['known_for_department'] == null ? undefined : json['known_for_department'],
        'name': json['name'] == null ? undefined : json['name'],
        'originalName': json['original_name'] == null ? undefined : json['original_name'],
        'popularity': json['popularity'] == null ? undefined : json['popularity'],
        'profilePath': json['profile_path'] == null ? undefined : json['profile_path'],
    };
}

export function TvEpisodeCredits200ResponseGuestStarsInnerToJSON(json: any): TvEpisodeCredits200ResponseGuestStarsInner {
    return TvEpisodeCredits200ResponseGuestStarsInnerToJSONTyped(json, false);
}

export function TvEpisodeCredits200ResponseGuestStarsInnerToJSONTyped(value?: TvEpisodeCredits200ResponseGuestStarsInner | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'character': value['character'],
        'credit_id': value['creditId'],
        'order': value['order'],
        'adult': value['adult'],
        'gender': value['gender'],
        'id': value['id'],
        'known_for_department': value['knownForDepartment'],
        'name': value['name'],
        'original_name': value['originalName'],
        'popularity': value['popularity'],
        'profile_path': value['profilePath'],
    };
}

