import fsPromises from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

export async function createLinter(projectName, template) {
  const SOURCE_PATH = path.join(path.dirname(fileURLToPath(import.meta.url)), '../', `templates/linter`);
  const TARGET_PATH = path.join(process.cwd(), projectName);

  try {
    await fsPromises.copyFile(path.join(SOURCE_PATH, '.prettierrc.json'), path.join(TARGET_PATH, '.prettierrc.json'));
    if (template === 'javascript') {
      await fsPromises.copyFile(path.join(SOURCE_PATH, '.eslintrc-js.json'), path.join(TARGET_PATH, '.eslintrc.json'));
    } else if (template === 'typescript') {
      await fsPromises.copyFile(path.join(SOURCE_PATH, '.eslintrc-ts.json'), path.join(TARGET_PATH, '.eslintrc.json'));
    }
  } catch (error) {
    throw error;
  }
}
