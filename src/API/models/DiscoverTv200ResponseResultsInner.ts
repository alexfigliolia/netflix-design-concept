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
 * @interface DiscoverTv200ResponseResultsInner
 */
export interface DiscoverTv200ResponseResultsInner {
    /**
     * 
     * @type {string}
     * @memberof DiscoverTv200ResponseResultsInner
     */
    backdropPath?: string;
    /**
     * 
     * @type {string}
     * @memberof DiscoverTv200ResponseResultsInner
     */
    firstAirDate?: string;
    /**
     * 
     * @type {Array<number>}
     * @memberof DiscoverTv200ResponseResultsInner
     */
    genreIds?: Array<number>;
    /**
     * 
     * @type {number}
     * @memberof DiscoverTv200ResponseResultsInner
     */
    id?: number;
    /**
     * 
     * @type {string}
     * @memberof DiscoverTv200ResponseResultsInner
     */
    name?: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof DiscoverTv200ResponseResultsInner
     */
    originCountry?: Array<string>;
    /**
     * 
     * @type {string}
     * @memberof DiscoverTv200ResponseResultsInner
     */
    originalLanguage?: string;
    /**
     * 
     * @type {string}
     * @memberof DiscoverTv200ResponseResultsInner
     */
    originalName?: string;
    /**
     * 
     * @type {string}
     * @memberof DiscoverTv200ResponseResultsInner
     */
    overview?: string;
    /**
     * 
     * @type {number}
     * @memberof DiscoverTv200ResponseResultsInner
     */
    popularity?: number;
    /**
     * 
     * @type {string}
     * @memberof DiscoverTv200ResponseResultsInner
     */
    posterPath?: string;
    /**
     * 
     * @type {number}
     * @memberof DiscoverTv200ResponseResultsInner
     */
    voteAverage?: number;
    /**
     * 
     * @type {number}
     * @memberof DiscoverTv200ResponseResultsInner
     */
    voteCount?: number;
}

/**
 * Check if a given object implements the DiscoverTv200ResponseResultsInner interface.
 */
export function instanceOfDiscoverTv200ResponseResultsInner(value: object): value is DiscoverTv200ResponseResultsInner {
    return true;
}

export function DiscoverTv200ResponseResultsInnerFromJSON(json: any): DiscoverTv200ResponseResultsInner {
    return DiscoverTv200ResponseResultsInnerFromJSONTyped(json, false);
}

export function DiscoverTv200ResponseResultsInnerFromJSONTyped(json: any, ignoreDiscriminator: boolean): DiscoverTv200ResponseResultsInner {
    if (json == null) {
        return json;
    }
    return {
        
        'backdropPath': json['backdrop_path'] == null ? undefined : json['backdrop_path'],
        'firstAirDate': json['first_air_date'] == null ? undefined : json['first_air_date'],
        'genreIds': json['genre_ids'] == null ? undefined : json['genre_ids'],
        'id': json['id'] == null ? undefined : json['id'],
        'name': json['name'] == null ? undefined : json['name'],
        'originCountry': json['origin_country'] == null ? undefined : json['origin_country'],
        'originalLanguage': json['original_language'] == null ? undefined : json['original_language'],
        'originalName': json['original_name'] == null ? undefined : json['original_name'],
        'overview': json['overview'] == null ? undefined : json['overview'],
        'popularity': json['popularity'] == null ? undefined : json['popularity'],
        'posterPath': json['poster_path'] == null ? undefined : json['poster_path'],
        'voteAverage': json['vote_average'] == null ? undefined : json['vote_average'],
        'voteCount': json['vote_count'] == null ? undefined : json['vote_count'],
    };
}

export function DiscoverTv200ResponseResultsInnerToJSON(json: any): DiscoverTv200ResponseResultsInner {
    return DiscoverTv200ResponseResultsInnerToJSONTyped(json, false);
}

export function DiscoverTv200ResponseResultsInnerToJSONTyped(value?: DiscoverTv200ResponseResultsInner | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'backdrop_path': value['backdropPath'],
        'first_air_date': value['firstAirDate'],
        'genre_ids': value['genreIds'],
        'id': value['id'],
        'name': value['name'],
        'origin_country': value['originCountry'],
        'original_language': value['originalLanguage'],
        'original_name': value['originalName'],
        'overview': value['overview'],
        'popularity': value['popularity'],
        'poster_path': value['posterPath'],
        'vote_average': value['voteAverage'],
        'vote_count': value['voteCount'],
    };
}

