// --- State Management ---
const state = {
    waterGlasses: parseInt(localStorage.getItem('waterGlasses')) || 0,
    currentTab: 'morning'
};

// --- Data: Meal Plans (Expanded & Research-Backed) ---
const mealData = {
    morning: {
        title: "Metabolism Kickstart (6:30 AM)",
        calories: 20,
        protein: "0g",
        description: "Start your day by alkalizing your body. This phase is crucial for flushing out toxins accumulated overnight.",
        options: [
            {
                name: "Jeera (Cumin) Water",
                desc: "The classic digestive aid.",
                recipe: "Soak 1 tsp Jeera overnight in 1 glass water. Boil in morning until half. Add half lime juice.",
                benefits: "Boosts metabolism, improves digestion, reduces bloating."
            },
            {
                name: "Methi (Fenugreek) Water",
                desc: "For insulin sensitivity.",
                recipe: "Soak 1 tsp Methi seeds overnight. Drink the water and chew the seeds.",
                benefits: "Excellent for blood sugar control and hormonal balance (PCOS friendly)."
            },
            {
                name: "Soaked Almonds & Walnuts",
                desc: "Brain fuel.",
                recipe: "5 Almonds (peeled) + 1 Walnut half. Soak overnight.",
                benefits: "Provides Omega-3 fatty acids and signals satiety early."
            }
        ]
    },
    breakfast: {
        title: "Power Breakfast (8:30 AM)",
        calories: 300,
        protein: "15-20g",
        description: "High protein is non-negotiable here. It prevents the mid-morning sugar crash.",
        options: [
            {
                name: "Bihari Sattu Sharbat",
                desc: "The ultimate superfood drink.",
                recipe: "Mix 3 tbsp Chana Sattu in cold water. Add chopped onion, green chili, black salt, lemon juice, and roasted jeera powder.",
                benefits: "20g Protein, cooling effect, keeps you full for 4 hours."
            },
            {
                name: "Moong Dal Chilla",
                desc: "Savory protein pancakes.",
                recipe: "Soak yellow moong dal, grind with ginger/chili. Spread on tawa with minimal ghee. Fill with grated paneer.",
                benefits: "Complete protein source, low glycemic index."
            },
            {
                name: "Ragi Malt (Salted)",
                desc: "Calcium-rich porridge.",
                recipe: "Cook 2 tbsp Ragi flour in water. Add buttermilk and tempering (tadka) of mustard seeds and curry leaves.",
                benefits: "High calcium for bone health, excellent for women."
            },
            {
                name: "Oats Upma",
                desc: "Fiber-rich savory oats.",
                recipe: "Roast rolled oats. Cook with mustard seeds, curry leaves, carrots, peas, and beans.",
                benefits: "Beta-glucan fiber helps lower cholesterol."
            }
        ]
    },
    lunch: {
        title: "Balanced Lunch (1:30 PM)",
        calories: 400,
        protein: "15g",
        description: "Focus on fiber volume. 50% of your plate MUST be vegetables (Sabzi/Salad).",
        options: [
            {
                name: "Traditional Thali (Modified)",
                desc: "The staple diet, optimized.",
                recipe: "1 Multigrain Roti (Wheat+Bajra). 1 Bowl Dal (Masoor/Toor). 1 Bowl Sabzi (Lauki/Parwal/Bhindi).",
                benefits: "Balanced macronutrients. The fiber in sabzi slows down sugar absorption."
            },
            {
                name: "Quinoa/Dalia Khichdi",
                desc: "One-pot comfort meal.",
                recipe: "Cook Quinoa or Broken Wheat with equal parts Moong Dal and double parts vegetables (spinach, carrots).",
                benefits: "Lighter than rice, higher protein content."
            },
            {
                name: "Curd Rice (Brown Rice)",
                desc: "Probiotic gut healer.",
                recipe: "Mix cooked brown rice with fresh homemade curd. Add tadka of mustard seeds, ginger, and pomegranate.",
                benefits: "Excellent for gut health and digestion."
            }
        ]
    },
    snack: {
        title: "Evening Fuel (5:00 PM)",
        calories: 150,
        protein: "5g",
        description: "The danger zone. This is where most diets fail. Be prepared.",
        options: [
            {
                name: "Roasted Makhana",
                desc: "Crunchy, guilt-free snacking.",
                recipe: "Dry roast 1 cup Makhana until crisp. Sprinkle black salt and pepper.",
                benefits: "Low calorie, high magnesium, anti-aging properties."
            },
            {
                name: "Roasted Chana",
                desc: "Protein crunch.",
                recipe: "Small handful (30g) of Bhuna Chana (with skin). Have with tea (no sugar).",
                benefits: "High fiber keeps you full until dinner."
            },
            {
                name: "Cucumber Sticks & Hummus",
                desc: "Hydrating crunch.",
                recipe: "Cut cucumber/carrots into sticks. Dip in homemade hummus (chickpea paste).",
                benefits: "Very low calorie, high volume."
            }
        ]
    },
    dinner: {
        title: "Light Dinner (8:00 PM)",
        calories: 300,
        protein: "10g",
        description: "Easy to digest. Eat at least 2-3 hours before sleeping.",
        options: [
            {
                name: "Vegetable Dalia",
                desc: "Warm and soothing.",
                recipe: "Use more vegetables (beans, carrot, peas) than grains. Cook distinct (not mushy) with turmeric.",
                benefits: "Promotes deep sleep, easy on the stomach."
            },
            {
                name: "Grilled Paneer Salad",
                desc: "Low carb option.",
                recipe: "Grill 100g Paneer cubes. Toss with lettuce, cucumber, tomatoes, and lemon dressing.",
                benefits: "High protein, negligible carbs, prevents fat storage at night."
            },
            {
                name: "Pumpkin Soup",
                desc: "Lightest option.",
                recipe: "Boil yellow pumpkin with garlic and onion. Blend. Season with pepper.",
                benefits: "Very low calorie, high Vitamin A."
            }
        ]
    }
};

