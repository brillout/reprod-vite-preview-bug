```bash
git clone git@github.com:brillout/reprod-vite-preview-bug
cd reprod-vite-preview-bug/
pnpm install
pnpm build
pnpm demo:preview
```

Same as single line (copy-paste me):

```shell
git clone git@github.com:brillout/reprod-vite-preview-bug && cd reprod-vite-preview-bug/ && pnpm install && pnpm run build && pnpm demo:preview
```

Actual: Go to [localhost:3000/about](http://localhost:3000/about) and observe the 404.

Expected: `dist/client/about.html` should be served.
