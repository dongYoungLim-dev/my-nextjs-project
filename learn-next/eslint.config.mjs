import { defineConfig, globalIgnores } from 'eslint/config';
import nextVitals from 'eslint-config-next/core-web-vitals';
import eslintPluginPrettier from 'eslint-plugin-prettier';
import eslintConfigPrettier from 'eslint-config-prettier';

const eslintConfig = defineConfig([
	...nextVitals,
	eslintConfigPrettier,
	{
		plugins: {
			prettier: eslintPluginPrettier,
		},
		rules: {
			// 선언되지 않은 변수 또는 임포트 구문 정리 규칙
			'no-undef': 'error',
			// 'unused-imports/no-unused-imports': 'error',

			// 프리티어 설정
			'prettier/prettier': [
				'error',
				// 아래 규칙들은 개인 선호에 따라 prettier 문법 적용
				// https://prettier.io/docs/en/options.html
				{
					singleQuote: true,
					semi: true,
					useTabs: true,
					tabWidth: 2,
					trailingComma: 'all',
					printWidth: 80,
					bracketSpacing: true,
					arrowParens: 'avoid',
				},
			],
		},
	},
	// Override default ignores of eslint-config-next.
	globalIgnores([
		// Default ignores of eslint-config-next:
		'.next/**',
		'out/**',
		'build/**',
		'next-env.d.ts',
	]),
]);

export default eslintConfig;
