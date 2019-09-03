

$('#code').on('click', 'div', function(){
  let path = $(this).data('type');
  // let list = $('#project-list').children();
 
  // console.log(list)
  $('.project-list').children('a').each(function( index ){
    if(this.dataset.type !== path){

    //  this.style.display = "inline";
     this.style.display = 'none';
    } else this.style.dayplay = 'grid';
  })
  

})
$(".project-list").on('click', 'a', function() {
  $('#projectSection').children().hide();
  $('#projectSection').css('display', 'block');
  let data = $(this).data('project');//takes the value of the div ex: data-project = "Bus Mall"
  // $('[data-project="' + data + '"]').show();
  
  //make a loop that goes over the data attr and matches the name of the array in order to display. 
  projectsArray.forEach(function(project) {
    if(project.name == data){
       $('#projectSection').children('[data-project="' + data + '"]').fadeIn();
      // $('#projectSection').focus();


      
    }  
  });
});

const setTakeAwayList = () => {
  const $projectsList = projectsArray.map(tAways => {
    const $TaItems = tAways.takeAways.map(ta => $('<li>').text(ta));
    const $taList = $('<ul>').append($TaItems);
    return $('<li>').append($taList);

  });
  $('.takeAways').append($projectsList);

}
















// console.log(localStorage.rawData);

$(".blogSpot").on('click', 'aside, div', function() {
    // $(this).children('p').toggleClass('notes');
    $(this).children('p, ol').slideToggle();
});


 $(".menu").click(function(){
   $("#nav img").toggleClass('icon');
 });

 //hamburger

 $(".fa-bars").on('click', function(){
  $("#nav").find('div').slideToggle("tab");
})

$("#nav").on('click', 'div', function() {
    $('.tab').slideToggle();
})










// ======old code, this was too repetitive so theres an easier way to do this======
 
 // $("#busmall").click(function() {
  //   projectsArray[1].toHtml();
    
  // });
  // $("#cocktail").click(function() {
  //   projectsArray[0].toHtml();
    
  // });
  // $("#cookiestore").click(function() {
  //   projectsArray[2].toHtml();
    
  // });
  // $("#quiz").click(function() {
  //   projectsArray[3].toHtml();
    
  // });


  // $(".menu").click(function() {
  //   $("nav img").toggleClass('icon');
    
  // });
