# Basic Internationalization Script for Static HTML

This little [script](script.js) is written for very basic static HTML internationalization with no dependency and pure JavaScript.

## How to use

Add an element to your HTML file with `data-i18n="key"` attribute.

```html
<h1 data-i18n="hello"><h1>
```

Import the [script](script.js).

```html
<script type="text/javascript" src="script.js"></script>
```

Create localization files.

> en.json

```json
{
  "hello": "Hello, World!"
}
```

> tr.json

```json
{
  "hello": "Merhaba, Dünya!"
}
```

Apply different languages with different buttons or images or any other element.

```html
<button onclick="applyTranslation('tr')">🇹🇷</button>
<button onclick="applyTranslation('en')">🇬🇧</button>
```

Enjoy!

## Specifications

 - Mamoization - does not download the same resource twice.
 - Async - does not block the main thread.
 - No dependency - does not contain bloatware.
 - Pure JavaScript - no need to transpile.
