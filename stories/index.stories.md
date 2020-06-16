```js script
import { html } from '@open-wc/demoing-storybook';
// import { boolean } from '@storybook/addon-knobs';
import { withKnobs, withWebComponentsKnobs } from '@open-wc/demoing-storybook';
import '../demo/custom-detail.js';

export default {
  title: 'Anypoint Collapse',
  component: 'custom-detail',
  decorators: [withKnobs, withWebComponentsKnobs],
  options: { selectedPanel: "storybookjs/knobs/panel" },
};
```

# Anypoint Collapse

A modern port of iron-collapse element. It creates a collapsible block of content.
By default, the content will be collapsed.  Use `opened` or `toggle()` to show/hide the content.

The element adjusts the max-height/max-width of the collapsible element to show/hide the content.
Avoid putting padding/margin/border on the collapsible directly, and instead put a div inside and style that.

## How to use

### Installation

```bash
npm i -S anypoint-collapse
```

```js
import 'anypoint-collapse/anypoint-collapse.js';
```

```js preview-story
export const Simple = () => html`
  <custom-detail>
    <div class="content">
      Lorem ipsum dolor sit amet, per in nusquam nominavi periculis, sit elit oportere ea, id minim maiestatis incorrupte duo. Dolorum verterem ad ius, his et nullam verterem. Eu alia debet usu, an doming tritani est. Vix ad ponderum petentium suavitate, eum
      eu tempor populo, graece sententiae constituam vim ex. Cu torquatos reprimique neglegentur nec, voluptua periculis has ut, at eos discere deleniti sensibus. Lorem ipsum dolor sit amet, per in nusquam nominavi periculis, sit elit oportere ea,
      id minim maiestatis incorrupte duo. Dolorum verterem ad ius, his et nullam verterem. Eu alia debet usu, an doming tritani est. Vix ad ponderum petentium suavitate, eum eu tempor populo, graece sententiae constituam vim ex. Cu torquatos reprimique
      neglegentur nec, voluptua periculis has ut, at eos discere deleniti sensibus.
    </div>
  </custom-detail>
`;
```

## Variations

### Horizontal

```js preview-story
export const HorizontalMode = () => html`
<custom-detail horizontal>
  <div class="content">
    Lorem ipsum dolor sit amet, per in nusquam nominavi periculis, sit elit oportere ea, id minim maiestatis incorrupte duo. Dolorum verterem ad ius, his et nullam verterem. Eu alia debet usu, an doming tritani est. Vix ad ponderum petentium suavitate, eum
    eu tempor populo, graece sententiae constituam vim ex. Cu torquatos reprimique neglegentur nec, voluptua periculis has ut, at eos discere deleniti sensibus. Lorem ipsum dolor sit amet, per in nusquam nominavi periculis, sit elit oportere ea,
    id minim maiestatis incorrupte duo. Dolorum verterem ad ius, his et nullam verterem. Eu alia debet usu, an doming tritani est. Vix ad ponderum petentium suavitate, eum eu tempor populo, graece sententiae constituam vim ex. Cu torquatos reprimique
    neglegentur nec, voluptua periculis has ut, at eos discere deleniti sensibus.
  </div>
</custom-detail>
`;
```

### No animation

```js preview-story
export const NoAnimation = () => html`
<custom-detail noanimation>
  <div class="content">
    Lorem ipsum dolor sit amet, per in nusquam nominavi periculis, sit elit oportere ea, id minim maiestatis incorrupte duo. Dolorum verterem ad ius, his et nullam verterem. Eu alia debet usu, an doming tritani est. Vix ad ponderum petentium suavitate, eum
    eu tempor populo, graece sententiae constituam vim ex. Cu torquatos reprimique neglegentur nec, voluptua periculis has ut, at eos discere deleniti sensibus. Lorem ipsum dolor sit amet, per in nusquam nominavi periculis, sit elit oportere ea,
    id minim maiestatis incorrupte duo. Dolorum verterem ad ius, his et nullam verterem. Eu alia debet usu, an doming tritani est. Vix ad ponderum petentium suavitate, eum eu tempor populo, graece sententiae constituam vim ex. Cu torquatos reprimique
    neglegentur nec, voluptua periculis has ut, at eos discere deleniti sensibus.
  </div>
</custom-detail>
`;
```
