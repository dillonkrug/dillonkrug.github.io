
export const Routes = [];

export const Route = Object.create(null);


const PARAM_START_RE = /^:/;
const PARAM_VALUE_RE_STR = '([^/]*)';
function isParam (part) {
	return PARAM_START_RE.test(part);
}

export function getParams (route, hash) {
	console.log('getParams', route);
	var m = route.regex.exec(hash);
	var out = Object.create(null);
	for (var i = 1; i < route.params.length; i++) {
		out[route.params[i]] = m[i];
	}
	console.log('PARAMS', out);
	return out;

}

export function getRoute (hash) {
	return Routes.find(r => r.regex.test(hash));
}

export function addRoute (route) {
	console.log('add route', route.path);
	var regexParts = [],
		params = [null];
	route.path
		.split('/')
		.forEach(part => {
			if (isParam(part)) {
				params.push(part.slice(1));
				regexParts.push(PARAM_VALUE_RE_STR);
			} else {
				regexParts.push(part);
			}
		});
	route.regex = new RegExp('^' + regexParts.join('/') + '$');
	route.params = params;
	Routes.push(route);
	return Route[route.path] = route;
}


