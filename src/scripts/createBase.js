import fsPromises from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

export async function createBase(projectName, template, alias) {
  try {
    const COMMON_PATH = path.join(path.dirname(fileURLToPath(import.meta.url)), '../', `templates/base/common`);
    const TARGET_PATH = path.join(process.cwd(), projectName);

    await fsPromises.cp(COMMON_PATH, TARGET_PATH, { recursive: true });
    await fsPromises.rename(`${TARGET_PATH}/gitignore.txt`, `${TARGET_PATH}/.gitignore`);

    if (alias) template += '-alias';
    const TEMPLATE_PATH = path.join(path.dirname(fileURLToPath(import.meta.url)), '../', `templates/base/${template}`);
    await fsPromises.cp(TEMPLATE_PATH, TARGET_PATH, { recursive: true });
  } catch (error) {
    throw error;
  }
}
