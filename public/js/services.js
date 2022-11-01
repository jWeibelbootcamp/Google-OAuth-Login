var nailClipping = document.getElementById("nailClipping");
var teethBrushing = document.getElementById("teethBrushing");
var earCleaning = document.getElementById("earCleaning");
var brushOut = document.getElementById("brushOut");
var analGlands = document.getElementById("analGlands");
var deshedding = document.getElementById("deshedding");
var mainGroomingSession = document.getElementById("mainGroomingSession");
var addonSession = document.getElementById("addonSession");
var confirmationMessage = document.getElementById("confirmationMessage");
var apptDetails = document.getElementById("apptDetails");
var bookingOptions = document.getElementById("bookingOptions");
var boardingBtn = document.getElementById("boardingBtn");
var daycareBtn = document.getElementById("daycareBtn");
var groomingBtn = document.getElementById("groomingBtn");
var boardingBookingSystem = document.getElementById("boardingBookingSystem");
var daycareBookingSystem = document.getElementById("daycareBookingSystem");
var bookingOptions = document.getElementById("bookingOptions");
// var  = document.getElementById("");
// var  = document.getElementById("");
// var  = document.getElementById("");
// var  = document.getElementById("");
// var  = document.getElementById("");



var apptTime = 0;
var groomingCost = 0;
var sessionSelected = '';
var addonSelected = [];
var mainSession = '';
var dogName = 'Brody';
var daycareDate = 'November 30th';
var dogWeight = 30;
var totalCost = 0;
var dropoffDate = 'November 20th';
var pickupDate = 'November 30th';
var daysInBoarding = 10;    


daycareBtn.addEventListener('click', bookingDaycare);
function bookingDaycare (event) {
    bookingOptions.style.display = 'none';
    daycareBookingSystem.style.display = 'block';
    mainSession = 'Day Care';
    if (dogWeight < 50 ) {
        totalCost = 45;
    }else {
        totalCost = 65; 
    }
}

groomingBtn.addEventListener('click', bookingGrooming);
function bookingGrooming (event) {
    bookingOptions.style.display = 'none';
    grooming.style.display = 'block';
    mainSession = 'Grooming';
}


boardingBtn.addEventListener('click', bookingBoarding);
function bookingBoarding (event) {
    bookingOptions.style.display = 'none';
    boardingBookingSystem.style.display = 'block';
    mainSession = 'Boarding';
    if (dogWeight < 50 ) {
        totalCost = 55*daysInBoarding;
    }else {
        totalCost = 75*daysInBoarding; 
    }
}

var GroomingNo = document.getElementById("GroomingNo");
GroomingNo.addEventListener('click', groomingNotNeeded);
var noGrooming = document.getElementById("noGrooming");
noGrooming.addEventListener('click', groomingNotNeeded);
function groomingNotNeeded(event) {
    event.preventDefault;
    boardingBookingSystem.style.display = 'none';
    displayConfirmation ();
}

var yesGrooming = document.getElementById("GroomingYes");
var yesGrooming = document.getElementById("yesGrooming");
GroomingYes.addEventListener('click', groomingNeeded);
yesGrooming.addEventListener('click', groomingNeeded);
function groomingNeeded(event) {
    event.preventDefault;
    boardingBookingSystem.style.display = 'none';
    daycareBookingSystem.style.display = 'none';
    grooming.style.display = 'block';
}

var fullGroom = document.getElementById("fullGroom");
fullGroom.addEventListener('click', fullGroomSelected);

function fullGroomSelected(event){
    event.preventDefault;
    // Add to reservations database
    apptTime = 90;
    groomingCost = 70;
    sessionSelected = 'Full Groom';
    mainGroomingSession.style.display = "none";
    addonSession.style.display = "block";
}

var luxuryBath = document.getElementById("luxuryBath");
luxuryBath.addEventListener('click', luxuryBathSelected);

function luxuryBathSelected (event){
    event.preventDefault;
    // Add to reservations database
    apptTime = 60;
    groomingCost = 50;
    sessionSelected = 'Luxury Bath';
    mainGroomingSession.style.display = "none";
    addonSession.style.display = "block";
}

var basicBath = document.getElementById("basicBath");
basicBath.addEventListener('click', basicBathSelected);

function basicBathSelected (event){
    event.preventDefault;
    // Add to reservations database
    apptTime = 30;
    groomingCost = 35;
    sessionSelected = 'Basic Bath';
    mainGroomingSession.style.display = "none";
    addonSession.style.display = "block";
}



var addonChoices = document.getElementById("addonChoices");
addonChoices.addEventListener('click', checkedAddons);


