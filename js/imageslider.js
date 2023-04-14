const slider = document.getElementById('slider');
      const imageURLs = ['img/1.jpg', 'img/2.jpg', 'img/3.jpg','img/4.jpg','img/5.jpg','img/6.jpg','img/7.jpg','img/8.jpg','img/9.jpg'];
      let i = 0;
      setInterval(() => {
        slider.style.backgroundImage = `url(${imageURLs[i++]})`;
        if (i >= imageURLs.length) {
          i = 0;
        }
      }, 8000);