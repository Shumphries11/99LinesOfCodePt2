document.addEventListener('DOMContentLoaded', function () {

    let friends = ["James", "Tiffany", "Camilla", "Tristan", "Ariel"];

    let button = document.querySelector('.btn');

    button.addEventListener('click', function () {
        for (let a = 0; a < friends.length; a++) {
            console.log(friends[a].toUpperCase() + ":")
            for (let b = 99; b > 2; b--) {
                console.log(b + " lines of code in the file, " + b + " lines of code; " + friends[a] + " strikes one out, clears it all out, " + (b - 1) + "  lines of code in the file.");

                if (b == 2, b--) {
                    console.log(b + " lines of code in the file, " + b + " lines of code; " + friends[a] + " strikes one out, clears it all out, " + (b - 1) + " line of code in the file.");
                }

                if (b == 1, b--) {
                    console.log(b + " line of code in the file, " + b + " line of code; " + friends[a] + " strikes one out, clears it all out, " + (b - 1) + " lines of code in the file.");
                }

            }

            console.log("------------------------");
            console.log("------------------------");



            for (let i = 0; i < friends.length; i++) {
                let div = document.createElement('div');
                div.className = 'friend'
                let h3 = document.createElement('h3');
                let divText = document.createTextNode(friends[i] + ':');
                h3.appendChild(divText);
                document.body.appendChild(div);
                div.appendChild(h3);

                for (var j = 99; j > 0; j--) {
                    if (j == 2) {
                        let paragraph = document.createElement('p')
                        div.appendChild(paragraph);

                        let paragraphText = document.createTextNode(j + " lines of code in the file,  " + j + "   lines of code;  " + friends[i] + " strikes one out, clears it all out, " + (j - 1) + " line of code in the file.");

                        paragraph.appendChild(paragraphText);

                    } else if (j == 1) {
                        let paragraph2 = document.createElement('p')
                        div.appendChild(paragraph2);

                        let paragraph2Text = document.createTextNode(j + " line of code in the file, " + j + " line of code; " + friends[i] + " strikes one out, clears it all out, " + (j - 1) + " lines of code in the file.");

                        paragraph2.appendChild(paragraph2Text);

                    } else {
                        let paragraph3 = document.createElement('p')
                        div.appendChild(paragraph3);
                        let paragraph3Text = document.createTextNode(j + " lines of code in the file, " + j + " lines of code; " + friends[i] + " strikes one out, clears it all out, " + (j - 1) + " lines of code in the file.");

                        paragraph3.appendChild(paragraph3Text);
                    }
                }


            }
        }

    })







})