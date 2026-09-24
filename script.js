// Database of typography combinations
const fontData = [
    {
        id: "1", name: "Classic & Reliable",
        headingFont: "'Merriweather', serif", headingWeight: "900",
        bodyFont: "'Open Sans', sans-serif", bodyWeight: "400",
        bgColor: "#ffffff", textColor: "#1c1c1c",
        previewTitle: "The quick brown fox",
        previewText: "Typography is the art and technique of arranging type to make written language legible, readable, and appealing when displayed.",
        likes: 1240, date: "2023-10-01"
    },
    {
        id: "2", name: "Modern Minimalist",
        headingFont: "'Montserrat', sans-serif", headingWeight: "800",
        bodyFont: "'Inter', sans-serif", bodyWeight: "400",
        bgColor: "#0f172a", textColor: "#f8fafc",
        previewTitle: "Future of Design",
        previewText: "Minimalism is not about having less. It's about making room for more of what matters. Clean lines and perfect geometry.",
        likes: 985, date: "2023-10-15"
    },
    {
        id: "3", name: "Elegant Editorial",
        headingFont: "'Playfair Display', serif", headingWeight: "700",
        bodyFont: "'Lora', serif", bodyWeight: "400",
        bgColor: "#f4f1ea", textColor: "#2c3e50",
        previewTitle: "Chapter One",
        previewText: "It was the best of times, it was the worst of times. The combination of two serif fonts creates a highly readable, classic editorial feel.",
        likes: 1542, date: "2023-09-20"
    },
    {
        id: "4", name: "Tech Startup",
        headingFont: "'Space Grotesk', sans-serif", headingWeight: "700",
        bodyFont: "'Inter', sans-serif", bodyWeight: "400",
        bgColor: "#ffffff", textColor: "#111827",
        previewTitle: "Build better software",
        previewText: "We help modern teams ship products faster. A quirky geometric display font paired with a highly legible interface font.",
        likes: 763, date: "2023-11-05"
    },
    {
        id: "5", name: "Bold & Punchy",
        headingFont: "'Oswald', sans-serif", headingWeight: "600",
        bodyFont: "'Roboto', sans-serif", bodyWeight: "400",
        bgColor: "#ffeaa7", textColor: "#2d3436",
        previewTitle: "ATTENTION TO DETAIL",
        previewText: "Oswald is designed for impactful headlines, while Roboto provides a smooth reading experience for longer paragraphs.",
        likes: 620, date: "2023-11-10"
    },
    {
        id: "6", name: "Soft & Friendly",
        headingFont: "'Quicksand', sans-serif", headingWeight: "700",
        bodyFont: "'Nunito', sans-serif", bodyWeight: "400",
        bgColor: "#f0fdf4", textColor: "#166534",
        previewTitle: "Hello World",
        previewText: "Rounded terminals and soft curves make this combination perfect for apps and websites that want to feel approachable and friendly.",
        likes: 890, date: "2023-08-12"
    },
    {
        id: "7", name: "Avant-Garde",
        headingFont: "'Syne', sans-serif", headingWeight: "700",
        bodyFont: "'Work Sans', sans-serif", bodyWeight: "400",
        bgColor: "#ff5252", textColor: "#ffffff",
        previewTitle: "Creative Agency",
        previewText: "Pushing boundaries with typography. Syne brings a brutalist, artsy touch, balanced by the straightforward Work Sans.",
        likes: 1105, date: "2023-11-22"
    },
    {
        id: "8", name: "Sophisticated",
        headingFont: "'Cinzel', serif", headingWeight: "700",
        bodyFont: "'Lato', sans-serif", bodyWeight: "300",
        bgColor: "#1e272e", textColor: "#d2dae2",
        previewTitle: "LUXURY BRAND",
        previewText: "Inspired by first-century roman inscriptions, perfect for luxury brands, paired with the sleek and modern Lato.",
        likes: 540, date: "2023-10-30"
    },
    {
        id: "9", name: "Retro Developer",
        headingFont: "'Fira Sans', sans-serif", headingWeight: "600",
        bodyFont: "'Roboto Mono', monospace", bodyWeight: "400",
        bgColor: "#282c34", textColor: "#abb2bf",
        previewTitle: "function init()",
        previewText: "A combination tailored for developer blogs and documentation. Clean sans-serif for headings, and clear monospace for content.",
        likes: 1320, date: "2023-07-15"
    },
    {
        id: "10", name: "Romantic",
        headingFont: "'Dancing Script', cursive", headingWeight: "700",
        bodyFont: "'Josefin Sans', sans-serif", bodyWeight: "300",
        bgColor: "#fff0f5", textColor: "#833471",
        previewTitle: "Wedding Invitation",
        previewText: "Elegant and flowing cursive for large titles, complemented by a geometric, vintage-feeling sans serif for the details.",
        likes: 712, date: "2023-11-18"
    },
    {
        id: "11", name: "High Impact",
        headingFont: "'Abril Fatface', serif", headingWeight: "400",
        bodyFont: "'Poppins', sans-serif", bodyWeight: "300",
        bgColor: "#f1c40f", textColor: "#2c3e50",
        previewTitle: "Breaking News",
        previewText: "A heavy, striking titling serif inspired by advertising posters of the 19th century, paired with the geometric Poppins.",
        likes: 450, date: "2023-12-01"
    },
    {
        id: "12", name: "Tall & Narrow",
        headingFont: "'Bebas Neue', sans-serif", headingWeight: "400",
        bodyFont: "'Montserrat', sans-serif", bodyWeight: "400",
        bgColor: "#e74c3c", textColor: "#ffffff",
        previewTitle: "SUMMER SALE",
        previewText: "Bebas Neue is an all-caps sans serif perfect for loud, compact headlines. It works beautifully with the wide stance of Montserrat.",
        likes: 830, date: "2023-12-05"
    },
    {
        id: "13", name: "Academic",
        headingFont: "'Cormorant Garamond', serif", headingWeight: "600",
        bodyFont: "'Source Sans Pro', sans-serif", bodyWeight: "400",
        bgColor: "#fdfbf7", textColor: "#3e2723",
        previewTitle: "Research Paper",
        previewText: "Cormorant draws inspiration from the legendary Garamond typefaces, providing an authoritative yet graceful look for academic content.",
        likes: 310, date: "2023-09-10"
    },
    {
        id: "14", name: "Playful Tech",
        headingFont: "'Ubuntu', sans-serif", headingWeight: "700",
        bodyFont: "'Open Sans', sans-serif", bodyWeight: "400",
        bgColor: "#8e44ad", textColor: "#ffffff",
        previewTitle: "Open Source",
        previewText: "The Ubuntu font family has a unique, contemporary style that screams 'friendly technology', balanced by the neutral Open Sans.",
        likes: 920, date: "2023-11-28"
    },
    {
        id: "15", name: "Clean & Crisp",
        headingFont: "'Raleway', sans-serif", headingWeight: "700",
        bodyFont: "'Roboto', sans-serif", bodyWeight: "300",
        bgColor: "#ecf0f1", textColor: "#2980b9",
        previewTitle: "Architecture",
        previewText: "Raleway's elegant, neo-grotesque features make headings look premium, while Roboto handles the body text with absolute clarity.",
        likes: 675, date: "2023-10-22"
    },
    {
        id: "16", name: "Dark Mode UI",
        headingFont: "'Inter', sans-serif", headingWeight: "600",
        bodyFont: "'Inter', sans-serif", bodyWeight: "400",
        bgColor: "#121212", textColor: "#e0e0e0",
        previewTitle: "Dashboard View",
        previewText: "Using a single highly-legible variable font like Inter in different weights creates a cohesive, modern app interface.",
        likes: 1890, date: "2023-12-10"
    },
    {
        id: "17", name: "Newspaper",
        headingFont: "'Playfair Display', serif", headingWeight: "700",
        bodyFont: "'Merriweather', serif", bodyWeight: "300",
        bgColor: "#eae5d9", textColor: "#222222",
        previewTitle: "Daily Chronicle",
        previewText: "A double-serif combination that mimics traditional print media. High contrast in the headings, high legibility in the body.",
        likes: 540, date: "2023-08-05"
    },
    {
        id: "18", name: "Friendly Brand",
        headingFont: "'Poppins', sans-serif", headingWeight: "700",
        bodyFont: "'Lato', sans-serif", bodyWeight: "400",
        bgColor: "#ff7f50", textColor: "#ffffff",
        previewTitle: "Join the Club",
        previewText: "Poppins brings a delightful geometric roundness to the headings, while Lato ensures the message is read effortlessly.",
        likes: 1120, date: "2023-12-15"
    },
    {
        id: "19", name: "Documentation",
        headingFont: "'Roboto Slab', serif", headingWeight: "600",
        bodyFont: "'Roboto', sans-serif", bodyWeight: "400",
        bgColor: "#ffffff", textColor: "#333333",
        previewTitle: "Getting Started",
        previewText: "Pairing a slab serif with its sans-serif sibling guarantees perfect visual harmony while clearly distinguishing sections.",
        likes: 850, date: "2023-09-28"
    },
    {
        id: "20", name: "Minimalist Art",
        headingFont: "'Work Sans', sans-serif", headingWeight: "500",
        bodyFont: "'Space Grotesk', sans-serif", bodyWeight: "300",
        bgColor: "#000000", textColor: "#ffffff",
        previewTitle: "Exhibition 01",
        previewText: "A very modern, slightly brutalist combination that works exceptionally well for art galleries, portfolios, and fashion brands.",
        likes: 1430, date: "2023-11-12"
    }
];

