let   _mainElement = document.querySelector('.slider'), // основный элемент блока
_sliderTrack = _mainElement.querySelector('.slider__track'), // обертка для .slider-item
_sliderItems = _mainElement.querySelectorAll('.slider__item'), // элементы (.slider-item)
_sliderTrackWidth = parseFloat(getComputedStyle(_sliderTrack).width)+2*parseFloat(getComputedStyle(_sliderTrack).marginLeft), // ширина обёртки
_itemWidth = parseFloat(getComputedStyle(_sliderItems[0]).width)+2*parseFloat(getComputedStyle(_sliderItems[0]).marginLeft), // ширина одного элемента    
_positionLeftItem = -3, // позиция левого активного элемента
move = 0, // значение транфсофрмации .slider_wrapper
_step = _itemWidth, // величина шага (для трансформации)
_items = []; // массив элементов
//console.log(_mainElement);
// наполнение массива _items


_sliderItems.forEach(function (item, index) {
_items.push({ item: item, positiond: index, transform: 0 });
});
console.log('_sliderTrackWidth='+_sliderTrackWidth);
//console.log(_items);
let positiond;
let position = {
getItemMin: function () {
  let indexItem = 0;
  _items.forEach(function (item, index) {
    if (item.positiond < _items[indexItem].positiond) {
      indexItem = index;
    }
  });
  return indexItem;
},
getItemMax: function () {
  let indexItem = 0;
  _items.forEach(function (item, index) {
    if (item.positiond > _items[indexItem].positiond) {
      indexItem = index;
    }
  });
  return indexItem;
},
getMin: function () {  return _items[position.getItemMin()].positiond; },
getMax: function () {  return _items[position.getItemMax()].positiond;}
}

function moveItem (direction) {
let i;
if (direction == 'right') {
  _positionLeftItem++;
  if ((_positionLeftItem + _sliderTrackWidth / _itemWidth - 1) > position.getMax()) {
    i = position.getItemMin();
    _items[i].positiond = position.getMax() + 1;
    _items[i].transform += _items.length * _itemWidth;
    console.log(`_positionLeftItem=`+_positionLeftItem);
    console.log(`_items[${i}].transform=`+_items[i].transform);
    _items[i].item.style.transform = 'translateX(' + _items[i].transform + 'px)';
  }
  move -= _step;
}
if (direction == 'left') {
  _positionLeftItem--;
  if (_positionLeftItem < position.getMin()) {
    i = position.getItemMax();
    _items[i].positiond = position.getMin() - 1;
    _items[i].transform -= _items.length * _itemWidth;
    console.log('_positionLeftItem='+_positionLeftItem);
    console.log(`_items[${i}].transform=`+_items[i].transform);
    _items[i].item.style.transform = 'translateX(' + _items[i].transform + 'px)';
  }
  move += _step;
}
console.log('move='+move);
_sliderTrack.style.transform = 'translateX(' + move + 'px)';
}
function dott1(){_sliderTrack.style.transform = `translateX(0px)`;}
function dott2(){_sliderTrack.style.transform = `translateX(-810px)`;}
function dott3(){_sliderTrack.style.transform = `translateX(-1620px)`;}