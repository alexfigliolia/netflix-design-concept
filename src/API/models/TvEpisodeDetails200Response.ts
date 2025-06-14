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
import type { TvEpisodeDetails200ResponseCrewInner } from './TvEpisodeDetails200ResponseCrewInner';
import {
    TvEpisodeDetails200ResponseCrewInnerFromJSON,
    TvEpisodeDetails200ResponseCrewInnerFromJSONTyped,
    TvEpisodeDetails200ResponseCrewInnerToJSON,
    TvEpisodeDetails200ResponseCrewInnerToJSONTyped,
} from './TvEpisodeDetails200ResponseCrewInner';
import type { TvEpisodeDetails200ResponseGuestStarsInner } from './TvEpisodeDetails200ResponseGuestStarsInner';
import {
    TvEpisodeDetails200ResponseGuestStarsInnerFromJSON,
    TvEpisodeDetails200ResponseGuestStarsInnerFromJSONTyped,
    TvEpisodeDetails200ResponseGuestStarsInnerToJSON,
    TvEpisodeDetails200ResponseGuestStarsInnerToJSONTyped,
} from './TvEpisodeDetails200ResponseGuestStarsInner';

/**
 * 
 * @export
 * @interface TvEpisodeDetails200Response
 */
export interface TvEpisodeDetails200Response {
    /**
     * 
     * @type {string}
     * @memberof TvEpisodeDetails200Response
     */
    airDate?: string;
    /**
     * 
     * @type {Array<TvEpisodeDetails200ResponseCrewInner>}
     * @memberof TvEpisodeDetails200Response
     */
    crew?: Array<TvEpisodeDetails200ResponseCrewInner>;
    /**
     * 
     * @type {number}
     * @memberof TvEpisodeDetails200Response
     */
    episodeNumber?: number;
    /**
     * 
     * @type {Array<TvEpisodeDetails200ResponseGuestStarsInner>}
     * @memberof TvEpisodeDetails200Response
     */
    guestStars?: Array<TvEpisodeDetails200ResponseGuestStarsInner>;
    /**
     * 
     * @type {string}
     * @memberof TvEpisodeDetails200Response
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof TvEpisodeDetails200Response
     */
    overview?: string;
    /**
     * 
     * @type {number}
     * @memberof TvEpisodeDetails200Response
     */
    id?: number;
    /**
     * 
     * @type {string}
     * @memberof TvEpisodeDetails200Response
     */
    productionCode?: string;
    /**
     * 
     * @type {number}
     * @memberof TvEpisodeDetails200Response
     */
    runtime?: number;
    /**
     * 
     * @type {number}
     * @memberof TvEpisodeDetails200Response
     */
    seasonNumber?: number;
    /**
     * 
     * @type {string}
     * @memberof TvEpisodeDetails200Response
     */
    stillPath?: string;
    /**
     * 
     * @type {number}
     * @memberof TvEpisodeDetails200Response
     */
    voteAverage?: number;
    /**
     * 
     * @type {number}
     * @memberof TvEpisodeDetails200Response
     */
    voteCount?: number;
}

/**
 * Check if a given object implements the TvEpisodeDetails200Response interface.
 */
export function instanceOfTvEpisodeDetails200Response(value: object): value is TvEpisodeDetails200Response {
    return true;
}

export function TvEpisodeDetails200ResponseFromJSON(json: any): TvEpisodeDetails200Response {
    return TvEpisodeDetails200ResponseFromJSONTyped(json, false);
}

export function TvEpisodeDetails200ResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): TvEpisodeDetails200Response {
    if (json == null) {
        return json;
    }
    return {
        
        'airDate': json['air_date'] == null ? undefined : json['air_date'],
        'crew': json['crew'] == null ? undefined : ((json['crew'] as Array<any>).map(TvEpisodeDetails200ResponseCrewInnerFromJSON)),
        'episodeNumber': json['episode_number'] == null ? undefined : json['episode_number'],
        'guestStars': json['guest_stars'] == null ? undefined : ((json['guest_stars'] as Array<any>).map(TvEpisodeDetails200ResponseGuestStarsInnerFromJSON)),
        'name': json['name'] == null ? undefined : json['name'],
        'overview': json['overview'] == null ? undefined : json['overview'],
        'id': json['id'] == null ? undefined : json['id'],
        'productionCode': json['production_code'] == null ? undefined : json['production_code'],
        'runtime': json['runtime'] == null ? undefined : json['runtime'],
        'seasonNumber': json['season_number'] == null ? undefined : json['season_number'],
        'stillPath': json['still_path'] == null ? undefined : json['still_path'],
        'voteAverage': json['vote_average'] == null ? undefined : json['vote_average'],
        'voteCount': json['vote_count'] == null ? undefined : json['vote_count'],
    };
}

export function TvEpisodeDetails200ResponseToJSON(json: any): TvEpisodeDetails200Response {
    return TvEpisodeDetails200ResponseToJSONTyped(json, false);
}

export function TvEpisodeDetails200ResponseToJSONTyped(value?: TvEpisodeDetails200Response | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'air_date': value['airDate'],
        'crew': value['crew'] == null ? undefined : ((value['crew'] as Array<any>).map(TvEpisodeDetails200ResponseCrewInnerToJSON)),
        'episode_number': value['episodeNumber'],
        'guest_stars': value['guestStars'] == null ? undefined : ((value['guestStars'] as Array<any>).map(TvEpisodeDetails200ResponseGuestStarsInnerToJSON)),
        'name': value['name'],
        'overview': value['overview'],
        'id': value['id'],
        'production_code': value['productionCode'],
        'runtime': value['runtime'],
        'season_number': value['seasonNumber'],
        'still_path': value['stillPath'],
        'vote_average': value['voteAverage'],
        'vote_count': value['voteCount'],
    };
}

