// ========js======
//todo event listener/let user display once vs multiple times. 
//icons
//hamburger menu/nav bar

var projectsArray = [];

function Project(rawData) {
    this.name = rawData.name;
    this.description = rawData.description;
    this.challenges = rawData.challenges;
    this.takeAways = rawData.takeAways;
    this.imgLink = rawData.imgLink;

}
//has to be called after rawData
Project.prototype.toHtml = function() {
  //to enter text i can use either of the following!
    // $('#content h3').text(this.name);
    $('#content').find('h2').text(this.name);
    $('#description').text(this.description);
    $('#challenges').text(this.challenges);
    $('#takeAways').text(this.takeAways);
  
  };


//pushing projects to the array in line 2
rawData.forEach(function(projectObject) {
    projectsArray.push(new Project(projectObject));
    console.log(projectObject);
  });






  






//   function handlePortfolioClick(event){
//     busMall.displayInfo();


// }



// ============takeaways========
//1. in order to work with event handlers you need | an function | 












//this should all be in an array/follow the 2nd pair programming lab.  then were going to do some sort of loops so that the page knows what to display when something is clicked on // also were going to need to set seperate fils of .js to keep organized.

// ======OLD CODE======
// console.log(Project);
// var cocktailPage = new Project(
//     'cocktail app',
//     //description
//     'We all get tired of the same old basic mix and some of us aren\'t to saavy to know what to mix. app helps you out by taking what you already have in your fridge and gives you ideas on new drinks you can make using what you already have at home!',
//     //challenges
//     ['1.Communication was crucial', '2.Code would often break after we pushed and made a pull request.', '3.researching how to go about functions I was in charge of and browsing through the hundreds of methods.' ],
//     //takeAways
//     ['1.You cannot build a beautiful website without any thought out prototypes.', '2. pay close attention to code when reviewing pull request and make sure not to delete anything important.', '3.Be clear on who\'s doing what within your team' ],
    
// );

// var busMall = new Project(
//     'Bus Mall',
//     //description
//     'Data analysis app that determines which pictures are most appealing to the viewer. User has to click on 1 of 3 images 15 times, which will then populate a chart of which images were the most popular.',
//     //challenges
//     ['1.Tring to figure out method of displaying 3 images at a time, without displaying the same image more than once in an instance', '2.Figuring out the math to Display a progress bar so that the user knows how many more clicks.', '3.Linking the chart like any other sytle page or script page would be easy, but the script for Bus Mall had to be tweaked in order for numbers and names of images to display properly.' ],
//     //takeAways
//     ['1.First time tapping into local storage and using JSON.', '2.First time using a library to populate the chart.(https://canvasjs.com/)', '3.Tapped into css transitions in order to enhance the feel of the website.' ],
    
// );


// var cookieStand = new Project(
//     'Cookie Stand Store',
//     //description
//     'This websites displays data for a small business running a cookie store in 6 different locations. That data persist store names, open hours and avg sale per hour.',
//     //challenges
//     ['1.Needed to figure out an algorithm which took a minimum number, maximum number and and average number of cookies in order to come up with a new number of cookies sold per hour whenvever the page is refreshed.', '2.Tables are already complex enough, figuring out how to use the DOM in order to display information with a table is another story.', '3.Provided a form for the store owner to add another store and input numbers that would populate a new table for them.' ],
//     //takeAways
//     ['1.Style guides ar an essential medium of displaying how someone else should understnad your css.', '2.DOM manipulation is how we can take websites to the next level displaying data, elements and pretty much anything that isn\'t static', '3.Tapped into css transitions in order to enhance the feel of the website.' ],
    
// );

// var quiz = new Project(
//     'Pop Quiz',
//     //description
//     'Developed and interactive quiz, which keeps track of total number of questions the user gets right.',
//     //challenges
//     ['1.How to keep track of the user score.', '2.Displaying different responses for the user depending on their answer', '3.This was my first time using a form instead of just an alert to accept user inputted information.' ],
//     //takeAways
//     ['1.InnerHTML > innerText is preffered due to security measures.', '2. The if else statemen comes in handy when providing different avenues to the script.', '3.isNaN stands for is not a number and can be used to tell the user that they can only input a number.' ],
    
// );


// =========dom handling======


// Project.prototype.displayInfo = function () {
//     //name
//     // var navHeader = document.getElementById('header');
//     // navHeader.innerHTML = this.name;
//     // navHeader.className = "projectname";
//     //description ( can only hav div1appendchchildh2 when its at the bottom but i want it to be the first child of div1 )
//     var section = document.getElementById('content');
//     var div1 = document.createElement('div');
//     var h2Description = document.createElement('h2');
//     var pDescription = document.createElement('p');
//     section.appendChild(div1);
//     div1.appendChild(h2Description);
//     div1.appendChild(pDescription);
//     h2Description.innerHTML = "DESCRIPTIONS:";
//     pDescription.innerHTML = this.description;

//     // challenges 
//     var div2 = document.createElement('div');
//     var h2Challenges = document.createElement('h2');
//     var ulChallenges = document.createElement('ul');
//     var liChallenges = document.createElement('li');
//     section.appendChild(div2);
//     div2.appendChild(h2Challenges);
//     div2.appendChild(ulChallenges);
//     console.log(this);
    
//     h2Challenges.innerHTML = "CHALLENGES:";
//     for( var i = 0; i < this.challenges.length; i++){
//         var liChallenges = document.createElement('li');
//         liChallenges.innerText = this.challenges[i];
//         ulChallenges.appendChild(liChallenges);

//     }

//     // takeaways
//     var div3 = document.createElement('div');
//     var h2Takeaways = document.createElement('h2');
//     var ulTakeaways = document.createElement('ul');
//     var liTakeAways = document.createElement('li');
//     section.appendChild(div3);
//     div3.appendChild(h2Takeaways);
//     div3.appendChild(ulTakeaways);
//     h2Takeaways.innerHTML = "TAKE AWAYS:";
//     for( var ta = 0; ta < this.takeAways.length; ta++){
//         var liTakeAways = document.createElement('li');
//         liTakeAways.innerText = this.takeAways[ta];
//         ulTakeaways.appendChild(liTakeAways);

//     }
//     //img
    

// };

// function handlePortfolioClick(event){
//     busMall.displayInfo();


// }



//===PROBLEM==
//reason i can call event listenter click with the function project display is because this thinks its calling something else. 




// $(document).ready(function) {
//     $('#main-menu li').on('click', highlightMenuItem);

// } 
// function highlightMenuItem(event){
//     $(event.target).addClass('highlight');
// }


// cocktailPage.displayInfo();
// busMall.displayInfo();
// cookieStand.displayInfo();

// var busMallLink = document.getElementById('busmall');
// busMallLink.addEventListener('click', handlePortfolioClick);

// var cocktailLink = document.getElementById('busmall');
// cocktail.addEventListener('click', cocktailPage.displayInfo);
// cocktailPage.displayInfo()


