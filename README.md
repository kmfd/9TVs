# 9TVs
9TVs

# Description
A 3x3 HTML5 Video grid to channel surf video files or HLS/TS streams organized by .m3u8 playlist.

This used to be a project based on the VLC Web Plugin, but since browsers ended support for NPAPI plugins in favor of PPAPI, this was no longer a modern solution.
This new implementation is purely HTML5 using JS.

You can also load in the initial video list by URL parameter:
(todo add usage and example URL)

# This project uses
* hls.js
* jquery.js
* mousetrap.js

# Example Playlist

```
#EXTM3U
#EXTINF:-1,Test A
https://bitdash-a.akamaihd.net/content/sintel/hls/playlist.m3u8
#EXTINF:-1,Test B
https://mnmedias.api.telequebec.tv/m3u8/29880.m3u8
#EXTINF:-1,Test C
http://184.72.239.149/vod/smil:BigBuckBunny.smil/playlist.m3u8
#EXTINF:-1,Test D
http://www.streambox.fr/playlists/test_001/stream.m3u8
#EXTINF:-1,Test E
https://bitmovin-a.akamaihd.net/content/playhouse-vr/m3u8s/105560.m3u8
```

# Changelog

## 2021.01.1
* All YouTube links work, automatically converted to embeds but preserves original url
* Remove functionless(?) Looplist button
* Only entering some of the 4 tv params is fine
* Url logger outputs a real link now
* Fixed the autonext for hls and mp4 mostly, sometimes a video will not load and you'll still have to next manually, mostly limited to mashing the next buttons a lot

## 2020.11.1
* Fixed video box sizing for larger screens that are more responive to screen resizing

## 2020
* Massive refactor to switch to HTML5 and HLS.js implementation
* Implemented keyboard controls
* Better index shifting

## 2019
* Prehistoric development
* Video list log output
* VLC-based
* Had some Youtube support
* Had support for more streams that were not m3u8-based (via VLC)
* Had aspect ratio and cropping control
