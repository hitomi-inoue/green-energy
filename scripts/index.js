const p = console.log;

const ctrlBtns = document.querySelectorAll('.controls button');
const cntnr = document.querySelector('.body');
let btnsArray = [
    ctrlBtns[0],
    ctrlBtns[1],
    ctrlBtns[2]
];

let pages = [
    {
        heading: "Solar Panel",
        bodyText: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias, illum ipsam iure natus pariatur. Explicabo nobis quae, beatae possimus cumque libero dolorem aperiam natus perspiciatis quibusdam deleniti, fugiat, ipsa ducimus!",
        thumb: "./images/sora-panel.png"
    },
    {
        heading: "Water",
        bodyText: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias, illum ipsam iure natus pariatur. Explicabo nobis quae, beatae possimus cumque libero dolorem aperiam natus perspiciatis quibusdam deleniti, fugiat, ipsa ducimus!",
        thumb: "./images/water.png"
    },
    {
        heading: "Wind",
        bodyText: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias, illum ipsam iure natus pariatur. Explicabo nobis quae, beatae possimus cumque libero dolorem aperiam natus perspiciatis quibusdam deleniti, fugiat, ipsa ducimus!",
        thumb: "./images/wind.png"
    }
];

function clickBtn(ev) {

    let clickedButton = ev.target;

    let index = btnsArray.indexOf(clickedButton);
    p(index);

    p(clickedButton.id);

    for (let i = 0; i < ctrlBtns.length; i++) {
        if (ctrlBtns[i].id) {
            ctrlBtns[i].removeAttribute('id');
        }
    }

    clickedButton.id = 'active';
    cntnr.innerHTML = `
        <h2 class="title">${pages[index].heading}</h2>
        <div class="flex">
        <img src=${pages[index].thumb} alt="icons" class="content-img">
        <p class = "bodytext">${pages[index].bodyText}</p>
        </div>
    `;

}
for (let i = 0; i < ctrlBtns.length; i++) {
    ctrlBtns[i].addEventListener('click', clickBtn);
}
