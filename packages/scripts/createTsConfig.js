import fsPromises from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

export async function createTsConfig(projectName, unitTest) {
  const __dirname = path.dirname(fileURLToPath(import.meta.url));
  const tsconfigTempalte = JSON.parse(await fsPromises.readFile(path.resolve(__dirname, `../templates/tsconfig.json`), 'utf-8'));

  const tsconfig = {
    ...tsconfigTempalte,
  };

  if (unitTest === 'jest') {
    tsconfig['compilerOptions']['types'].push('jest');
  }

  try {
    await fsPromises.writeFile(path.resolve(process.cwd(), projectName, 'tsconfig.json'), JSON.stringify(tsconfig, null, 2));
  } catch (error) {
    throw error;
  }
}
