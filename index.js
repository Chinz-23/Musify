
    $(document).ready(function () {
        $("#carousal1").owlCarousel({
          loop: true, // Enable loop
          margin: 10, // Space between items
          nav: false, // Hide navigation buttons
          dots: true, // Show navigation dots
          autoplay: true, // Enable autoplay

          autoplaySpeed: 1000, // Adjust the speed (in milliseconds)

          responsive: {
            0: {
              items: 1, // Number of items to show on different screen sizes
            },
            600: {
              items: 3,
            },
            992: {
              items: 4,
            },
          },
          // animateOut: "fadeOut", // CSS class for the exit animation
          // animateIn: "fadeIn", // CSS class for the entrance animation
          // smartSpeed: 1000, // Transition speed in milliseconds
          autoplayTimeout: 3000, // Slide change delay
        });
    });

    $(document).ready(function () {
        $("#carousal2").owlCarousel({
          loop: true, // Enable loop
          margin: 10, // Space between items
          nav: false, // Hide navigation buttons
          dots: true, // Show navigation dots
          autoplay: true, // Enable autoplay

          autoplaySpeed: 3000, // Adjust the speed (in milliseconds)

          responsive: {
            0: {
              items: 2, // Number of items to show on different screen sizes
            },
            700: {
              items: 4,
            },
            992: {
              items: 5,
            },
          },
          
          // animateOut: "fadeOut", // CSS class for the exit animation
          // animateIn: "fadeIn", // CSS class for the entrance animation
          // smartSpeed: 1000, // Transition speed in milliseconds
          autoplayTimeout: 2500, // Slide change delay
        });
    });

      // <--I should take a stream of arrays to fetch these variables and link them but idk JS yet that is why i am creating every single variable for each song-->
      var mySong1 = document.getElementById("song1");
      var mySong2 = document.getElementById("song2");
      var mySong3 = document.getElementById("song3");
      var mySong4 = document.getElementById("song4");
      var mySong5 = document.getElementById("song5");
      var mySong6 = document.getElementById("song6");
      var mySong7 = document.getElementById("song7");
      var mySong8 = document.getElementById("song8");
      var mySong9 = document.getElementById("song9");
      var mySong10 = document.getElementById("song10");
      var mySong11 = document.getElementById("song11");
      var mySong12 = document.getElementById("song12");
      var mySong13 = document.getElementById("song13");
      var mySong14 = document.getElementById("song14");
      var mySong15 = document.getElementById("song15");
      var mySong16 = document.getElementById("song16");
      var icon1 = document.getElementById("icon-pillowtalk");
      var icon2 = document.getElementById("icon-unravel");
      var icon3 = document.getElementById("icon-ontop");
      var icon4 = document.getElementById("icon-pastlives");
      var footerIcon = document.getElementById("footerIcon");
      var footerImage = document.getElementById("footer-image")
      var footerBack = document.getElementById("footerBack")
      var footerPrev = document.getElementById("footerPrev")
      var footerForward = document.getElementById("footerForward")
      var footerNext = document.getElementById("footerNext")
      var iTag1  = document.getElementById("icon-latest1");
      var iTag2  = document.getElementById("icon-latest2");
      var iTag3  = document.getElementById("icon-latest3");
      var iTag4 = document.getElementById("icon-latest4");
      var iTag5 = document.getElementById("icon-latest5");
      var iTag6 = document.getElementById("icon-latest6");
      var iTag7 = document.getElementById("icon-latest7");
      var iTag8 = document.getElementById("icon-latest8");
      var iTag9 = document.getElementById("icon-latest9");
      var iTag10 = document.getElementById("icon-latest10");
      var iTag11 = document.getElementById("icon-latest11");
      var iTag12 = document.getElementById("icon-latest12");
      var iTag13 = document.getElementById("icon-latest13");
      var iTag14 = document.getElementById("icon-latest14");
      var iTag15 = document.getElementById("icon-latest15");
      var iTag16 = document.getElementById("icon-latest16");
     
      function stopAllSongs() {
        mySong1.pause();
        mySong2.pause();
        mySong3.pause();
        mySong4.pause();
        mySong5.pause();
        mySong6.pause();
        mySong7.pause();
        mySong8.pause();
        mySong9.pause();
        mySong10.pause();
        mySong11.pause();
        mySong12.pause();
        mySong13.pause();
        mySong14.pause();
        mySong15.pause();
        mySong16.pause();
      
        iTag1.className = "fa-solid fa-play"
        iTag2.className = "fa-solid fa-play"
        iTag3.className = "fa-solid fa-play"
        iTag4.className = "fa-solid fa-play"
        iTag5.className = "fa-solid fa-play"
        iTag6.className = "fa-solid fa-play"
        iTag7.className = "fa-solid fa-play"
        iTag8.className = "fa-solid fa-play"
        iTag9.className = "fa-solid fa-play"
        iTag10.className = "fa-solid fa-play"
        iTag11.className = "fa-solid fa-play"
        iTag12.className = "fa-solid fa-play"
        iTag13.className = "fa-solid fa-play"
        iTag14.className = "fa-solid fa-play"
        iTag15.className = "fa-solid fa-play"
        iTag16.className = "fa-solid fa-play"
      }

    
      icon1.onclick = function() {
        myFooter.style.display = "block"; // Show the footer
        footerImage.src="images/pilloqwalk latest release.jpg";
        if(mySong1.paused){
          stopAllSongs();
          mySong1.play();
          iTag1.className = "fa-solid fa-pause";
          footerIcon.className = "fa-solid fa-circle-pause";
        }else{
          mySong1.pause();
          iTag1.className = "fa-solid fa-play";
          footerIcon.className = "fa-solid fa-circle-play"
        }

        footerIcon.onclick = function () {
          if(mySong1.paused){
            mySong1.play();
            footerIcon.className = "fa-solid fa-circle-pause"
            iTag1.className = "fa-solid fa-pause";
          }
          else{
            mySong1.pause();
            footerIcon.className = "fa-solid fa-circle-play"
            iTag1.className = "fa-solid fa-play";
          }
        }

        footerBack.onclick = function() {
          mySong1.currentTime -= 10;
        }
        footerPrev.onclick = function() {
          mySong1.currentTime = 0;
        }
        footerNext.onclick = function() {
          mySong1.currentTime = mySong1.duration;
          footerIcon.className = "fa-solid fa-circle-play"
        }
        footerForward.onclick = function() {
          mySong1.currentTime += 10 ;
        }
      };

      icon2.onclick = function() {
        myFooter.style.display = "block"; // Show the footer
        footerImage.src="images/unravel latest release.jpg";
        if(mySong2.paused){
          stopAllSongs();
          mySong2.play();
          iTag2.className = "fa-solid fa-pause";
          footerIcon.className = "fa-solid fa-circle-pause";
        }else{
          mySong2.pause();
          iTag2.className = "fa-solid fa-play";
          footerIcon.className = "fa-solid fa-circle-play"
        }

        footerIcon.onclick = function () {
          if(mySong2.paused){
            mySong2.play();
            footerIcon.className = "fa-solid fa-circle-pause";
            iTag2.className = "fa-solid fa-pause";
          }
          else{
            mySong2.pause();
            footerIcon.className = "fa-solid fa-circle-play";
            iTag2.className = "fa-solid fa-play";
          }
        }

        footerBack.onclick = function() {
          mySong2.currentTime -= 10;
        }
        footerPrev.onclick = function() {
          mySong2.currentTime = 0;
        }
        footerNext.onclick = function() {
          mySong2.currentTime = mySong2.duration;
          footerIcon.className = "fa-solid fa-circle-play"
        }
        footerForward.onclick = function() {
          mySong2.currentTime += 10 ;
        }
      };

      icon3.onclick = function() {
        myFooter.style.display = "block"; // Show the footer
        footerImage.src="images/on-top latest release.jpg";
        if(mySong3.paused){
          stopAllSongs();
          mySong3.play();
          iTag3.className = "fa-solid fa-pause";
          footerIcon.className = "fa-solid fa-circle-pause";
        }else{
          mySong3.pause();
          iTag3.className = "fa-solid fa-play";
          footerIcon.className = "fa-solid fa-circle-play"
        }

        footerIcon.onclick = function () {
          if(mySong3.paused){
            mySong3.play();
            footerIcon.className = "fa-solid fa-circle-pause"
            iTag3.className = "fa-solid fa-pause";
          }
          else{
            mySong3.pause();
            footerIcon.className = "fa-solid fa-circle-play"
            iTag3.className = "fa-solid fa-play";
          }
        }

        footerBack.onclick = function() {
          mySong3.currentTime -= 10;
        }
        footerPrev.onclick = function() {
          mySong3.currentTime = 0;
        }
        footerNext.onclick = function() {
          mySong3.currentTime = mySong3.duration;
          footerIcon.className = "fa-solid fa-circle-play"
        }
        footerForward.onclick = function() {
          mySong3.currentTime += 10 ;
        }
      };

      icon4.onclick = function() {
        myFooter.style.display = "block"; // Show the footer
        footerImage.src="images/past-lives latest release.jpg";
        if(mySong4.paused){
          stopAllSongs();
          mySong4.play();
          iTag4.className = "fa-solid fa-pause";
          footerIcon.className = "fa-solid fa-circle-pause";
        }else{
          mySong4.pause();
          iTag4.className = "fa-solid fa-play";
          footerIcon.className = "fa-solid fa-circle-play"
        }

        footerIcon.onclick = function () {
          if(mySong4.paused){
            mySong4.play();
            footerIcon.className = "fa-solid fa-circle-pause"
            iTag4.className = "fa-solid fa-pause";
          }
          else{
            mySong4.pause();
            footerIcon.className = "fa-solid fa-circle-play"
            iTag4.className = "fa-solid fa-play";
          }
        }

        footerBack.onclick = function() {
          mySong4.currentTime -= 10;
        }
        footerPrev.onclick = function() {
          mySong4.currentTime = 0;
        }
        footerNext.onclick = function() {
          mySong4.currentTime = mySong4.duration;
          footerIcon.className = "fa-solid fa-circle-play"
        }
        footerForward.onclick = function() {
          mySong4.currentTime += 10 ;
        }
      }; 

      iTag5.onclick = function() {
        myFooter.style.display = "block"; // Show the footer
        footerImage.src="images/latestEnglish/paint the town red.webp";
        if(mySong5.paused){
          stopAllSongs();
          mySong5.play();
          iTag5.className = "fa-solid fa-pause";
          footerIcon.className = "fa-solid fa-circle-pause";
        }else{
          mySong5.pause();
          iTag5.className = "fa-solid fa-play";
          footerIcon.className = "fa-solid fa-circle-play"
        }

        footerIcon.onclick = function () {
          if(mySong5.paused){
            mySong5.play();
            footerIcon.className = "fa-solid fa-circle-pause"
            iTag5.className = "fa-solid fa-pause";
          }
          else{
            mySong5.pause();
            footerIcon.className = "fa-solid fa-circle-play"
            iTag5.className = "fa-solid fa-play";
          }
        }

        footerBack.onclick = function() {
          mySong5.currentTime -= 10;
        }
        footerPrev.onclick = function() {
          mySong5.currentTime = 0;
        }
        footerNext.onclick = function() {
          mySong5.currentTime = mySong5.duration;
          footerIcon.className = "fa-solid fa-circle-play"
        }
        footerForward.onclick = function() {
          mySong5.currentTime += 10 ;
        }
      };

      iTag6.onclick = function() {
        myFooter.style.display = "block"; // Show the footer
        footerImage.src="images/latestEnglish/Le monde.webp";
        if(mySong6.paused){
          stopAllSongs();
          mySong6.play();
          iTag6.className = "fa-solid fa-pause";
          footerIcon.className = "fa-solid fa-circle-pause";
        }else{
          mySong6.pause();
          iTag6.className = "fa-solid fa-play";
          footerIcon.className = "fa-solid fa-circle-play"
        }

        footerIcon.onclick = function () {
          if(mySong6.paused){
            mySong6.play();
            footerIcon.className = "fa-solid fa-circle-pause"
            iTag6.className = "fa-solid fa-pause";
          }
          else{
            mySong6.pause();
            footerIcon.className = "fa-solid fa-circle-play"
            iTag6.className = "fa-solid fa-play";
          }
        }

        footerBack.onclick = function() {
          mySong6.currentTime -= 10;
        }
        footerPrev.onclick = function() {
          mySong6.currentTime = 0;
        }
        footerNext.onclick = function() {
          mySong6.currentTime = mySong6.duration;
          footerIcon.className = "fa-solid fa-circle-play"
        }
        footerForward.onclick = function() {
          mySong6.currentTime += 10 ;
        }
      };

      iTag7.onclick = function() {
        myFooter.style.display = "block"; // Show the footer
        footerImage.src="images/latestEnglish/strangers.png";
        if(mySong7.paused){
          stopAllSongs();
          mySong7.play();
          iTag7.className = "fa-solid fa-pause";
          footerIcon.className = "fa-solid fa-circle-pause";
        }else{
          mySong7.pause();
          iTag7.className = "fa-solid fa-play";
          footerIcon.className = "fa-solid fa-circle-play"
        }

        footerIcon.onclick = function () {
          if(mySong7.paused){
            mySong7.play();
            footerIcon.className = "fa-solid fa-circle-pause"
            iTag7.className = "fa-solid fa-pause";
          }
          else{
            mySong7.pause();
            footerIcon.className = "fa-solid fa-circle-play"
            iTag7.className = "fa-solid fa-play";
          }
        }

        footerBack.onclick = function() {
          mySong7.currentTime -= 10;
        }
        footerPrev.onclick = function() {
          mySong7.currentTime = 0;
        }
        footerNext.onclick = function() {
          mySong7.currentTime = mySong7.duration;
          footerIcon.className = "fa-solid fa-circle-play"
        }
        footerForward.onclick = function() {
          mySong7.currentTime += 10 ;
        }
      };

      iTag8.onclick = function() {
        myFooter.style.display = "block"; // Show the footer
        footerImage.src="images/latestEnglish/telekinesis.png";
        if(mySong8.paused){
          stopAllSongs();
          mySong8.play();
          iTag8.className = "fa-solid fa-pause";
          footerIcon.className = "fa-solid fa-circle-pause";
        }else{
          mySong8.pause();
          iTag8.className = "fa-solid fa-play";
          footerIcon.className = "fa-solid fa-circle-play"
        }

        footerIcon.onclick = function () {
          if(mySong8.paused){
            mySong8.play();
            footerIcon.className = "fa-solid fa-circle-pause"
            iTag8.className = "fa-solid fa-pause";
          }
          else{
            mySong8.pause();
            footerIcon.className = "fa-solid fa-circle-play"
            iTag8.className = "fa-solid fa-play";
          }
        }

        footerBack.onclick = function() {
          mySong8.currentTime -= 10;
        }
        footerPrev.onclick = function() {
          mySong8.currentTime = 0;
        }
        footerNext.onclick = function() {
          mySong8.currentTime = mySong8.duration;
          footerIcon.className = "fa-solid fa-circle-play"
        }
        footerForward.onclick = function() {
          mySong8.currentTime += 10 ;
        }
      };

      iTag9.onclick = function() {
        myFooter.style.display = "block"; // Show the footer
        footerImage.src="images/latestEnglish/ecstacy.jpg";
        if(mySong9.paused){
          stopAllSongs();
          mySong9.play();
          iTag9.className = "fa-solid fa-pause";
          footerIcon.className = "fa-solid fa-circle-pause";
        }else{
          mySong9.pause();
          iTag9.className = "fa-solid fa-play";
          footerIcon.className = "fa-solid fa-circle-play"
        }

        footerIcon.onclick = function () {
          if(mySong9.paused){
            mySong9.play();
            footerIcon.className = "fa-solid fa-circle-pause"
            iTag9.className = "fa-solid fa-pause";
          }
          else{
            mySong9.pause();
            footerIcon.className = "fa-solid fa-circle-play"
            iTag9.className = "fa-solid fa-play";
          }
        }

        footerBack.onclick = function() {
          mySong9.currentTime -= 10;
        }
        footerPrev.onclick = function() {
          mySong9.currentTime = 0;
        }
        footerNext.onclick = function() {
          mySong9.currentTime = mySong9.duration;
          footerIcon.className = "fa-solid fa-circle-play"
        }
        footerForward.onclick = function() {
          mySong9.currentTime += 10 ;
        }
      };

      iTag10.onclick = function() {
        myFooter.style.display = "block"; // Show the footer
        footerImage.src="images/latestEnglish/hotline.jpg";
        if(mySong10.paused){
          stopAllSongs();
          mySong10.play();
          iTag10.className = "fa-solid fa-pause";
          footerIcon.className = "fa-solid fa-circle-pause";
        }else{
          mySong10.pause();
          iTag10.className = "fa-solid fa-play";
          footerIcon.className = "fa-solid fa-circle-play"
        }

        footerIcon.onclick = function () {
          if(mySong10.paused){
            mySong10.play();
            footerIcon.className = "fa-solid fa-circle-pause"
            iTag10.className = "fa-solid fa-pause";
          }
          else{
            mySong10.pause();
            footerIcon.className = "fa-solid fa-circle-play"
            iTag10.className = "fa-solid fa-play";
          }
        }

        footerBack.onclick = function() {
          mySong10.currentTime -= 10;
        }
        footerPrev.onclick = function() {
          mySong10.currentTime = 0;
        }
        footerNext.onclick = function() {
          mySong10.currentTime = mySong10.duration;
          footerIcon.className = "fa-solid fa-circle-play"
        }
        footerForward.onclick = function() {
          mySong10.currentTime += 10 ;
        }
      };

      iTag11.onclick = function() {
        myFooter.style.display = "block"; // Show the footer
        footerImage.src="images/latestHindi/levels.jpg";
        if(mySong11.paused){
          stopAllSongs();
          mySong11.play();
          iTag11.className = "fa-solid fa-pause";
          footerIcon.className = "fa-solid fa-circle-pause";
        }else{
          mySong11.pause();
          iTag11.className = "fa-solid fa-play";
          footerIcon.className = "fa-solid fa-circle-play"
        }

        footerIcon.onclick = function () {
          if(mySong11.paused){
            mySong11.play();
            footerIcon.className = "fa-solid fa-circle-pause"
            iTag11.className = "fa-solid fa-pause";
          }
          else{
            mySong11.pause();
            footerIcon.className = "fa-solid fa-circle-play"
            iTag11.className = "fa-solid fa-play";
          }
        }

        footerBack.onclick = function() {
          mySong11.currentTime -= 10;
        }
        footerPrev.onclick = function() {
          mySong11.currentTime = 0;
        }
        footerNext.onclick = function() {
          mySong11.currentTime = mySong11.duration;
          footerIcon.className = "fa-solid fa-circle-play"
        }
        footerForward.onclick = function() {
          mySong11.currentTime += 10 ;
        }
      };

      iTag12.onclick = function() {
        myFooter.style.display = "block"; // Show the footer
        footerImage.src="images/latestHindi/aasan nhi yahan.jpg";
        if(mySong12.paused){
          stopAllSongs();
          mySong12.play();
          iTag12.className = "fa-solid fa-pause";
          footerIcon.className = "fa-solid fa-circle-pause";
        }else{
          mySong12.pause();
          iTag12.className = "fa-solid fa-play";
          footerIcon.className = "fa-solid fa-circle-play"
        }

        footerIcon.onclick = function () {
          if(mySong12.paused){
            mySong12.play();
            footerIcon.className = "fa-solid fa-circle-pause"
            iTag12.className = "fa-solid fa-pause";
          }
          else{
            mySong12.pause();
            footerIcon.className = "fa-solid fa-circle-play"
            iTag12.className = "fa-solid fa-play";
          }
        }

        footerBack.onclick = function() {
          mySong12.currentTime -= 10;
        }
        footerPrev.onclick = function() {
          mySong12.currentTime = 0;
        }
        footerNext.onclick = function() {
          mySong12.currentTime = mySong12.duration;
          footerIcon.className = "fa-solid fa-circle-play"
        }
        footerForward.onclick = function() {
          mySong12.currentTime += 10 ;
        }
      };

      iTag13.onclick = function() {
        myFooter.style.display = "block"; // Show the footer
        footerImage.src="images/latestHindi/brownrang.jpg";
        if(mySong13.paused){
          stopAllSongs();
          mySong13.play();
          iTag13.className = "fa-solid fa-pause";
          footerIcon.className = "fa-solid fa-circle-pause";
        }else{
          mySong13.pause();
          iTag13.className = "fa-solid fa-play";
          footerIcon.className = "fa-solid fa-circle-play"
        }

        footerIcon.onclick = function () {
          if(mySong13.paused){
            mySong13.play();
            footerIcon.className = "fa-solid fa-circle-pause"
            iTag13.className = "fa-solid fa-pause";
          }
          else{
            mySong13.pause();
            footerIcon.className = "fa-solid fa-circle-play"
            iTag13.className = "fa-solid fa-play";
          }
        }

        footerBack.onclick = function() {
          mySong13.currentTime -= 10;
        }
        footerPrev.onclick = function() {
          mySong13.currentTime = 0;
        }
        footerNext.onclick = function() {
          mySong13.currentTime = mySong13.duration;
          footerIcon.className = "fa-solid fa-circle-play"
        }
        footerForward.onclick = function() {
          mySong13.currentTime += 10 ;
        }
      };

      iTag14.onclick = function() {
        myFooter.style.display = "block"; // Show the footer
        footerImage.src="images/latestHindi/checkitout.jpg";
        if(mySong14.paused){
          stopAllSongs();
          mySong14.play();
          iTag14.className = "fa-solid fa-pause";
          footerIcon.className = "fa-solid fa-circle-pause";
        }else{
          mySong14.pause();
          iTag14.className = "fa-solid fa-play";
          footerIcon.className = "fa-solid fa-circle-play"
        }

        footerIcon.onclick = function () {
          if(mySong14.paused){
            mySong14.play();
            footerIcon.className = "fa-solid fa-circle-pause"
            iTag14.className = "fa-solid fa-pause";
          }
          else{
            mySong14.pause();
            footerIcon.className = "fa-solid fa-circle-play"
            iTag14.className = "fa-solid fa-play";
          }
        }

        footerBack.onclick = function() {
          mySong14.currentTime -= 10;
        }
        footerPrev.onclick = function() {
          mySong14.currentTime = 0;
        }
        footerNext.onclick = function() {
          mySong14.currentTime = mySong14.duration;
          footerIcon.className = "fa-solid fa-circle-play"
        }
        footerForward.onclick = function() {
          mySong14.currentTime += 10 ;
        }
      };

      iTag15.onclick = function() {
        myFooter.style.display = "block"; // Show the footer
        footerImage.src="images/latestHindi/banasharabi.jpg";
        if(mySong15.paused){
          stopAllSongs();
          mySong15.play();
          iTag15.className = "fa-solid fa-pause";
          footerIcon.className = "fa-solid fa-circle-pause";
        }else{
          mySong15.pause();
          iTag15.className = "fa-solid fa-play";
          footerIcon.className = "fa-solid fa-circle-play"
        }

        footerIcon.onclick = function () {
          if(mySong15.paused){
            mySong15.play();
            footerIcon.className = "fa-solid fa-circle-pause"
            iTag15.className = "fa-solid fa-pause";
          }
          else{
            mySong15.pause();
            footerIcon.className = "fa-solid fa-circle-play"
            iTag15.className = "fa-solid fa-play";
          }
        }

        footerBack.onclick = function() {
          mySong15.currentTime -= 10;
        }
        footerPrev.onclick = function() {
          mySong15.currentTime = 0;
        }
        footerNext.onclick = function() {
          mySong15.currentTime = mySong15.duration;
          footerIcon.className = "fa-solid fa-circle-play"
        }
        footerForward.onclick = function() {
          mySong15.currentTime += 10 ;
        }
      };

      iTag16.onclick = function() {
        myFooter.style.display = "block"; // Show the footer
        footerImage.src="images/latestHindi/downers at dusk.jpg";
        if(mySong16.paused){
          stopAllSongs();
          mySong16.play();
          iTag16.className = "fa-solid fa-pause";
          footerIcon.className = "fa-solid fa-circle-pause";
        }else{
          mySong16.pause();
          iTag16.className = "fa-solid fa-play";
          footerIcon.className = "fa-solid fa-circle-play"
        }

        footerIcon.onclick = function () {
          if(mySong16.paused){
            mySong16.play();
            footerIcon.className = "fa-solid fa-circle-pause"
            iTag16.className = "fa-solid fa-pause";
          }
          else{
            mySong16.pause();
            footerIcon.className = "fa-solid fa-circle-play"
            iTag16.className = "fa-solid fa-play";
          }
        }

        footerBack.onclick = function() {
          mySong16.currentTime -= 10;
        }
        footerPrev.onclick = function() {
          mySong16.currentTime = 0;
        }
        footerNext.onclick = function() {
          mySong16.currentTime = mySong16.duration;
          footerIcon.className = "fa-solid fa-circle-play"
        }
        footerForward.onclick = function() {
          mySong16.currentTime += 10 ;
        }
      };

      

    
