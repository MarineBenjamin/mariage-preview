class ScrollableElement extends Element
{
  #_scrollableContainerContent = null;
  #_scrollbarElement = null;
  #_scrollbarFillElement = null;
  #_maxHeight = 0
  constructor(name)
  {
    super(name);

    this.set_position("relative");
    this.set_height("100%");
    this.set_width("100%");
    this.set_overflowY("visible");
    this.set_overflowX("hidden");


    this.#_scrollbarElement = new Element(DIV);
    this.#_scrollbarElement.set_opacity("0.5");
    this.#_scrollbarElement.set_zIndex("1");
    this.#_scrollbarElement.set_position("absolute");
    this.#_scrollbarElement.set_right("0px");
    this.#_scrollbarElement.set_top("0px");
    this.#_scrollbarElement.set_width("5px");
    this.#_scrollbarElement.set_height(this.height());
    this.#_scrollbarElement.set_background("#FF0000");
    this.#_scrollbarElement.set_parent(this);

    this.#_scrollbarFillElement = new Element(DIV);
    this.#_scrollbarFillElement.set_opacity("1");
    this.#_scrollbarFillElement.set_zIndex("2");
    this.#_scrollbarFillElement.set_position("absolute");
    this.#_scrollbarFillElement.set_right("0px");
    this.#_scrollbarFillElement.set_top("0px");
    this.#_scrollbarFillElement.set_width("5px");
    this.#_scrollbarFillElement.set_background("#FFFFFF");
    this.#_scrollbarFillElement.set_parent(this);

    this.#_scrollbarContentContainer = new Element(DIV);
    this.#_scrollbarContentContainer.set_boxSizing("content-box");
    this.#_scrollbarContentContainer.set_width("100%");
    this.#_scrollbarContentContainer.set_height("100%");
    this.#_scrollbarContentContainer.set_overflowY("scroll");
    this.#_scrollbarContentContainer.set_overflowX("hidden");
    this.#_scrollbarContentContainer.addEventListener("scroll", this.updateScrollbaFillPosition.bind(this));
    this.#_scrollbarContentContainer.set_parent(this)
  }

  updateScrollbaFillPosition($event)
  {
    let boxSize = Number(this.height().substring(0, this.height().length - 2))
    let translationValue = boxSize * ( $event.target.scrollTop / this.#_maxHeight )
    let translation = String(translationValue) + "px";
    this.#_scrollbarFillElement.set_transform("translate3d(0px," + translation + ", 0px)");
  };

  add_content(element)
  {
    element.set_parent(this.#_scrollbarContentContainer)
    let children = this.#_scrollbarContentContainer.children_element();
    for(let i=0; i < children.length; i++)
    {
      let childHeight = children[i].style.height;
      let height = Number(childHeight.substring(0, childHeight.length - 2))
      if(height > this.#_maxHeight) { this.#_maxHeight = height; }
    }

    let scrollbarFillElementHeight = 100 * (Number(this.height().substring(0, this.height().length - 2)) / this.#_maxHeight)
    this.#_scrollbarFillElement.set_height(String(scrollbarFillElementHeight) + "%")
  }

}
