#!/usr/bin/env node

import figlet from 'figlet';
import chalk from 'chalk';
import gradient from 'gradient-string';
import main from './scripts/index.js';
import printProjectName from './scripts/printProjectName.js';
import printTemplate from './scripts/printTemplate.js';
import printLinter from './scripts/printLinter.js';
import printUnitTest from './scripts/printUnitTest.js';
import printDocs from './scripts/printDocs.js';
import printProjectManager from './scripts/printProjectManager.js';
import createProject from './scripts/createProject.js';
import isProjectExist from './utils/isProjectExist.js';
import { APP_AUTHOR, APP_LICENSE, APP_NAME, APP_URL, APP_VERSION } from './variables/data.js';

main(async (program) => {
  await draw();

  let projectName = program.args[0] || (await printProjectName());
  if (isProjectExist(projectName)) {
    console.log(`${chalk.red('!')} Project ${projectName} already exist!`);
    projectName = await printProjectName();
  }

  let template = program.opts()['template'] || (await printTemplate());
  let linter = program.opts()['linter'] || (await printLinter());
  let unitTest = program.opts()['unitTest'] || (await printUnitTest());
  let apiDoc = program.opts()['apiDoc'] || (await printDocs());
  let projectManager = program.opts()['manager'] || (await printProjectManager());

  // console.log(template, linter, unitTest, apiDoc, projectManager);

  try {
    await createProject({ projectName, template, projectManager, linter, unitTest, apiDoc });
  } catch (error) {
    console.log(error);
  }
});

async function draw() {
  await new Promise((resolve) => {
    figlet.text(
      APP_NAME,
      {
        font: 'Standard',
        horizontalLayout: 'universal smushing',
      },
      function (err, data) {
        if (err) {
          console.log(chalk.red('Something went wrong...'));
          return;
        }
        console.log(gradient.rainbow.multiline(data));
        console.log('');
        console.log(`${chalk.yellow('-')} Author: ${APP_AUTHOR}`);
        console.log(`${chalk.yellow('-')} Version: ${APP_VERSION}`);
        console.log(`${chalk.yellow('-')} License: ${APP_LICENSE}`);
        console.log(`${chalk.yellow('-')} Github: ${APP_URL}`);
        console.log('');
        resolve();
      },
    );
  });
}
