const DIV = "div";
const BUTTON = "button";
const INPUT = "INPUT";
const IMG = "img"

class Element
{
  #_element = null;

  constructor(name = DIV) 
  { 
	this.#_element = document.createElement(name); 
  }

  copy()
  {
    let element = new Element();
    element.#_element = this.#_element.cloneNode();
    return element;
  }

  /*
  * Element.
  */
  element() { return this.#_element; }
  innerHTML() { return this.#_element.innerHTML; }
  id() { return this.#_element.id; }
  class() { return this.#_element.class; }
  className() { return this.#_element.className; }
  localName() { return this.#_element.localName; }
  hidden() { return this.#_element.hidden; }
  src() { return this.#_element.src; }
  type() { return this.#_element.type; }
  value() { return this.#_element.value; }
  parent() { return this.#_element.parentNode; }
  querySelectorAll(selectors) { return this.#_element.querySelectorAll(selectors); } 

  set_element(value) { this.#_element = value; }
  set_innerHTML(value) { this.#_element.innerHTML = value; }
  set_textContent(value) { this.#_element.textContent = value; }
  set_id(value) { this.#_element.id = value; }
  set_class(value) { this.#_element.class = value; }
  set_className(value) { this.#_element.className = value; }
  set_hidden(value) { this.#_element.hidden = value; }
  set_src(value) { this.#_element.src = value; }
  set_type(value) { this.#_element.type = value; }
  set_value(value) { this.#_element.value = value; }
  set_disabled() { this.#_element.disabled = true; }
  set_enabled() { this.#_element.disabled = false; }
  set_parent(parent) { parent.element().appendChild(this.#_element); }

  /*
  */

  /*
  * Style.
  */
  width() { return this.#_element.style.width; }
  offsetWidth() { return this.#_element.offsetWidth; }
  height() { return this.#_element.style.height; }
  offsetHeight() { return this.#_element.offsetHeight; }
  position() { return this.#_element.style.position; }
  left() { return this.#_element.style.left; }
  top() { return this.#_element.style.top; }
  margin() { return this.#_element.style.margin; }
  padding() { return this.#_element.style.padding; }
  backgroundColor() { return this.#_element.style.backgroundColor; }
  border() { return this.#_element.style.border; }
  borderRadius() { return this.#_element.style.borderRadius; }
  borderColor() { return this.#_element.style.borderColor; }
  boxShadow() { return this.#_element.style.boxShadow; }
  fontFamily() { return this.#_element.style.fontFamily; }
  fontSize() { return this.#_element.style.fontSize; }
  fontWeight() { return this.#_element.style.fontWeight; }
  textAlign() { return this.#_element.style.textAlign; }
  color() { return this.#_element.style.color; }
  opacity() { return this.#_element.style.opacity; }
  visibility() { return this.#_element.style.visibility; }
  transition() { return this.#_element.style.transition; }
  outline() { return this.#_element.style.outline; }
  overflowX() { return this.#_element.style.overflowX; }
  overflowY() { return this.#_element.style.overflowY; }


  set_width(value) { this.#_element.style.width = value; }
  set_height(value) { this.#_element.style.height = value; }
  set_position(value) { this.#_element.style.position = value; }
  set_left(value) { this.#_element.style.left = value; }
  set_top(value) { this.#_element.style.top = value; }
  set_margin(value) { this.#_element.style.margin = value; }
  set_padding(value) { this.#_element.style.padding = value; }
  set_backgroundColor(value) { this.#_element.style.backgroundColor = value; }
  set_background_image(value) { this.#_element.style.backgroundImage = "url("+value+")"; }
  set_background_size(value) { this.#_element.style.backgroundSize = value; }
  set_background_repeat(value) { this.#_element.style.backgroundRepeat = value; }
  set_border(value) { this.#_element.style.border = value; }
  set_borderRight(value) { this.#_element.style.borderRight = value; }
  set_borderLeft(value) { this.#_element.style.borderLeft = value; }
  set_borderRadius(value) { this.#_element.style.borderRadius = value; }
  set_borderColor(value) { this.#_element.style.borderColor = value; }
  set_boxShadow(value) { this.#_element.style.boxShadow = value; }
  set_fontFamily(value) { this.#_element.style.fontFamily = value; }
  set_fontSize(value) { this.#_element.style.fontSize = value; }
  set_fontSizeAdjust(value) { this.#_element.style.fontSizeAdjust = value; }
  set_fontWeight(value) { this.#_element.style.fontWeight = value; }
  set_textAlign(value) { this.#_element.style.textAlign = value; }
  set_color(value) { this.#_element.style.color = value; }
  set_opacity(value) { this.#_element.style.opacity = value; }
  set_visibility(value) { this.#_element.style.visibility = value; }
  set_transition(value) { this.#_element.style.transition = value; }
  set_outline(value) { this.#_element.style.outline = value; }
  set_overflowX(value) { this.#_element.style.overflowX = value; }
  set_overflowY(value) { this.#_element.style.overflowY = value; }
  set_cursor(value) { this.#_element.style.cursor = value; }
  set_flex(value) { this.#_element.style.flex = value; }
  set_flex_direction(value) { this.#_element.style.flexDirection = value; }
  set_flex_grow(value) { this.#_element.style.glexGrow = value; }
  set_flex_flow(value) { this.#_element.style.flexFlow = value; }
  set_flex_wrap(value) { this.#_element.style.flexWrap = value; }
  set_justify_content(value) { this.#_element.style.justifyContent = value; }
  set_align_items(value) { this.#_element.style.alignItems = value; }
  set_display(value) { this.#_element.style.display = value; }
  set_verticalAlign(value) { this.#_element.style.verticalAlign = value; }
  set_zIndex(value) { this.#_element.style.zIndex = value; }
  /*
  */

  /*
  * Events.
  */
  set_functionOnClick(value) { this.#_element.onclick = value; }
  addEventListener(eventName, f)  {  this.#_element.addEventListener(eventName, f); }
  /*
  */

}
