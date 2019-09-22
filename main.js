function getCarouselItems() {
  //   makeAjaxCall('carousel-json.json'); --> enable it while fetching data from backend
  makeThumbailItems(carouselList, 'thumb-container');
  makeSmallItems(carouselList, 'smallConatiner');
}

function makeAjaxCall(url) {
  $.ajax({
    url: url,
    type: 'get',
    success: function(result) {
      makeThumbailItems(carouselList, 'thumb-container');
      makeSmallItems(carouselList, 'smallConatiner');
    },
    error: function(error) {}
  });
}

function makeThumbailItems(response, conatinerId) {
  var mainContainer = $('#' + conatinerId);
  response.items.forEach(function(item, index) {
    var eachItem = $('<div>');
    $(eachItem)
      .attr({ 'data-slide-number': index, class: 'carousel-item' })
      .append(
        $('<div>')
          .attr('class', 'header')
          .html(item['title'])
      )
      .append(
        $('<div>')
          .attr('class', 'sort-desc')
          .html(item['sortDesc'])
      )
      .append(
        $('<img>')
        .attr({'class': 'w-100 img-fluid', 'src': item['thumbImgPath']})
      )
      .append(
        $('<div>')
          .attr('class', 'desc')
          .html(item['desc'])
      );
    if (index === 0) {
        $(eachItem).addClass('active');
    }
    $(mainContainer).append(eachItem);
  });
}

function makeSmallItems(response, conatinerId) {
  var mainContainer = $('#' + conatinerId);
  response.items.forEach(function(item, index) {
    var eachItem = $('<li>');
    $(eachItem)
      .attr({ class: 'list-inline-item' })
      .append(
        $('<a>')
          .attr({
            id: 'carousel-selector-' + index,
            'data-slide-to': index,
            'data-target': '#myCarousel'
          })
          .append(
            $('<img>').attr({
              class: 'img-fluid',
              src: item['smallImgPath']
            })
          )
      );
    if (index === 0) {
      $(eachItem).addClass('active');
      $(eachItem)
        .eq(index)
        .addClass('selected');
    }
    $(mainContainer).append(eachItem);
  });
}
getCarouselItems();
