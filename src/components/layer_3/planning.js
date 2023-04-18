let layer3PlanningContainer = new Element(DIV);
layer3PlanningContainer.set_id("layer3PlanningContainer");
//layer3PlanningContainer.set_backgroundColor("#A1A1A1");
layer3PlanningContainer.set_width("33.333%");
layer3PlanningContainer.set_height("100%");
layer3PlanningContainer.set_position("absolute");
layer3PlanningContainer.set_top("0px");
layer3PlanningContainer.set_left("0px");
layer3PlanningContainer.set_margin("0px 0px 0px 0px");
layer3PlanningContainer.set_padding("0px 0px 0px 0px");
layer3PlanningContainer.set_overflowX("hidden");
layer3PlanningContainer.set_overflowY("hidden");
layer3PlanningContainer.set_parent(layer3);

let layer3PlanningContainerLeftButtonImage = new Element(DIV);
layer3PlanningContainerLeftButtonImage.set_id("layer3PlanningContainerLeftButtonImage");
layer3PlanningContainerLeftButtonImage.set_backgroundColor("transparent");
layer3PlanningContainerLeftButtonImage.set_background_image(rpath + "assets/bouton_gauche.png");
layer3PlanningContainerLeftButtonImage.set_background_size("100% 100%");
layer3PlanningContainerLeftButtonImage.set_background_repeat("no-repeat");
layer3PlanningContainerLeftButtonImage.set_border("0px");
// layer3PlanningContainerLeftButtonImage.set_outline("0px");
layer3PlanningContainerLeftButtonImage.set_width("4%");
layer3PlanningContainerLeftButtonImage.set_height("10%");
layer3PlanningContainerLeftButtonImage.set_position("absolute");
layer3PlanningContainerLeftButtonImage.set_padding("0% 0% 0% 0%");
layer3PlanningContainerLeftButtonImage.set_margin("0% 0% 0% 0%");
layer3PlanningContainerLeftButtonImage.set_left("0.5%");
layer3PlanningContainerLeftButtonImage.set_top("45%");
layer3PlanningContainerLeftButtonImage.set_parent(layer3PlanningContainer);

let layer3PlanningContainerLeftButton = new Element(DIV);
layer3PlanningContainerLeftButton.set_id("layer3PlanningContainerLeftButton");
layer3PlanningContainerLeftButton.set_backgroundColor("black");
layer3PlanningContainerLeftButton.set_opacity("0");
layer3PlanningContainerLeftButton.set_width("5%");
layer3PlanningContainerLeftButton.set_height("100%");
layer3PlanningContainerLeftButton.set_position("absolute");
layer3PlanningContainerLeftButton.set_padding("0% 0% 0% 0%");
layer3PlanningContainerLeftButton.set_margin("0% 0% 0% 0%");
layer3PlanningContainerLeftButton.set_left("0%");
layer3PlanningContainerLeftButton.set_top("0%");
layer3PlanningContainerLeftButton.set_functionOnClick( layer3_planning_container_slide_left );
layer3PlanningContainerLeftButton.set_cursor("pointer");
layer3PlanningContainerLeftButton.addEventListener("mouseover", layer3_planning_container_button_mouseOver_handler);
layer3PlanningContainerLeftButton.addEventListener("mouseout", layer3_planning_container_button_mouseOut_handler);
layer3PlanningContainerLeftButton.set_zIndex("1");
layer3PlanningContainerLeftButton.set_parent(layer3PlanningContainer);

let layer3PlanningContainerRightButtonImage = new Element(DIV);
layer3PlanningContainerRightButtonImage.set_id("layer3PlanningContainerRightButtonImage");
layer3PlanningContainerRightButtonImage.set_backgroundColor("transparent");
layer3PlanningContainerRightButtonImage.set_background_image(rpath + "assets/bouton_droit.png");
layer3PlanningContainerRightButtonImage.set_background_size("100% 100%");
layer3PlanningContainerRightButtonImage.set_background_repeat("no-repeat");
layer3PlanningContainerRightButtonImage.set_border("0px");
// layer3PlanningContainerRightButtonImage.set_outline("0px");
layer3PlanningContainerRightButtonImage.set_width("4%");
layer3PlanningContainerRightButtonImage.set_height("10%");
layer3PlanningContainerRightButtonImage.set_position("absolute");
layer3PlanningContainerRightButtonImage.set_padding("0% 0% 0% 0%");
layer3PlanningContainerRightButtonImage.set_margin("0% 0% 0% 0%");
layer3PlanningContainerRightButtonImage.set_left("96%");
layer3PlanningContainerRightButtonImage.set_top("45%");
layer3PlanningContainerRightButtonImage.set_parent(layer3PlanningContainer);

