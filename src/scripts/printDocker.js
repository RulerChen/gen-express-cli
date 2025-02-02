import inquirer from 'inquirer';

export default async function printDocker() {
  const iq = await inquirer.prompt({
    name: 'docker',
    type: 'confirm',
    message: 'Do you want to use Docker for containerization?',
    default: false,
  });

  return iq.docker;
}
