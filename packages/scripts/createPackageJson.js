import fsPromises from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

export async function createPackageJson(projectName, template, linter, unitTest, apiDoc) {
  const __dirname = path.dirname(fileURLToPath(import.meta.url));
  const packageJsonTemplate = JSON.parse(await fsPromises.readFile(path.resolve(__dirname, `../templates/package.json`), 'utf-8'));

  const packageJson = {
    ...packageJsonTemplate,
    name: projectName,
  };

  if (template === 'javascript') {
    packageJson.type = 'module';
    packageJson.scripts['dev'] = 'cross-env NODE_ENV=development nodemon ./src/index.js';
    packageJson.scripts['start'] = 'cross-env NODE_ENV=production node ./src/index.js';
    if (linter) {
      packageJson.scripts['lint'] = 'eslint ./src/**/*.js --fix';
      packageJson.scripts['format'] = 'prettier --write ./**/*.{js,json}';
      packageJson.devDependencies['eslint'] = '^8';
      packageJson.devDependencies['eslint-config-standard'] = '^17';
      packageJson.devDependencies['eslint-plugin-import'] = '^2';
      packageJson.devDependencies['eslint-plugin-prettier'] = '^5';
      packageJson.devDependencies['eslint-config-prettier'] = '^9';
      packageJson.devDependencies['eslint-plugin-promise'] = '^6';
      packageJson.devDependencies['eslint-plugin-n'] = '^16';
      packageJson.devDependencies['prettier'] = '^3';
    }
    if (unitTest === 'jest') {
      if (linter) packageJson.devDependencies['eslint-plugin-jest'] = '^27';
      packageJson.scripts['test'] =
        'node --experimental-vm-modules node_modules/jest/bin/jest.js --coverage=true -w=1 --forceExit --detectOpenHandles --watchAll=false --testPathPattern=src/__tests__';
      packageJson.devDependencies['jest'] = '^29';
    }
    if (apiDoc) {
      packageJson.scripts['swagger'] = 'node swagger.js';
      packageJson.devDependencies['swagger-autogen'] = '^2';
      packageJson.devDependencies['swagger-ui-express'] = '^5';
    }
  }

  if (template === 'typescript') {
    packageJson.scripts['dev'] = 'cross-env NODE_ENV=development nodemon --exec ts-node ./src/index.ts';
    packageJson.scripts['build'] = 'tsc';
    packageJson.scripts['start'] = 'cross-env NODE_ENV=production node ./build/src/index.js';
    packageJson.devDependencies['typescript'] = '~5.3';
    packageJson.devDependencies['ts-node'] = '^10';
    packageJson.devDependencies['@types/cors'] = '^2';
    packageJson.devDependencies['@types/express'] = '^4';
    packageJson.devDependencies['@types/node'] = '^20';
    if (linter) {
      packageJson.scripts['lint'] = 'eslint ./src/**/* --fix';
      packageJson.scripts['format'] = 'prettier --write ./**/*.{ts,json}';
      packageJson.devDependencies['eslint'] = '^8';
      packageJson.devDependencies['@typescript-eslint/eslint-plugin'] = '^6';
      packageJson.devDependencies['eslint-config-prettier'] = '^9';
      packageJson.devDependencies['eslint-config-standard-with-typescript'] = '^43';
      packageJson.devDependencies['eslint-plugin-import'] = '^2';
      packageJson.devDependencies['eslint-plugin-n'] = '^16';
      packageJson.devDependencies['eslint-plugin-prettier'] = '^5';
      packageJson.devDependencies['eslint-plugin-promise'] = '^6';
      packageJson.devDependencies['prettier'] = '^3';
    }
    if (unitTest === 'jest') {
      if (linter) packageJson.devDependencies['eslint-plugin-jest'] = '^27';
      packageJson.scripts['test'] =
        'jest --coverage=true -w=1 --forceExit --detectOpenHandles --watchAll=false --testPathPattern=src/__tests__';
      packageJson.devDependencies['jest'] = '^29';
      packageJson.devDependencies['ts-jest'] = '^29';
      packageJson.devDependencies['@types/jest'] = '^29';
    }
    if (apiDoc) {
      packageJson.scripts['swagger'] = 'ts-node swagger.ts';
      packageJson.devDependencies['swagger-autogen'] = '^2';
      packageJson.devDependencies['swagger-ui-express'] = '^5';
      packageJson.devDependencies['@types/swagger-ui-express'] = '^4';
    }
  }

  try {
    await fsPromises.writeFile(path.resolve(process.cwd(), projectName, 'package.json'), JSON.stringify(packageJson, null, 2));
  } catch (error) {
    throw error;
  }
}
