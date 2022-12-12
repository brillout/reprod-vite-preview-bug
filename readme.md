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

Go to [localhost:3000/about](http://localhost:3000/about) and observe:<br/>
Actual behavior: 404.<br/>
Expected behavior: `dist/client/about.html` should be served.
