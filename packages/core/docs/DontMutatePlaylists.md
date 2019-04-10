The `playlist` prop is considered immutable. This means that if you modify the playlist array directly (for example, using the `push` Array method) and then re-render using the same `playlist` prop, you might run into problems, as no change will be detected and the player controls won't update until something else in the player context is changed.

The reason we deal with `playlist` this way is to avoid a ton of unnecessary re-renders throughout your component tree each time a playlist changes. If we can easily determine whether the contents of a playlist have changed or not, then we can implement our control components with the `PureComponent` React class, which only re-renders if one of its prop values is different.

The catch is that you might not be used to manipulating by creating a new Array instead of modifying the existing array. So here's a cheat sheet that can help you out ([shout-out to this guide for helping with ideas](http://vincent.billey.me/pure-javascript-immutable-array/)):

```js static
// we can use array methods like concat, slice, map and filter,
// which make a copy of the array instead of mutating it

// add new track to end of playlist
// mutating equivalent: oldPlaylist.push(newTrack)
const newPlaylist = oldPlaylist.concat(newTrack)

// remove last track
// mutating equivalent: oldPlaylist.pop()
const newPlaylist = oldPlaylist.slice(0, -1)

// add new track to front
// mutating equivalent: oldPlaylist.unshift(oldPlaylist)
const newPlaylist = [newTrack].concat(oldPlaylist)

// remove first track
// mutating equivalent: oldPlaylist.shift()
const newPlaylist = oldPlaylist.slice(1)

// insert track at a given index (in front of a track in the playlist)
// mutating equivalent: oldPlaylist.splice(index, 0, newTrack)
const index = oldPlaylist.indexOf(trackInPlaylist)
const newPlaylist = oldPlaylist
  .slice(0, index)
  .concat(newTrack, oldPlaylist.slice(index))

// replace track at a given index
// mutating equivalent: oldPlaylist[index] = newTrack
const newPlaylist = oldPlaylist
  .slice(0, index)
  // note we slice at index + 1 this time
  .concat(newTrack, oldPlaylist.slice(index + 1))

// replace track by reference
// mutating equivalent:
//   oldPlaylist[oldPlaylist.indexOf(trackInPlaylist)] = newTrack
const newPlaylist = oldPlaylist
  .map(track => track === trackInPlaylist ? newTrack : track)

// remove track at a given index
// mutating equivalent: oldPlaylist.splice(index, 1)
const index = oldPlaylist.indexOf(trackInPlaylist)
const newPlaylist = oldPlaylist
  .slice(0, index)
  .concat(oldPlaylist.slice(index + 1))

// remove track by reference
// mutating equivalent:
//   oldPlaylist.splice(oldPlaylist.indexOf(trackInPlaylist), 1)
const newPlaylist = oldPlaylist
  .filter(track => track !== trackInPlaylist)

// sort the playlist
// mutating equivalent: oldPlaylist.sort(compareFunction)
const newPlaylist = oldPlaylist.slice().sort(compareFunction)

// reverse the order of the playlist
// mutating equivalent: oldPlaylist.reverse()
const newPlaylist = oldPlaylist.slice().reverse()
```
