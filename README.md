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

The project CSS is structured using ITCSS (Inverted Triangle CSS) principles a scalable and maintainable CSS architecture for large projects. One of the key principles of ITCSS is that it separates your CSS codebase to several sections (called layers), which take the form of the inverted triangle:

- **Settings** – used with preprocessors and contain font, colors definitions, etc.
- **Tools** – globally used mixins and functions. It’s important not to output any CSS in the first 2 layers.
- **Generic** – reset and/or normalize styles, box-sizing definition, etc. This is the first layer which generates actual CSS.
- **Elements** – styling for bare HTML elements (like H1, A, etc.). These come with default styling from the browser so we can redefine them here
- **Objects** – class-based selectors which define undecorated design patterns, for example media object known from OOCSS
- **Components** – specific UI components. This is where the majority of our work takes place and our UI components are often composed of Objects and Components
- **Utilities** – utilities and helper classes with ability to override anything which goes before in the triangle, eg. hide helper class

More info - [ITCSS: Scalable and Maintainable CSS Architecture](https://www.xfive.co/blog/itcss-scalable-maintainable-css-architecture/)

---

## BEMIT

CSS rules are written using the BEM (Block, Element, Modifier) naming convention. A front-end naming methodology thought up by the guys at Yandex. It is a smart way of naming your CSS classes to give them more transparency and meaning to other developers.

> By combining BEM with the Inverted Triangle CSS architecture we can extend the syntax using Namespacing and other patterns to give it richer meaning across development teams.

Harry Roberts - ['BEMIT: Taking the BEM Naming Convention a Step Further'](https://csswizardry.com/2015/08/bemit-taking-the-bem-naming-convention-a-step-further/)

### BEM Sass

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

### Namespacing

Classes are prefixed in a codebase with a certain string in order to explain to developers what kind of job it does. The most common types of namespace are **c-**, for Components, **o-**, for Objects, **u-**, for Utilities, and **is-/has-** for States.

```
<div class="o-media c-user c-user--premium">
  <img src="" alt="" class="o-media__img c-user__photo  c-avatar" />
  <p class="o-media__body c-user__bio">...</p>
</div>
```
---

## Design Tokens

Design tokens are named entities that store visual design information.

> Design tokens are the visual design atoms of the design system — specifically, they are named entities that store visual design attributes. We use them in place of hard-coded values (such as hex values for color or pixel values for spacing) in order to maintain a scalable and consistent visual system for UI development.

*Salesforce, [Lightning Design System ](https://www.lightningdesignsystem.com/design-tokens/)*

### Usage

The tokens take the form of key / value pairs written as Sass variables in a partial file and can cover anything from spacing to typography and colour.

```
_tokens.scss

\\ Colour Palette
$color-primary: #4d7cfe;
$color-secondary: #2a4180;
$color-neutral-dark: #171d24;
$color-neutral-light: #eaedf4;
```
And declared throughout the CSS to develop UI structure and appearance:

```
.link {
  color: $color-primary;
}
```
Meaning these values need only be changed once in the tokens file for the style to cascade through entire project. Need to update the primary brand color? Update the color value on the neccesary token:
```
$color-primary: #169772;
```

The [Style Dictionary](https://amzn.github.io/style-dictionary/#/) or [Theo](https://github.com/salesforce-ux/theo) node packages can be used to generate tokens for multiple platforms (iOS, Android etc) if required and the scope of the product expands to provide native apps or other solutions in future.

#### Examples & Useful Links
- [www.lightningdesignsystem.com/design-tokens/](https://www.lightningdesignsystem.com/design-tokens/)
- [Adobe Spectrum - Design Tokens](https://spectrum.adobe.com/page/design-tokens/)
- [Stu Robson: Design Tokens and CSS: Systemising the Design of Components](https://noti.st/sturobson/QIaw2X)
- [Documenting Design Tokens - Danny Banks](https://dbanks.design/blog/documenting-design-tokens/)
- [Using Design Tokens - Jina Bolton (Youtube)](https://youtu.be/wDBEc3dJJV8)
- [Shopify Polaris - Design Tokens](https://shopify.github.io/polaris-tokens/)
- [Comet, Discovery Education - Tokens](https://comet.discoveryeducation.com/visual-language/tokens.html)

---

## Spacing & Type Scale - 8pt Grid

Spatial systems, grids, and layouts provide rules that give your designs a consistent rhythm, constrain decision making, and help teams stay aligned. 

> A spatial system is a set of rules for how you measure, size, and space your UI elements.

*Figma: Design Systems [Space, Grids, and Layouts](https://www.designsystems.com/space-grids-and-layouts/)*

### The spacial system 

A non-linear scale based on the [8pt Grid System](https://spec.fm/specifics/8-pt-grid) with an occasional half step
using the default browser font-size of 16px as a memorable base number.

8 / **16** = 0.5rem  
16 / **16** = 1rem  
24 / **16** = 1.5rem  

Applying T-Shirt sizes for name labels to create a language that people can remember and apply accurately.


| Name             | rem           | px       |
| ---------------- |---------------| ---------|
| space-xxs        | 0.125rem      | 2px      |
| space-xs         | 0.25rem       | 4px      |
| space-s          | 0.5rem        | 8px      |
| **space-m**      | **1rem**      | **16px** |
| space-l          | 1.5rem        | 24px     |
| space-xl         | 2rem          | 32px     |
| space-xxl        | 4rem          | 64px     |

#### Reference

[Space in Design Systems](https://medium.com/eightshapes-llc/space-in-design-systems-188bcbae0d62) *by Nathan Curtis, Eightshapes*

---

## Utilities (*Beta*)

Utility classes are CSS class names that serve one particular purpose, and are named as such.

```
.u-border--top {
  border-top: 1px solid #dfe2ec !important;
}
```

>It’s not uncommon to use utility classes within CSS, but on the whole they tend to be used sparingly – at least with well-established methodologies such as BEM and ITCSS.

*Michelle Barker - [A Year of Utility Classes](https://css-irl.info/a-year-of-utility-classes/)*

*Note: Just wondered if this feature may be useful for devs as a remedy/alternative to inline CSS if the temptaton arises. They can be chained in a class on an HTML element in the same way but are different in that even though they are single use their style is stored in the external stylesheet also making them easier to manage site-wide*
