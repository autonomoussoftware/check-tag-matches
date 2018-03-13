#!/usr/bin/env node

'use strict'

const checkTagMatches = require('..')

try {
  if (checkTagMatches(process.cwd())) {
    console.log('Package version and current tag at HEAD match')
    process.exit(0)
  } else {
    console.warn('Package version does not match any tags at HEAD')
    process.exit(1)
  }
} catch (err) {
  console.error(`Check failed: ${err.message.split('\n')[0]}`)
}
