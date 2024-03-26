# Collapsible

The collapsible module allows for any text division with the class collapsible_section to become collapsible.

For example, a common use case is the creation of a simple FAQ section, with a list of questions, with each answer displaying when a question is clicked.

## Installation

- Install this module using the official Backdrop CMS instructions at
  https://backdropcms.org/guide/modules.

## Usage

To create a collapsible section of text, utilize at least two consecutive divisions. The first division should have the class `collapsible_button`, while the second one should have the class `collapsible_section`, as demonstrated below:

```
<p>A Collapsible:</p>
<div class="collapsible_button">Open Collapsible</div>
<div class="collapsible_section">
  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
</div>

<p>Collapsible Set:</p>
<div class="collapsible_button">Open Section 1</div>
<div class="collapsible_section">
  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
</div>
<div class="collapsible_button">Open Section 2</div>
<div class="collapsible_section">
  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
</div>
<div class="collapsible_button">Open Section 3</div>
<div class="collapsible_section">
  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
</div>
```

## Issues

Bugs and Feature requests should be reported in the Issue Queue:
https://github.com/backdrop-contrib/collapsible/issues.

## Current Maintainers

- [Alan Mels](https://github.com/alanmels).
- Seeking additional maintainers.

## License

This project is GPL v2 software.
See the LICENSE.txt file in this directory for complete text.

