import fs from 'fs';
import path from 'path';

export default function isProjectExist(projectName) {
  return fs.existsSync(path.join(process.cwd(), projectName));
}
