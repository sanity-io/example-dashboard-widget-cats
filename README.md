# sanity-plugin-dashboard-widget-cats

> **NOTE**
>
> This is the **Sanity Studio v3 version** of sanity-plugin-dashboard-widget-cats.
>
> For the v2 version, please refer to the [v2-branch](https://github.com/sanity-io/plugin-template-dashboard-widget-cats).

## What is it?

An example dashboard widget for [@sanity/dashboard][dashboard-plugin] that shows a random cat.

This plugin mostly exist to show how a simple widget can be made.

![Cat widget](assets/cat.png)

## Install

```
npm install --save sanity-plugin-dashboard-widget-cats@studio-v3
```

or 

```
yarn add sanity-plugin-dashboard-widget-cats@studio-v3
```

Ensure that you have followed install and usage instructions for @sanity/dashboard.

## Usage

Add it as a widget to @sanity/dashboard plugin in sanity.config.ts (or .js):

```js
import { dashboardTool } from "@sanity/dashboard";
import { catsWidget } from "sanity-plugin-dashboard-widget-cats";

export default createConfig({
  // ...
  plugins: [
     dashboardTool({
             widgets: [
                 catsWidget(),
             ],
         }
     ),
  ] 
})
```

## Configure

The widget size can be controlled using layout.width: 

```js
dashboardTool({
        widgets: [
            catsWidget({ layout: { width: "small" } }),
        ],
    }
)
```

## License

MIT-licensed. See LICENSE.


## Develop & test

Make sure to run `npm run build` once, then run

```bash
npm run link-watch
```

In another shell, `cd` to your test studio and run:

```bash
npx yalc add sanity-plugin-dashboard-widget-cats --link && yarn install
```

Now, changes in this repo will be automatically built and pushed to the studio,
triggering hotreload. Yalc avoids issues with react-hooks that are typical when using yarn/npm link.

### About build & watch

This plugin uses [@sanity/plugin-sdk](https://github.com/sanity-io/plugin-sdk)
with default configuration for build & watch scripts.
