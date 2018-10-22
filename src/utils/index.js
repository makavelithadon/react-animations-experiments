export const replaceAll = (str, pattern, replacement) => str.replace(pattern, replacement);

export const flattenRoutes = (acc, route) =>
  route.subRoutes && route.subRoutes.length ? [...acc, route, ...route.subRoutes] : [...acc, route];

export const normalizeRoutePath = path =>
  replaceAll(path, /\//g, "")
    .toLowerCase()
    .trim();