let layer3PlanningContainerRightButton = new Element(DIV);
layer3PlanningContainerRightButton.set_id("layer3PlanningContainerButton");
layer3PlanningContainerRightButton.set_backgroundColor("black");
layer3PlanningContainerRightButton.set_opacity("0.0");
layer3PlanningContainerRightButton.set_width("4%");
layer3PlanningContainerRightButton.set_height("100%");
layer3PlanningContainerRightButton.set_position("absolute");
layer3PlanningContainerRightButton.set_padding("0% 0% 0% 0%");
layer3PlanningContainerRightButton.set_margin("0% 0% 0% 0%");
layer3PlanningContainerRightButton.set_left("96%");
layer3PlanningContainerRightButton.set_top("0%");
layer3PlanningContainerRightButton.set_functionOnClick( layer3_planning_container_slide_right );
layer3PlanningContainerRightButton.set_cursor("pointer");
layer3PlanningContainerRightButton.addEventListener("mouseover", layer3_planning_container_button_mouseOver_handler);
layer3PlanningContainerRightButton.addEventListener("mouseout", layer3_planning_container_button_mouseOut_handler);
layer3PlanningContainerRightButton.set_zIndex("1");
layer3PlanningContainerRightButton.set_parent(layer3PlanningContainer);

let previousIndex = -1;
let currentIndex = 0;
let nextIndex = 1;
let currentValue = 0;
let id = 0;

function layer3_planning_container_slide_right() {
    let items = layer3PlanningContainer.querySelectorAll("layer3PlanningContainerItem");
    console.log(items.length);
	if(items.length < 2 || currentIndex == items.length - 1) { return; }
	id = setInterval(layer3_planning_container_slide_right_step, 10);
	layer3PlanningContainerRightButton.set_functionOnClick();
	layer3PlanningContainerLeftButton.set_functionOnClick();
}

function layer3_planning_container_slide_right_step() {
    let items = layer3PlanningContainer.querySelectorAll("layer3PlanningContainerItem");
	currentValue -= 1;
	items[currentIndex].style.left = parseInt(currentValue,10) +"%";
	items[nextIndex].style.left = parseInt(100 + currentValue,10) +"%";

	if(currentValue == -100)
	{
		currentValue = 0;
		//items[currentIndex].style.left = "100%";
		previousIndex = currentIndex;
		currentIndex = nextIndex;
		nextIndex += 1;
		//if(nextIndex >= items.length) { nextIndex = 0; }
		clearInterval(id);
		layer3PlanningContainerRightButton.set_functionOnClick( layer3_planning_container_slide_right );
		layer3PlanningContainerLeftButton.set_functionOnClick( layer3_planning_container_slide_left );
	}
}

function layer3_planning_container_slide_left() {
    let items = layer3PlanningContainer.querySelectorAll("layer3PlanningContainerItem");
	if(items.length < 2 || currentIndex == 0) { return; }
	id = setInterval(layer3_planning_container_slide_left_step, 10);
	layer3PlanningContainerRightButton.set_functionOnClick();
	layer3PlanningContainerLeftButton.set_functionOnClick();
}

function layer3_planning_container_slide_left_step() {
    let items = layer3PlanningContainer.querySelectorAll("layer3PlanningContainerItem");
	currentValue += 1;
	items[currentIndex].style.left = parseInt(currentValue,10) +"%";
	items[previousIndex].style.left = parseInt(-100 + currentValue,10) +"%";

	if(currentValue == 100)
	{
		currentValue = 0;
		//items[currentIndex].style.left = "100%";
		nextIndex = currentIndex;
		currentIndex = previousIndex;
		previousIndex -= 1;
		//if(nextIndex >= items.length) { nextIndex = 0; }
		clearInterval(id);
		layer3PlanningContainerRightButton.set_functionOnClick( layer3_planning_container_slide_right );
		layer3PlanningContainerLeftButton.set_functionOnClick( layer3_planning_container_slide_left );
	}
}

function layer3_planning_container_button_mouseOver_handler() 
{
	layer3PlanningContainerLeftButton.set_opacity("0.3");
	layer3PlanningContainerRightButton.set_opacity("0.3");
}

function layer3_planning_container_button_mouseOut_handler() 
{
	layer3PlanningContainerLeftButton.set_opacity("0.0");
	layer3PlanningContainerRightButton.set_opacity("0.0");
}

