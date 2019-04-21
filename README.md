# cassette

<img alt="https://www.pexels.com/photo/black-lx90-cassette-tape-1228497/" src="cassette.jpg" title="Photo by Stas Knop from Pexels" />

Cassette is a zero-config-required media player component library for React. The default responsive UI works great in desktop or mobile web browsers. The flexible core handles the logical complexities of common audio and video player paradigms, while allowing you to implement any UI you can come up with.

### This is Cassette v2, which is in beta.

See version 1 (also known as `react-responsive-audio-player`) [here](https://github.com/benwiley4000/cassette/blob/master/README.md)!

## Cassette is split into four packages

- [`@cassette/core`](/packages/core) provides React Context-based components which expose an API for consuming and updating media player state
- [`@cassette/components`](/packages/components) contains some convenient React component building blocks which can be used in media player user interfaces created with `@cassette/core`
- [`@cassette/player`](/packages/player) provides a responsive, zero-config-needed React media player component, implemented with `@cassette/core`
- [`@cassette/hooks`](/packages/hooks) provides optional [React Hooks](https://reactjs.org/docs/hooks-intro.html) for consuming media player state

### [See full documentation (with integrated live demos) here](https://benwiley4000.github.io/cassette/styleguide)

#### ⚠️ Note on installation

If you wanted to install, for instance, the `@cassette/core` and `@cassette/player` packages, you would run:

```console
npm install @cassette/core @cassette/player
```

**I do not control, nor do I have any contact with the owner of, the npm package called [`cassette`](https://www.npmjs.com/package/cassette) (without the `@`).** If you `npm install cassette`, you will be using the wrong library! However it turns out this package is used for managing playlist data. So if you really want to confuse the other devs on your team, you can try using `cassette` and `@cassette` together!

**If you're not using npm and you need production-ready scripts to include in your project, check out [the releases](https://github.com/benwiley4000/cassette/releases). You can also look on unpkg, e.g. [here](https://unpkg.com/@cassette/core@2.0.0-beta.0/dist/es5/).**

# Development

For building and testing instructions, see [CONTRIBUTING.md](CONTRIBUTING.md).

# Acknowledgements

Thanks to [BrowserStack](http://browserstack.com/) for providing their platform free of charge for this project (and many other open source projects). We're using BrowserStack to test compatibility across multiple browsers and platforms.

<a href="https://www.browserstack.com">
  <img alt="BrowserStack Logo" height="100" src="https://p14.zdusercontent.com/attachment/1015988/DucCZ7r9Wh1qj5RTUQUtIgaDM?token=eyJhbGciOiJkaXIiLCJlbmMiOiJBMTI4Q0JDLUhTMjU2In0..QyFYSeGwuz3hu2DYiIp-Wg.wG_egoKd46-VIYOLxlSOyc3zxeZQz0rLx0q6vklPvnEYiTRW2UolruFNGe2_h-Ci7kDR8hYqKyCbDJx8apDXyiJwwRiL1qYuBq9pdk8NP4h9znXRgs-5FCvAT-QX9ICsoDUEdHa8Bvj0sc_9ZjMocTn_njqzCkVv7PtKqT-QYf3zJIlsib0JvRgiMGuw__AyId65m1z7Q93LC4pVzlvqBL_4B26I2Mvt4NPqvlTbVUg_tbIWUDqzmhNBfqCWAuIfNYDb_EtIkdR8fWQ-uOFd5qjkB84NOi2ljlo7g5WrFYI.5MCH_b_7gSlMJ4L9twhThA">
</a>

## Icons

The standard control components make use of icons from various sources.

The CSS YouTube-style play/pause button and the skip button were authored in part by [@benwiley4000](https://github.com/benwiley4000), with heavy assistance from [this CodePen](https://codepen.io/OxyDesign/pen/ojpepQ) by [@OxyDesign](https://github.com/OxyDesign).

The SVG repeat, shuffle, fullscreen and volume icons come from Google's [material-design-icons](https://github.com/google/material-design-icons).
