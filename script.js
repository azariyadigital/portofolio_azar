// Website Selection System
const websiteCards = document.querySelectorAll('.service-card[data-service="websites"]');
let currentStep = 1;

// Open website selection when website card is clicked
websiteCards.forEach(card => {
    card.addEventListener('click', function() {
        showWebsiteLevels();
    });
});

function showWebsiteLevels() {
    // Create level selection section
    const selectionSection = document.createElement('div');
    selectionSection.id = 'website-selection';
    selectionSection.innerHTML = `
        <div class="selection-container">
            <h2>Choose Your Website Level</h2>
            <div class="level-options">
                <div class="level-card" data-level="noob">
                    <div class="level-icon">⭐</div>
                    <h3>Noob Level Websites</h3>
                    <p>Perfect for beginners and simple projects</p>
                </div>
                <div class="level-card" data-level="pro">
                    <div class="level-icon">🔥</div>
                    <h3>Pro Level Websites</h3>
                    <p>Advanced features and functionality</p>
                </div>
                <div class="level-card" data-level="premium">
                    <div class="level-icon">👑</div>
                    <h3>Premium Level Websites</h3>
                    <p>High-end, powerful custom builds</p>
                </div>
            </div>
            <button class="close-selection-btn">Close</button>
        </div>
    `;
    
    document.body.appendChild(selectionSection);
    
    // Add styles for the selection system
    const style = document.createElement('style');
    style.textContent = `
        #website-selection {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.95);
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 10000;
            backdrop-filter: blur(10px);
            animation: fadeIn 0.5s ease-out;
        }
        
        .selection-container {
            background: rgba(0, 0, 0, 0.9);
            padding: 50px;
            border-radius: 15px;
            border: 2px solid #00ffcc;
            max-width: 900px;
            width: 90%;
            text-align: center;
            animation: slideUp 0.6s ease-out;
        }
        
        .selection-container h2 {
            color: #00ffcc;
            font-family: 'Montserrat', sans-serif;
            font-size: 2.8rem;
            margin-bottom: 50px;
            text-shadow: 2px 2px 4px rgba(0,0,0,0.8);
        }
        
        .level-options {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 25px;
            margin-bottom: 40px;
        }
        
        .level-card {
            background: rgba(17, 17, 17, 0.85);
            padding: 30px 20px;
            border-radius: 15px;
            border: 1px solid rgba(51, 51, 51, 0.5);
            cursor: pointer;
            transition: all 0.3s ease;
            backdrop-filter: blur(10px);
        }
        
        .level-card:hover {
            transform: translateY(-10px) scale(1.05);
            background: rgba(0, 255, 204, 0.9);
            color: #000;
            box-shadow: 0 15px 30px rgba(0, 255, 204, 0.4);
        }
        
        .level-card:hover .level-icon,
        .level-card:hover h3,
        .level-card:hover p {
            color: #000 !important;
            transform: scale(1.1);
        }
        
        .level-icon {
            font-size: 3rem;
            margin-bottom: 15px;
        }
        
        .level-card h3 {
            color: #00ffcc;
            font-family: 'Montserrat', sans-serif;
            font-size: 1.3rem;
            margin-bottom: 10px;
            transition: all 0.3s ease;
        }
        
        .level-card p {
            color: #fff;
            font-size: 0.9rem;
            transition: all 0.3s ease;
        }
        
        .close-selection-btn {
            background: #ff4444;
            color: white;
            border: none;
            padding: 12px 30px;
            border-radius: 8px;
            cursor: pointer;
            font-weight: 600;
            transition: all 0.3s ease;
        }
        
        .close-selection-btn:hover {
            background: #cc3333;
            transform: translateY(-2px);
        }
        
        .benefits-container {
            text-align: left;
            background: rgba(17, 17, 17, 0.85);
            padding: 30px;
            border-radius: 15px;
            border: 1px solid rgba(51, 51, 51, 0.5);
            margin: 30px 0;
        }
        
        .benefits-container h3 {
            color: #00ffcc;
            font-family: 'Montserrat', sans-serif;
            margin-bottom: 20px;
            text-align: center;
        }
        
        .benefits-list {
            list-style: none;
            padding: 0;
        }
        
        .benefits-list li {
            padding: 10px 0;
            border-bottom: 1px solid rgba(51, 51, 51, 0.5);
            color: #fff;
            font-size: 1.1rem;
        }
        
        .benefits-list li:last-child {
            border-bottom: none;
        }
        
        .confirm-btn {
            background: #00ffcc;
            color: #000;
            border: none;
            padding: 15px 40px;
            border-radius: 8px;
            cursor: pointer;
            font-weight: 700;
            font-size: 1.1rem;
            transition: all 0.3s ease;
            margin-top: 20px;
        }
        
        .confirm-btn:hover {
            background: #00d1a1;
            transform: scale(1.08) translateY(-2px);
            box-shadow: 0 6px 20px rgba(0,0,0,0.4);
        }
        
        @keyframes slideUp {
            from {
                opacity: 0;
                transform: translateY(50px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
        
        @media (max-width: 768px) {
            .level-options {
                grid-template-columns: 1fr;
                gap: 15px;
            }
            
            .selection-container {
                padding: 30px 20px;
            }
            
            .selection-container h2 {
                font-size: 2.2rem;
            }
        }
    `;
    document.head.appendChild(style);
    
    // Add click handlers for level cards
    const levelCards = selectionSection.querySelectorAll('.level-card');
    levelCards.forEach(card => {
        card.addEventListener('click', function() {
            const level = this.getAttribute('data-level');
            showLevelBenefits(level, selectionSection);
        });
    });
    
    // Close button
    selectionSection.querySelector('.close-selection-btn').addEventListener('click', function() {
        document.body.removeChild(selectionSection);
        document.head.removeChild(style);
    });
}

