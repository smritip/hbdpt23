// var Mustache = require('mustache')
// console.log(document.getElementById('template'));
// var template = document.getElementById('template').innerHTML;
//   var rendered = Mustache.render(template, { name: 'Luke' });
//   document.getElementById('target').innerHTML = rendered;

// var data = {
//     title: "Constructing HTML Elements"
// }

// var template = [
//     '<div class="tutorial">',
//         '<h1 class="tutorial-heading">{{title}}<h1>',
//     '</div>'
// ].join("\n");
// // template: '<div ...>\n<h1 ...>{{title}}<h1>\n</div>'

// var html = Mustache.render(template, data);
// $("body").append(html);

// var title = "Constructing HTML Elements";

// var html = [
//     '<div class="tutorial">',
//         '<h1 class="tutorial-heading">' + title + '<h1>',
//     '</div>'
// ].join("\n");
// // html: '<div ...>\n<h1 ...>Constructing HTML Elements<h1>\n</div>'

// document.getElementById('first-row').innerHTML = html;

function renderUnlinkedCard(classes, date, emoji) {
    var template = document.getElementById('unlinked-card').innerHTML;
    var data = {
        class: classes,
        date: date,
        emoji: emoji
    }
    var html = Mustache.render(template, data);
    return html;
}

function renderLinkedCard(classes, link, date, emoji) {
    var template = document.getElementById('linked-card').innerHTML;
    var data = {
        class: classes,
        link: link,
        date: date,
        emoji: emoji
    }
    var html = Mustache.render(template, data);
    return html;
}

