const container = document.querySelector("body");


    container.addEventListener("mouseover", function(event) {
        if(event.target.tagName==="img")
    image1.src = "images/image1_2.jpg";
    image2.src = "images/image2_2.jpg"
    image3.src = "images/image3_2.jpg"
    image4.src = "images/image4_2.jpg"
    image5.src = "images/image5_2.jpg"
});
    container.addEventListener("mouseout", function(event) {
    if(event.target.tagName==="img")
    image1.src = "images/image1.jpg";
    image2.src = "images/image2.jpg"
    image3.src = "images/image3.jpg"
    image4.src = "images/image4.jpg"
    image5.src = "images/image5.jpg"
    });

