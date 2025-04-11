import fsPromises from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

export async function createLinter(projectName, template, unitTest) {
  const __dirname = path.dirname(fileURLToPath(import.meta.url));
  const linterTemplate = JSON.parse(await fsPromises.readFile(path.resolve(__dirname, `../templates/.eslintrc.json`), 'utf-8'));

  const linter = {
    ...linterTemplate,
  };

  if (template === 'javascript') {
    if (unitTest === 'jest') {
      linter['env']['jest/globals'] = true;
      linter['extends'].push('eslint:recommended');
      linter['plugins'].unshift('jest');
    }
  }
  if (template === 'typescript') {
    linter['parser'] = '@typescript-eslint/parser';
    linter['plugins'].push('@typescript-eslint');

    if (unitTest === 'jest') {
      linter['env']['jest/globals'] = true;
      linter['plugins'].unshift('jest');
    }
  }
  try {
    await fsPromises.writeFile(path.resolve(process.cwd(), projectName, '.eslintrc.json'), JSON.stringify(linter, null, 2));
    await fsPromises.copyFile(
      path.resolve(__dirname, `../templates/.prettierrc.json`),
      path.resolve(process.cwd(), projectName, '.prettierrc.json'),
    );
  } catch (error) {
    throw error;
  }
}
