# check-tag-matches

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

MIT
