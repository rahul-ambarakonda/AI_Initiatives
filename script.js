document.addEventListener('DOMContentLoaded', () => {
    const projects = [
        {
            title: 'Project Alpha',
            contentFile: 'Docs/Project_Alpha_OVERVIEW.md',
            overview: 'An overview of Project Alpha.'
        },
        {
            title: 'Project Beta',
            contentFile: 'Docs/Project_Beta_OVERVIEW.md',
            overview: 'An overview of Project Beta.'
        },
        {
            title: 'Project Gamma',
            contentFile: 'Docs/Project_Gamma_OVERVIEW.md',
            overview: 'An overview of Project Gamma.'
        },
        {
            title: 'Project Delta',
            contentFile: 'Docs/Project_Delta_SUMMARY.md',
            overview: 'A summary of Project Delta.'
        },
        {
            title: 'Project Epsilon',
            contentFile: 'Docs/Project_Epsilon_OVERVIEW.md',
            overview: 'An overview of Project Epsilon.'
        },
        {
            title: 'Project Zeta',
            contentFile: 'Docs/Project_Zeta_OVERVIEW.md',
            overview: 'An overview of Project Zeta.'
        }
    ];

    const container = document.querySelector('.project-cards-container');

    projects.forEach(project => {
        const card = document.createElement('div');
        card.className = 'project-card';
        card.innerHTML = `
            <h3>${project.title}</h3>
            <p>${project.overview}</p>
        `;
        card.addEventListener('click', () => {
            fetch(project.contentFile)
                .then(response => response.text())
                .then(text => {
                    const modalContent = document.getElementById('modal-content');
                    modalContent.innerHTML = text;
                    const modal = document.getElementById('project-modal');
                    modal.style.display = 'block';
                });
        });
        container.appendChild(card);
    });

    const modal = document.getElementById('project-modal');
    const closeBtn = document.querySelector('.close');

    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    window.addEventListener('click', (event) => {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    });
});
