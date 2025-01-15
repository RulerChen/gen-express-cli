import fsPromises from 'fs/promises';
import path from 'path';

export async function createJsConfig(projectName) {
  try {
    await fsPromises.copyFile(
      path.resolve(__dirname, `../templates/jsconfig.json`),
      path.resolve(process.cwd(), projectName, 'jsconfig.json'),
    );
  } catch (error) {
    throw error;
  }
}
