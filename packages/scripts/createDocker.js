import fsPromises from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

export async function createDocker(projectName, template) {
  try {
    const SOURCE_PATH = path.join(path.dirname(fileURLToPath(import.meta.url)), '../', `templates/docker/${template}`);
    const TARGET_PATH = path.join(process.cwd(), projectName);

    await fsPromises.cp(SOURCE_PATH, TARGET_PATH, { recursive: true, force: true });
  } catch (error) {
    throw error;
  }
}
