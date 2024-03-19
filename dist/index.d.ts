import * as axios from 'axios';
import { AxiosRequestConfig } from 'axios';
import { Dayjs, ConfigType } from 'dayjs';
import { ClassValue } from 'clsx';

declare const API: axios.AxiosInstance;
declare const authorizeAPI: (token: string) => void;
declare const configureAPI: (options: Pick<AxiosRequestConfig, 'baseURL' | 'headers' | 'withCredentials'>) => void;

declare type DateTime = Dayjs;
declare type DateTimeProps = {
    date: DateTime | null | undefined;
    format?: string;
    relative?: boolean;
};
declare type ExtendOptions = {
    utc?: boolean;
    timezone?: boolean;
    relativeTime?: boolean;
};
declare function extendDateTime(options?: ExtendOptions): void;
declare type ParseOptions = {
    date?: ConfigType;
    timezone?: string;
};
/**
 * Parse a datetime string in UTC to a local timezone
 *
 * @ref https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date
 * @ref https://day.js.org/docs/en/parse/utc
 */
declare const parseDateTime: (options?: Nullish<string> | Nullish<ParseOptions>) => DateTime | null;
/**
 * Format a datetime to human readable format
 *
 * @ref https://day.js.org/docs/en/display/from-now
 * @ref https://day.js.org/docs/en/display/difference
 */
declare const formatDateTime: ({ date, format, relative, }: DateTimeProps) => string;

/** Merge classes with tailwind-merge with clsx full feature */
declare function clsxm(...classes: ClassValue[]): string;

/**
 * Get the initial characters of words in a string
 */
declare const getNameInitials: (string?: string, limit?: number) => string;

declare type Nullish<T> = null | undefined | T;
declare type Nullable<T> = T | null;

export { API, DateTime, DateTimeProps, Nullable, Nullish, authorizeAPI, clsxm, configureAPI, extendDateTime, formatDateTime, getNameInitials, parseDateTime };