function renderBody() {
    var links = [
        "https://drive.google.com/file/d/1XWjnlLTkj8od_NWweHpOLWelsU8ITCW5/view",
        "https://drive.google.com/file/d/1AI1uatcAwnWuo6cRCiCiumlUbjR_pVKj/view",
        "https://drive.google.com/file/d/1gN2tJXuXMBKr77HbwQ0ypyehnsXC_jQw/view",
        "https://drive.google.com/file/d/1bLw3Be-i92hVIqt0cqx8NGXClnn97lBv/view",
        "https://drive.google.com/file/d/1pc0meqOGzuIi17R8xsnZXKLUSqCNvPvS/view",
        "https://drive.google.com/file/d/1cQk78JNqgnpaTMjZYM2T_Gu4m5XA0iKM/view",
        "https://drive.google.com/file/d/1adSIdh63b37M_YsobiEYnsudubxfCiRI/view",
        "https://drive.google.com/file/d/1e-YVqT8UA0MqcigcAn9Ae5TQDLpwv7EY/view",
        "https://drive.google.com/file/d/1e9ixyZk7N1wucJzpVe5D_jmmDJUoGXLR/view",
        "https://drive.google.com/file/d/1e8w0D0xKraX9-bXiN1etKfQForDE1_uE/view",
        "https://drive.google.com/file/d/1e6P0cDJClNYGSpRcJgYfhBgH-3QaKz2a/view",
        "https://drive.google.com/file/d/1ndWyYrEwxHYusUE6VSSX5F9JugwSmrW8/view",
        "https://drive.google.com/file/d/1hAjQHGDj9gXNKNio2rQIXEucrdCf3BDg/view",
        "https://drive.google.com/file/d/1hqm6TQELVU3zUDQylVzmL8XI2uGqFStf/view",
        "https://drive.google.com/file/d/1eARGualCH-6EWYWNnlsxg2mr_EHyEmr4/view",
        "https://drive.google.com/file/d/1ifdzvoOHuhQcLJrDn2zi1G6TV5blCkrj/view",
        "https://drive.google.com/file/d/1jY8ZVmUSx1NgrEP35BlKqYNwixJKMgLD/view",
        "https://drive.google.com/file/d/1jiFOAK5FSmRxp0e3ze7mQ4ms7xlJwpG5/view",
        "https://drive.google.com/file/d/1rTD_-Z8UhiXyMmydtU5Mx2A3KiYsPtXK/view",
        "https://drive.google.com/file/d/1kZ-Evcr-r7IW4hFitnV7EhixT5iuw95o/view",
        "https://drive.google.com/file/d/1luDBnohFWmk9sVujkhMN-HJls6aFVslx/view",
        "",
        "",
        "",
        "",
        "",
        "",
        ""
    ]
    var d = new Date();
    var date = d.getDate();
    var month = d.getMonth();
    var year = d.getFullYear();
    if (month == 3 && year == 2020) {
        var cards_row0 = [
            renderUnlinkedCard("card text-white bg-dark mb-3 ", "29", "💃"),
            renderUnlinkedCard("card text-white bg-dark mb-3 ", "30", "💃"),
            renderUnlinkedCard("card text-white bg-dark mb-3 ", "31", "💃"),
        ];
        for (i = 1; i < 5; i++) {
            if (i < date) {
                cards_row0.push(renderLinkedCard("card bg-light mb-3 stretched-link text-decoration-none", links[i - 1], i.toString(), "🎉"));
            } else if (i == date) {
                cards_row0.push(renderLinkedCard("card text-white bg-warning mb-3 stretched-link text-decoration-none", links[i - 1], i.toString(), "❤️"));
            } else {  // i > date
                cards_row0.push(renderUnlinkedCard("card text-white bg-secondary mb-3", i.toString(), "🤫"));
            }
        }
        var cards_row1 = [];
        for (i = 5; i < 12; i++) {
            if (i < date) {
                cards_row1.push(renderLinkedCard("card bg-light mb-3 stretched-link text-decoration-none", links[i - 1], i.toString(), "🎉"));
            } else if (i == date) {
                cards_row1.push(renderLinkedCard("card text-white bg-warning mb-3 stretched-link text-decoration-none", links[i - 1], i.toString(), "❤️"));
            } else {  // i > date
                cards_row1.push(renderUnlinkedCard("card text-white bg-secondary mb-3", i.toString(), "🤫"));
            }
        }
        var cards_row2 = [];
        for (i = 12; i < 19; i++) {
            if (i < date) {
                cards_row2.push(renderLinkedCard("card bg-light mb-3 stretched-link text-decoration-none", links[i - 1], i.toString(), "🎉"));
            } else if (i == date) {
                cards_row2.push(renderLinkedCard("card text-white bg-warning mb-3 stretched-link text-decoration-none", links[i - 1], i.toString(), "❤️"));
            } else {  // i > date
                cards_row2.push(renderUnlinkedCard("card text-white bg-secondary mb-3", i.toString(), "🤫"));
            }
        }
        var cards_row3 = [];
        for (i = 19; i < 26; i++) {
            if (i < date) {
                cards_row3.push(renderLinkedCard("card bg-light mb-3 stretched-link text-decoration-none", links[i - 1], i.toString(), "🎉"));
            } else if (i == date) {
                cards_row3.push(renderLinkedCard("card text-white bg-warning mb-3 stretched-link text-decoration-none", links[i - 1], i.toString(), "❤️"));
            } else {  // i > date
                cards_row3.push(renderUnlinkedCard("card text-white bg-secondary mb-3", i.toString(), "🤫"));
            }
        }
        var cards_row4 = [];
        for (i = 26; i < 28; i++) {
            if (i < date) {
                cards_row4.push(renderLinkedCard("card bg-light mb-3 stretched-link text-decoration-none", links[i - 1], i.toString(), "🎉"));
            } else if (i == date) {
                cards_row4.push(renderLinkedCard("card text-white bg-warning mb-3 stretched-link text-decoration-none", links[i - 1], i.toString(), "❤️"));
            } else {  // i > date
                cards_row4.push(renderUnlinkedCard("card text-white bg-secondary mb-3", i.toString(), "🤫"));
            }
        }
        if (date == 28) {
            cards_row4.push(renderUnlinkedCard("card text-white bg-secondary mb-3 stretched-link text-decoration-none rainbow-box", i.toString(), "❤️"));
        } else {
            cards_row4.push(renderLinkedCard("card text-white bg-secondary mb-3 rainbow-box", links[i - 1], i.toString(), "🤫"));
        }
        cards_row4.push(renderUnlinkedCard("card text-white bg-secondary mb-3", "29", "💃"));
        cards_row4.push(renderUnlinkedCard("card text-white bg-secondary mb-3", "30", "💃"));
        cards_row4.push(renderUnlinkedCard("card text-white bg-dark mb-3", "1", "💃"));
        cards_row4.push(renderUnlinkedCard("card text-white bg-dark mb-3", "2", "💃"));
    } else {
        //TODO
    }
    
    document.getElementById('row-0').innerHTML = cards_row0.join();
    document.getElementById('row-1').innerHTML = cards_row1.join();
    document.getElementById('row-2').innerHTML = cards_row2.join();
    document.getElementById('row-3').innerHTML = cards_row3.join();
    document.getElementById('row-4').innerHTML = cards_row4.join();
}