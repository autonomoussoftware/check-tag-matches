# check-tag-matches

[![Build Status](https://travis-ci.org/autonomoussoftware/check-tag-matches.svg?branch=master)](https://travis-ci.org/autonomoussoftware/check-tag-matches)
[![Code Style](https://img.shields.io/badge/code%20style-bloq-ff69b4.svg)](https://github.com/bloq/eslint-config-bloq)


Checks if the `package.json` version matches current tag.

The objective of this package and tool is to be used before publishing an NPM package and verify:

- The repository was properly tagged.
- The tag matches the version in the `package.json`.
- The publishing is being done from that exact tagged commit.

## Installation

```bash
$ npm install --save-dev check-tag-matches
```

## Usage

Update the `package.json` scripts to use the check on `prepublishOnly`:

```json
{
  "scripts": {
    "prepublishOnly": "tag-matches"
  }
}
```

## License

[MIT Lincese](https://github.com/autonomoussoftware/check-tag-matches/blob/master/LICENSE)
