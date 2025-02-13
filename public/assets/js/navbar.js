document.addEventListener('DOMContentLoaded', function () {
    // Select all links in the navbar
    const navLinks = document.querySelectorAll('#navmenu ul li a');
    const sections = document.querySelectorAll('section'); // Assuming each section has a <section> element
    const chatbotContainer = document.querySelector('.chatbot-container'); // Chatbot container

    function setActiveLink() {
        let currentSection = '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (window.scrollY >= sectionTop - sectionHeight / 3) {
                currentSection = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').includes(currentSection)) {
                link.classList.add('active');
            }
        });
    }

    // Event listener for clicking the navbar links
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault(); // Prevent default behavior

            // Check if the chatbot is active
            if (document.activeElement.closest('.chatbot-container')) {
                return; // Don't execute if chatbot is focused
            }

            const targetId = this.getAttribute('href'); // Get the href from the link
            
            // Check if the href is a hash link (i.e., an anchor)
            if (targetId.startsWith('#')) {
                const targetSection = document.querySelector(targetId); // Find the target section by id
                if (targetSection) {
                    targetSection.scrollIntoView({ behavior: 'smooth' }); // Scroll to the target element
                }
            } else {
                // If it's a full URL, just navigate to that page
                window.location.href = targetId;
            }
        });
    });

    // Call setActiveLink on page load to highlight the current section
    setActiveLink();

    // Event listener for scroll to update the active link
    window.addEventListener('scroll', setActiveLink);
});