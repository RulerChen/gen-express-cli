import fsPromises from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';
import { DEPENDENCY } from '../variables/dependency.js';

export async function createPackageJson(projectName, template, linter, unitTest, alias) {
  const __dirname = path.dirname(fileURLToPath(import.meta.url));
  const packageJsonTemplate = JSON.parse(await fsPromises.readFile(path.resolve(__dirname, `../templates/package.json`), 'utf-8'));

  const packageJson = {
    name: projectName,
    description: `This project is generated by GEN-EXPRESS-CLI`,
    ...packageJsonTemplate,
    dependencies: {
      cors: DEPENDENCY.cors,
      'cross-env': DEPENDENCY['cross-env'],
      dotenv: DEPENDENCY.dotenv,
      express: DEPENDENCY.express,
    },
    devDependencies: {
      nodemon: DEPENDENCY.nodemon,
    },
  };

  if (template === 'javascript') {
    packageJson.type = 'module';
    packageJson.scripts['dev'] = 'cross-env NODE_ENV=development nodemon ./src/index.js';
    packageJson.scripts['start'] = 'cross-env NODE_ENV=production node ./src/index.js';

    if (linter) {
      packageJson.scripts['lint'] = 'eslint ./src/**/*.js --fix';
      packageJson.scripts['format'] = 'prettier --write ./**/*.{js,json}';
      packageJson.devDependencies['eslint'] = DEPENDENCY.eslint;
      packageJson.devDependencies['eslint-plugin-prettier'] = DEPENDENCY['eslint-plugin-prettier'];
      packageJson.devDependencies['eslint-config-prettier'] = DEPENDENCY['eslint-config-prettier'];
      packageJson.devDependencies['prettier'] = DEPENDENCY.prettier;
    }

    if (unitTest === 'jest') {
      if (linter) packageJson.devDependencies['eslint-plugin-jest'] = DEPENDENCY['eslint-plugin-jest'];
      packageJson.scripts['test'] =
        'node --experimental-vm-modules node_modules/jest/bin/jest.js --coverage=true -w=1 --forceExit --detectOpenHandles --watchAll=false --testPathPattern=src/__tests__';
      packageJson.devDependencies['jest'] = DEPENDENCY.jest;
    }

    if (alias) {
      packageJson.scripts['dev'] = 'cross-env NODE_ENV=development nodemon ./src/index.js';
      packageJson.scripts['start'] = 'cross-env NODE_ENV=production node ./src/index.js';
      packageJson.imports = { '#src/*': './src/*' };
    }
  }

  if (template === 'typescript') {
    packageJson.scripts['dev'] = 'cross-env NODE_ENV=development nodemon --exec ts-node ./src/index.ts';
    packageJson.scripts['build'] = 'tsc';
    packageJson.scripts['start'] = 'cross-env NODE_ENV=production node ./build/src/index.js';
    packageJson.devDependencies['typescript'] = DEPENDENCY.typescript;
    packageJson.devDependencies['ts-node'] = DEPENDENCY['ts-node'];
    packageJson.devDependencies['@types/cors'] = DEPENDENCY['@types/cors'];
    packageJson.devDependencies['@types/express'] = DEPENDENCY['@types/express'];
    packageJson.devDependencies['@types/node'] = DEPENDENCY['@types/node'];

    if (linter) {
      packageJson.scripts['lint'] = 'eslint ./src/**/*.ts --fix';
      packageJson.scripts['format'] = 'prettier --write ./**/*.{ts,json}';
      packageJson.devDependencies['eslint'] = DEPENDENCY.eslint;
      packageJson.devDependencies['@typescript-eslint/eslint-plugin'] = DEPENDENCY['@typescript-eslint/eslint-plugin'];
      packageJson.devDependencies['@typescript-eslint/parser'] = DEPENDENCY['@typescript-eslint/parser'];
      packageJson.devDependencies['eslint-config-prettier'] = DEPENDENCY['eslint-config-prettier'];
      packageJson.devDependencies['eslint-plugin-prettier'] = DEPENDENCY['eslint-plugin-prettier'];
      packageJson.devDependencies['prettier'] = DEPENDENCY.prettier;
    }

    if (unitTest === 'jest') {
      if (linter) packageJson.devDependencies['eslint-plugin-jest'] = DEPENDENCY['eslint-plugin-jest'];
      packageJson.scripts['test'] =
        'jest --coverage=true -w=1 --forceExit --detectOpenHandles --watchAll=false --testPathPattern=src/__tests__ --testPathIgnorePatterns=build';
      packageJson.devDependencies['jest'] = DEPENDENCY.jest;
      packageJson.devDependencies['ts-jest'] = DEPENDENCY['ts-jest'];
      packageJson.devDependencies['@types/jest'] = DEPENDENCY['@types/jest'];
    }

    if (alias) {
      packageJson.scripts['dev'] =
        'cross-env NODE_ENV=development nodemon -r tsconfig-paths/register --exec ts-node ./src/index.ts --files';
      packageJson.scripts['build'] = 'tsc && tsc-alias';
      packageJson.devDependencies['tsc-alias'] = DEPENDENCY['tsc-alias'];
      packageJson.devDependencies['tsconfig-paths'] = DEPENDENCY['tsconfig-paths'];
      packageJson.devDependencies['typescript-transform-paths'] = DEPENDENCY['typescript-transform-paths'];
    }
  }

  try {
    await fsPromises.writeFile(path.resolve(process.cwd(), projectName, 'package.json'), JSON.stringify(packageJson, null, 2));
  } catch (error) {
    throw error;
  }
}
