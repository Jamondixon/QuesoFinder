import React from 'react'
// import img1 from "./photos/blanco.jpeg"
// import img2 from "./photos/fundito.jpeg"
// import img3 from "./photos/torchys.jpeg"

export default function Carousel() {
    return (
        <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-inner">
                <div class="carousel-item active" data-bs-interval="1000">
                    <img src='http://www.simpleimageresizer.com/_uploads/photos/c6b663c4/torchys_900x900.jpeg ' class="d-block w-100" alt="cheese"/>
                </div>
                <div class="carousel-item" data-bs-interval="1000">
                    <img src='http://www.simpleimageresizer.com/_uploads/photos/c6b663c4/blanco_900x900.jpeg ' class="d-block w-100" alt="cheese"/>
                </div>
                <div class="carousel-item">
                    <img src='http://www.simpleimageresizer.com/_uploads/photos/c6b663c4/fundito_900x900.jpeg' class="d-block w-100" alt="cheese"/>
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Back</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>
    )
}
