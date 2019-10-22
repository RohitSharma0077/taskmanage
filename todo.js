


// ========================== feed 1 =======================================================

$(document).ready(
  function(){
    $('#buttonfeed1').click(
      function(){
        var toAdd = $('input[name=ListItem1]').val();

        if(toAdd=='')
        {
          alert('Input Something !!!');
        }

        else{
         $('#ol1').append('<li id="feedadd1">' + toAdd + '</li>');
       }

     });

    $("input[name=ListItem1]").keyup(function(event){
      if(event.keyCode == 13){
        $("#buttonfeed1").click();
      }         
    });

    $(document).on('dblclick','#feedadd1', function(){
      $(this).toggleClass('line-through').fadeOut('slow');    
    });


    $('input').focus(function() {
      $(this).val('');
    });

  }
  );

// ============================ feed2 =======================================

$(document).ready(
  function(){
    $('#buttonfeed2').click(
      function(){
        var toAdd = $('input[name=ListItem2]').val();

        if(toAdd=='')
        {
          alert('Input Something !!!');
        }

        else{
         $('#ol2').append('<li id="feedadd2">' + toAdd + '</li>');
       }

     });

    $("input[name=ListItem2]").keyup(function(event){
      if(event.keyCode == 13){
        $("#buttonfeed2").click();
      }         
    });

    $(document).on('dblclick','#feedadd2', function(){
      $(this).toggleClass('line-through').fadeOut('slow');    
    });


    $('input').focus(function() {
      $(this).val('');
    });

  }
  );

  //============================ feed 3 ========================== 

  $(document).ready(
    function(){
      $('#buttonfeed3').click(
        function(){
          var toAdd = $('input[name=ListItem3]').val();

          if(toAdd=='')
          {
            alert('Input Something !!!');
          }

          else{
           $('#ol3').append('<li id="feedadd3">' + toAdd + '</li>');
         }

       });

      $("input[name=ListItem3]").keyup(function(event){
        if(event.keyCode == 13){
          $("#buttonfeed3").click();
        }         
      });

      $(document).on('dblclick','#feedadd3', function(){
        $(this).toggleClass('line-through').fadeOut('slow');    
      });


      $('input').focus(function() {
        $(this).val('');
      });

    }
    );

// ================================= Feed back displays ================================

function feed1() {


  // document.getElementById('col1').style.padding='50px 20px';

  var person = prompt("Please Enter Title Of TaskList", "Task");
  if (person != null) {
    document.getElementById('col1').style="display:block";
    document.getElementById('col1').style.background='#f19066';
    document.getElementById("feedid").innerHTML ="Task Title: "+person;


    document.getElementById('addbtn1').style="display:none";
    document.getElementById('addbtn2').style="display:block";
    document.getElementById('txtcontainer').style="display:none";
  }

}

function feed2() {

  var person = prompt("Please Enter Title Of TaskList", "Task");
  if (person != null) {
    document.getElementById('col2').style="display:block";
    document.getElementById('col2').style.background='cyan';
    document.getElementById("feedid1").innerHTML ="Task Title: "+person;
    

    document.getElementById('addbtn1').style="display:none";
    document.getElementById('addbtn2').style="display:none";
    document.getElementById('addbtn3').style="display:block";
  }

}

function feed3() {


  var person = prompt("Please Enter Title Of TaskList", "Task");
  if (person != null) {
    document.getElementById('col3').style="display:block";
    document.getElementById('col3').style.background='#778beb';
    document.getElementById("feedid2").innerHTML ="Task Title: "+person;



    document.getElementById('addbtn1').style="display:none";
    document.getElementById('addbtn2').style="display:none";
    document.getElementById('addbtn3').style="display:none";
    document.getElementById('addbtn4').style="display:block";
  }

}

