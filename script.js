const main = document.querySelector("#main");
const cursor = document.querySelector("#cursor");
const imageDiv = document.querySelector("#image");

gsap.set(cursor, {
    xPercent: -50,
    yPercent: -50
});

main.addEventListener("mousemove", function (dets) {
    gsap.to(cursor, {
        x: dets.clientX,
        y: dets.clientY,
        duration: 0.12,
        ease: "power2.out"
    });
});

imageDiv.addEventListener("mouseenter", function () {
    cursor.innerHTML = "View More";
    gsap.to(cursor, {
        scale: 4,
        backgroundColor:"#ffffff8a",
        duration: 0.2
    });
});

imageDiv.addEventListener("mouseleave", function () {
    cursor.innerHTML = "";
    gsap.to(cursor, {
        scale: 1,
        duration: 0.2,
         backgroundColor:"#fff"
    });
});