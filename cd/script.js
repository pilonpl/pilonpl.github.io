var utc = document.getElementById("utc")

update()



function update() {
    console.log("updated")
    date = new Date()

    //date
    Y = date.getUTCFullYear()

    if (date.getUTCMonth() < 10) {
        MM = `0${date.getUTCMonth()}`
    } else {
        MM = `${date.getUTCMonth()}`
    }

    if (date.getUTCDay() < 10) {
        DD = `0${date.getUTCDay()}`
    } else {
        DD = `${date.getUTCDay()}`
    }

    //time
    if (date.getUTCHours() < 10) {
        HH = `0${date.getUTCHours()}`
    } else {
        HH = `${date.getUTCHours()}`
    }

    if (date.getUTCMinutes() < 10) {
        mm = `0${date.getUTCMinutes()}`
    } else {
        mm = `${date.getUTCMinutes()}`
    }

    UTCdt = ` ${Y}-${MM}-${DD}T${HH}-${mm}Z`

    utc.innerHTML = UTCdt
    //navigator.clipboard.writeText(UTCdt)
}

function copy() {
    console.log("button clicked")
    navigator.clipboard.writeText(utc.innerHTML)
}

setInterval(update, 500)