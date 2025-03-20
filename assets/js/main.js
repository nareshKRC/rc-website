document.addEventListener("DOMContentLoaded", function () {
    const features = document.querySelectorAll(".feature-item");

    // Text content for each feature
    const featureData = [
        {
            title: "Optimized For Performance",
            description: "Enhance efficiency and improve tracking with our latest technology solutions.",
            icon: "/assets/images/icons/icon-book.svg"
        },
        {
            title: "Seamless Integration",
            description: "Easily connect with third-party applications for a smoother workflow.",
            icon: "/assets/images/icons/icon-book.svg"
        },
        {
            title: "Real-Time Monitoring",
            description: "Track operations live and take quick actions when needed.",
            icon: "/assets/images/icons/icon-book.svg"
        },
        {
            title: "Secure & Reliable",
            description: "Ensure data safety with our robust security architecture.",
            icon: "/assets/images/icons/icon-book.svg"
        }
    ];

    features.forEach((feature, index) => {
        feature.addEventListener("click", function () {
            // Reset all feature icons
            features.forEach(f => {
                f.querySelector("img").src = "/assets/images/icons/icon-feature.svg";
            });

            // Change clicked feature icon
            this.querySelector("img").src = "/assets/images/icons/icon-feature-click.svg";

            // Elements to animate
            const mainIcon = document.getElementById("main-icon");
            const mainTitle = document.getElementById("main-title");
            const mainDesc = document.getElementById("main-desc");

            // Apply down-to-top animation
            [mainIcon, mainTitle, mainDesc].forEach(el => {
                el.style.transition = "opacity 0.3s ease, transform 0.3s ease";
                el.style.opacity = 0;
                el.style.transform = "translateY(20px)";
            });

            setTimeout(() => {
                // Update content
                mainIcon.src = featureData[index].icon;
                mainTitle.textContent = featureData[index].title;
                mainDesc.textContent = featureData[index].description;

                // Bring elements back with animation
                [mainIcon, mainTitle, mainDesc].forEach(el => {
                    el.style.opacity = 1;
                    el.style.transform = "translateY(0)";
                });
            }, 300);
        });
    });
});

// Counter increase
document.addEventListener("DOMContentLoaded", function () {
    function animateCounter(elementId, target, duration, step, isShort = false) {
        let start = 0;
        let stepTime = Math.abs(Math.floor(duration / (target / step)));
        let element = document.getElementById(elementId);

        let timer = setInterval(function () {
            start += step;
            element.textContent = isShort ? (start / 1000) + "k" : (start / 10).toFixed(1); 

            if (start >= target) {
                clearInterval(timer);
                element.textContent = isShort ? (target / 1000) + "k" : (target / 10).toFixed(1); 
            }
        }, stepTime);
    }

    // Start counters when the page loads
    animateCounter("fleet-counter", 24000, 2000, 1000, true);  // Count in steps of 1000 → "24k"
    animateCounter("rating-counter", 46, 1500, 1, false);      // Normal count for rating → "4.6"
    animateCounter("miles-counter", 32000, 2500, 1000, true);  // Count in steps of 1000 → "32k"
});

// Video play and pause when mouse hover in out
const video = document.getElementById("hoverVideo");

    video.addEventListener("mouseenter", () => {
        video.play();
    });

    video.addEventListener("mouseleave", () => {
        video.pause();
    });
