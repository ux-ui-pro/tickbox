<div align="center">
<br>
<h1>tickbox</h1>
<p>checkbox, radio, switch</p>

[![npm](https://img.shields.io/npm/v/tickbox.svg?colorB=brightgreen)](https://www.npmjs.com/package/tickbox)
[![GitHub package version](https://img.shields.io/github/package-json/v/ux-ui-pro/tickbox.svg)](https://github.com/ux-ui-pro/tickbox)
[![NPM Downloads](https://img.shields.io/npm/dm/tickbox.svg?style=flat)](https://www.npmjs.org/package/tickbox)

<p><sup>600B gzipped</sup></p>
<h3><a href="https://52kty3.csb.app/">Demo</a></h3>
</div>
<br>

## Install
```
$ yarn add tickbox
```
<br>

## Import
<sub>**JS** (optional) adds aria-checked attribute indicates the current "checked" state of checkboxes, radio buttons and switches</sub>
```javascript
import Tickbox from 'tickbox'
```
<sub>**CSS**</sub>
```css
@import "tickbox/dist";
```
<sub>or source if your bundler supports **SCSS**</sub>
```css
@import "tickbox/src";
```
<br>

## Use
<sub>**JS** (optional)</sub>
```javascript
Tickbox.init()
```
<sub>**HTML** <a href="https://52kty3.csb.app/">more examples</a></sub>
```html
// Checkbox
<div class="tickbox">
	<input id="one" type="checkbox">
	<label for="one">
		<span>Checkbox</span>
	</label>
</div>

// Radio
<div class="tickbox">
	<input id="two" type="radio">
	<label for="two">
		<span>Radio</span>
	</label>
</div>

// Switch checkbox
<div class="tickbox">
	<input id="three" type="checkbox" role="switch">
	<label for="three">
		<span>Switch checkbox</span>
	</label>
</div>

// Switch radio
<div class="tickbox">
	<input id="four" type="radio" role="switch">
	<label for="four">
		<span>Switch radio</span>
	</label>
</div>
```
<br>

## License
tickbox is released under MIT license