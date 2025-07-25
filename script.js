document.getElementById('fitnessForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get user inputs
    const age = document.getElementById('age').value;
    const gender = document.getElementById('gender').value;
    const height = document.getElementById('height').value;
    const weight = document.getElementById('weight').value;
    const medicalConditions = document.getElementById('medicalConditions').value;
    const allergies = document.getElementById('allergies').value;
    const otherInfo = document.getElementById('otherInfo').value;
    const goal = document.getElementById('goal').value;
    const target = document.getElementById('target').value;
    
    // Generate plan based on inputs
    const fitnessPlan = generateFitnessPlan(age, gender, height, weight, medicalConditions, allergies, otherInfo, goal, target);
    
    // Display results
    document.getElementById('fitnessPlan').innerHTML = fitnessPlan.workout;
    document.getElementById('nutritionPlan').innerHTML = fitnessPlan.nutrition;
    document.getElementById('result').classList.remove('hidden');
});

function generateFitnessPlan(age, gender, height, weight, medicalConditions, allergies, otherInfo, goal, target) {
    // Logic to generate workout & nutrition plans
    let workout = "";
    let nutrition = "";
    
    // Example logic (customize based on user inputs)
    if (goal === "weightLoss") {
        workout = `<h3>Workout Plan (Weight Loss)</h3>
                   <p><strong>Cardio:</strong> 4-5x/week (30-45 min jogging, cycling, or HIIT)</p>
                   <p><strong>Strength Training:</strong> 3x/week (full-body workouts with weights/resistance)</p>`;
        
        nutrition = `<h3>Nutrition Plan</h3>
                     <p><strong>Caloric Deficit:</strong> ~500 kcal below maintenance</p>
                     <p><strong>Macros:</strong> High protein (30%), moderate carbs (40%), low fat (30%)</p>
                     <p><strong>Foods:</strong> Lean meats, veggies, whole grains, avoid sugary snacks</p>`;
    } 
    else if (goal === "muscleGain") {
        workout = `<h3>Workout Plan (Muscle Gain)</h3>
                   <p><strong>Strength Training:</strong> 4-5x/week (focus on progressive overload)</p>
                   <p><strong>Cardio:</strong> 1-2x/week (light jogging to maintain heart health)</p>`;
        
        nutrition = `<h3>Nutrition Plan</h3>
                     <p><strong>Caloric Surplus:</strong> ~300 kcal above maintenance</p>
                     <p><strong>Macros:</strong> High protein (35%), moderate carbs (45%), moderate fat (20%)</p>
                     <p><strong>Foods:</strong> Chicken, fish, eggs, rice, nuts, protein shakes</p>`;
    }
    // Add more conditions for other goals
    
    return { workout, nutrition };
}
