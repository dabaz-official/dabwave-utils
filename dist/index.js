"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var src_exports = {};
__export(src_exports, {
  API: () => API,
  authorizeAPI: () => authorizeAPI,
  clsxm: () => clsxm,
  configureAPI: () => configureAPI,
  extendDateTime: () => extendDateTime,
  formatDateTime: () => formatDateTime,
  getNameInitials: () => getNameInitials,
  parseDateTime: () => parseDateTime
});
module.exports = __toCommonJS(src_exports);

// src/api.ts
var import_axios = __toESM(require("axios"));
var API = import_axios.default.create({
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
var import_dayjs = __toESM(require("dayjs"));
var import_relativeTime = __toESM(require("dayjs/plugin/relativeTime"));
var import_timezone = __toESM(require("dayjs/plugin/timezone"));
var import_utc = __toESM(require("dayjs/plugin/utc"));
function extendDateTime(options = { utc: true, timezone: true, relativeTime: true }) {
  if (options.utc) {
    import_dayjs.default.extend(import_utc.default);
  }
  if (options.timezone) {
    import_dayjs.default.extend(import_timezone.default);
  }
  if (options.relativeTime) {
    import_dayjs.default.extend(import_relativeTime.default);
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
    return (0, import_dayjs.default)(import_dayjs.default.utc(date)).tz(timezone2 ?? import_dayjs.default.tz.guess());
  } catch {
    return (0, import_dayjs.default)(date);
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
var import_clsx = __toESM(require("clsx"));
var import_tailwind_merge = require("tailwind-merge");
function clsxm(...classes) {
  return (0, import_tailwind_merge.twMerge)((0, import_clsx.default)(...classes));
}

// src/strings.ts
var import_lodash = require("lodash");
var getNameInitials = (string, limit) => {
  if (!string)
    return "";
  const words = string.split(" ");
  const initials = (0, import_lodash.take)(
    words.map((word) => word.charAt(0)),
    limit || 2
  ).join("");
  return initials;
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  API,
  authorizeAPI,
  clsxm,
  configureAPI,
  extendDateTime,
  formatDateTime,
  getNameInitials,
  parseDateTime
});
