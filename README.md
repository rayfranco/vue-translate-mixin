# vue-i18n-mixin

Simple internationalisation mixin for Vue.js with fallback locale.

## Installation

`npm install --save ssouron/vue-i18n-mixin#0.2.0`

## Usage

### In the Vue Model

```js
var root = new Vue({
	mixins: [
		require('vue-i18n-mixin')
	],

	data: {
		locale: 'en',
        fallbackLocale: 'en'
	},

	translations: {
		header: {
			title: {
				en: 'Hello',
				fr: 'Bonjour'
			}
		}
	},

	created: function() {
		// If you need to dynamically create the translations
		this.$options.translations = {
			// ...
		};
	},

	ready: function() {
		var title;

		// You can translate in the VM
		title = this.t('header.title'); // Will return 'Hello'

		// You can force a locale
		title = this.t('header.title', 'fr'); // Will return 'Bonjour'

	}
});
```

### In a view

```html
<h1 v-text="$root.t('header.title')"></h1>

<h1 v-text="$root.t('header.title', 'fr')"></h1>

<h1>{{ $root.t('header.title') }}</h1>
```