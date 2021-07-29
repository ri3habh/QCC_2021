//greeting creation
var greetings = [
    "Ready to tackle the day? Give it your all! 💪", "Hello, hope you are well. 😊", "Good Morning! 🌞", "Good Afternoon! Ready for Lunch? 🍔", "If you feel overwhelmed, remember to relax for while, and come back stronger!", "Remember to relax from eyes from the computer screen every so often. Your eyes will thank you!"
];
var early_morning_greetings = [
    "Ready to tackle the day? Give it your all! 💪", "Good Morning! Hope you're well rested.🌞", "Remember to stay hydrated and eat well. Be sure to have your breakfast! 🥞", "Remember, every morning is a beautiful morning.", "Seize every moment of the day. Be limitless."
];
var morning_greetings = [
    "Ready to tackle the day? Give it your all! 💪", "Be sure to get in some physical activity today. Even a walk is ok!", "\"I've failed over and over and over again in my life. And that is why I succeed.\" - Michael Jordan 🏀", "Be ambitious and seize every moment.", "Remember, if you ever feel overwhelmed...take a step back, recollect, and come back stronger!"
];
var early_afternoon_greetings = [
    "\"The secret to getting ahead is getting stared\" - Mark Twain", "Be calm, you got this. 💪", "Remember to give your eyes some rest from your computer screen. They'll thank you later!", "Feeling like you can't stay concentrated? Try our \"Productivity Mode\" to block out unimportant websites.", "Good Afternoon! Ready for Lunch? 🍔"
];
var late_afternoon_greetings = [
    "It always seems impossible until it's done. 🎯", "\"Belive you can and you're halfway there.\" - Theodore Roosevelt", "Loosing motivation? Take a step back, and think about why you began your journey in the first place.", "\"You are never too old to set another goal or to dream a new dream\" - C.S. Lewis", "Be sure to get some physical activity today. Your body will thank you! 🏋️"
];
var evening_greetings = [
    "Good evening. Are you excited for dinner? 😋", "Be sure to drink water throughout the day. Stay hydrated! 💧", "Take a break from your work if you're tired. Your well being is more important than anything else!", "Always try to expand your skillset. You can never be too old to learn! 📚", "Feeling like you can't stay concentrated? Try our \"Productivity Mode\" to block out unimportant websites."
];
var night_greetings = [
    "It's now getting late in the day. Be sure to have a snack before bed!", "\"The best preparation for tomorrow is doing your best today.\" - Harriett Jackson Brown Jr 📖", "Before bed, be sure to reflect on ways you could've improved your day. This can be productivity wise, or through your physical and mental well-being all day.", "Tip: Plan out tommorow the day before, it'll allow you to gain a clearer focus on your future goals. Use the \"todo list\" section of the app to do so!", "Be sure to relax, and be thankful for today. Tommorow will be just as good! (If not better!)"
];
var used_greeting = "";

document.addEventListener("DOMContentLoaded", function(){
    var wow = new Date();
    var time = wow.getHours();
    if (time <= 8){
        var number = Math.floor(Math.random() * 5);
        used_greeting = early_morning_greetings[number];
    }
    else if (time === 9 || time === 10 || time === 11){
        var number = Math.floor(Math.random() * 5);
        used_greeting = morning_greetings[number];
    }
    else if (time === 12 || time === 13 || time === 14){
        var number = Math.floor(Math.random() * 5);
        used_greeting = early_afternoon_greetings[number];
    }
    else if (time === 15 || time === 16){
        var number = Math.floor(Math.random() * 5);
        used_greeting = late_afternoon_greetings[number];
    }
    else if (time === 17 || time === 18 || time === 19 || time === 20){
        var number = Math.floor(Math.random() * 5);
        used_greeting = evening_greetings[number];
    }
    else{
        var number = Math.floor(Math.random() * 5);
        used_greeting = night_greetings[number];
    }; 
    document.getElementById("hmm").innerHTML = used_greeting;
});