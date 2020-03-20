let bannerItems = ''
let bannerPic = [
  'https://via.placeholder.com/545x267',
  'https://via.placeholder.com/545x267',
  'https://via.placeholder.com/545x267',
  'https://via.placeholder.com/545x267',
  'https://via.placeholder.com/545x267'
]
let banner = $('.banner');
let SPEED = 1000;
let ITEMCOUT = bannerPic.length;
let banner_index = 0;

// 加载轮播图
for (let i = 0; i < ITEMCOUT; i++) {
  bannerItems += `<li><img src="${bannerPic[i]}" alt="实例图片" /></li>`
}
bannerItems = `<li><img src="${bannerPic[ITEMCOUT - 1]}" alt="实例图片" /></li>${bannerItems}<li><img src="${bannerPic[0]}" alt="实例图片" /></li>`


banner.find('ul').append(bannerItems)

// 轮播
function timeFun(direction) {
  banner_index = direction ? banner_index - 1 : banner_index + 1;
  $(".banner-index-active").removeClass("banner-index-active")
  if (banner_index === ITEMCOUT + 2) {
    banner.find("ul").css({
      'transition': '0s',
      'left': '-100%'
    });
    banner_index = 1;
  } else {
    banner.find("ul").css({
      'transition': 'all linear 0.3s',
      'left': -banner_index * 100 + '%'
    });
  }
  if (banner_index === ITEMCOUT + 1) {
    banner.find("ol li").eq(0).addClass("banner-index-active");
  } else {
    banner.find("ol li").eq(banner_index - 1).addClass("banner-index-active");
  }
}

let timer = setInterval(timeFun, SPEED);

// 鼠标移入
banner.mouseenter(() => {
  clearInterval(timer)
});
// 鼠标移出
banner.mouseleave(() => {
  timer = setInterval(timeFun, SPEED);
});

// 左箭头
banner.find('.banner-pre').click(() => {
  timeFun(true);
})
// 右箭头
banner.find('.banner-next').click(() => {
  timeFun(false);
})



