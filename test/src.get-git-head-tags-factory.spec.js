'use strict'

const chai = require('chai')

chai.should()

const getGitHeadTagsFactory = require('../src/get-git-head-tags-factory')
const isTrue = require('../src/is-true')

describe('Get git HEAD tags factory', function () {
  it('should get no tags', function () {
    const getGitHeadTags = getGitHeadTagsFactory({
      childProcess: {
        execSync: () => Buffer.from('\n')
      },
      isTrue
    })
    return getGitHeadTags().should.deep.equals([])
  })

  it('should get one tag', function () {
    const tag = 'v1.0.0'
    const getGitHeadTags = getGitHeadTagsFactory({
      childProcess: {
        execSync: () => Buffer.from(tag)
      },
      isTrue
    })
    return getGitHeadTags().should.deep.equals([tag])
  })

  it('should get multiple tag', function () {
    const tags = ['v1.0.0', 'latest']
    const getGitHeadTags = getGitHeadTagsFactory({
      childProcess: {
        execSync: () => Buffer.from(tags.join('\n'))
      },
      isTrue
    })
    return getGitHeadTags().should.deep.equals(tags)
  })
})
