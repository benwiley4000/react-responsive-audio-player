##Contribute
Contributions are welcome. If you'd like to implement a new feature, please open an issue first.

###Build
To install build dependencies, run `npm install`.

Run webpack with `npm run build`. Built files can be found in the `dist/` directory. You can also use `npm run dev`; it's configured to do exactly the same thing, except it will continue watching for any changes you make, and recompile.

If you plan to submit a pull request, please test your changes.
Make sure to clone this repository in a seperate directory, from which you will be making your pull request.

To link your changes from your project, to the afforementioned clone, you can use [npm-link](https://docs.npmjs.com/cli/link).

Note the directory of the cloned repository and run the following commands.
`cd <the root directory of your project>
npm link <the directory of the cloned 'react-responsive-audio-player' repository>`

From then onward, you can make your proposed changes in the 'react-responsive-audio-player' repository and test them normally.
These changes will be reflected directly in the project you are working on.
