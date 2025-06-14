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
 * @interface TvSeriesRecommendations200ResponseResultsInner
 */
export interface TvSeriesRecommendations200ResponseResultsInner {
    /**
     * 
     * @type {boolean}
     * @memberof TvSeriesRecommendations200ResponseResultsInner
     */
    adult?: boolean;
    /**
     * 
     * @type {string}
     * @memberof TvSeriesRecommendations200ResponseResultsInner
     */
    backdropPath?: string;
    /**
     * 
     * @type {number}
     * @memberof TvSeriesRecommendations200ResponseResultsInner
     */
    id?: number;
    /**
     * 
     * @type {string}
     * @memberof TvSeriesRecommendations200ResponseResultsInner
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof TvSeriesRecommendations200ResponseResultsInner
     */
    originalLanguage?: string;
    /**
     * 
     * @type {string}
     * @memberof TvSeriesRecommendations200ResponseResultsInner
     */
    originalName?: string;
    /**
     * 
     * @type {string}
     * @memberof TvSeriesRecommendations200ResponseResultsInner
     */
    overview?: string;
    /**
     * 
     * @type {string}
     * @memberof TvSeriesRecommendations200ResponseResultsInner
     */
    posterPath?: string;
    /**
     * 
     * @type {string}
     * @memberof TvSeriesRecommendations200ResponseResultsInner
     */
    mediaType?: string;
    /**
     * 
     * @type {Array<number>}
     * @memberof TvSeriesRecommendations200ResponseResultsInner
     */
    genreIds?: Array<number>;
    /**
     * 
     * @type {number}
     * @memberof TvSeriesRecommendations200ResponseResultsInner
     */
    popularity?: number;
    /**
     * 
     * @type {string}
     * @memberof TvSeriesRecommendations200ResponseResultsInner
     */
    firstAirDate?: string;
    /**
     * 
     * @type {number}
     * @memberof TvSeriesRecommendations200ResponseResultsInner
     */
    voteAverage?: number;
    /**
     * 
     * @type {number}
     * @memberof TvSeriesRecommendations200ResponseResultsInner
     */
    voteCount?: number;
    /**
     * 
     * @type {Array<string>}
     * @memberof TvSeriesRecommendations200ResponseResultsInner
     */
    originCountry?: Array<string>;
}

/**
 * Check if a given object implements the TvSeriesRecommendations200ResponseResultsInner interface.
 */
export function instanceOfTvSeriesRecommendations200ResponseResultsInner(value: object): value is TvSeriesRecommendations200ResponseResultsInner {
    return true;
}

export function TvSeriesRecommendations200ResponseResultsInnerFromJSON(json: any): TvSeriesRecommendations200ResponseResultsInner {
    return TvSeriesRecommendations200ResponseResultsInnerFromJSONTyped(json, false);
}

export function TvSeriesRecommendations200ResponseResultsInnerFromJSONTyped(json: any, ignoreDiscriminator: boolean): TvSeriesRecommendations200ResponseResultsInner {
    if (json == null) {
        return json;
    }
    return {
        
        'adult': json['adult'] == null ? undefined : json['adult'],
        'backdropPath': json['backdrop_path'] == null ? undefined : json['backdrop_path'],
        'id': json['id'] == null ? undefined : json['id'],
        'name': json['name'] == null ? undefined : json['name'],
        'originalLanguage': json['original_language'] == null ? undefined : json['original_language'],
        'originalName': json['original_name'] == null ? undefined : json['original_name'],
        'overview': json['overview'] == null ? undefined : json['overview'],
        'posterPath': json['poster_path'] == null ? undefined : json['poster_path'],
        'mediaType': json['media_type'] == null ? undefined : json['media_type'],
        'genreIds': json['genre_ids'] == null ? undefined : json['genre_ids'],
        'popularity': json['popularity'] == null ? undefined : json['popularity'],
        'firstAirDate': json['first_air_date'] == null ? undefined : json['first_air_date'],
        'voteAverage': json['vote_average'] == null ? undefined : json['vote_average'],
        'voteCount': json['vote_count'] == null ? undefined : json['vote_count'],
        'originCountry': json['origin_country'] == null ? undefined : json['origin_country'],
    };
}

export function TvSeriesRecommendations200ResponseResultsInnerToJSON(json: any): TvSeriesRecommendations200ResponseResultsInner {
    return TvSeriesRecommendations200ResponseResultsInnerToJSONTyped(json, false);
}

export function TvSeriesRecommendations200ResponseResultsInnerToJSONTyped(value?: TvSeriesRecommendations200ResponseResultsInner | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'adult': value['adult'],
        'backdrop_path': value['backdropPath'],
        'id': value['id'],
        'name': value['name'],
        'original_language': value['originalLanguage'],
        'original_name': value['originalName'],
        'overview': value['overview'],
        'poster_path': value['posterPath'],
        'media_type': value['mediaType'],
        'genre_ids': value['genreIds'],
        'popularity': value['popularity'],
        'first_air_date': value['firstAirDate'],
        'vote_average': value['voteAverage'],
        'vote_count': value['voteCount'],
        'origin_country': value['originCountry'],
    };
}

