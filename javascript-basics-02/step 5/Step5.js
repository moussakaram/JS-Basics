// const image1 = document.querySelector("#image1");
// const image2 = document.querySelector("#image2");
// const image3 = document.querySelector("#image3");
// const image4 = document.querySelector("#image4");
// const image5 = document.querySelector("#image5");

// image1.image2.image3.image4.image5.addEventListener("mouseover", function() {
//     image1.src = "images/image1_2.jpg";
//     image2.src = "images/image2_2.jpg"
//     image3.src = "images/image3_2.jpg"
//     image4.src = "images/image4_2.jpg"
//     image5.src = "images/image5_2.jpg"
// });

const container = document.querySelector(".container");


    container.addEventListener("mouseover", function(event) {
        if(event.target.tagName==="img")
    image1.src = "images/image1_2.jpg";
    image2.src = "images/image2_2.jpg"
    image3.src = "images/image3_2.jpg"
    image4.src = "images/image4_2.jpg"
    image5.src = "images/image5_2.jpg"
});

