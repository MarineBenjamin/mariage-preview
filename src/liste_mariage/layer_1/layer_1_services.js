scrollId = 0;

function scroll_down_event()
{
    scrollId = setInterval(lets_scroll, 0.1);
}

function lets_scroll()
{
    let currentY = (window.pageYOffset || document.documentElement.scrollTop) - (document.documentElement.clientTop || 0);
    let maxY = window.scrollMaxY || ( document.documentElement.scrollHeight - document.documentElement.clientHeight );                        
    console.log("current : " + currentY);
    console.log("max : " + maxY);

    scrollStep = maxY / 33;
    window.scroll(0, currentY + scrollStep);
    if(currentY >= maxY) 
    {
        clearInterval(scrollId);
    }
}