// --- Logic: Render Meal Content ---
function renderMealContent(tabKey) {
    const container = document.getElementById('meal-content');
    const data = mealData[tabKey];
    
    // Clear previous
    container.innerHTML = '';

    // Intro Card
    const infoCard = document.createElement('div');
    infoCard.className = "col-span-1 bg-lime-50 rounded-xl p-6 border border-lime-200 fade-in-up";
    infoCard.innerHTML = `
        <h3 class="font-bold text-xl text-stone-800 mb-2">${data.title}</h3>
        <div class="flex gap-4 mb-4 text-sm font-semibold">
            <span class="text-amber-600">~${data.calories} kcal</span>
            <span class="text-lime-700">Protein: ${data.protein}</span>
        </div>
        <p class="text-stone-600 text-sm leading-relaxed">${data.description}</p>
    `;
    container.appendChild(infoCard);

    // Recipe Options
    data.options.forEach((opt, index) => {
        const card = document.createElement('div');
        card.className = "col-span-1 bg-white rounded-xl p-6 shadow-sm border border-stone-100 recipe-card fade-in-up";
        card.style.animationDelay = `${index * 100}ms`; // Staggered animation
        
        card.innerHTML = `
            <div class="flex justify-between items-start mb-3">
                <h4 class="font-bold text-lg text-stone-800">${opt.name}</h4>
                <span class="text-xl opacity-50">🍽️</span>
            </div>
            <p class="text-sm text-stone-500 mb-4 italic">${opt.desc}</p>
            <div class="bg-stone-50 p-3 rounded-lg mb-3 border border-stone-100">
                <p class="text-xs text-stone-700 font-mono leading-relaxed"><strong>Recipe:</strong> ${opt.recipe}</p>
            </div>
            <p class="text-xs text-lime-700 font-semibold flex items-center gap-1">
                <span>✨</span> ${opt.benefits}
            </p>
        `;
        container.appendChild(card);
    });
}

// --- Logic: Tab Switching ---
function switchTab(tabKey) {
    state.currentTab = tabKey;
    
    // Update buttons
    document.querySelectorAll('.tab-btn').forEach(btn => {
        if(btn.dataset.tab === tabKey) {
            btn.classList.remove('inactive-tab');
            btn.classList.add('active-tab');
        } else {
            btn.classList.add('inactive-tab');
            btn.classList.remove('active-tab');
        }
    });

    // Render content
    renderMealContent(tabKey);
}

