import { createSpinner } from 'nanospinner';

import { createBase } from './createBase.js';

import { runCommand } from '../utils/exec.js';

async function createStructure({ projectName, template }) {
  try {
    await createBase(projectName, template);
  } catch (error) {
    throw error;
  }
}

async function installDependencies(projectName) {
  await runCommand(`cd ${projectName} && npm install && cd ..`);
  await runCommand(`cd ${projectName} && npm run format && cd ..`);
}

export default async function createProject({ projectName, template }) {
  const spinner = createSpinner('Creating project...');
  try {
    spinner.start();

    await createStructure({ projectName, template });
    await installDependencies(projectName);

    spinner.success({ text: 'Project created successfully' });
  } catch (error) {
    spinner.error({ text: 'Failed to create project' });
    throw error;
  }
}
