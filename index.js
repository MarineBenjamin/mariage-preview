let previousX = document.body.clientWidth;
let previousY = document.body.clientHeight;


function window_resize_event_handler()
{
    let x = window.innerWidth;
    let y = window.innerHeight;

	if(y > x) // Smartphone
	{
		layer1.set_width(x + "px");
		layer2.set_width(0.9*x + "px");
		layer3.set_width(x + "px");
		layer4.set_width(x + "px");	
		layer5.set_width(x + "px");	
		
		document.body.style.overflowX = "hidden";

		layer1.set_height(x*0.375 + "px");

		

		layer2.set_top(parseInt(layer1.top(), 10) + parseInt(layer1.height(), 10) + "px");
		layer2.set_height(0.2*y + "px");

		layer3.set_top(parseInt(layer2.top()) + parseInt(layer2.height()) + "px");
		let style = getComputedStyle(Layer3BrunchTextCore.element());
		layer3.set_height( parseInt(style.top,10) + parseInt(style.height,10) + 20 + "px");

		layer4.set_top( parseInt(layer3.top(), 10) + parseInt(layer3.height(), 10) + 0.06*y + "px");
		layer4.set_height( Math.max(0.15*y, 144) + "px");
		
		layer5.set_top( parseInt(layer4.top(), 10) + parseInt(layer4.height(), 10) + 0.05*y + "px");
		layer5.set_height( Math.max(0.15*y, 144) + "px");		
	}
	else
	{
		if(x < 1280) 
		{ 
			//layer1Buttons.set_width("1152px");
			layer1.set_width("1280px");
			layer2.set_width(0.9*1280 + "px");
			layer3.set_width("1280px");
			layer4.set_width("1280px");
			layer5.set_width("1280px");
			
			document.body.style.overflowX = "scroll";

		}
		else
		{
			//layer1Buttons.set_width(0.9*x + "px");
			layer1.set_width(x + "px");
			layer2.set_width(0.9*x + "px");
			layer3.set_width(x + "px");
			layer4.set_width(x + "px");	
			layer5.set_width(x + "px");	
			
			document.body.style.overflowX = "hidden";
		}



		if(y < 720)
		{
			//layer1Buttons.set_height("72px");

			//layer1.set_top("72px");
		}
		else
		{
			//layer1Buttons.set_height(0.1*y + "px");
			//layer1.set_top(0.1*y + "px");		
		}

		layer1.set_height(x*0.375 + "px");

		

		layer2.set_top(Math.max(parseInt(layer1.top(), 10) + parseInt(layer1.height(), 10), 72) + "px");
		layer2.set_height(Math.max(y - parseInt(layer2.top()), 144) + "px");

		layer3.set_top(Math.max(parseInt(layer2.top()) + parseInt(layer2.height()), y) + "px");
		let style = getComputedStyle(Layer3BrunchTextCore.element());
		layer3.set_height( parseInt(style.top,10) + parseInt(style.height,10) + 20 + "px");

		layer4.set_top( parseInt(layer3.top(), 10) + parseInt(layer3.height(), 10) + 0.03*y + "px");
		layer4.set_height( Math.max(0.15*y, 144) + "px");
		
		layer5.set_top( parseInt(layer4.top(), 10) + parseInt(layer4.height(), 10) + 30 + "px");
		layer5.set_height( Math.max(0.15*y, 144) + "px");
	}


}


window.addEventListener("resize", window_resize_event_handler);
window_resize_event_handler();
