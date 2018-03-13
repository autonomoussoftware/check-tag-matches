'use strict'

const chai = require('chai')
const path = require('path')

chai.should()

const getPackageVersionFactory = require('../src/get-package-version-factory')
const testPackage = require('./data/package.json')

describe('Get package version factory', function () {
  it('should get version', function () {
    const getPackageVersion = getPackageVersionFactory({
      path: {
        join: (cwd, file) => path.join(cwd, 'data', file)
      }
    })
    return getPackageVersion(__dirname).should.deep.equals(testPackage.version)
  })
})
