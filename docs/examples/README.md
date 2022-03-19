---
sidebar: auto
---

# Examples

## Use the player
For the player to function you need to set pass an array of tracks to the playlist prop. The playlist can be an empty array but don't expect anything to play.

```vue
<script>
  export default {
    props: {
      playerWidth: {
        type: Number
      }
    },
    data() {
      return {
        playlist: [{
            audio: '/audio/file.mp3',
            artist: 'Mr Singer',
            title: 'track title',
            album: 'album title',
            cover: '/album/art.jpg'
        }
        ...
        ]
      }
    }
  }
</script>

<template>
  <xns-audio-player-simple :playlist="playlist"></xns-audio-player-simple>
</template>
```

## Modify player's width
Set the width of the player in pixels by assigning a Number to the __playerWidth__ prop.

The minimal supported __playerWidth__ is 320.

```vue
<template>
  <xns-audio-player-simple :player-width="320" :playlist="playlist"></xns-audio-player-simple>
</template>
```

Unassigning the __playerWidth__ or setting it to __0__ defaults the player's width to that of it's parent block.

```vue
<template>
  <xns-audio-player-simple :player-width="0"></xns-audio-player-simple>
</template>
```

## Display track playback timer
Show the playback time of the audio file. (Set to true by default for players with __playerWidth__ >= 400px)

```vue
<template>
  <xns-audio-player-simple :show-audio-duration="false"></xns-audio-player-simple>
</template>
```

## Display track and artist's name
Show or hide the audio track's artist & title information (This defaults to true for __playerWidth__ >= 600px)

```vue
<template>
  <xns-audio-player-simple :show-audio-data="false"></xns-audio-player-simple>
</template>
```

## Change the progress bar color
Change the color of the player's progress bar by using one of the following array of colors.
`['#008080', '#009688', '#e91e63', '#9c27b0', '#673ab7', '#3f51b5', '#2196f3', '#00bcd4', '#4caf50', '#ff9800', '#607d8b', '#795548']`

```vue
<template>
  <xns-audio-player-simple progress-bar-color="#9c27b0"></xns-audio-player-simple>
</template>
```