import { createSpinner } from 'nanospinner';

import { createBase } from './createBase.js';
import { createLinter } from './createLinter.js';
import { createPackageJson } from './createPackageJson.js';
import { createTsConfig } from './createTsConfig.js';
import { createUnitTest } from './createUnitTest.js';

import { runCommand } from '../utils/exec.js';

async function createStructure({ projectName, template, linter, unitTest }) {
  try {
    await createBase(projectName, template);
    await createPackageJson(projectName, template, linter, unitTest);
    if (linter) await createLinter(projectName, template, unitTest);
    if (template === 'typescript') await createTsConfig(projectName, unitTest);
    if (unitTest === 'jest') await createUnitTest(projectName, template, unitTest);
  } catch (error) {
    throw error;
  }
}

async function installDependencies(projectName, projectManager) {
  if (projectManager === 'npm') {
    await runCommand(`cd ${projectName} && npm install && cd ..`);
  } else if (projectManager === 'yarn') {
    await runCommand(`cd ${projectName} && yarn && cd ..`);
  } else if (projectManager === 'pnpm') {
    await runCommand(`cd ${projectName} && pnpm install && cd ..`);
  }
}

export default async function createProject({ projectName, template, projectManager, linter, unitTest }) {
  const spinner = createSpinner('Creating project...');
  try {
    spinner.start();

    await createStructure({ projectName, template, linter, unitTest });
    await installDependencies(projectName, projectManager);

    spinner.success({ text: 'Project created successfully' });
  } catch (error) {
    spinner.error({ text: 'Failed to create project' });
    throw error;
  }
}
