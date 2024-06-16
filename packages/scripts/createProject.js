import { createSpinner } from 'nanospinner';

import { createBase } from './createBase.js';
import { createLinter } from './createLinter.js';
import { createPackageJson } from './createPackageJson.js';
import { createTsConfig } from './createTsConfig.js';
import { createUnitTest } from './createUnitTest.js';
import { createDoc } from './createDoc.js';

import { runCommand } from '../utils/exec.js';

async function createStructure({ projectName, template, linter, unitTest, apiDoc }) {
  try {
    await createBase(projectName, template);
    await createPackageJson(projectName, template, linter, unitTest, apiDoc);
    if (linter) await createLinter(projectName, template, unitTest);
    if (template === 'typescript') await createTsConfig(projectName, unitTest);
    if (unitTest === 'jest') await createUnitTest(projectName, template, unitTest);
    if (apiDoc) await createDoc(projectName, template);
  } catch (error) {
    throw error;
  }
}

async function installDependencies(projectName, projectManager, linter) {
  if (projectManager === 'npm') {
    await runCommand(`cd ${projectName} && npm install && cd ..`);
    if (linter) await runCommand(`cd ${projectName} && npm run format && cd ..`);
  } else if (projectManager === 'yarn') {
    await runCommand(`cd ${projectName} && yarn && cd ..`);
    if (linter) await runCommand(`cd ${projectName} && yarn format && cd ..`);
  } else if (projectManager === 'pnpm') {
    await runCommand(`cd ${projectName} && pnpm install && cd ..`);
    if (linter) await runCommand(`cd ${projectName} && pnpm run format && cd ..`);
  }
}

export default async function createProject({ projectName, template, projectManager, linter, unitTest, apiDoc }) {
  const spinner = createSpinner('Creating project...');
  try {
    spinner.start();

    await createStructure({ projectName, template, linter, unitTest, apiDoc });
    await installDependencies(projectName, projectManager, linter);

    spinner.success({ text: 'Project created successfully' });
  } catch (error) {
    spinner.error({ text: 'Failed to create project' });
    throw error;
  }
}
