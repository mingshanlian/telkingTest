let bar_index = 0;
let contentBarListItem = $('.content-bar-list').children();
let barHover = $('.content-bar-hover');

// 控制滑块移动
contentBarListItem.mouseenter((e) => {
  let item = e.target;
  let lists = Array.from(contentBarListItem);
  let thisIndex = lists.indexOf(item)
  barHover.css({
    'display': 'block',
    'width': contentBarListItem.eq(thisIndex).width() + 'px',
    'left': contentBarListItem.eq(thisIndex)[0].offsetLeft + 'px'
  });
})

// 隐藏滑块
$('.content-bar-list').mouseleave(function () {
  barHover.css('display', 'none');
})

// 点击
contentBarListItem.click((e) => {
  contentBarListItem.eq(bar_index).removeClass("content-bar-active")
  let item = e.target;
  let lists = Array.from(contentBarListItem);
  bar_index = lists.indexOf(item)
  contentBarListItem.eq(bar_index).addClass("content-bar-active")
})