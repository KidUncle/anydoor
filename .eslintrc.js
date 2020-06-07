module.exports = {
	'env': {
		'browser': true,
		'commonjs': true,
		'es6': true
	},
	'extends': 'eslint:recommended',
	'parserOptions': {
		'ecmaVersion': 11
	},
	'rules': {
		'indent': [
			'error',
			'tab'
		],
		'linebreak-style': [
			'error',
			'windows'
		],
		'quotes': [
			'error',
			'single'
		],
		'semi': [
			'error',
			'always'
		]
	}
};
