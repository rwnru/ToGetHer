var CustomIcon = L.Icon.extend({
    options: {
        className: 'custom-marker',
        iconSize: [50, 80],
        iconAnchor: [25, 80],
        popupAnchor: [0, -100]
    },

    createIcon: function (oldIcon) {
        var div = document.createElement('div'),
             img = document.createElement('img');

        img.src = 'img/marker.png';
        img.style.width = '50px';


        div.className = this.options.className;
        div.appendChild(img);

        return div;
    }
});

function goToDonation() {
window.location.href = 'juanzhushangping.html';
}

document.addEventListener('DOMContentLoaded', function () {

  var map = L.map('map', {
      center: [35.8617, 104.1954],
      zoom: 5,
      minZoom: 4,
      maxZoom: 8
  });
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors'
    }).addTo(map);

    var locations = [
        {
            position: [36.97, 100.95],
            title: '青海省海北藏族自治州祁连县',
            description: '藏地牧区的女性牧民们在缺乏生理教育的环境中长大，她们会用旧衣服、旧鞋垫或者那种十块钱一大沓的廉价草纸。她们许多人…'

        },
        {
            position: [43.43, 87.18],
            title: '新疆维吾尔自治区尼勒克县',
            description: '藏地牧区的女性牧民们在缺乏生理教育的环境中长大，她们会用旧衣服、旧鞋垫或者那种十块钱一大沓的廉价草纸。她们许多人…'

        },
        {
            position: [40.81, 83.65],
            title: '内蒙古自治区呼和浩特市武川县',
            description: '藏地牧区的女性牧民们在缺乏生理教育的环境中长大，她们会用旧衣服、旧鞋垫或者那种十块钱一大沓的廉价草纸。她们许多人…'

        },
        {
            position: [40.07, 107.36],
            title: '陕西省汉中市佛坪县',
            description: '藏地牧区的女性牧民们在缺乏生理教育的环境中长大，她们会用旧衣服、旧鞋垫或者那种十块钱一大沓的廉价草纸。她们许多人…'

        },
        {
            position: [40.93, 110.82],
            title: '安徽省铜陵市义安区',
            description: '藏地牧区的女性牧民们在缺乏生理教育的环境中长大，她们会用旧衣服、旧鞋垫或者那种十块钱一大沓的廉价草纸。她们许多人…'

        },
        {
            position: [45, 117.33],
            title: '福建省漳州市华安县官畲村',
            description: '藏地牧区的女性牧民们在缺乏生理教育的环境中长大，她们会用旧衣服、旧鞋垫或者那种十块钱一大沓的廉价草纸。她们许多人…'

        }
    ];

    var locationImages = [
    'img/ditu1.png',
    'img/ditu2.png',
    'img/ditu3.png',
    'img/ditu4.png',
    'img/ditu5.png',
    'img/ditu6.png'
     ];




    locations.forEach(function (location, index) {
        var customIcon = new CustomIcon();
        var marker = L.marker(location.position, { icon: customIcon }).addTo(map);

        marker.on('click', function () {
          map.flyTo(location.position, 10, {
          animate: true,
          duration: 0.5
      });


      var infoWindow = L.popup({ className: 'custom-popup' })
        .setLatLng(location.position)
        .setContent(
           '<div class="popup-content">' +
               '<div class="popup-header">' +
                   '<h3>' + location.title + '</h3>' +
               '</div>' +
               '<div class="popup-image">' +
                   '<img src="' + locationImages[index] + '" alt="">' +
               '</div>' +
               '<div class="popup-body">' +
                   '<div class="popup-description">' +
                       '<p>' + location.description + '</p >' +
                   '</div>' +
                   '<div class="popup-button">' +
                       '<button class="donate-button" onclick="goToDonation()">捐助</button>' +
                   '</div>' +
               '</div>' +
           '</div>'
        );


 map.closePopup();
 infoWindow.openOn(map);
});
    });

});

function goToQiuzhu() {
window.location.href = 'qiuzhu.html';
}
