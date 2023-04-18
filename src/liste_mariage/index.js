let previousX = document.body.clientWidth;
let previousY = document.body.clientHeight;


function window_resize_event_handler()
{
    let x = window.innerWidth;
    let y = window.innerHeight;

	if(x < 450 && y < 950) // Smartphone
	{
		
	}
	else
	{
		
		if(x < 1280) 
		{ 
			layer1.set_width("1280px");
			layer2.set_width("1280px");
			layer3.set_width("1280px");

			document.body.style.overflowX = "scroll";

		}
		else
		{
			layer1.set_width(x + "px");
			layer2.set_width(x + "px");
			layer3.set_width(x + "px");
			document.body.style.overflowX = "hidden";
		}



		/*if(y < 720)
		{
			layer1.set_top("72px");
		}
		else
		{
			layer1.set_top(0.1*y + "px");		
		}*/

		layer1.set_height(x*0.4 + "px");

		

		layer2.set_top(Math.max(parseInt(layer1.top(), 10) + parseInt(layer1.height(), 10), 72) + 0.04*y + "px");
		let style = getComputedStyle(layer2subText.element());
		layer2.set_height(parseInt(style.top) + parseInt(style.height) + 20 + "px");



		//layer3.set_top(Math.max(parseInt(layer2.top()) + parseInt(layer2.height()), y) + "px");
		style = getComputedStyle(layer2.element());
		layer3.set_top(parseInt(style.top, 10) + parseInt(style.height, 10) + 0.1*y + "px");

	}


}


window.addEventListener("resize", window_resize_event_handler);
window_resize_event_handler();
