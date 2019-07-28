# goTrip

One page application to help user to search and select next trip destination, searching for hotels, restaurant, and museums in the selected city.

This project is part of code Institute Interactive Frontend Development Milestone Project.

## UX:
The website is for whom wish to lookup for a holiday distention to visit, and search that city for hotels, restaurant, and museums. website user will have an option to select multi countries from drop down menu, and enter a city name in the search bar to find their destination. After selecting the city, user can have three option to look in that city. Search results can show the user a list of the type of search. By clicking on one of the search places or by clicking on the place icon, the user will have more information as Name, address, phone, rating, and website.

## Website visitor goal:
Helping users to plan their next holidays. User will find two visible bars as soon as they land to the page. This will help the user to select county from dropdown menu, and search for a city in that country. Page view port will scroll down to the map view port, to notify the user that the search results is on the map. By default, the results will be including hotels in that city, with two more option to change the search results. Helping the user to plan and find information about their destination is the key goal.

## Ideal User:
* Holiday search.
* Planning for holidays.
* Search for places.

## User Stories:
* Holidays background for holidays inspiration with goTrip logo.
* Quick Search bar by drop down menu for countries and autocomplete search for cities.
* By entering a city, animate view port to the map, for the user start exploring.
* Search at the destination of hotels, places to eat & drink and places to visit.
* Display more info about the place of interest, by clicking directly on the place icon on the map or on the right column of the search results, on landscape and desktop results will be located on the right of the map, on screens less than 992px like tablets and phones, results will display under the map with 100% width.
* In the display information, user can view, name of the place, address, phone number, rating, and website hyperlink.

## Wireframe mockups:
* First page: Screen < 992px (Mobile and Tablet).

* Second page: Screen >= 992px (landscape Tablet and Desktop)

