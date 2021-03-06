import commonjs from 'rollup-plugin-commonjs'
import typescript2 from 'rollup-plugin-typescript2'
import postcss from 'rollup-plugin-postcss'

const typescript = require('typescript')
const pkg = require('./package.json')

const libraryName = 'design'
const globalLibs = Object.keys(pkg.dependencies)
const externalLibs = Object.keys(pkg.peerDependencies)

export default {
  input: 'src/index.ts',
  output: [{
    external: externalLibs,
    file: pkg.main,
    format: 'umd',
    globals: globalLibs,
    name: libraryName
  }, {
    external: externalLibs,
    file: pkg.module,
    format: 'es',
    globals: globalLibs,
    name: libraryName
  }],
  plugins: [
    postcss({
      modules: true
    }),
    typescript2({
      clean: true,
      typescript: typescript,
      verbosity: 0,
      useTsconfigDeclarationDir: true,
      tsconfigOverride: {
        compilerOptions: {
          module: "es2015"
        }
      }
    }),
    commonjs({
      include: 'node_modules/**'
    })
  ]
}
