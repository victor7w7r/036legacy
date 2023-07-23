var url="https://www.googleapis.com/youtube/v3/channels?part=statistics&id=UCZLSfAQqExCQ5M3ddRhjvRg&key=AIzaSyA2puGoFf1l6aNOOJ22XydWyHi0YNYfRmk";

$.ajax({
    url: url,
    dataType: "text",
    
    success: function(data) 
    {
        var json = $.parseJSON(data);
        var subs= json.items[0].statistics.subscriberCount;
        $('#subs').attr('data-to',subs);
        $('.count-down').counter();
        $('.count1').counter();
        $('.count2').counter();
        $('.count3').counter();
        $('.count4').counter();
        new WOW().init();
  
        setTimeout(function () {
            $('.count5').counter();
        }, 3000);
    }

});

  $.fn.counter = function() 
  {
    const $this = $(this),
    numberFrom = parseInt($this.attr('data-from')),
    numberTo = parseInt($this.attr('data-to')),
      type =$this.attr('data-type'),
    delta = numberTo - numberFrom,
    deltaPositive = delta > 0 ? 1 : 0,
    time = parseInt($this.attr('data-time')),
    changeTime = 10;
    let currentNumber = numberFrom,
    value = delta*changeTime/time;
    var interval1;
    const changeNumber = () => {
      currentNumber += value;
      //checks if currentNumber reached numberTo
      (deltaPositive && currentNumber >= numberTo) || (!deltaPositive &&currentNumber<= numberTo) ? currentNumber=numberTo : currentNumber;
      this.text(parseInt(currentNumber));
      currentNumber == numberTo ? clearInterval(interval1) : currentNumber;  
    }

    interval1 = setInterval(changeNumber,changeTime);
  }
