function showInfo(infoId) {
    // Hide all info-content elements
    const infoContents = document.querySelectorAll('.info-content');
    infoContents.forEach(info => info.classList.remove('active'));
    
    // Show the selected info-content
    const selectedInfo = document.getElementById(infoId);
    selectedInfo.classList.add('active');
}


$('.carousel').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    prevArrow: '<button type="button" class="slick-prev">&#8592;</button>',
    nextArrow: '<button type="button" class="slick-next">&#8594;</button>',
    responsive: [
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 3
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1
            }
        }
    ]
});



