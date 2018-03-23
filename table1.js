$(document).ready(function(){
  $.getJSON("https://jsonplaceholder.typicode.com/users",function(data){
    var tr;
    for(var i=0;i<data.length;i++)
    {
      tr = $('<tr/>');

      tr.append("<td>"+data[i].name+"</td>");
      tr.append("<td>"+data[i].username+"</td>");
      //tr.append("<td>"+data[i].email+"</td>");
      //tr.append("<td>"+data[i].address.city+"</td>");
      $('table').append(tr);
    }
  });
});

$('.search').keyup(function(){
	var searchterm = $(this).val().toLowerCase();
    
    $(' tbody tr').each(function(){
    	var data = $(this).text().toLowerCase();
    	if (data.indexOf(searchterm)===-1) {
    		$(this).hide();
    	}
    	else
    	{
    		$(this).show();
    	}
    })
});

