import React from "react";

export default function SearchPhotos() {
    return (
        <>
            <form className="form"> 
                <label className="label" htmlFor="query"> 
                    {" "}
                     📷
                </label>
                <input
                    type="text"
                    name="query"
                    className="input"
                    placeholder={`Essayez "Paris" ou "Chien"`}
                />
                <button type="submit" className="button">
                    Search
                </button>
            </form>
        </>
    );
}