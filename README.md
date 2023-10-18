This repo contains a website displaying The Memes collection.

## Structure
```
/raw

site/
│
├── index.html            # Main HTML file
├── css/
│   └── styles.css
│
├── images/               # Directory for images (empty)
│   ├── /ui               # Images for UI elements
│        └── ...
│
├── js/                   # Directory for JavaScript files
│   └── script.js
``` 


## Generating the data files
The listing is generated from json files stored in /data.
The json data files are custom generated to reduce file size. To generate the optimised json files, place a set of raw project json files in /raw and run the datamanipulator.py script. Once this script has been run successfully, the /site/data directory will contain the optimised json files and the /raw directory can be deleted.

## Images
Two different types of images are used on the website; thumbnails and full-res images. The full-res images are only shown for projects where the description is really long (> 140 chars). In that case, a "more" button appears which on clicking presents a modal. In the modal the full-res image is shown.

The thumbnail images are lazy loaded (only requested when scrolled into view).

Both sets of images are hosted on external CDNs, the urls of which are sourced from the json files.

UI images are stored in /site/images/ui note that small svg files are inlined in the /js/script.js file to reduce network requests.

[HiroP](https://x.com/_001)