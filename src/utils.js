const argKey = x => x.toString() + ':' + typeof x;
const generateKey =  args => args.map(argKey).join('|');

export const memoize = fn => {
	const cache = {};
	return (...args) => {
		const key = generateKey(args);
		const value = cache[key];

		if (value) return value;

		const res = fn(...args);
		cache[key] = res;
		return res;
	};
};