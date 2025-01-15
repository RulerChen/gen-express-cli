import fsPromises from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

export async function createJsConfig(projectName) {
  const __dirname = path.dirname(fileURLToPath(import.meta.url));
  try {
    await fsPromises.copyFile(
      path.resolve(__dirname, `../templates/jsconfig.json`),
      path.resolve(process.cwd(), projectName, 'jsconfig.json'),
    );
  } catch (error) {
    throw error;
  }
}
