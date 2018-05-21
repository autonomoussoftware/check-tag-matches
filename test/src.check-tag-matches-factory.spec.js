'use strict'

const chai = require('chai')

chai.should()

const checkTagMatchesFactory = require('../src/check-tag-matches-factory')

describe('Check tag matches factory', function () {
  it('should not match no version', function () {
    const checkTagMatches = checkTagMatchesFactory({
      getGitHeadTags: () => ['v1.0.0'],
      getPackageVersion: () => undefined
    })
    return checkTagMatches().should.be.false
  })

  it('should not match no tags', function () {
    const checkTagMatches = checkTagMatchesFactory({
      getGitHeadTags: () => [],
      getPackageVersion: () => '1.0.0'
    })
    return checkTagMatches().should.be.false
  })

  it('should match a single tag', function () {
    const checkTagMatches = checkTagMatchesFactory({
      getGitHeadTags: () => ['v1.0.0'],
      getPackageVersion: () => '1.0.0'
    })
    return checkTagMatches().should.be.true
  })

  it('should match within multiple tags', function () {
    const checkTagMatches = checkTagMatchesFactory({
      getGitHeadTags: () => ['v1.0.0', 'latest'],
      getPackageVersion: () => '1.0.0'
    })
    return checkTagMatches().should.be.true
  })

  it('should pass cws properly', function (done) {
    const workingDir = __dirname
    const checkTagMatches = checkTagMatchesFactory({
      getGitHeadTags: () => [],
      getPackageVersion (cwd) {
        cwd.should.equals(workingDir)
        done()
      }
    })
    checkTagMatches(workingDir)
  })
})
