## Contribute
Contributions are welcome.

If the change you'd like to implement is a new feature, please open an issue first, for discussion.

If you're fixing a bug you found, please open an issue (for tracking purposes), and reference the issue # in your pull request.

### Build
To install build dependencies, run `npm install`, and then `npm run bootstrap` to install all packages dependencies.

Run webpack with `npm run build:example`. Built files can be found in the `dist/` directory. You can also use `npm run dev`; it's configured to do exactly the same thing, except it will continue watching for any changes you make, and recompile. It will also open `example.html` in the web browser!

### Test
After building, you can test your changes by opening up `example.html` in a web browser.

### Testing on mobile devices

You may want to test how your changes work on a phone or tablet. The easiest way to do this is to connect to your development server over the local network. `npm run dev` only exposes your server to your computer. To launch a server accessible across your local network, run `npm run dev:network` then connect to `my.ip.address:8080` on your mobile device (or substitute with whatever port is being used).