function checkedAddons (event) {
    addonSession.style.display = 'block';
    if(nailClipping.checked){
        apptTime = apptTime + 10;
        groomingCost = groomingCost + 20;
        addonSelected.push('Nail Clipping');
    }
    if(teethBrushing.checked){
        apptTime = apptTime + 5;
        groomingCost = groomingCost + 10;
        addonSelected.push('Teeth Brushing');
    }
    if(earCleaning.checked){
        apptTime = apptTime + 5;
        groomingCost = groomingCost + 15;
        addonSelected.push('Ear Cleaning');
    }
    if(brushOut.checked){
        apptTime = apptTime + 5;
        groomingCost = groomingCost + 10;
        addonSelected.push('Brush Out');
    }
    if(analGlands.checked){
        apptTime = apptTime + 10;
        groomingCost = groomingCost + 15;
        addonSelected.push('External Anal Glands');
    }
    if(deshedding.checked){
        apptTime = apptTime + 15;
        groomingCost = groomingCost + 25;
        addonSelected.push('Deshedding Treatment');
    }

    if(mainSession === 'Grooming'){
        groomingConfirmation();
    }else if (mainSession === 'Boarding') {
        addonSession.style.display = 'none';
    console.log(groomingCost);
    totalCost = totalCost + groomingCost;
    if (addonSelected.length === 0) {
        confirmationMessage.textContent = `You booked Boarding with ${sessionSelected} for ${dogName} on ${dropoffDate} until ${pickupDate}. Your total will be $${totalCost}. Please remember you can drop off your pup any time after 8AM and must pick him/her up before 9PM otherwise you will not be able to pick him/her up until the next morning and will be charged an overnight fee of $50.`;
    }else if (addonSelected.length === 1) {
        confirmationMessage.textContent = `You booked Boarding with ${sessionSelected} and ${addonSelected} for ${dogName} on ${dropoffDate} until ${pickupDate}. Your total will be $${totalCost}. Please remember you can drop off your pup any time after 8AM and must pick him/her up before 9PM otherwise you will not be able to pick him/her up until the next morning and will be charged an overnight fee of $50.`;
    }else {
        for (var i = 1; i < addonSelected.length; i++) { 
            addonSelected[i] = ` ${addonSelected[i]}`;
        }
        var lastAddon = addonSelected.length;
        lastAddon--;
        var lastAddonSelected = addonSelected[lastAddon];
        var addonLess = addonSelected;
        addonLess.pop();
        confirmationMessage.textContent = `You booked Boarding for ${dogName} on ${dropoffDate} until ${pickupDate}. You added on  ${sessionSelected} with ${addonLess} and ${lastAddonSelected}. Your total will be $${totalCost}. Please remember you can drop off your pup any time after 8AM and must pick him/her up before 9PM otherwise you will not be able to pick him/her up until the next morning and will be charged an overnight fee of $50.`;
    }
    }else if (mainSession === 'Day Care') {
            addonSession.style.display = 'none';
            console.log(groomingCost);
            totalCost = totalCost + groomingCost;
            if (addonSelected.length === 0) {
                confirmationMessage.textContent = `You booked Doggy Day Care with ${sessionSelected} for ${dogName} on ${daycareDate}. Your total will be $${totalCost}. Please remember you can drop off your pup any time after 8AM and must pick him/her up before 9PM otherwise you will not be able to pick him/her up until the next morning and will be charged an overnight fee of $50.`;
            }else if (addonSelected.length === 1) {
                confirmationMessage.textContent = `You booked Doggy Day Care with ${sessionSelected} and ${addonSelected} for ${dogName} on ${daycareDate}. Your total will be $${totalCost}. Please remember you can drop off your pup any time after 8AM and must pick him/her up before 9PM otherwise you will not be able to pick him/her up until the next morning and will be charged an overnight fee of $50.`;
            }else {
                for (var i = 1; i < addonSelected.length; i++) { 
                    addonSelected[i] = ` ${addonSelected[i]}`;
                }
                var lastAddon = addonSelected.length;
                lastAddon--;
                var lastAddonSelected = addonSelected[lastAddon];
                var addonLess = addonSelected;
                addonLess.pop();
                confirmationMessage.textContent = `You booked Doggy Day Care for ${dogName} on ${daycareDate}. You added on ${sessionSelected} with ${addonLess} and ${lastAddonSelected}. Your total will be $${totalCost}. Please remember you can drop off your pup any time after 8AM and must pick him/her up before 9PM otherwise you will not be able to pick him/her up until the next morning and will be charged an overnight fee of $50.`;
            }
        }
    }
    // SEND TO APPOINTMENT BOOK FIRST
    // then from that function you'll send it to confirmMessage


        //ADD "addonSelected" TO DATABASE


    // displayConfirmation ();


function displayConfirmation () {
    daycareBookingSystem.style.display = 'none';
    if (mainSession === 'Boarding')  {
    confirmationMessage.textContent = `You booked Boarding for ${dogName} on ${dropoffDate} until ${pickupDate}. Your total cost is $${totalCost}. Please remember you can drop off your pup any time after 8AM and must pick him/her up before 9PM on ${pickupDate} otherwise you will not be able to pick him/her up until the next morning and will be charged an overnight fee of $50.`;
    } else if (mainSession === 'Day Care') {
        confirmationMessage.textContent = `You booked Doggy Day Care for ${dogName} on ${daycareDate}. Your total cost is $${totalCost}. Please remember you can drop off your pup any time after 8AM and must pick him/her up before 9PM otherwise you will not be able to pick him/her up until the next morning and will be charged an overnight fee of $50.`;
    } 
}

function groomingConfirmation () {
    addonSession.style.display = 'none';
    if (addonSelected.length === 0) {
        confirmationMessage.textContent = `You booked ${sessionSelected}. Your total will be $${groomingCost}.`;
    }else if (addonSelected.length === 1) {
        confirmationMessage.textContent = `You booked ${sessionSelected} with ${addonSelected}. Your total will be $${groomingCost}.`;
    }else {
        for (var i = 1; i < addonSelected.length; i++) { 
            addonSelected[i] = ` ${addonSelected[i]}`;
        }
        var lastAddon = addonSelected.length;
        lastAddon--;
        var lastAddonSelected = addonSelected[lastAddon];
        var addonLess = addonSelected;
        addonLess.pop();
        confirmationMessage.textContent = `You booked ${sessionSelected} with ${addonLess} and ${lastAddonSelected}. Your total will be $${groomingCost}.`;
        
}}