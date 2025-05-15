const parallaxImage = document.querySelector('.parallax-image');
        let scrollPosition = 0;
        const moveSpeed = 0.2; // Adjust this value to change the movement speed

        window.addEventListener('scroll', () => {
            const currentScroll = window.pageYOffset;
            
            // Calculate how much to move the image
            const moveX = (currentScroll - scrollPosition) * moveSpeed;
            
            // Get the current transform position
            const currentTransform = getComputedStyle(parallaxImage).transform;
            let currentX = 0;
            
            if (currentTransform !== 'none') {
                const matrix = new DOMMatrix(currentTransform);
                currentX = matrix.m41; // Get the X translation value
            }
            
            parallaxImage.style.transform = `translateX(${currentX - moveX}px)`;
            
            // Update the scroll position
            scrollPosition = currentScroll;
        });