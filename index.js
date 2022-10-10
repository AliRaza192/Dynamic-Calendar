const currentDate = document.querySelector(".current-date");
daysTag = document.querySelector(".days");
prevNextIcons = document.querySelectorAll(".icons span");

// getting date month & Year

let date = new Date();
currYear = date.getFullYear();
currMonth = date.getMonth();

// console.log(date, currYear, currMonth);


const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September",
    "October", "November", "December"];

const renderCalender = () => {
    let firstDayOfMonth = new Date(currYear, currMonth, 1).getDay();  //getting first day of month
    LastDateOfMonth = new Date(currYear, currMonth + 1, 0).getDate();  //getting last date of month
    LastDayOfMonth = new Date(currYear, currMonth, LastDateOfMonth).getDay();  //getting last day of month
    LastDateOfLastMonth = new Date(currYear, currMonth, 0).getDate();  //getting last date  of previous month
    // console.log(LastDateOfMonth);

    let LiTag = "";

    for (let i = firstDayOfMonth; i > 0; i--) {  //creating li of previous month last days
        LiTag += `<li class = "inactive">${LastDateOfLastMonth - i + 1}</li>`;

    }


    for (let i = 1; i <= LastDateOfMonth; i++) { //creating li of  adays of current month
        // adding active class tl li if tha current day, month, and year matched  
        let isToday = i === date.getDate() && currMonth === new Date().getMonth()
            && currYear === new Date().getFullYear() ? "active" : "";
        LiTag += `<li class="${isToday}">${i}</li>`
        // console.log(i);
    }


    for (let i = LastDayOfMonth; i < 6; i++) {  //creating li of next  month first days
        LiTag += `<li class = "inactive">${i - LastDayOfMonth + 1}</li>`;


    }

    currentDate.innerText = `${months[currMonth]}, ${currYear}`;
    daysTag.innerHTML = LiTag;
}

renderCalender();

prevNextIcons.forEach(icons => {
    icons.addEventListener("click", () => {
        console.log(icons)

        currMonth = icons.id === "prev" ? currMonth - 1 : currMonth + 1;

        if (currMonth < 0 || currMonth > 11) {
            date = new Date(currYear, currMonth);
            currYear = date.getFullYear();
            currMonth = date.getMonth();
        }

        else {
            date = new Date();
        }

        renderCalender();

    });
});



