## Contribute
Contributions are welcome.

If the change you'd like to implement is a new feature, please open an issue first, for discussion.

If you're fixing a bug you found, please open an issue (for tracking purposes), and reference the issue # in your pull request.

### Build
To install build dependencies, run `npm install`, and then `npm run bootstrap` to install all packages dependencies and build all packages. Built files can be found in the `dist/` subdirectories of the corresponding `packages/x` subdirectories.

Run the styleguide server locally with `npm run docs:serve`. Changes to source or documentation files will cause the browser to reload automatically (however you will need to restart the server if you make changes to the styleguide configuration).

Open `localhost:6060` in a web browser to see the live-updated styleguide site.

### Tests
We're using Jest for tests, and although we haven't done a great job with this in the past, we're trying to add test files for any new features or fixes. If you're not sure what kind of test to add, go ahead and open your pull request, and we can discuss test-writing in the comments!
