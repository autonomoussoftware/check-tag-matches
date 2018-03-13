'use strict'

const chai = require('chai')

chai.should()

const checkTagMatches = require('..')

describe('Check tag matches', function () {
  it('should return a function', function () {
    return typeof checkTagMatches === 'function'
  })
})
