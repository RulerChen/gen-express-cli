import fsPromises from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

export async function createPackageJson(projectName, template, linter, unitTest) {
  const __dirname = path.dirname(fileURLToPath(import.meta.url));
  const packageJsonTemplate = JSON.parse(await fsPromises.readFile(path.resolve(__dirname, `../templates/package.json`), 'utf-8'));

  const packageJson = {
    ...packageJsonTemplate,
    name: projectName,
    scripts: {},
    dependencies: {
      ...packageJsonTemplate.dependencies,
    },
    devDependencies: {
      ...packageJsonTemplate.devDependencies,
    },
  };

  if (template === 'javascript') {
    packageJson.type = 'module';
    packageJson.scripts['dev'] = 'cross-env NODE_ENV=development nodemon ./src/index.js';
    packageJson.scripts['start'] = 'cross-env NODE_ENV=production node ./src/index.js';
    if (linter) {
      packageJson.scripts['lint'] = 'eslint ./src/**/*';
      packageJson.devDependencies['eslint'] = '~8.56.0';
      packageJson.devDependencies['eslint-config-standard'] = '~17.1.0';
      packageJson.devDependencies['eslint-plugin-import'] = '~2.29.1';
      packageJson.devDependencies['eslint-plugin-prettier'] = '~5.1.3';
      packageJson.devDependencies['eslint-config-prettier'] = '~9.1.0';
      packageJson.devDependencies['prettier'] = '~3.2.5';
    }
    if (unitTest === 'jest') {
      if (linter) packageJson.devDependencies['eslint-plugin-jest'] = '~27.6.3';
      packageJson.scripts['test'] =
        'jest --coverage=true -w=1 --forceExit --detectOpenHandles --watchAll=false --testPathPattern=src/__tests__';
      packageJson.devDependencies['jest'] = '~29.7.0';
    }
    if (e2eTest === 'supertest') {
      packageJson.scripts['test:e2e'] = 'node --experimental-vm-modules node_modules/jest/bin/jest.js --testPathPattern=src/e2e';
      packageJson.devDependencies['supertest'] = '~6.3.4';
    }
  }

  if (template === 'typescript') {
    packageJson.scripts['dev'] = 'cross-env NODE_ENV=development nodemon --exec ts-node ./src/index.ts';
    packageJson.scripts['build'] = 'tsc';
    packageJson.scripts['start'] = 'cross-env NODE_ENV=production node ./build/index.js';
    packageJson.devDependencies['typescript'] = '~5.3.3';
    packageJson.devDependencies['ts-node'] = '~10.9.2';
    packageJson.devDependencies['@types/cors'] = '~2.8.17';
    packageJson.devDependencies['@types/express'] = '~4.17.21';
    packageJson.devDependencies['@types/node'] = '~20.11.16';
    if (linter) {
      packageJson.scripts['lint'] = 'eslint ./src/**/*';
      packageJson.devDependencies['eslint'] = '~8.56.0';
      packageJson.devDependencies['@typescript-eslint/eslint-plugin'] = '~6.20.0';
      packageJson.devDependencies['eslint-config-prettier'] = '~9.1.0';
      packageJson.devDependencies['eslint-config-standard-with-typescript'] = '~43.0.1';
      packageJson.devDependencies['eslint-plugin-import'] = '~2.29.1';
      packageJson.devDependencies['eslint-plugin-n'] = '~16.6.2';
      packageJson.devDependencies['eslint-plugin-prettier'] = '~5.1.3';
      packageJson.devDependencies['eslint-plugin-promise'] = '~6.1.1';
      packageJson.devDependencies['prettier'] = '~3.2.5';
    }
    if (unitTest === 'jest') {
      if (linter) packageJson.devDependencies['eslint-plugin-jest'] = '~27.6.3';
      packageJson.scripts['test'] =
        'jest --coverage=true -w=1 --forceExit --detectOpenHandles --watchAll=false --testPathPattern=src/__tests__';
      packageJson.devDependencies['jest'] = '~29.7.0';
      packageJson.devDependencies['ts-jest'] = '~29.1.2';
      packageJson.devDependencies['@types/jest'] = '~29.5.12';
    }
    if (e2eTest === 'supertest') {
      packageJson.scripts['test:e2e'] = 'node --experimental-vm-modules node_modules/jest/bin/jest.js --testPathPattern=src/e2e';
      packageJson.devDependencies['supertest'] = '~6.3.4';
      packageJson.devDependencies['@types/supertest'] = '~6.0.2';
    }
  }

  try {
    await fsPromises.writeFile(path.resolve(process.cwd(), projectName, 'package.json'), JSON.stringify(packageJson, null, 2));
  } catch (error) {
    throw error;
  }
}
