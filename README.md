# 9TVs
9TVs


# Description
A 3x3 (currently 2x2) HTML5 Video grid to channel surf YouTube, HLS/TS streams or .mp4 videos organized by .m3u8 playlist.

This used to be a project based on the VLC Web Plugin, but since <a href="https://en.wikipedia.org/wiki/NPAPI#Support/deprecation">browsers ended support</a> for NPAPI plugins in favor of PPAPI, this was no longer a modern solution.
This new implementation is purely HTML5 using JS.

You can also load in the initial video grid urls by URL parameter:
Add "?tv1=" followed by the URL to load
Each grid can be loaded this way:
`https://kmfd.github.io/?tv1=<URL1>&tv2=<URL2>&tv3=<URL3>&tv4=<URL4>`



# Keyboard Controls

numpad can be used for main controls
(For 4TVs, just use `4-5-1-2` numbers instead of the full 9)

```
    * -
7 8 9 +
4 5 6
1 2 3
Alt
```


* = Loopnext: automatically load the next video if the first one reaches the end (non-YT only)

- = Shuffle: shuffles the playlist

+ = Open: open file on computer (m3u/m3u8)

Number = Next(n): next this screen on the grid

Alt+Number = Skip 30 seconds on that screen

# GUI Controls

Document Button = Open file upload prompt (feed it one or more .m38/.m3u8 files, or text files in m3u format)

Shuffle = Shuffles the playlist.

Next (N) = Process the next urls on the grid playlist to load one onto the indicated grid space (will autonext until it finds one that loads (or youtube))

Next All = Starts Nexting each video on the grid

Skip30 (N) = Skip the indicated video 30 seconds forward (works with .m3u8 and .mp4)

Skip30 All = Skips 30 seconds on each video on the grid

Stop (N) = Stop the indicated video

Stop All = Stop each video on the grid

Start = (busted)

Loops = this controls what behavior will happen when the end of the playing video is reached (.mp4) to automatically load the next one (Loops>Next) or reload the same one (Loops>Restart), or nothing (Loops>Off)

Parse = This will go through the grid playlist and try to remove every line that is not a valid URL, usually not needed

Log = This will output at the bottom of the page each URL currently playing on the grid followed by a link that will autoload them to save or share a grid.


# Additional notes

The grid playlist is added to and not subtracted from until the page is reloaded.

The list will loop around to the beginning when you reach the end.

Using the shuffle button can cause previously loaded urls to show up again before urls that have not yet been loaded.

When you click onto a YouTube video, maybe to unmute or pause, the frame will capture your keyboard controls so you'll have to click elsewhere on the page (bottom left corner) to regain the 9TVs controls. (Tab can also accomplish this.)

Start button does nothing currently.

It should be fine to only include some of the URL parameters


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
(example youtube playlist featuring worldcams <a href="https://github.com/kmfd/kmfd.github.io/blob/main/worldcams%20youtube%20playlist.m3u">here</a> (from <a href="https://www.youtube.com/playlist?list=PL7CqcasaJQRPsJ1eTLaGQotEsDbQiaCNb">here</a>))


(example HLS playlist with demo streams<a href="https://github.com/kmfd/9TVs/blob/master/4tvs/M3UEXAMPLE.m3u">here</a> (from <a href="https://bitmovin.com/mpeg-dash-hls-examples-sample-streams/">here</a>))


# This project uses
* hls.js
* jquery.js
* mousetrap.js


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
