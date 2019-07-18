module.exports = function (config = {}) {
	return async function middleware(req, res, next) {
		console.log('delain', req, res)
		return next();
	}
});