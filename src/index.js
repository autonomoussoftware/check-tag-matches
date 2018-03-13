'use strict'

const childProcess = require('child_process')
const path = require('path')

const checkTagMatchesFactory = require('./check-tag-matches-factory')
const getGitHeadTagsFactory = require('./get-git-head-tags-factory')
const getPackageVersionFactory = require('./get-package-version-factory')
const isTrue = require('./is-true')

const checkTagMatches = checkTagMatchesFactory({
  getGitHeadTags: getGitHeadTagsFactory({ childProcess, isTrue }),
  getPackageVersion: getPackageVersionFactory({ path })
})

module.exports = checkTagMatches
