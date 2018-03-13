'use strict'

const getGitHeadTagsFactory = ({ childProcess, isTrue }) =>
  () =>
    childProcess.execSync('git tag --points-at HEAD', { stdio: [] })
      .toString()
      .split('\n')
      .filter(isTrue)

module.exports = getGitHeadTagsFactory
