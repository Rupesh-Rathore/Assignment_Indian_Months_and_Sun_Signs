# Assignment_Indian_Months_and_Sun_Signs
A web-based project that displays Indian months and Indian sun signs with an interactive UI, supporting Hindi and English.

# DAY 1 :
  * Started the project by properly reading and understanding the given assignment.
  * The whole project revolves around 2 topics-
      1-The Indian Months(Hindu Nakshtra)
      2-The Indian Sun Signs(Hindu Rashi)
  * To build this project I needed to first know about these two topics and for that i did the research to find information about indian months and Indian suns signs.
    What does thse months and sunsigns signifies , which information is relevent and which is not , what to include and what to not.
  * Planed a basic structure to start creating this website.
  * Analyzed Species in pieces to get an inspiration and ui design to create the website.

# DAY 2 :
 * Stared creating the code of the website/assignment-project.
 * Firstly created a html file -"index.html" which contains the basic code of the home page of the website. For now this page contains the name of the website , drop down to select the language , two buttons to navigate to the next page of the website .
     * On clicking the left button it navigates you to next web page - "months.html" which contains all the details about Indian months.
     * On clicking the right button it navigates you to next web page - "zodiac.html"which contains all the details about Indian Sun-signs/Zodiacs.
 * Secondaly created another html file -"months.html" which will contain all the Indian months and their details but for now it only contains a button which helps to navigate back to home page.
 * Thirdly created another html file -"zodiac.html" which will contain all the Indian Sun-signsodiacs and their details but for now it only contains a button which helps to navigate back to home page.
 * At last created a javascript file -"script.js" to navigate from one web page to another on clicking the buttons.
   for now thats all i did .

# DAY 3 :
 * Firstly completed the code of "index.html" which displays the home page of the website. It contains name of the website , dropdown button changed to two button method to select the language -English/Hindi , two blocks to navigate to next pages.
 * Secondaly changed the name of "months.html" to "month.html"
    * Completed the code of "month.html".
 * Thirdly Completed the code of "zodiac.html".
 * Created a follder named "data".
    * Added "month.json" file containing months details.
    * Added "month.json" file containing months details.
 * Created a folder "js" and moved the "script.js" to it .
    * Completed the code of "script.js".
    * Created a "month.js" file inside "js" and completed its code which helps to manipulate "month.html" and fetch data from it.
    * Created a "zodiac.js" file inside "js" and completed its code which helps to manipulate "zodiac.html" and fetch data from it.
      
# DAY 4 :
 * Firstly done research on Indian Months and Indian Sun-Signs/Zodiacs and found importain details about them.
 * Using Some tools like -
    * AI - "DeepSeek" and "Gemini"
    * Google
    * Websites like "drikpanchang.com", "exoticindiaart.com" , etc
      found relevent ,precise and breif details abount Indian Months and Indian Sun-Signs/Zodiacs.
 * Most of the data found was in "English" and to get data in "Hindi" , translated the english data using ai tools.
 * With this "English" and "Hindi" data created two "json" files -
    * "months.json" contains details about the months.
    * "zodiacs.json" contains details about the sun-signs/zodiacs.
 * Half way through generating images for representing months and zodiacs.
 * Half way through completing the style (CSS) of the website but will not be updating on github today.
   for now thats all i did.

# DAY 5 :
 * Started thw work by running all the html file again and again to find bugs, UI distortions and what could be improved ,and their were a lot -
    * First of all website was looking too bland .
    * Second - a 'bug' which was , that on clicking on cards/blocks( months/zodiacs ) the card that opens up was not scrollable, meaning that if a card has a preety good amount of content then to see the content that is not being displayed you have to scroll the card and card was not scrolling at all.
    * Third - a 'new bug' was introduced when the previous bug was taken care of -
       * Now card was scrollable but iisue was that background/webpage was being scrolled too and it led to disappearance of card.
    * Fourth - after solving the 'second' bug it led to a new bug - Every thing was fine for first 'three' card when clicking on them the card opened up and you could see the details but for the cards on the lower side , card was being opened on the top of the webpage and you had to manually scroll back to top to see the details it was not scrolling back to it on its own.
    * Fifth - when I was trying to solve 'third' a new inconvenience was encountered that on clicking the lowwer cards it was still being opened on top of the webpage but now the window was being freezed too.

 * Solved all these bugs by tuning script.js, month.js, zodiac.js and style.css -
    * Updated some of the functions in javaScript files. functions like -
       * "setupmodal","openmodal"
    * Added some functions to javaScript files. functions like -
       * "closemodal"
    * Some more tuning using css.
 * To improve the quality of website and create a visually appealing website updated "style.css" file by -
   * Changed the color scheme from solid to gradient.
   * Added animations like -
      * Hover effect to cards.
      * Clicking transition.
      * card opening transition.
      * page changing transition.
   * Added shadows to many elements like -
      * Header.
      * Cards.

# DAY 6 :
 * Problem Identification & Solution Implementation:
   * Identified language switching issue where the <h2> heading wasn't translating to Hindi.
   * Implemented a JavaScript solution without modifying existing JSON files.
   * Created a translations object with English/Hindi versions of the heading text:
      const translations = { english: { monthsTitle: "Indian Months" }, hindi: { monthsTitle: "भारतीय महीने" }};
 * code Modifications:
  * Initialization:
   * Updated initializePage() to set correct heading text on first load.
   * Used localStorage to maintain language preference consistency.
  * Language Switching:
   * Enhanced changeLanguage() function to:
    * Update the <h2> text dynamically.
    * Maintain all existing functionality (dark mode, etc.).
    * Preserve the clean DOM structure without adding extra HTML elements.
  * Event Handling:
   * Maintained existing button click handlers.
   * Added seamless heading updates during language toggles.
 * Key Improvements:
  * Achieved complete UI translation without backend/JSON changes.
  * Maintained clean code architecture.
  * Added scalable translation structure (can easily add more phrases).
  * Preserved all existing functionality (dark mode, etc.).
 * Testing Considerations:
  * Verified heading updates properly on:
   * Initial page load.
   * Language switches.
   * Page refreshes.
   * Across different viewport sizes.
  * Confirmed dark mode works independently.
  * Checked localStorage persistence.
 * Updated both the json files by adding more relevent data.
 * Updated css file.
 * Updated Script files.

# DAY 7 :
 * Firstly generated all the immages of months and indian sun signs from scratch again to have more relevent and mythologicaly correct images.
 * Updated the data in months.json file and zodiacs.json file to have more relevent and mythologicaly correct data.
 *  Code Improvements:
   * Created reusable CSS class .modal-text-shine.
   * Used CSS variables for theme compatibility.
   * Added proper cleanup when modal closes.
   * Maintained existing modal functionality.
 * Testing & Debugging:
   * Verified animation works on:
   * Title (h3).
   * Description (p).
   * Events/Points (ul/li).
   * Checked cross-browser compatibility.
   * Ensured dark/light mode support.
 * Final Solution Features:
   * Smooth text shine animation on all text content.
   * Works when clicking any card.
   * Preserves original layout and styling.
   * No impact on other modal functionality.
   * Proper memory management.
 * Key Technologies Used:
   * CSS animations and transitions.
   * Pseudo-elements (::after).
   * CSS custom properties (variables).
   * Feature detection (@supports).
 * Outcome:
   * Successfully implemented the desired animation.
   * Resolved compatibility issues.
   * Maintained all existing functionality.
   * Created a maintainable solution.

With my current knowledge and time avilable this is the best i could do.
It could be a lot better and i will work on it.
