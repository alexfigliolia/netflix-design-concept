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
 * @interface ConfigurationLanguages200ResponseInner
 */
export interface ConfigurationLanguages200ResponseInner {
    /**
     * 
     * @type {string}
     * @memberof ConfigurationLanguages200ResponseInner
     */
    iso6391?: string;
    /**
     * 
     * @type {string}
     * @memberof ConfigurationLanguages200ResponseInner
     */
    englishName?: string;
    /**
     * 
     * @type {string}
     * @memberof ConfigurationLanguages200ResponseInner
     */
    name?: string;
}

/**
 * Check if a given object implements the ConfigurationLanguages200ResponseInner interface.
 */
export function instanceOfConfigurationLanguages200ResponseInner(value: object): value is ConfigurationLanguages200ResponseInner {
    return true;
}

export function ConfigurationLanguages200ResponseInnerFromJSON(json: any): ConfigurationLanguages200ResponseInner {
    return ConfigurationLanguages200ResponseInnerFromJSONTyped(json, false);
}

export function ConfigurationLanguages200ResponseInnerFromJSONTyped(json: any, ignoreDiscriminator: boolean): ConfigurationLanguages200ResponseInner {
    if (json == null) {
        return json;
    }
    return {
        
        'iso6391': json['iso_639_1'] == null ? undefined : json['iso_639_1'],
        'englishName': json['english_name'] == null ? undefined : json['english_name'],
        'name': json['name'] == null ? undefined : json['name'],
    };
}

export function ConfigurationLanguages200ResponseInnerToJSON(json: any): ConfigurationLanguages200ResponseInner {
    return ConfigurationLanguages200ResponseInnerToJSONTyped(json, false);
}

export function ConfigurationLanguages200ResponseInnerToJSONTyped(value?: ConfigurationLanguages200ResponseInner | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'iso_639_1': value['iso6391'],
        'english_name': value['englishName'],
        'name': value['name'],
    };
}

