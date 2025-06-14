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
 * @interface MovieImages200ResponseLogosInner
 */
export interface MovieImages200ResponseLogosInner {
    /**
     * 
     * @type {number}
     * @memberof MovieImages200ResponseLogosInner
     */
    aspectRatio?: number;
    /**
     * 
     * @type {number}
     * @memberof MovieImages200ResponseLogosInner
     */
    height?: number;
    /**
     * 
     * @type {string}
     * @memberof MovieImages200ResponseLogosInner
     */
    iso6391?: string;
    /**
     * 
     * @type {string}
     * @memberof MovieImages200ResponseLogosInner
     */
    filePath?: string;
    /**
     * 
     * @type {number}
     * @memberof MovieImages200ResponseLogosInner
     */
    voteAverage?: number;
    /**
     * 
     * @type {number}
     * @memberof MovieImages200ResponseLogosInner
     */
    voteCount?: number;
    /**
     * 
     * @type {number}
     * @memberof MovieImages200ResponseLogosInner
     */
    width?: number;
}

/**
 * Check if a given object implements the MovieImages200ResponseLogosInner interface.
 */
export function instanceOfMovieImages200ResponseLogosInner(value: object): value is MovieImages200ResponseLogosInner {
    return true;
}

export function MovieImages200ResponseLogosInnerFromJSON(json: any): MovieImages200ResponseLogosInner {
    return MovieImages200ResponseLogosInnerFromJSONTyped(json, false);
}

export function MovieImages200ResponseLogosInnerFromJSONTyped(json: any, ignoreDiscriminator: boolean): MovieImages200ResponseLogosInner {
    if (json == null) {
        return json;
    }
    return {
        
        'aspectRatio': json['aspect_ratio'] == null ? undefined : json['aspect_ratio'],
        'height': json['height'] == null ? undefined : json['height'],
        'iso6391': json['iso_639_1'] == null ? undefined : json['iso_639_1'],
        'filePath': json['file_path'] == null ? undefined : json['file_path'],
        'voteAverage': json['vote_average'] == null ? undefined : json['vote_average'],
        'voteCount': json['vote_count'] == null ? undefined : json['vote_count'],
        'width': json['width'] == null ? undefined : json['width'],
    };
}

export function MovieImages200ResponseLogosInnerToJSON(json: any): MovieImages200ResponseLogosInner {
    return MovieImages200ResponseLogosInnerToJSONTyped(json, false);
}

export function MovieImages200ResponseLogosInnerToJSONTyped(value?: MovieImages200ResponseLogosInner | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'aspect_ratio': value['aspectRatio'],
        'height': value['height'],
        'iso_639_1': value['iso6391'],
        'file_path': value['filePath'],
        'vote_average': value['voteAverage'],
        'vote_count': value['voteCount'],
        'width': value['width'],
    };
}

