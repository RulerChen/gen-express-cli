import fsPromises from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

export async function createUnitTest(projectName, template, unitTest, alias) {
  if (unitTest === 'none') return;

  try {
    if (alias) unitTest += '-alias';
    const __dirname = path.dirname(fileURLToPath(import.meta.url));
    const SOURCE_PATH = path.resolve(__dirname, `../templates/unit/${template}`);
    const TARGET_PATH = path.resolve(process.cwd(), projectName);

    await fsPromises.cp(SOURCE_PATH, TARGET_PATH, { recursive: true });
  } catch (error) {
    throw error;
  }
}
