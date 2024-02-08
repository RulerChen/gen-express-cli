import fsPromises from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

export async function createPackageJson(projectName, template, linter) {
  const SOURCE_PATH = path.join(path.dirname(fileURLToPath(import.meta.url)), '../', `templates/package`);
  const TARGET_PATH = path.join(process.cwd(), projectName);

  try {
    if (template === 'javascript') {
      if (linter) await fsPromises.copyFile(path.join(SOURCE_PATH, 'js-linter.json'), path.join(TARGET_PATH, 'package.json'));
      if (!linter) await fsPromises.copyFile(path.join(SOURCE_PATH, 'js.json'), path.join(TARGET_PATH, 'package.json'));
    } else if (template === 'typescript') {
      if (linter) await fsPromises.copyFile(path.join(SOURCE_PATH, 'ts-linter.json'), path.join(TARGET_PATH, 'package.json'));
      if (!linter) await fsPromises.copyFile(path.join(SOURCE_PATH, 'ts.json'), path.join(TARGET_PATH, 'package.json'));
    }
  } catch (error) {
    throw error;
  }
}
