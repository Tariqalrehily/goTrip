# goTrip

One page application to help user to search and select next trip destination, searching for hotels, restaurant, and museums in the selected city.

This project is part of code Institute Interactive Frontend Development Milestone Project.

## UX:
The website is for whom wish to lookup for a holiday distention to visit and search that city for hotels, restaurant, and museums. Website's users will have an option to select multi countries from the ​drop-down menu and enter a city name in the search bar to find their destination. After selecting the city, the user can have three option to look into that city. Search results will show the user a list of the places of the search type. By clicking on one of the search places or by clicking on the place icon, the user will have more information as Name, address, phone, rating, and website.

## Website design and goal:
Helping users to plan and search for their next holidays. User will find two visible bars as they land to the page. Those two bars will help the user to select counties from the dropdown menu, and search for a city in that selected country. For the convenience to the page users, page viewport will scroll down to the map viewport on change of city bar, to notify the user that the search results are​ on the map. By default, the results will be including hotels in that city, with two more options to change the search results to either restaurant or museums. Helping the user to plan and find information about their destination is the aim.

## Ideal User:
* Holidays search.
* Planning for holidays.
* Search for places.

## User Stories:
* As a visitor of the website for the first time, I want to see directly what kind of website I'm looking at.
* As a prospect, I want to see clearly what kind of services goTrip delivers. I'm expecting to see relevant information without searching through the website.
* As an IT recruiter, searching projects for clients, I want to see relevant information about services.
* As an owner, I want to use the website as a digital business. I need the website to be in line people needs, using the most recent technologies and be available for all kinds of modern devices (responsive design).

## Wireframe mockups:
I used Sketch software for Wireframe mockups, as follow:

* First page: Screen < 992px (Mobile and Tablet).
* Second page: Screen >= 992px (landscape Tablet and Desktop)

