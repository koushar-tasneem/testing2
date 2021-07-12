<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [puppeteer](./puppeteer.md) &gt; [PuppeteerNode](./puppeteer.puppeteernode.md) &gt; [executablePath](./puppeteer.puppeteernode.executablepath.md)

## PuppeteerNode.executablePath() method

<b>Signature:</b>

```typescript
executablePath(): string;
```
<b>Returns:</b>

string

A path where Puppeteer expects to find the bundled browser. The browser binary might not be there if the download was skipped with the `PUPPETEER_SKIP_DOWNLOAD` environment variable.

## Remarks

\*\*NOTE\*\* `puppeteer.executablePath()` is affected by the `PUPPETEER_EXECUTABLE_PATH` and `PUPPETEER_CHROMIUM_REVISION` environment variables.
