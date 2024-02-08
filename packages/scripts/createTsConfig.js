import fsPromises from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

export async function createTsConfig(projectName) {
  const SOURCE_PATH = path.join(path.dirname(fileURLToPath(import.meta.url)), '../', `templates/tsconfig`);
  const TARGET_PATH = path.join(process.cwd(), projectName);

  try {
    if (true) {
      await fsPromises.copyFile(path.join(SOURCE_PATH, 'ts.json'), path.join(TARGET_PATH, 'tsconfig.json'));
    }
  } catch (error) {
    throw error;
  }
}
