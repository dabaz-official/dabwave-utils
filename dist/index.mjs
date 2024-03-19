// src/api.ts
import axios from "axios";
var API = axios.create({
  baseURL: "/api",
  headers: {
    "X-Requested-With": "XMLHttpRequest"
  },
  withCredentials: true
});
var authorizeAPI = (token) => {
  API.defaults.headers.common["Authorization"] = `Bearer ${token}`;
};
var configureAPI = (options) => {
  API.defaults = Object.assign(API.defaults, options);
};

// src/datetime.ts
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import timezone from "dayjs/plugin/timezone";
import utc from "dayjs/plugin/utc";
function extendDateTime(options = { utc: true, timezone: true, relativeTime: true }) {
  if (options.utc) {
    dayjs.extend(utc);
  }
  if (options.timezone) {
    dayjs.extend(timezone);
  }
  if (options.relativeTime) {
    dayjs.extend(relativeTime);
  }
}
var parseDateTime = (options) => {
  if (!options) {
    return null;
  }
  const { date, timezone: timezone2 = null } = typeof options === "string" ? { date: options } : options;
  if (!date) {
    return null;
  }
  try {
    return dayjs(dayjs.utc(date)).tz(timezone2 ?? dayjs.tz.guess());
  } catch {
    return dayjs(date);
  }
};
var formatDateTime = ({
  date,
  format,
  relative
}) => {
  if (!date)
    return "";
  if (!relative)
    return date.format(format);
  return date.fromNow();
};

// src/helpers.ts
import clsx from "clsx";
import { twMerge } from "tailwind-merge";
function clsxm(...classes) {
  return twMerge(clsx(...classes));
}

// src/strings.ts
import { take } from "lodash";
var getNameInitials = (string, limit) => {
  if (!string)
    return "";
  const words = string.split(" ");
  const initials = take(
    words.map((word) => word.charAt(0)),
    limit || 2
  ).join("");
  return initials;
};
export {
  API,
  authorizeAPI,
  clsxm,
  configureAPI,
  extendDateTime,
  formatDateTime,
  getNameInitials,
  parseDateTime
};
