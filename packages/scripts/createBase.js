import fsPromises from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

export async function createBase(projectName, template) {
  const SOURCE_PATH = path.join(path.dirname(fileURLToPath(import.meta.url)), '../', `templates/base/${template}`);
  const TARGET_PATH = path.join(process.cwd(), projectName);

  try {
    await fsPromises.cp(SOURCE_PATH, TARGET_PATH, { recursive: true });
    await fsPromises.rename(`${TARGET_PATH}/gitignore.txt`, `${TARGET_PATH}/.gitignore`);
  } catch (error) {
    throw error;
  }
}
