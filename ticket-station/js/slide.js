let items = document.querySelectorAll(' .carousel-item')

items.forEach((el) => {
    const minPerSlide = 3
    let next = el.nextElementSibling
    for (var i=1; i<minPerSlide; i++) {
        if (!next) {
            // wrap carousel by using first child
        	next = items[0]
      	}
        let cloneChild = next.cloneNode(true)
        el.appendChild(cloneChild.children[0])
        next = next.nextElementSibling
    }
})


// $(document).ready(function(){
// 	$('#mydate').datepicker({
// 		todayHighlight: true,
// 		 orientation: "bottom left",
// 		 format: "mm/dd/yy",
// 		container: ".bdc"
// 		//container: console.log($(this).datepicker())
// 	});
	

// });