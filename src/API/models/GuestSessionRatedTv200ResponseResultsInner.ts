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
 * @interface GuestSessionRatedTv200ResponseResultsInner
 */
export interface GuestSessionRatedTv200ResponseResultsInner {
    /**
     * 
     * @type {boolean}
     * @memberof GuestSessionRatedTv200ResponseResultsInner
     */
    adult?: boolean;
    /**
     * 
     * @type {string}
     * @memberof GuestSessionRatedTv200ResponseResultsInner
     */
    backdropPath?: string;
    /**
     * 
     * @type {Array<number>}
     * @memberof GuestSessionRatedTv200ResponseResultsInner
     */
    genreIds?: Array<number>;
    /**
     * 
     * @type {number}
     * @memberof GuestSessionRatedTv200ResponseResultsInner
     */
    id?: number;
    /**
     * 
     * @type {Array<string>}
     * @memberof GuestSessionRatedTv200ResponseResultsInner
     */
    originCountry?: Array<string>;
    /**
     * 
     * @type {string}
     * @memberof GuestSessionRatedTv200ResponseResultsInner
     */
    originalLanguage?: string;
    /**
     * 
     * @type {string}
     * @memberof GuestSessionRatedTv200ResponseResultsInner
     */
    originalName?: string;
    /**
     * 
     * @type {string}
     * @memberof GuestSessionRatedTv200ResponseResultsInner
     */
    overview?: string;
    /**
     * 
     * @type {number}
     * @memberof GuestSessionRatedTv200ResponseResultsInner
     */
    popularity?: number;
    /**
     * 
     * @type {string}
     * @memberof GuestSessionRatedTv200ResponseResultsInner
     */
    posterPath?: string;
    /**
     * 
     * @type {string}
     * @memberof GuestSessionRatedTv200ResponseResultsInner
     */
    firstAirDate?: string;
    /**
     * 
     * @type {string}
     * @memberof GuestSessionRatedTv200ResponseResultsInner
     */
    name?: string;
    /**
     * 
     * @type {number}
     * @memberof GuestSessionRatedTv200ResponseResultsInner
     */
    voteAverage?: number;
    /**
     * 
     * @type {number}
     * @memberof GuestSessionRatedTv200ResponseResultsInner
     */
    voteCount?: number;
    /**
     * 
     * @type {number}
     * @memberof GuestSessionRatedTv200ResponseResultsInner
     */
    rating?: number;
}

/**
 * Check if a given object implements the GuestSessionRatedTv200ResponseResultsInner interface.
 */
export function instanceOfGuestSessionRatedTv200ResponseResultsInner(value: object): value is GuestSessionRatedTv200ResponseResultsInner {
    return true;
}

export function GuestSessionRatedTv200ResponseResultsInnerFromJSON(json: any): GuestSessionRatedTv200ResponseResultsInner {
    return GuestSessionRatedTv200ResponseResultsInnerFromJSONTyped(json, false);
}

export function GuestSessionRatedTv200ResponseResultsInnerFromJSONTyped(json: any, ignoreDiscriminator: boolean): GuestSessionRatedTv200ResponseResultsInner {
    if (json == null) {
        return json;
    }
    return {
        
        'adult': json['adult'] == null ? undefined : json['adult'],
        'backdropPath': json['backdrop_path'] == null ? undefined : json['backdrop_path'],
        'genreIds': json['genre_ids'] == null ? undefined : json['genre_ids'],
        'id': json['id'] == null ? undefined : json['id'],
        'originCountry': json['origin_country'] == null ? undefined : json['origin_country'],
        'originalLanguage': json['original_language'] == null ? undefined : json['original_language'],
        'originalName': json['original_name'] == null ? undefined : json['original_name'],
        'overview': json['overview'] == null ? undefined : json['overview'],
        'popularity': json['popularity'] == null ? undefined : json['popularity'],
        'posterPath': json['poster_path'] == null ? undefined : json['poster_path'],
        'firstAirDate': json['first_air_date'] == null ? undefined : json['first_air_date'],
        'name': json['name'] == null ? undefined : json['name'],
        'voteAverage': json['vote_average'] == null ? undefined : json['vote_average'],
        'voteCount': json['vote_count'] == null ? undefined : json['vote_count'],
        'rating': json['rating'] == null ? undefined : json['rating'],
    };
}

export function GuestSessionRatedTv200ResponseResultsInnerToJSON(json: any): GuestSessionRatedTv200ResponseResultsInner {
    return GuestSessionRatedTv200ResponseResultsInnerToJSONTyped(json, false);
}

export function GuestSessionRatedTv200ResponseResultsInnerToJSONTyped(value?: GuestSessionRatedTv200ResponseResultsInner | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'adult': value['adult'],
        'backdrop_path': value['backdropPath'],
        'genre_ids': value['genreIds'],
        'id': value['id'],
        'origin_country': value['originCountry'],
        'original_language': value['originalLanguage'],
        'original_name': value['originalName'],
        'overview': value['overview'],
        'popularity': value['popularity'],
        'poster_path': value['posterPath'],
        'first_air_date': value['firstAirDate'],
        'name': value['name'],
        'vote_average': value['voteAverage'],
        'vote_count': value['voteCount'],
        'rating': value['rating'],
    };
}

