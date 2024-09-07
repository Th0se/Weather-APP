<!-- @format -->

A simple interface to serve information provided by WeaterAPI in an easy-to-digest format.

# Guidelines.

## General

1. Use single quotes.
2. Do not concatenate strings. Use template literals instead.
3. Put temporary files (notes, samples, etc in the `temporary` folder.)

## JSX

1. Properties should be ordered in this order:
   core functionality > accesibility > styling.

## Project versioning

### Format

`x.y.z`

-   _x_ for major changes. If the introduced changes are extensive and/or render the website barely recogniseable, log them as a major change.
-   _y_ for content changes. For example if information is added, removed, or revised.
-   _z_ for minor changes. This includes but is not limited to styling changes, grammatical improvement, and typo fixes.

### Number Reset.

Whenever a number increases, all subsequent numbers must reset to 0.

Examples:

`4.5.6` => `5.0.0`.
`1.2.3.` => `1.3.0`.
