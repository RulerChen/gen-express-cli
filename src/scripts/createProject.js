import { createSpinner } from 'nanospinner';

import { createBase } from './createBase.js';
import { createLinter } from './createLinter.js';
import { createPackageJson } from './createPackageJson.js';
import { createDocker } from './createDocker.js';
import { createJsConfig } from './createJsConfig.js';
import { createTsConfig } from './createTsConfig.js';
import { createUnitTest } from './createUnitTest.js';
import { createDoc } from './createDoc.js';

import { runCommand } from '../utils/exec.js';

async function createStructure({ projectName, template, linter, unitTest, docker, apiDoc, alias }) {
  try {
    await createBase(projectName, template, alias);
    await createPackageJson(projectName, template, linter, unitTest, apiDoc, alias);
    if (linter) await createLinter(projectName, template, unitTest);
    if (docker) await createDocker(projectName, template);
    if (template === 'typescript') await createTsConfig(projectName, unitTest, alias);
    if (template === 'javascript' && alias) await createJsConfig(projectName);
    if (unitTest === 'jest') await createUnitTest(projectName, template, unitTest, alias);
    if (apiDoc) await createDoc(projectName, template, alias);
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
  }
}

export default async function createProject({ projectName, template, projectManager, linter, unitTest, docker, apiDoc, alias }) {
  const spinner = createSpinner('Creating project...');
  try {
    spinner.start();

    await createStructure({ projectName, template, linter, unitTest, docker, apiDoc, alias });
    await installDependencies(projectName, projectManager, linter);

    spinner.success({ text: 'Project created successfully' });
  } catch (error) {
    spinner.error({ text: 'Failed to create project' });
    throw error;
  }
}
