# treeshake-test

## Set up

```
yarn install
yarn build-stats
```

This will create the build and generate a stats file


## Compare bundle for different import syntaxes

First run build-stats without making any code changes

```
yarn build-stats
ls -l build/static/js
source-map-explorer build/static/js/1*.js
```

You can see the bundle size, and source-map-explorer shows the contents of the bundle, in the browser.  Note the big chunk that is material-ui.

Now modify App.js by switching the import statement for Heading to the commented-out one.  Rerun the above commands and compare the output.

My results:

When import looks like this:
` import { Heading } from '@dhis2/d2-ui-core';`

I get this output:
```
753487 Nov  1 21:22 1.120157cb.chunk.js
```

When import looks like this:
`import Heading from '@dhis2/d2-ui-core/build/es/headings/Heading.component';`

I get this output:
```
119222 Nov  1 21:23 1.1424eb58.chunk.js
```

