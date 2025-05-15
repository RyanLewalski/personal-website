const experiences = [
    {
        id: 1,
        title: "Sales Representative",
        company: "Motion Control Engineering",
        logoUrl: "images/MCE-logo.jpeg",
        period: "May 2022- July 2022",
        yearPosition: 0.25, // (0-1)
        description: "Processed sales orders through the company system, answered sales/customer calls, as well as delivered information from the sales department to different departments in the company.",
        achievements: [
            "Was able to properly learn the company system in a short time",
            "Familiarized myself with the company products",
            "Met with different departments in the company to understand their roles and how they relate to the sales department"
        ],
        skills: ["Sales", "Customer Service", "Communication", "Teamwork"],
    },

    {
        id: 2,
        title: "Front Desk Receptionist",
        company: "Motion Control Engineering",
        logoUrl: "images/MCE-logo.jpeg",
        period: "July 2022 - August 2022",
        yearPosition: 0.5, // (0-1)
        description: "Answered customer phone calls and calls from different company locations, as well as attended to guests, attended the mail, and monitored office supplies.",
        achievements: [
            "Answered customer calls and directed them to the right department",
            "Attended to guests and ensured they were comfortable",
            "Monitored office supplies and ensured they were always available",
        ],
        skills: ["Customer Service", "Communication", "Organization", "Time Management"],
    },

    {
        id: 3,
        title: "R&D Intern",
        company: "Motion Control Engineering",
        logoUrl: "images/MCE-logo.jpeg",
        period: "May 2025 - August 2025",
        yearPosition: 0.75, // (0-1)
        description: "Assisted in the learning about the development of new products in the company, conducted tests, and documented results.",
        achievements: [
            "To be determined",
        ],
        skills: ["SQL", "C#"],
    },
    
];

const timelineEl = document.getElementById('timeline');
const experienceCardsEl = document.getElementById('experience-cards');
const viewButtons = document.querySelectorAll('.view-button');

function generateTimeline() {
    experiences.forEach((exp, index) => {
        // Create the timeline node
        const node = document.createElement('div');
        node.className = 'timeline-node';
        if (index === 0) node.classList.add('active');
        node.style.left = `${exp.yearPosition * 100}%`;
        node.dataset.id = exp.id;
        timelineEl.appendChild(node);

        // Create the year marker
        const yearMarker = document.createElement('div');
        yearMarker.className = 'year-marker';
        yearMarker.style.left = `${exp.yearPosition * 100}%`;
        yearMarker.textContent = exp.period.split('-')[0];
        timelineEl.appendChild(yearMarker);

        // Create the experience card(s)
        const card = document.createElement('div');
        card.className = 'experience-card';
        if (index === 0) card.classList.add('active');
        card.dataset.id = exp.id;
        card.dataset.category = exp.category;

        // The card content
        card.innerHTML = `
                <div class="card-header">
                    <div class="company-logo">
                        <img src="${exp.logoUrl}" alt="${exp.company} logo">
                    </div>
                    <div class="job-details">
                        <div class="job-title">${exp.title}</div>
                        <div class="company-name">${exp.company} • ${exp.period}</div>
                    </div>
                </div>
                <div class="job-description">${exp.description}</div>
                <div class="achievements">
                    ${exp.achievements.map(achievement => `
                        <div class="achievement">${achievement}</div>
                    `).join('')}
                </div>
                <div class="skills">
                    ${exp.skills.map(skill => `
                        <div class="skill-badge">${skill}</div>
                    `).join('')}
                </div>
            `;
        
        experienceCardsEl.appendChild(card);
    });

    // Adding event listeners to the timeline nodes
    document.querySelectorAll('.timeline-node').forEach(node => {
        node.addEventListener('click', () => {
            const id = node.dataset.id;
            
            // Update the active states
            document.querySelectorAll('.timeline-node').forEach(n => n.classList.remove('active'));
            document.querySelectorAll('.experience-card').forEach(c => c.classList.remove('active'));
            
            node.classList.add('active');
            document.querySelector(`.experience-card[data-id="${id}"]`).classList.add('active');
        });
    });
}

// View Switching
viewButtons.forEach(button => {
    button.addEventListener('click', () => {
        const view = button.dataset.view;
        
        // Updating the active button
        viewButtons.forEach(b => b.classList.remove('active'));
        button.classList.add('active');
        
        // Updating the view
        if (view === 'timeline') {
            timelineEl.style.display = 'block';
            experienceCardsEl.classList.remove('list-view', 'skills-view');
        } else if (view === 'list') {
            timelineEl.style.display = 'none';
            experienceCardsEl.classList.add('list-view');
            experienceCardsEl.classList.remove('skills-view');
            
            // In teh list view, show all the cards
            document.querySelectorAll('.experience-card').forEach(card => {
                card.classList.add('active');
            });
        } else if (view === 'skills') {
            timelineEl.style.display = 'none';
            experienceCardsEl.classList.add('skills-view');
            experienceCardsEl.classList.remove('list-view');
            
        }
    });
});

generateTimeline();