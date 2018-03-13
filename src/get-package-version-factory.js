'use strict'

const getPackageVersionFactory = ({ path }) =>
  cwd =>
    require(path.join(cwd, 'package.json')).version

module.exports = getPackageVersionFactory
