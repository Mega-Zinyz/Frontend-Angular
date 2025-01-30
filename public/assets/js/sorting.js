$(document).ready(function() {
    setTimeout(function() {
        if ($.fn.isotope) {
            var $grid = $('.isotope-container').isotope({
                itemSelector: '.portfolio-item',
                layoutMode: 'masonry',
                percentPosition: true,
                masonry: {
                    columnWidth: '.portfolio-item',
                    gutter: 10
                }
            });

            $('.portfolio-filters').on('click', 'li', function() {
                var filterValue = $(this).attr('data-filter');
                console.log("Filtering with value:", filterValue);
                $grid.isotope({ filter: filterValue });

                const chatbotContainer = $('.chatbot-container');
                if (chatbotContainer.is(':visible')) {
                    chatbotContainer.animate({ bottom: '20px' }, 500); // Reset position if needed
                }

                $('.portfolio-filters li').removeClass('filter-active');
                $(this).addClass('filter-active');
            });
        } else {
            console.error('Isotope is not loaded.');
        }
    }, 500);  // Delay of 500ms
});
