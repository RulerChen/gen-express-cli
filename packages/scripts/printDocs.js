import inquirer from 'inquirer';

export default async function printDocs() {
  const iq = await inquirer.prompt({
    name: 'apiDoc',
    type: 'confirm',
    message: 'Do you want to use swagger for API documentation?',
    default: false,
  });

  return iq.apiDoc;
}
