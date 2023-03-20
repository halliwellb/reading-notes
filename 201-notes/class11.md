# Audio, Video, and Images

## Video and Audio Content

1. The initial video and audio use was through Flash and Silverlight. These technologies had multiple security and accessibility issues. One that is mentioned on their [Wikipedia](https://en.wikipedia.org/wiki/Adobe_Flash) page is the site dumping you to whatever site page you were on prior to visiting the Flash embedded site when you hit the back button. I vaguely remember that and what I do remember was not enjoyable at all.

Today, many sites use the HTML solutions paired with JavaScript APIs to control the video and audio functionality.

2. The `src` attribute contains the path to the video that is embedded on the page. It's important to either use the `controls` element or a JavaScript API that allows users to control the video (start, stop, and volume especially).

3. `Fallback content` is a section in your HTML that will tell the user their browser will not play the video on the page and gives them a direct link to the video on an alternate page. This is important because some users are still employing old browsers that don't have full functionality.

4. `Webpage` was walking down a path on a sunny day. `Webpage` thought how great it would be to hear a cheerful bird song to enhance their enjoyment of the sunny day. Along comes `<Audio>` with a bird song, perfectly suited to the sunny day! `Webpage` was very happy and decided to film the day, including the song. A few days later it was raining and grey outside. `Webpage` wanted to relive the cheerful and sunny day to brighten their mood but didn't know how. "Knock, Knock!" Someone was at `Webpage`'s door! `<Video>` was there with the recording that `Webpage` had taken. `Webpage` was very glad to have such excellent friends as `<Audio>` and `<Video>`.

## A Complete Guide to Grid

1. `Grid` layout is two-dimensional, while `Flex` layout is one-directional. `Grid` and `Flex` work well together though.

2. `Grid container` is the direct parent of all the grid items. In other words, it holds the `grid items` which are direct descendants of the `grid container`. The `grid line` makes up the sections of the grid and can be either vertical or horizontal.

## Responsive Images

1. Developers should make responsive images for multiple reasons. As the question mentions, making the site visually appealing in a cross-platform setting is important, but so is not asking mobile users to load an image that is far too big for their screen. This slows down the load time without any benefit.

2. `Srcset` offers the browser multiple image sources and in combination with `sizes` lets the browser choose the right image based on the width of the page the user is viewing on. An example of using these would be a picture of a garden that is sized for a desktop user. We can offer the browser differently sized images to use with a smaller screen size, like a smartphone.

3. `Srcset` loads with the page's HTML and images, while JavaScript and CSS links will load after the images have started loading to save load time. Because of this, using JavaScript or CSS can cause the image to load twice, which essentially breaks the site.

[Homepage](https://halliwellb.github.io/reading-notes/)
