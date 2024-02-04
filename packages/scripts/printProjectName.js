import inquirer from 'inquirer';

export default async function printProjectName() {
  let projectName = '';

  while (!projectName.trim()) {
    const iq = await inquirer.prompt({
      name: 'projectName',
      type: 'input',
      message: 'Project Name:',
      default: 'express-app',
    });
    projectName = iq.projectName;
  }

  return projectName;
}