function showLevelBenefits(level, selectionSection) {
    let benefits = [];
    let levelName = '';
    
    switch(level) {
        case 'noob':
            levelName = 'Noob Level Websites';
            benefits = [
                'Personal portfolio',
                'Simple business website',
                'One-page website',
                'Blog template',
                'Landing page',
                'School project website'
            ];
            break;
        case 'pro':
            levelName = 'Pro Level Websites';
            benefits = [
                'E-commerce shop',
                'Booking system',
                'Dashboard UI',
                'Portfolio with animations',
                'Multi-page company website',
                'Online learning website',
                'Real-time chat website'
            ];
            break;
        case 'premium':
            levelName = 'Premium Level Websites';
            benefits = [
                'Full custom website with database',
                'AI-powered website',
                'Social media platform',
                'Custom web app with backend (Node/Python)',
                'Marketplace (like Etsy)',
                'SaaS platform',
                'Cloud-connected systems'
            ];
            break;
    }
    
    selectionSection.querySelector('.level-options').style.display = 'none';
    selectionSection.querySelector('.close-selection-btn').style.display = 'none';
    
    const benefitsHTML = `
        <div class="benefits-container">
            <h3>What You Get with ${levelName}</h3>
            <ul class="benefits-list">
                ${benefits.map(benefit => `<li>${benefit}</li>`).join('')}
            </ul>
        </div>
        <button class="confirm-btn">I choose this! ✅</button>
        <button class="back-btn" style="background: #666; color: white; border: none; padding: 12px 30px; border-radius: 8px; cursor: pointer; margin-top: 15px; margin-left: 15px;">← Back</button>
    `;
    
    selectionSection.querySelector('.selection-container').innerHTML += benefitsHTML;
    
    // Confirm button
    selectionSection.querySelector('.confirm-btn').addEventListener('click', function() {
        alert(`🎉 Excellent choice! You selected ${levelName}!\n\nWe'll contact you soon to discuss your project.`);
        document.body.removeChild(selectionSection);
        // Remove the style element we added
        const addedStyle = document.head.querySelector('style:last-of-type');
        if (addedStyle) document.head.removeChild(addedStyle);
    });
    
    // Back button
    selectionSection.querySelector('.back-btn').addEventListener('click', function() {
        document.body.removeChild(selectionSection);
        showWebsiteLevels();
    });
}