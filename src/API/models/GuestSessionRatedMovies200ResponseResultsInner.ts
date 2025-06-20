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
 * @interface GuestSessionRatedMovies200ResponseResultsInner
 */
export interface GuestSessionRatedMovies200ResponseResultsInner {
    /**
     * 
     * @type {boolean}
     * @memberof GuestSessionRatedMovies200ResponseResultsInner
     */
    adult?: boolean;
    /**
     * 
     * @type {string}
     * @memberof GuestSessionRatedMovies200ResponseResultsInner
     */
    backdropPath?: string;
    /**
     * 
     * @type {Array<number>}
     * @memberof GuestSessionRatedMovies200ResponseResultsInner
     */
    genreIds?: Array<number>;
    /**
     * 
     * @type {number}
     * @memberof GuestSessionRatedMovies200ResponseResultsInner
     */
    id?: number;
    /**
     * 
     * @type {string}
     * @memberof GuestSessionRatedMovies200ResponseResultsInner
     */
    originalLanguage?: string;
    /**
     * 
     * @type {string}
     * @memberof GuestSessionRatedMovies200ResponseResultsInner
     */
    originalTitle?: string;
    /**
     * 
     * @type {string}
     * @memberof GuestSessionRatedMovies200ResponseResultsInner
     */
    overview?: string;
    /**
     * 
     * @type {number}
     * @memberof GuestSessionRatedMovies200ResponseResultsInner
     */
    popularity?: number;
    /**
     * 
     * @type {string}
     * @memberof GuestSessionRatedMovies200ResponseResultsInner
     */
    posterPath?: string;
    /**
     * 
     * @type {string}
     * @memberof GuestSessionRatedMovies200ResponseResultsInner
     */
    releaseDate?: string;
    /**
     * 
     * @type {string}
     * @memberof GuestSessionRatedMovies200ResponseResultsInner
     */
    title?: string;
    /**
     * 
     * @type {boolean}
     * @memberof GuestSessionRatedMovies200ResponseResultsInner
     */
    video?: boolean;
    /**
     * 
     * @type {number}
     * @memberof GuestSessionRatedMovies200ResponseResultsInner
     */
    voteAverage?: number;
    /**
     * 
     * @type {number}
     * @memberof GuestSessionRatedMovies200ResponseResultsInner
     */
    voteCount?: number;
    /**
     * 
     * @type {number}
     * @memberof GuestSessionRatedMovies200ResponseResultsInner
     */
    rating?: number;
}

/**
 * Check if a given object implements the GuestSessionRatedMovies200ResponseResultsInner interface.
 */
export function instanceOfGuestSessionRatedMovies200ResponseResultsInner(value: object): value is GuestSessionRatedMovies200ResponseResultsInner {
    return true;
}

export function GuestSessionRatedMovies200ResponseResultsInnerFromJSON(json: any): GuestSessionRatedMovies200ResponseResultsInner {
    return GuestSessionRatedMovies200ResponseResultsInnerFromJSONTyped(json, false);
}

export function GuestSessionRatedMovies200ResponseResultsInnerFromJSONTyped(json: any, ignoreDiscriminator: boolean): GuestSessionRatedMovies200ResponseResultsInner {
    if (json == null) {
        return json;
    }
    return {
        
        'adult': json['adult'] == null ? undefined : json['adult'],
        'backdropPath': json['backdrop_path'] == null ? undefined : json['backdrop_path'],
        'genreIds': json['genre_ids'] == null ? undefined : json['genre_ids'],
        'id': json['id'] == null ? undefined : json['id'],
        'originalLanguage': json['original_language'] == null ? undefined : json['original_language'],
        'originalTitle': json['original_title'] == null ? undefined : json['original_title'],
        'overview': json['overview'] == null ? undefined : json['overview'],
        'popularity': json['popularity'] == null ? undefined : json['popularity'],
        'posterPath': json['poster_path'] == null ? undefined : json['poster_path'],
        'releaseDate': json['release_date'] == null ? undefined : json['release_date'],
        'title': json['title'] == null ? undefined : json['title'],
        'video': json['video'] == null ? undefined : json['video'],
        'voteAverage': json['vote_average'] == null ? undefined : json['vote_average'],
        'voteCount': json['vote_count'] == null ? undefined : json['vote_count'],
        'rating': json['rating'] == null ? undefined : json['rating'],
    };
}

export function GuestSessionRatedMovies200ResponseResultsInnerToJSON(json: any): GuestSessionRatedMovies200ResponseResultsInner {
    return GuestSessionRatedMovies200ResponseResultsInnerToJSONTyped(json, false);
}

export function GuestSessionRatedMovies200ResponseResultsInnerToJSONTyped(value?: GuestSessionRatedMovies200ResponseResultsInner | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'adult': value['adult'],
        'backdrop_path': value['backdropPath'],
        'genre_ids': value['genreIds'],
        'id': value['id'],
        'original_language': value['originalLanguage'],
        'original_title': value['originalTitle'],
        'overview': value['overview'],
        'popularity': value['popularity'],
        'poster_path': value['posterPath'],
        'release_date': value['releaseDate'],
        'title': value['title'],
        'video': value['video'],
        'vote_average': value['voteAverage'],
        'vote_count': value['voteCount'],
        'rating': value['rating'],
    };
}

