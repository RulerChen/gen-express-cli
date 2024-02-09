import fsPromises from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

export async function createE2E(projectName, template, e2e) {
  const __dirname = path.dirname(fileURLToPath(import.meta.url));
  const SOURCE_PATH = path.resolve(__dirname, `../templates/e2e/${template}`);
  const TARGET_PATH = path.resolve(process.cwd(), projectName);

  try {
    await fsPromises.cp(SOURCE_PATH, TARGET_PATH, { recursive: true });
  } catch (error) {
    throw error;
  }
}
