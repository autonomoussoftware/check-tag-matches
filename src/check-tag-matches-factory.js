'use strict'

const checkTagMatchesFactory = ({ getGitHeadTags, getPackageVersion }) =>
  function (cwd = '.', tagPrefix = 'v') {
    const prefixed = `${tagPrefix}${getPackageVersion(cwd)}`
    return getGitHeadTags().reduce(
      (match, tag) => match || tag === prefixed,
      false
    )
  }

module.exports = checkTagMatchesFactory