[Wireframe mockups](https://github.com/Tariqalrehily/goTrip/blob/master/goTrip_Mockups.pdf)

## Features:

goTrip is a single page application with number of features used to build it.

The land page has 40% view port background, the background image has sea view to indicate to the user holiday separate. On the centre of the background image, goTrip logo is display at the central.

The primary feature of this one page application, is using google map places API. The map is set on Ireland as default country for search, user can select other countries for search from the drop down menu or all if the lookup country is not in the drop down menu. Countries which are available in the drop down menu are: Australia, Brazil, France, Germany, Mexico, New Zealand, Italy, South Africa, Spain, Portugal, USA, United Kingdom, and Ireland. After user select the country, the Map view will be zoomed to that county, and than user can enter a city from the selected country, to start exploring.

Using jQuery, when the user fill city bar search, the page scroll down to map view port, and user can start exploring by selecting one of the three radio buttons option.

More information about the place can be view by clicking directly to the drop icon on the map or from the search results by click on the place name.

## Features Left To Implement:
* More search options.
* Search summary.
* Send trip search summary to the user email.

## Technologies Used:
* HTML5
* CSS3
* Javascript
* jQuery
* google map places API

## Testing

### Full width background and Logo:
Background was giving 100% width, and the logo was center by using flex box. By giving relative position to the background and absolute position ti the logo div, logo is responsive at the center of the background image cross all screen sizes. This was done by testing it on different screen sizes.

### Country search and City search:
Two search bars, for the convince for the user, the first search bar on the left is a drop down menu, where the user can select some countries and if is not one of those countries user can select all. I implemented this by select tag in HTML 5, style it in CSS 3, and JavaScript function setAutocompleteCountry, by using if and else condition, if the user selected all map will be zoom at 2 to show the user the world map, else, bring the map view to the selected country. In style.css I used flex box. After, on the right is the city search bar, user promoted to enter a city, this was done by using autocomplete, by creating the autocomplete object and associate it with the UI input control, also restrict the search to the default country, and to place type "cities". By using jQuery, on city bar change, the view port will scroll down to bing documentById to the element with the ID map by using offset top.

### Type of search:
1. Hotel (Places to stay - checked)
2. Restaurant (Eating and Drinking)
3. Museums (Things to Do).

First option for the user to search is by hotels, this was done by radio button. Google search function in map.js file, will get the checked radio button to the types results, I used
```
[document.querySelector('input[type = radio]:checked').value]
```
When the user enter a city and when the page scroll down to the map id element, hotels will be the results as the radio button is checked in html file.

### Map and Results:
Map is set to Dublin, Ireland. User can change it easily by change the country and entering a city. By using Google Map places API and Documentations, I implement google places to my app. [documentation link](https://developers.google.com/maps/documentation/javascript/examples/places-autocomplete-hotelsearch). By addResult function in map js file, the results will be display as a table, with two colors '#F0F0F0' : '#FFFFFF'.
showInfoWindow function is to display the place details, show the information in an info window, anchored on the marker for that place. buildIWContent function will help to Load the place information into the HTML elements used by the info window, information like url, address, and phone. For the phone, if the place has phone info format get it and assign it to iw-phone in HTML element. For the place rating, for loop was used to determine the hotel rating and fill it by using a black stars if place has earned that star or a white star for the rating points not achieved. Finally, to give the user ability to have more information about that place and for more reading, Website URL is included in the information of the place. if the the place has a website get element by id (iw-website) and assign the website to html element.  

### Code Testing:
* HTML: I ran html code on w3 html validator, resulting in error of radio button, as there were values per button, fixing this to one value. No other errors.

* CSS: shows no errors.

* Atom: I used Atom as code editor for macOS, by using atom live server  package, I had live view on my application progression, Local Server: http://127.0.0.1:3000/

* Chrome Dev Tools: I used Chrome Tools to run test my code and debugging it. I had bug where I was calling google places API, error message(Oops! Something went wrong. This page didn’t load Google Maps correctly. See the JavaScript console for technical details.) as I had restrict the HTTP access to local server 127.0.0.1. I than added https://tariqalrehily.github.io/goTrip/

Browsers: I used google chrome and safari.

### Devices Tested:
* Galaxy s5
* Pixel 2
* Pixel 2 XL
* iPhone 5/SE
* iPhone 6/7/8
* iPhone 6/7/8 Plus
* iPhone X
* iPad
* iPad Pro
* Desktop

### Debugging:
* I had an error when I Oops! Something went wrong. This page didn't load Google Maps correctly. See the JavaScript console for technical details.
I had this problem when going live on github pages, the map had worked on my development site, so this was a surprise to me. According to Google Maps documentation for different error codes [here](https://developers.google.com/maps/documentation/javascript/error-messages#deverrorcodes) The above error code is described in the documentation as the current URL loading the Google Maps JavaScript API has not been added to the list of allowed referrers. Please check the referrer settings of your API key on the Google API Console. I solved this by regenerating a new key in a new project on google console, however, this could also be fixed by adding the site URL to the API credentials website restrictions.

* On screen < 992px, I have given the controls div margin top 16px, but on screen >= 992 I had problem where the two search bars divs (controls and locationField) had different margin top. By setting controls div to margin top to 0 on screen >= 992 problem it's solved.

### User Tests:
I sent the live web page to some of my friends to have their feedback, they had no major feedback to implement.

## Deployment

### To Github:
1. Create a new repository on GitHub. To avoid errors, I did not initialize the new repository with README, license, or gitignore files. I added these files after my project has been pushed to GitHub.
2. Open Terminal on MacBook Pro.
3. Change the current working directory to my local project.
4. Initialize the local directory as a Git repository, by:
  ```
  git init
  ```
5. Added the files in my new local repository. This stages them for the first commit, by:
```
$ git add fileName
```
6. Commit the files that I have staged in my local repository, by:
```
$ git commit -m "First commit"
```
7. At the top of my GitHub repository's, I copy the remote repository URL.
8. In Terminal, added the URL for the remote repository where my local repository will be pushed, by:
```
$ git remote add origin remote https://github.com/Tariqalrehily/goTrip.git
```
9. Push the changes in my local repository to GitHub Master branch, by:
```
$ git push -u origin master
```

* After, I will do this to commit and push my projects changes and keep my GitHub repository up to date.
* By using Github Pages which is designed to host my project pages from a Github repository, I published my site at [goTrip](https://tariqalrehily.github.io/goTrip/).

### From Github:
* To run this one page app locally:
1. On GitHub, navigate to the main page of the repository.
2. Under the repository name, click Clone or download.
3. In the Clone with HTTPs section, click  to copy the clone URL for the repository.
4. Open Terminal.
5. Change the current working directory to the location where you want the cloned directory to be made.
6. Type git clone, and then paste the URL you copied in Step 2. URL (https://github.com/Tariqalrehily/goTrip.git)
7. Press Enter. Your local clone will be created.

## Credit:
1. Center content (e.g logo, footer): from [W3.org](https://www.w3.org/Style/Examples/007/center.en.html)
2. Picking colors values: from [htmlcolorcodes.com](https://htmlcolorcodes.com/color-picker/)
3. Google Map Api error solution: by referring to [stackoverflow.com](https://stackoverflow.com/questions/2769148/whats-the-api-key-for-in-google-maps-api-v3)

## Media:
1. Background image: from Pexels.com by [Pixabay](https://www.pexels.com/photo/scenic-view-of-beach-248797/)
2. code: [Google Documentation](https://developers.google.com/maps/documentation/javascript/examples/places-autocomplete-hotelsearch)

## Acknowledgement:
* To my mentor Anthony Ngene provided me with useful links such as using [Trello](https://trello.com/b/E5MA5w4f/gotrip).

## Disclaimer:
* The materials on goTrip website is currently for educational and entertainment purposes only.  
