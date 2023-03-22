let bot1 = 30
let bot1Health = 100

let bot2 = 40
let bot2Health = 100



if (bot1 > bot2) {
    console.log("bot1 attacks")
} else if (bot1 == bot2) {
    console.log("runaway")
} else {
    console.log("bot2 attacks")
}

if (bot1Health < 1) {
    console.log("bot1 destroyed")
} else {
    bot1Health -= bot2
    console.log(`bot1 health is ${bot1Health}`)
}

let bot1Defense = 25
let bot2Defense = 500

if(bot1Health <= bot2 - bot1Defense) {
    console.log("bot 1 has been destroyed")
} else {
    bot1Health -= bot2 -bot1Defense
    console.log(`bot 1s health is now ${bot1Health}`)
}


if(bot1Health + 60 >= 100) {
    bot1Health = 100
} else {
    bot1Health += 60
}

console.log(`bot1 has done some repairs health is at ${bot1Health}`)


