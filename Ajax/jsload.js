/*var xhttp = new XMLHttpRequest();
  xhttp.onload = function()
   {
    if (this.readyState == 4 &&this.status == 200) {
     document.getElementById("area").innerHTML = this.responseText;
    }
  };
  xhttp.open("GET", "load2.html", true);
  xhttp.send();*/


  $('document').ready(function()
  {
      //code for  load home page 
     
    $(".main").load("load3.html");
      //code for ajax working
      $('#navbar a').click(function(event)
      {
          event.preventDefault();
          var url=$(this).attr("href");

          $('.main').empty();

          //ajax code starts from here..
          $.ajax({
            type: "GET",
            url: url,
            success: function(data){
                $('.main').html(data).hide().fadeIn(1500);
            }
        });
        //ajax code ends.

          $('#navbar a').removeClass('current');    //code for setting current class
          $(this).addClass('current');

      })

      

  });








  /*$('document').ready(function()
  {
      $('#navbar a').click(function(event)
      {
          event.preventDefault();
          var url=$(this).attr("href");

          

          $('.main').empty();
          $('.main').load(url+" #area").hide().fadeIn(2000);

          $('#navbar a').removeClass('current');
          $(this).addClass('current');

      })
  });*/



