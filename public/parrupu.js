$(".fa-cog").on("click",function(){
    $(".fa-cog").animate(
        { deg: 180 },
        {
            duration: 1200,
            step: function (now) {
                $(this).css({ transform: 'rotate(' + now + 'deg)' });
            }
        }
    );
})