# employme.at/designit

Description

- [JavaScript](#javascript)
- [Performance](#performance)

## Javascript

- Use [polyfill.io](http://cdn.polyfill.io/v1/) for polyfilling old browser. That way modern javascript can be used without libraries like jQuery
- Dependency management with [Universal Module Definition](https://github.com/umdjs/umd). Scaled down to only support window because modules at the time beeing is not beeing used with [Browserify](http://browserify.org/) or [require.js](http://requirejs.org/).
- Use [bower](http://bower.io/) for external libraries

## Style

- [SCSS](http://sass-lang.com/) as preprocessor
- No external frameworks for lightweight site
- Simple 12 col responsive grid system
- Use [polyfill.io](http://cdn.polyfill.io/v1/) instead of normalize.css for smaller footprint
- Use `tranlateZ(0)` on elements affected by scroll to avoid repaint
- Split scss into critical and non-critical

## Performance

- Images optimized with [kraken.io](https://kraken.io/)
- Reponsive images (polyfilled with [picturefill](https://github.com/scottjehl/picturefill))
- Lazyload images (under the fold)
- Lazyload non-critical javascript (analytics etc.)
- Inline critical css
- Lazyload non-critical css
- Avoid using big libraries like jquery
