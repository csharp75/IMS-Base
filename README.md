# IMS Base

Management system project starter kit.

- NPM scripts
- SVG icon sprite creation (via Fabrice Weinberg’s [svgstore](https://github.com/FWeinb/grunt-svgstore))
- Node Sass compiles .scss files to CSS
- Browsersync - run a local server and live reload the browser when files change
- Autoprefix CSS with PostCSS & Autoprefixer
- Javascript Linting with [eslint](https://github.com/eslint/eslint)
- Combine and minifying JavaScript files with [uglify-js](https://github.com/mishoo/UglifyJS2)
- Image optimisation (via [imagemin-cli](https://github.com/imagemin/imagemin-cli) plugin)
- Watch for changes and combine tasks with [onchange](https://www.npmjs.com/package/onchange) and [npm-run-all](https://www.npmjs.com/package/npm-run-all)

Work in progress.

---

## ITCSS

The project CSS is structured using ITCSS (Inverted Triangle CSS) principles A scalable and maintainable CSS architecture for large projects. One of the key principles of ITCSS is that it separates your CSS codebase to several sections (called layers), which take the form of the inverted triangle:

- **Settings** – used with preprocessors and contain font, colors definitions, etc.
- **Tools** – globally used mixins and functions. It’s important not to output any CSS in the first 2 layers.
- **Generic** – reset and/or normalize styles, box-sizing definition, etc. This is the first layer which generates actual CSS.
- **Elements** – styling for bare HTML elements (like H1, A, etc.). These come with default styling from the browser so we can redefine them here
- **Objects** – class-based selectors which define undecorated design patterns, for example media object known from OOCSS
- **Components** – specific UI components. This is where the majority of our work takes place and our UI components are often composed of Objects and Components
- **Utilities** – utilities and helper classes with ability to override anything which goes before in the triangle, eg. hide helper class

More info [ITCSS: Scalable and Maintainable CSS Architecture](https://www.xfive.co/blog/itcss-scalable-maintainable-css-architecture/)

---

## BEMIT

CSS rules are written using the BEM (Block, Element, Modifier) naming convention. A front-end naming methodology thought up by the guys at Yandex. It is a smart way of naming your CSS classes to give them more transparency and meaning to other developers.

> By combining BEM with the Inverted Triangle CSS architecture we can extend the syntax using Namespacing and other patterns to give it richer meaning across development teams.

Harry Roberts - ['BEMIT: Taking the BEM Naming Convention a Step Further'](https://csswizardry.com/2015/08/bemit-taking-the-bem-naming-convention-a-step-further/)

### BEM SASS

Nested syntax to chain element and modifier properties.

```
.block {
  
  &__element {

    &--modifier {

    }
  }

  &--modifier {

  }
}
```

CSS output:
```
.block {}
.block__element {}
.block__element--modifier {}
.block--modifier {}
```

### BEM HTML

```
<div class="spaceship spaceship--white">
  <div class="spaceship__cabin">
    <h1 class="spaceship__pilot spaceship__pilot--female">
      Jessica Meir
    </h1>
  </div>
</div>
```

### NAMESPACING

Prefixing every class in a codebase with a certain string in order to explain to developers what kind of job it does. The most common types of namespace are <b>c-</b>, for Components, <b>o-</b>, for Objects, <b>u-</b>, for Utilities, and <b>is-/has-</b> for States.

```
<div class="o-media c-user c-user--premium">
  <img src="" alt="" class="o-media__img c-user__photo  c-avatar" />
  <p class="o-media__body c-user__bio">...</p>
</div>
```