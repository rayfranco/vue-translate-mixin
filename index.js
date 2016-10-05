'use strict';

module.exports = {

	ready: function() {  // this is to work with Vue 1.x
		// Make sure root locale and fallback locale exists
		if (!this.$root.locale) this.$root.$set('locale', 'en');
        if (!this.$root.fallbackLocale) this.$root.$set('fallbackLocale', 'en');
	},

	mounted: function() {  // this is to work with Vue 2.x
		// Make sure root locale and fallback locale exists
		if (!this.$root.locale) this.$root.$set('locale', 'en');
        if (!this.$root.fallbackLocale) this.$root.$set('fallbackLocale', 'en');
	},

	methods: {
		t: function(namespace, locale) {

			locale = locale || this.locale || this.$root.locale;

			// Fetch lang data
			var data = this.$options.translations || this.$root.$options.translations;

			try {
				var item = namespace.split('.').reduce(function(a, b, index) {
					return typeof a === 'object' ? a[b] : data[a][b];
				});
                // if item[locale] doesn't exist, let's take the fallback locale one :
                var translation = (typeof item[locale] === 'string') ? item[locale] : item[this.$root.fallbackLocale];
			} catch(e) {
				console.warn('No translation found for namespace %s using locale %s or no translation in fallback locale', namespace, locale);
			}
			return translation;
		}
	}
}
