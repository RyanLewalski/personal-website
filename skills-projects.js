document.addEventListener('DOMContentLoaded', function() {
    const skillsData = {
        programming: [
            { 
                name: "JavaScript", 
                level: "Advanced", 
                icon: "", 
                detail: "Web development, ES6+ features and asynchronous programming",
                bg: "images/js.png" 
            },
            { 
                name: "Python", 
                level: "Advanced", 
                icon: "", 
                detail: "Data analysis, automation scripts and backend development",
                bg: "images/python.png" 
            },
            { 
                name: "Java", 
                level: "Advanced", 
                icon: "", 
                detail: "Component architecture, Hooks, Context API and Redux",
                bg: "images/java.png" 
            },
            { 
                name: "Haskell", 
                level: "Intermediate", 
                icon: "", 
                detail: "Functional programming, type classes and monads",
                bg: "images/haskell.png" 
            },
            { 
                name: "C#", 
                level: "Beginner", 
                icon: "", 
                detail: "Object-oriented programming, LINQ and .NET framework",
                bg: "images/c-sharp.png" 
            },
            {
                name: "HTML/CSS",
                level: "Advanced",
                icon: "",
                detail: "Semantic HTML, CSS Flexbox and Grid, responsive design",
                bg: "images/html-css.png"
            }
        ],
        frameworks: [
            { 
                name: "React", 
                level: "Intermediate", 
                icon: "", 
                detail: "Component architecture, Hooks, Context API and Redux",
                bg: "images/react.png" 
            },
            { 
                name: "Django", 
                level: "Advanced", 
                icon: "", 
                detail: "REST APIs, ORM and templating",
                bg: "images/django.png" 
            },
            { 
                name: "Node.js", 
                level: "Intermediate", 
                icon: "", 
                detail: "Express, REST APIs and middleware",
                bg: "images/node-js.png" 
            }
        ],
        technologies: [
            { 
                name: "Git", 
                level: "Expert", 
                icon: "", 
                detail: "Version control, branching strategies and CI/CD",
                bg: "images/git.png" 
            }
        ],
        soft: [
            { 
                name: "Leadership", 
                level: "Advanced", 
                icon: "👥", 
                detail: "Team management, mentoring and conflict resolution",
                bg: "" 
            },
            { 
                name: "Communication", 
                level: "Expert", 
                icon: "💬", 
                detail: "Effective verbal and written communication skills",
                bg: "" 
            },
            { 
                name: "Problem Solving", 
                level: "Expert", 
                icon: "🧩", 
                detail: "Analytical thinking and creative solutions",
                bg: "" 
            },
            { 
                name: "Teamwork", 
                level: "Expert", 
                icon: "🤝", 
                detail: "Collaboration, adaptability and conflict resolution",
                bg: "" 
            }
        ]
    };
    
    // Function to create the skill bubbles
    function createSkillBubbles(category) {
        const skills = skillsData[category];
        const container = document.createElement('div');
        container.className = 'skills-container';
        
        skills.forEach(skill => {
            const bubble = document.createElement('div');
            bubble.className = 'skill-bubble';
            bubble.setAttribute('data-skill', skill.name.toLowerCase());
            
            // Create the background image div
            const bgImage = document.createElement('div');
            bgImage.className = 'skill-bg';
            bgImage.style.backgroundImage = `url(${skill.bg})`;
            
            // Create the elements for the skill display
            const icon = document.createElement('div');
            icon.className = 'skill-icon';
            icon.textContent = skill.icon;
            
            const name = document.createElement('div');
            name.className = 'skill-name' ;
            name.textContent = skill.name;
            
            const level = document.createElement('div');
            level.className = 'skill-level';
            level.textContent = skill.level;
            
            // Create the animated progress element
            const progress = document.createElement('div');
            progress.className = 'skill-progress';
            
            // Create the detail popup
            const detail = document.createElement('div');
            detail.className = 'skill-detail';
            
            const detailTitle = document.createElement('div');
            detailTitle.className = 'detail-title';
            detailTitle.textContent = skill.name;
            
            const detailText = document.createElement('div');
            detailText.className = 'detail-text';
            detailText.textContent = skill.detail;
            
            detail.appendChild(detailTitle);
            detail.appendChild(detailText);
            
            // Create the highlight effect
            const highlight = document.createElement('div');
            highlight.className = 'skill-highlight';
            
            // Assemble it all
            bubble.appendChild(bgImage);
            bubble.appendChild(icon);
            bubble.appendChild(name);
            bubble.appendChild(level);
            bubble.appendChild(progress);
            bubble.appendChild(detail);
            bubble.appendChild(highlight);
            
            // Add the bubble to the container
            container.appendChild(bubble);
        });
        
        return container;
    }
    
    // Function to render the skill groups
    function renderSkillGroups() {
        const categories = ['programming', 'frameworks', 'technologies', 'soft'];
        const titles = {
            'programming': 'Programming Languages',
            'frameworks': 'Frameworks',
            'technologies': 'Technologies',
            'soft': 'Soft Skills & Attributes'
        };
        
        const skillsSection = document.querySelector('.skills-section');
        
        // Clear the existing skill groups
        const existingGroups = document.querySelectorAll('.skill-group');
        existingGroups.forEach(group => group.remove());
        
        // Create and append the new skill groups
        categories.forEach(category => {
            const group = document.createElement('div');
            group.className = 'skill-group';
            group.setAttribute('data-category', category);
            
            const title = document.createElement('h3');
            title.className = 'skill-group-title';
            title.textContent = titles[category];
            
            group.appendChild(title);
            group.appendChild(createSkillBubbles(category));
            
            skillsSection.appendChild(group);
        });
        
        showAllGroups();
    }
    
    // Function to show all the skill groups
    function showAllGroups() {
        const groups = document.querySelectorAll('.skill-group');
        groups.forEach(group => {
            group.classList.add('active');
            group.style.display = 'block';
        });
    }
    
    // Function to filter the skill groups
    function filterSkillGroups(category) {
        const groups = document.querySelectorAll('.skill-group');
        
        groups.forEach(group => {
            if (category === 'all' || group.getAttribute('data-category') === category) {
                group.style.display = 'block';
                setTimeout(() => {
                    group.classList.add('active');
                }, 50);
            } else {
                group.classList.remove('active');
                setTimeout(() => {
                    group.style.display = 'none';
                }, 500);
            }
        });
    }
    
    // Function to search the skills
    function searchSkills(query) {
        const skillBubbles = document.querySelectorAll('.skill-bubble');
        
        if (!query) {
            skillBubbles.forEach(bubble => {
                bubble.style.display = 'flex';
            });
            return;
        }
        
        const lowerQuery = query.toLowerCase();
        
        skillBubbles.forEach(bubble => {
            const skillName = bubble.getAttribute('data-skill');
            if (skillName.includes(lowerQuery)) {
                bubble.style.display = 'flex';
            } else {
                bubble.style.display = 'none';
            }
        });
    }
    
    renderSkillGroups();
    
    const categoryButtons = document.querySelectorAll('.category-button');
    
    categoryButtons.forEach(button => {
        button.addEventListener('click', function() {
            categoryButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            const category = this.getAttribute('data-category');
            filterSkillGroups(category);
        });
    });
    
    const searchInput = document.querySelector('.search-input');
    searchInput.addEventListener('input', function() {
        searchSkills(this.value);
    });
    
    // Set "All" as initially active
    document.querySelector('[data-category="all"]').classList.add('active');
    
    // Add interactive effects to the skill bubbles
    document.addEventListener('mousemove', function(e) {
        const bubbles = document.querySelectorAll('.skill-bubble:hover');
        
        bubbles.forEach(bubble => {
            const rect = bubble.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const highlight = bubble.querySelector('.skill-highlight');
            highlight.style.top = `${y - highlight.offsetHeight/2}px`;
            highlight.style.left = `${x - highlight.offsetWidth/2}px`;
        });
    });
});