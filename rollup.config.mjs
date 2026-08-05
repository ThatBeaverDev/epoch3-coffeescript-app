import path from "path";
import commonjs from "@rollup/plugin-commonjs";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import alias from "@rollup/plugin-alias";
import { dirname } from "node:path";
import { fileURLToPath } from "node:url";

export default [
	{
		input: "build/main.js",
		context: "window",
		output: {
			file: "./dist/app.js",
			format: "es",
			inlineDynamicImports: true
		},
		plugins: [
			alias({
				entries: [
					{
						find: /^@\/(.*)/,
						replacement: path.resolve(
							dirname(fileURLToPath(import.meta.url)),
							"build/util/$1"
						)
					}
				]
			}),
			nodeResolve({
				browser: true,
				preferBuiltins: false
			}),
			commonjs()
		]
	}
];
