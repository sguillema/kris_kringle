var participants = ["Isabella", "Valeria", "Albert", "Craig", "Nathan", "Jennifer", "Susanna", "Yining", "Jack"]

var list = participants

var matchedParticipants = []

list.forEach(el => {
    var matched = false
    var duplicate = false
    while (!matched) {
        duplicate = false
        var min = Math.ceil(0)
        var max = Math.floor(list.length)
        var item = list[Math.floor(Math.random() * (max - min + 1)) + min]
        for(var i = 0; i < matchedParticipants.length + 1; i++) {
            if (matchedParticipants[i] == item || el == item) {
                duplicate = true
                break
            }
        }
        if(!duplicate){
            matched = true
            matchedParticipants.push(item)
            console.log(el+" -> "+item)
        }
    }
});