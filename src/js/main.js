$('#popup1').popup();


// console.log("testr");
// window.onload = play();
// document.getElementById('tryAgain').addEventListener('click', () => { play() })

// function play() {
// 	var blue = '#2980b9';
// 	var l = Snap('#logo');
// 	var p = l.select('path');
//   l.clear();
// 	l.append(p);

// 	p.attr({
// 		fill: blue,
// 		stroke: '#0066CC',
// 	});

// 	setTimeout( function() {
// 		// modify this one line below, and see the result !
// 		var logoTitle = 'alticreation';
// 		var logoRandom = '';
// 		var logoTitleContainer = l.text(0, '98%', '');
// 		var possible = "-+*/|}{[]~\\\":;?/.><=+-_)(*&^%$#@!)}";
// 		logoTitleContainer.attr({
// 			fontSize: 280,
// 			fontFamily: 'Dosis',
// 			fontWeight: '600'
// 		});

// 		function generateRandomTitle(i, logoRandom) {
// 			setTimeout( function() {
// 				logoTitleContainer.attr({ text: logoRandom });
// 			}, i*70 );
// 		}

// 		for( var i=0; i < logoTitle.length+1; i++ ) {
// 			logoRandom = logoTitle.substr(0, i);
// 			for( var j=i; j < logoTitle.length; j++ ) { 
// 				logoRandom += possible.charAt(Math.floor(Math.random() * possible.length)); 
// 			}
// 			generateRandomTitle(i, logoRandom);
// 			logoRandom = '';
// 		}

// 	}, 500 );

// }


// 2 
var TxtRotate = function(el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
  };
  
  TxtRotate.prototype.tick = function() {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];
  
    if (this.isDeleting) {
      this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
      this.txt = fullTxt.substring(0, this.txt.length + 1);
    }
  
    this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';
  
    var that = this;
    var delta = 300 - Math.random() * 100;
  
    if (this.isDeleting) { delta /= 2; }
  
    if (!this.isDeleting && this.txt === fullTxt) {
      delta = this.period;
      this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
      this.isDeleting = false;
      this.loopNum++;
      delta = 500;
    }
  
    setTimeout(function() {
      that.tick();
    }, delta);
  };
  
  window.onload = function() {
    var elements = document.getElementsByClassName('txt-rotate');
    for (var i=0; i<elements.length; i++) {
      var toRotate = elements[i].getAttribute('data-rotate');
      var period = elements[i].getAttribute('data-period');
      if (toRotate) {
        new TxtRotate(elements[i], JSON.parse(toRotate), period);
      }
    }
    // INJECT CSS
    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".txt-rotate > .wrap { border-right: 0.08em solid #666 }";
    document.body.appendChild(css);
  };


  // 
  // $('.tabs').tabslet({
  //   mouseevent: 'click',
  //   attribute: 'href',
  //   animation: true
  // });
  $('.tabs').tabslet();