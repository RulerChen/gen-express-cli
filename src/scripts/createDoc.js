import fsPromises from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

export async function createDoc(projectName, template, alias) {
  try {
    if (alias) template += '-alias';

    const SOURCE_PATH = path.join(path.dirname(fileURLToPath(import.meta.url)), '../', `templates/swagger/${template}`);
    const TARGET_PATH = path.join(process.cwd(), projectName);

    await fsPromises.cp(SOURCE_PATH, TARGET_PATH, { recursive: true, force: true });
  } catch (error) {
    throw error;
  }
}
