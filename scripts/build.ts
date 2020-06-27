/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable global-require */
const main = () => {
  process.argv = [
    ...process.argv.slice(0, 2),
    'build',
    'wechat',
  ];
  require('@goji/cli');
};

main();
