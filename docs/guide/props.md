---
prev:
  text: Getting started
  link: /guide/getting-started.html
---

# Props

## Playlist
- Type: `Array`
- Required: `true`
- Default: `[]`

An Array of audio tracks passed into the component.
A track object has the following properties, all of the ___String___ type:
`{audio, artist, title, album, cover}`

## PlayerWidth
- Type: `Number`
- Default: `0`

The player's width in pixels.

## repeatAll
- Type: `Boolean`
- Default: `true`

Enables repetition of all audio files in the playlist.

# playerVolume
- Type: `Number`
- Default: `0.5`

Sets the player's volume, can be any Number between 0 and 1.

# stopPlayback
- Type: `Boolean`
- Default: `false`

Lets you programatically stop audio playback.

# pausePlayback
- Type: `Boolean`
- Default: `false`

Lets you programatically pause audio playback.

## showAudioDuration
- Type: `Boolean`
- Default: `true`

Let's the player show time duration of the audio file. (Default is true when playerWidth >= 400px)

## showAudioData
- Type: `Boolean`
- Default: `true`

Let's the player show the artist & title information of the audio file  (Defaults to true for __playerWidth__ >= 600px)

## progressBarColor
- Type: `String`
- Required: `false`
- Default: `#008080`

HEX color String of the progress-bar's color, can be changed to any of the following HEX color strings. 
`['#008080', '#009688', '#e91e63', '#9c27b0', '#673ab7', '#3f51b5', '#2196f3', '#00bcd4', '#4caf50', '#ff9800', '#607d8b', '#795548']
`