document.addEventListener('DOMContentLoaded', () => {
    // State
    let currentTab = 'new';
    let savedCollections = JSON.parse(localStorage.getItem('fontHunt_collections')) || [];

    // Elements
    const grid = document.getElementById('font-grid');
    const navBtns = document.querySelectorAll('.nav-btn');
    const galleryTitle = document.getElementById('gallery-title');
    const gallerySubtitle = document.getElementById('gallery-subtitle');
    const emptyState = document.getElementById('empty-state');
    const btnBrowse = document.getElementById('btn-browse');
    
    const menuToggle = document.getElementById('menu-toggle');
    const sidebar = document.querySelector('.sidebar');
    
    const modal = document.getElementById('tester-modal');
    const modalClose = document.getElementById('modal-close');
    const modalBody = document.getElementById('modal-body');
    const modalHeading = document.getElementById('modal-heading');
    const modalParagraph = document.getElementById('modal-paragraph');
    const modalFontNames = document.getElementById('modal-font-names');

    // Utility to format font name for display
    const formatFontName = (fontStr) => {
        return fontStr.split(',')[0].replace(/'/g, '').replace(/"/g, '');
    };

    // Heart SVG Icon
    const getHeartIcon = () => `
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
        </svg>
    `;

    // Render Cards
    const renderCards = (data) => {
        grid.innerHTML = '';
        
        if (data.length === 0) {
            grid.style.display = 'none';
            emptyState.style.display = 'block';
            return;
        }
        
        grid.style.display = 'grid';
        emptyState.style.display = 'none';

        data.forEach(item => {
            const isSaved = savedCollections.includes(item.id);
            const headingName = formatFontName(item.headingFont);
            const bodyName = formatFontName(item.bodyFont);

            const card = document.createElement('div');
            card.className = 'font-card';
            card.dataset.id = item.id;
            
            // Generate Card HTML
            card.innerHTML = `
                <div class="card-preview" style="background-color: ${item.bgColor}; color: ${item.textColor}">
                    <h2 class="card-heading" style="font-family: ${item.headingFont}; font-weight: ${item.headingWeight};">${item.previewTitle}</h2>
                    <p class="card-paragraph" style="font-family: ${item.bodyFont}; font-weight: ${item.bodyWeight};">${item.previewText}</p>
                </div>
                <div class="card-meta">
                    <div class="font-names">
                        <span>${headingName}</span>
                        <small>${bodyName}</small>
                    </div>
                    <div class="action-buttons">
                        <button class="like-btn ${isSaved ? 'liked' : ''}" data-id="${item.id}">
                            ${getHeartIcon()}
                            <span class="like-count">${item.likes + (isSaved ? 1 : 0)}</span>
                        </button>
                    </div>
                </div>
            `;
            
            // Event Listeners for Card
            const previewArea = card.querySelector('.card-preview');
            previewArea.addEventListener('click', () => openModal(item));

            const likeBtn = card.querySelector('.like-btn');
            likeBtn.addEventListener('click', (e) => {
                e.stopPropagation(); // Prevent opening modal
                toggleSave(item.id, likeBtn);
            });

            grid.appendChild(card);
        });
    };

    // Tab Navigation Logic
    const loadTab = (tab) => {
        currentTab = tab;
        let displayData = [...fontData];

        switch(tab) {
            case 'new':
                galleryTitle.textContent = "New Combinations";
                gallerySubtitle.textContent = "Fresh typography pairs updated recently.";
                // Sort by date descending
                displayData.sort((a, b) => new Date(b.date) - new Date(a.date));
                break;
            case 'popular':
                galleryTitle.textContent = "Popular Combinations";
                gallerySubtitle.textContent = "The most loved typography pairings of all time.";
                // Sort by likes
                displayData.sort((a, b) => b.likes - a.likes);
                break;
            case 'random':
                galleryTitle.textContent = "Random Combinations";
                gallerySubtitle.textContent = "Feeling lucky? Discover unexpected pairings.";
                // Shuffle array
                displayData = displayData.sort(() => 0.5 - Math.random());
                break;
            case 'collection':
                galleryTitle.textContent = "Your Collection";
                gallerySubtitle.textContent = "Typography combinations you've saved.";
                displayData = fontData.filter(item => savedCollections.includes(item.id));
                break;
        }

        renderCards(displayData);
    };

    // Toggle Save (Star/Heart)
    const toggleSave = (id, btnElement) => {
        const index = savedCollections.indexOf(id);
        const countSpan = btnElement.querySelector('.like-count');
        let currentCount = parseInt(countSpan.textContent);

        if (index > -1) {
            // Remove from collection
            savedCollections.splice(index, 1);
            btnElement.classList.remove('liked');
            countSpan.textContent = currentCount - 1;
        } else {
            // Add to collection
            savedCollections.push(id);
            btnElement.classList.add('liked');
            countSpan.textContent = currentCount + 1;
        }
        
        localStorage.setItem('fontHunt_collections', JSON.stringify(savedCollections));

        // If we are on the collection tab and we unsave, re-render immediately
        if (currentTab === 'collection' && index > -1) {
            loadTab('collection');
        }
    };

    // Modal Logic (Live Tester)
    const openModal = (item) => {
        modalHeading.style.fontFamily = item.headingFont;
        modalHeading.style.fontWeight = item.headingWeight;
        
        modalParagraph.style.fontFamily = item.bodyFont;
        modalParagraph.style.fontWeight = item.bodyWeight;
        
        modalBody.style.backgroundColor = item.bgColor;
        modalBody.style.color = item.textColor;
        
        modalFontNames.textContent = `${formatFontName(item.headingFont)} (Heading) / ${formatFontName(item.bodyFont)} (Body)`;
        
        modal.classList.add('active');
    };

    const closeModal = () => {
        modal.classList.remove('active');
    };

    modalClose.addEventListener('click', closeModal);
    modal.addEventListener('click', (e) => {
        if (e.target === modal) closeModal(); // click outside to close
    });

    // Navigation Click Handlers
    navBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Update active state
            navBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            // Load tab content
            loadTab(btn.dataset.tab);

            // Close sidebar on mobile
            if (window.innerWidth <= 900) {
                sidebar.classList.remove('open');
            }
        });
    });

    btnBrowse.addEventListener('click', () => {
        document.querySelector('[data-tab="popular"]').click();
    });

    // Mobile menu toggle
    menuToggle.addEventListener('click', () => {
        sidebar.classList.toggle('open');
    });

    // Initialize
    loadTab('new');
});