[Wireframe mockups](https://github.com/Tariqalrehily/goTrip/blob/master/goTrip_Mockups.pdf)

## Features:
* goTrip is a single page application with a number of features used to build it.

* The land page has 50% heights background, the background image has a sea view to indicate to the user holiday separate. On the center of the background image, goTrip logo is displayed at the center of the background on different screen sizes, the name of the logo and paragraph gives the user a direct indicator of the application purpose.

* The primary feature of this one-page application, is using google map places API. The map is set on Ireland as default country for search, user can select other countries for their interest from the drop-down menu or all if the country is not in the drop-down menu. Countries which are available in the drop-down menu are Australia, Brazil, France, Germany, Mexico, New Zealand, Italy, South Africa, Spain, Portugal, USA, United Kingdom, and Ireland. After the user selects the country, the Map view will be zoomed to that county, and then the user can enter a city from the selected country, to start exploring.

* Using jQuery, when the user fills city bar search, the page scroll down to map viewport, and the user can start exploring by selecting one of the three radio buttons option (Places to Stay! (hotels), Eating & Drinking! (restaurants), and Things to Do! (museums)).

* On clicking on one the three options, drop icons will show the users many places around the city on the map, also the places names are set in the table under or beside the map, depends on the user screen size.

* More information about the place can be view by clicking directly to the drop icon on the map or from the search results by click on the place name or the place icon on the table. The information is​: Name (hyperlink to google map), address, telephone, rating, and website (hyperlink to the place website).

## Features Left To Implement:
* More search options.
* Search summary, user can add their places of interest and can be sorted by dyes.
* Email, send trip search summary to the user email.

## Technologies Used:
* HTML5
* CSS3
* Javascript
* jQuery
* Google map places API

## Testing

### Full width background and Logo:
Background was giving 100% width, and the logo was center by using flex box. By giving relative position to the background and absolute position to the logo div, logo is responsive at the center of the background image across all screen sizes. This was done by testing it on different screen sizes. Below the logo, a paragraph describe to the user to find next destination and start exploring.

### Country search and City search:
Two search bars, for the user convince, the first search bar on the left is a drop-down menu, where the user can select some countries and if is not one of those countries user can select all. I implemented this by select tag in HTML 5, style it in CSS 3, and JavaScript function setAutocompleteCountry, by using if and else condition, if the user selected all map will be zoom at 2 to show the user the world map, else, bring the map view to the selected country at zoom of 15. In style.css file, I used flex box to center for small screens and side​ on larger screens. After, on the right is the city search bar, user promoted to enter a city, this was done by using onPlaceChanged function, if the city has geometry bring it the map view and call the search function on it, also restrict the search to the default country, and to place type "cities". By using jQuery, on city bar change, the view port will scroll down to bing documentById to the element with the ID map by using offset top.

### Type of search:
1. Hotel (Places to stay - checked)
2. Restaurant (Eating and Drinking)
3. Museums (Things to Do).

The first option for the user to search is by hotels, this was done by a radio button. Google search function in map.js file, will get the checked radio button to the results of the type​, I used
```
[document.querySelector('input[type = radio]:checked').value]
```
When the user enters a city and when the page scroll down to the map id element, hotels will be the default results as the radio button is checked in HTML file.

### Map and Results:
The map is set to Dublin, Ireland. User can change it easily by changing the country and entering a city. By using Google Map places API and Documentations, I implement google places to my app. [documentation link](https://developers.google.com/maps/documentation/javascript/examples/places-autocomplete-hotelsearch). By addResult function in map js file, the results will be displayed as a table, with two colors '#F0F0F0' : '#FFFFFF'.
showInfoWindow function is to display the place details, show the information in an info window, anchored on the marker for that place. buildIWContent function will help to Load the place information into the HTML elements used by the info window, information like URL, address, and phone. For the phone, if the place has phone info format get it and assign it to iw-phone in HTML element. Same for the other values. For the place rating, for loop was used to determine the hotel rating and fill it by using a black star if the place has earned that star or a white star for the rating points not achieved. Finally, to give the user ability to have more information about that place and for more reading, Website URL is included in the information of the place, where user can click on the place URL to navigate to the place website for more information in a new tab window. if the place has a website get element by id (iw-website) and assign the website to HTML element. Also, users can lookup on the place more on google map application by clicking on the display name in the place result window.

### Code Testing:
* HTML: I ran html code on w3 html validator, resulting in error of radio button, as there were values per button, fixing this to one value. No other errors.

* CSS: No Error Found.

* Javascript:
1. Map.js file:  I used jshint.com I found 5 warnings, and I have fixed them accordingly,
using dot notation instead of square-bracket notation, (countries.ie) instead of ['ie']. Some Missing semicolon in line 98, 122, and 280.

2. animate.js file: I found 1 warning which was missing semicolon in line 8.

* Atom: I used Atom as code editor for macOS, by using atom live server package, I had live view on my application progression, Local Server: http://127.0.0.1:3000/

* Chrome Dev Tools: I used Chrome Tools to run test my code and debugging it. I had bug where I was calling google places API, error message(Oops! Something went wrong. This page didn’t load Google Maps correctly. See the JavaScript console for technical details.) as I had restrict the HTTP access to local server 127.0.0.1. I than added https://tariqalrehily.github.io/goTrip/
also I had an Error message which was initMap is not a function.

* Browsers: Chrome, Safari, Firefox, and Microsoft Edge.

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
I had this problem when going live on GitHub pages, the map had worked on my development site, so this was a surprise to me. According to Google Maps documentation for different error codes [here](https://developers.google.com/maps/documentation/javascript/error-messages#deverrorcodes) The above error code is described in the documentation as the current URL loading the Google Maps JavaScript API has not been added to the list of allowed referrers. Please check the referrer settings of your API key on the Google API Console. I solved this by regenerating a new key in a new project on google console, however, this may also be fixed by adding the site URL to the API credentials website restrictions.

* Error message was initMap is not a function, I have removed calling the function in index.html file and I have added an initMap function inside $( document ).ready() at the end of maps.js file, so that the map function will only run once the page Document Object Model (DOM) is ready for JavaScript code to execute.

* On-screen < 992px, I have given the controls div margin-top 16px, but on-screen >= 992 I had a problem where the two search bars divs (controls and locationField) had different margin-top. By setting controls div to margin-top to 0 on-screen >= 992 I solved it.

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

### To Github Pages to publish the site:
1. On GitHub [goTrip repository](https://github.com/Tariqalrehily/goTrip), clicked on Settings tab.
2. Scroll down to GitHub Pages section and select master branch (or gh-pages branch)
3. Go To Website, after about 20 seconds my application site was published at [goTrip](https://tariqalrehily.github.io/goTrip/).

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
4. Google Map Places Api [documentation link](https://developers.google.com/maps/documentation/javascript/examples/places-autocomplete-hotelsearch)

## Media:
1. Background image: from Pexels.com by [Pixabay](https://www.pexels.com/photo/scenic-view-of-beach-248797/)

## Acknowledgement:
* To my mentor Anthony Ngene provided me guides and with useful links such as using [Trello](https://trello.com/b/E5MA5w4f/gotrip) to manage the project flow.

## Disclaimer:
* The materials on this application is currently for educational and entertainment purposes only.  
