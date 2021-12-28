import React from "react";

const PixrNotFound = ({ data }: any) => {
    let randomImage = data.map((photo: any) => (
        <img
            key={photo.id}
            src={photo.urls.regular}
            style={{ width: "100%" }}
            alt={
                photo.alt_description ? photo.alt_description : "Unsplash Image"
            }
        />
    ));
    return (
        <>
            <div className="random-image-wrapper">{randomImage}</div>
            <p className="random-image-text">
                We Couldn't Find Anything! Try Again.
            </p>
        </>
    );
};

export default PixrNotFound;
