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
import type { SearchPerson200ResponseResultsInnerKnownForInner } from './SearchPerson200ResponseResultsInnerKnownForInner';
import {
    SearchPerson200ResponseResultsInnerKnownForInnerFromJSON,
    SearchPerson200ResponseResultsInnerKnownForInnerFromJSONTyped,
    SearchPerson200ResponseResultsInnerKnownForInnerToJSON,
    SearchPerson200ResponseResultsInnerKnownForInnerToJSONTyped,
} from './SearchPerson200ResponseResultsInnerKnownForInner';

/**
 * 
 * @export
 * @interface SearchPerson200ResponseResultsInner
 */
export interface SearchPerson200ResponseResultsInner {
    /**
     * 
     * @type {boolean}
     * @memberof SearchPerson200ResponseResultsInner
     */
    adult?: boolean;
    /**
     * 
     * @type {number}
     * @memberof SearchPerson200ResponseResultsInner
     */
    gender?: number;
    /**
     * 
     * @type {number}
     * @memberof SearchPerson200ResponseResultsInner
     */
    id?: number;
    /**
     * 
     * @type {string}
     * @memberof SearchPerson200ResponseResultsInner
     */
    knownForDepartment?: string;
    /**
     * 
     * @type {string}
     * @memberof SearchPerson200ResponseResultsInner
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof SearchPerson200ResponseResultsInner
     */
    originalName?: string;
    /**
     * 
     * @type {number}
     * @memberof SearchPerson200ResponseResultsInner
     */
    popularity?: number;
    /**
     * 
     * @type {string}
     * @memberof SearchPerson200ResponseResultsInner
     */
    profilePath?: string;
    /**
     * 
     * @type {Array<SearchPerson200ResponseResultsInnerKnownForInner>}
     * @memberof SearchPerson200ResponseResultsInner
     */
    knownFor?: Array<SearchPerson200ResponseResultsInnerKnownForInner>;
}

/**
 * Check if a given object implements the SearchPerson200ResponseResultsInner interface.
 */
export function instanceOfSearchPerson200ResponseResultsInner(value: object): value is SearchPerson200ResponseResultsInner {
    return true;
}

export function SearchPerson200ResponseResultsInnerFromJSON(json: any): SearchPerson200ResponseResultsInner {
    return SearchPerson200ResponseResultsInnerFromJSONTyped(json, false);
}

export function SearchPerson200ResponseResultsInnerFromJSONTyped(json: any, ignoreDiscriminator: boolean): SearchPerson200ResponseResultsInner {
    if (json == null) {
        return json;
    }
    return {
        
        'adult': json['adult'] == null ? undefined : json['adult'],
        'gender': json['gender'] == null ? undefined : json['gender'],
        'id': json['id'] == null ? undefined : json['id'],
        'knownForDepartment': json['known_for_department'] == null ? undefined : json['known_for_department'],
        'name': json['name'] == null ? undefined : json['name'],
        'originalName': json['original_name'] == null ? undefined : json['original_name'],
        'popularity': json['popularity'] == null ? undefined : json['popularity'],
        'profilePath': json['profile_path'] == null ? undefined : json['profile_path'],
        'knownFor': json['known_for'] == null ? undefined : ((json['known_for'] as Array<any>).map(SearchPerson200ResponseResultsInnerKnownForInnerFromJSON)),
    };
}

export function SearchPerson200ResponseResultsInnerToJSON(json: any): SearchPerson200ResponseResultsInner {
    return SearchPerson200ResponseResultsInnerToJSONTyped(json, false);
}

export function SearchPerson200ResponseResultsInnerToJSONTyped(value?: SearchPerson200ResponseResultsInner | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'adult': value['adult'],
        'gender': value['gender'],
        'id': value['id'],
        'known_for_department': value['knownForDepartment'],
        'name': value['name'],
        'original_name': value['originalName'],
        'popularity': value['popularity'],
        'profile_path': value['profilePath'],
        'known_for': value['knownFor'] == null ? undefined : ((value['knownFor'] as Array<any>).map(SearchPerson200ResponseResultsInnerKnownForInnerToJSON)),
    };
}

