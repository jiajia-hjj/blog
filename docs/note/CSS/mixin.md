---
title: _mixin.scss
tags:
  - CSS
categories:
  - CSS
---

```scss
//keyframes
@mixin keyframes($name) {
  @-webkit-keyframes #{$name} {
    @content;
  }
  @-moz-keyframes #{$name} {
    @content;
  }
  @-o-keyframes #{$name} {
    @content;
  }
  @keyframes #{$name} {
    @content;
  }
}

//transform
@mixin transform($transforms) {
  -webkit-transform: $transforms;
  -moz-transform: $transforms;
  -ms-transform: $transforms;
  -o-transform: $transforms;
  transform: $transforms;
}
@mixin transition-delay($str) {
  -webkit-transition-delay: $str;
  -moz-transition-delay: $str;
  -o-transition-delay: $str;
  transition-delay: $str;
}
@mixin transform-origin($origin) {
  -webkit-transform-origin: $origin;
  -moz-transform-origin: $origin;
  -ms-transform-origin: $origin;
  -o-transform-origin: $origin;
  transform-origin: $origin;
}
@mixin transition-timing-function($s) {
  -webkit-transition-timing-function: $s;
  -moz-transition-timing-function: $s;
  -ms-transition-timing-function: $s;
  -o-transition-timing-function: $s;
  transition-timing-function: $s;
}
//transform-rotate
@mixin rotate($deg) {
  @include transform(rotate(#{$deg}deg));
}

@mixin rotateX($deg) {
  @include transform(rotateX(#{$deg}deg));
}

@mixin rotateY($deg) {
  @include transform(rotateY(#{$deg}deg));
}

@mixin rotateZ($deg) {
  @include transform(rotateY(#{$deg}deg));
}

@mixin rotate3d($x, $y, $z, $deg) {
  @include transform(rotate3d(#{$x}, #{$y}, #{$z}, #{$deg}deg));
}

///transform-translate
@mixin translate($x, $y) {
  @include transform(translate(#{$x}, #{$y}));
}

@mixin translateX($x) {
  @include transform(translateX(#{$x}));
}

@mixin translateY($y) {
  @include transform(translateY(#{$y}));
}

@mixin translateZ($z) {
  @include transform(translateY(#{$z}));
}

@mixin translate3d($x, $y, $z) {
  @include transform(translate3d(#{$x}, #{$y}, #{$z}));
}

///transform-scale
@mixin scale($x, $y) {
  @include transform(scale(#{$x}, #{$y}));
}

@mixin scaleX($x) {
  @include transform(scaleX(#{$x}));
}

@mixin scaleY($y) {
  @include transform(scaleY(#{$y}));
}

@mixin scaleZ($z) {
  @include transform(scaleY(#{$z}));
}

@mixin scale3d($x, $y, $z) {
  @include transform(scale3d(#{$x}, #{$y}, #{$z}));
}

///transform-skew
@mixin skew($xDeg, $yDeg) {
  @include transform(skew(#{$xDeg}deg, #{$yDeg}deg));
}

@mixin skewX($deg) {
  @include transform(skewX(#{$deg}deg));
}

@mixin skewY($deg) {
  @include transform(skewY(#{$deg}deg));
}

///transform-matrix
@mixin matrix($n1, $n2, $n3, $n4, $n5, $n6) {
  @include transform(matrix(#{$n1}, #{$n2}, #{$n3}, #{$n4}, #{$n5}, #{$n6}));
}

@mixin matrix3d(
  $n1,
  $n2,
  $n3,
  $n4,
  $n5,
  $n6,
  $n7,
  $n8,
  $n9,
  $n10,
  $n11,
  $n12,
  $n13,
  $n14,
  $n15,
  $n16
) {
  @include transform(
    matrix(
      #{$n1},
      #{$n2},
      #{$n3},
      #{$n4},
      #{$n5},
      #{$n6},
      #{$n7},
      #{$n8},
      #{$n9},
      #{$n10},
      #{$n11},
      #{$n12},
      #{$n13},
      #{$n14},
      #{$n15},
      #{$n16}
    )
  );
}

//transition
@mixin transition($transition...) {
  -webkit-transition: $transition;
  -moz-transition: $transition;
  -o-transition: $transition;
  transition: $transition;
}

//animation
@mixin animation($properties...) {
  -webkit-animation: $properties;
  -o-animation: $properties;
  -moz-animation: $properties;
  animation: $properties;
}
@mixin animation-delay($s...) {
  -webkit-animation-delay: $s;
  -moz-animation-delay: $s;
  -o-animation-delay: $s;
  animation-delay: $s;
}
@mixin animation-play-state($s) {
  -webkit-animation-play-state: $s;
  -moz-animation-play-state: $s;
  -o-animation-play-state: $s;
  animation-play-state: $s;
}

@mixin animation-duration($s...) {
  -webkit-animation-duration: $s;
  -moz-animation-duration: $ss;
  -o-animation-duration: $ss;
  animation-duration: $ss;
}
//linear-gradient
@mixin linear-gradient($properties...) {
  -webkit-linear-gradient: $properties;
  linear-gradient: $properties;
}

//linear-gradient
@mixin radial-gradient($properties...) {
  -webkit-radial-gradient: $properties;
  radial-gradient: $properties;
}

//opacity
@mixin opacity($opacity) {
  opacity: $opacity;
  $o: ($opacity * 100);
  filter: Alpha(Opacity=$o);
}

//inline-block
@mixin inline-block() {
  display: inline-block;
  *display: inline;
  zoom: 1;
}

//ellipsis
@mixin ellipsis {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
@mixin cover {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
@mixin fixedCover {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
@mixin text-hide {
  font-size: 0;
  line-height: 0;
  overflow: hidden;
  text-indent: -9999px;
}

@mixin text-gradient($from, $to) {
  background-image: -webkit-gradient(
    linear,
    left top,
    left bottom,
    from($from),
    to($to)
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
@mixin dib {
  display: inline-block;
  *display: inline;
  *zoom: 1;
}

@mixin filter($s) {
  -webkit-filter: $s; /* Chrome, Safari, Opera */
  filter: $s;
}

@mixin margin-center-x($width) {
  position: absolute;
  left: 50%;
  margin-left: ($width / -2);
}

@mixin margin-center-y($height) {
  position: absolute;
  top: 50%;
  margin-top: ($height / -2);
}

@mixin margin-center($width, $height) {
  position: absolute;
  left: 50%;
  top: 50%;
  margin: ($height / -2) 0 0 ($width / -2);
}

@mixin txtline($num) {
  // 多行文本出现省略号
  display: -webkit-box; /*重点，不能用block等其他，将对象作为弹性伸缩盒子模型显示*/
  -webkit-box-orient: vertical; /*从上到下垂直排列子元素（设置伸缩盒子的子元素排列方式）*/
  -webkit-line-clamp: $num; /*行数，超出三行隐藏且多余的用省略号表示...*/
  line-clamp: $num;
  overflow: hidden;
}
```
