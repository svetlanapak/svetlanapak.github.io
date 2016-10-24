import 'babel-polyfill';

// enable HTML hot reloading only in dev
if (process.env.NODE_ENV !== 'production') {
	require('../index.html')
}


require("./style.scss")