// --- Logic: Hydration ---
function updateWaterDisplay() {
    const count = state.waterGlasses;
    document.getElementById('water-count').innerText = count;
    
    // Update Progress Bar (Target: 12 glasses = 3L)
    const percentage = Math.min((count / 12) * 100, 100);
    document.getElementById('water-progress').style.width = `${percentage}%`;
}

function addWater() {
    state.waterGlasses++;
    localStorage.setItem('waterGlasses', state.waterGlasses);
    updateWaterDisplay();
}

function resetWater() {
    state.waterGlasses = 0;
    localStorage.setItem('waterGlasses', 0);
    updateWaterDisplay();
}

// --- Logic: BMI Calculator ---
function calculateBMI() {
    const weight = parseFloat(document.getElementById('bmi-weight').value);
    const heightFt = parseFloat(document.getElementById('bmi-height-ft').value);
    const heightIn = parseFloat(document.getElementById('bmi-height-in').value);

    if (!weight || isNaN(heightFt) || isNaN(heightIn)) {
        alert("Please enter valid weight and height.");
        return;
    }

    // Convert height to meters
    const heightMeters = ((heightFt * 12) + heightIn) * 0.0254;
    const bmi = (weight / (heightMeters * heightMeters)).toFixed(1);

    let category = '';
    let colorClass = '';
    let bgClass = '';

    if (bmi < 18.5) {
        category = 'Underweight';
        colorClass = 'text-blue-600';
        bgClass = 'bg-blue-50 border-blue-200';
    } else if (bmi < 25) {
        category = 'Normal weight';
        colorClass = 'text-green-600';
        bgClass = 'bg-green-50 border-green-200';
    } else if (bmi < 30) {
        category = 'Overweight';
        colorClass = 'text-amber-600';
        bgClass = 'bg-amber-50 border-amber-200';
    } else {
        category = 'Obese';
        colorClass = 'text-red-600';
        bgClass = 'bg-red-50 border-red-200';
    }

    const resultDiv = document.getElementById('bmi-result');
    resultDiv.innerHTML = `
        <div class="p-4 rounded-xl border ${bgClass} fade-in-up">
            <div class="text-sm text-stone-500 uppercase tracking-wide mb-1">Your BMI</div>
            <div class="text-3xl font-bold ${colorClass} mb-1">${bmi}</div>
            <div class="text-sm font-medium text-stone-700">${category}</div>
        </div>
    `;
    resultDiv.classList.remove('hidden');
}


// --- Visualization Initialization ---
document.addEventListener('DOMContentLoaded', () => {
    
    // Initial render
    switchTab('morning');
    updateWaterDisplay();

    // 1. Weight Chart (Chart.js)
    const ctxWeight = document.getElementById('weightChart').getContext('2d');
    
    // Gradient for Chart
    const gradient = ctxWeight.createLinearGradient(0, 0, 0, 400);
    gradient.addColorStop(0, 'rgba(63, 98, 18, 0.2)'); // Lime 800
    gradient.addColorStop(1, 'rgba(63, 98, 18, 0)');

    new Chart(ctxWeight, {
        type: 'line',
        data: {
            labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8'],
            datasets: [{
                label: 'Target Weight (kg)',
                data: [58, 57, 56, 55, 54, 53, 52, 50],
                borderColor: '#3F6212', // Lime 800
                backgroundColor: gradient,
                fill: true,
                tension: 0.4, // Smoother curve
                pointBackgroundColor: '#fff',
                pointBorderColor: '#3F6212',
                pointRadius: 4,
                pointHoverRadius: 6
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: { display: false },
                tooltip: {
                    backgroundColor: '#1C1917',
                    padding: 12,
                    cornerRadius: 8,
                    displayColors: false
                }
            },
            scales: {
                y: {
                    min: 48,
                    max: 60,
                    grid: { color: '#f5f5f4', borderDash: [5, 5] },
                    ticks: { font: { family: 'Inter' } }
                },
                x: {
                    grid: { display: false },
                    ticks: { font: { family: 'Inter' } }
                }
            }
        }
    });
});
