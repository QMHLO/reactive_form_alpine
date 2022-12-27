(function() {
  jQuery(document).ready(function(){
	var souzokunin = parseInt(jQuery("#souzokunin").val());
	var haigusha = parseInt(jQuery(".haigusha:checked").val());
	if ((souzokunin < 2 && haigusha == 1) || isNaN(souzokunin)) {
	  jQuery(".zokugara").attr("checked", false);  
	  jQuery(".zokugara").attr("disabled", "disabled");	  
	} else {

	  jQuery(".zokugara").removeAttr("disabled");
	}
	jQuery("#souzokunin").bind("input change", function(e){
	  e.preventDefault();
	  souzokunin = parseInt(jQuery(this).val());
	  haigusha = parseInt(jQuery(".haigusha:checked").val());
	  if ((souzokunin < 2 && haigusha == 1) || isNaN(souzokunin)) {
		jQuery(".zokugara").attr("disabled", "disabled");
		jQuery(".zokugara").attr("checked", false);  
	  } else {
		jQuery(".zokugara").removeAttr("disabled");	  
	  }
	});

	jQuery(".haigusha").bind("input change", function(e){
	  e.preventDefault();
	  souzokunin = parseInt(jQuery("#souzokunin").val());
	  haigusha = parseInt(jQuery(".haigusha:checked").val());
	  if ((souzokunin < 2 && haigusha == 1) || isNaN(souzokunin)) {
		jQuery(".zokugara").attr("disabled", "disabled");
		jQuery(".zokugara").attr("checked", false);  
	  } else {
		jQuery(".zokugara").removeAttr("disabled");	  
	  }
	});

  });
})();