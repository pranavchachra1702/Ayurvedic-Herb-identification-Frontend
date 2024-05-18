import React, { useState, useCallback } from "react";
import { useDropzone } from "react-dropzone";
import "./herbIdentifier.css";
import Footer from "../footer";
import { Link } from "react-router-dom";
import CardSlider from '../cardSlider';
import HerbCardData from "../herbCatalogue/herbCardData";

const HerbIdentifier = () => {
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [classLabel, setClassLabel] = useState("");
  const [summary, setSummary] = useState("");
  const [error, setError] = useState(false);
  let path;

  const onDrop = useCallback((acceptedFiles) => {
    const file = acceptedFiles[0];
    setImage(file);
    setError(false); // Reset error state when a new image is uploaded
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  const handleUpload = async () => {
    if (!image) return;

    setLoading(true);
    const formData = new FormData();
    formData.append("image", image);

    try {
      const response = await fetch("http://127.0.0.1:5001/upload", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const responseData = await response.json();
      console.log(responseData);
      if (responseData.classlabel === "Unknown") {
        setError(true);
      } else {
        setClassLabel(responseData.classlabel);
        setSummary(responseData.summary);
        path = getPathByScientificName(responseData.classlabel);
      }
    } catch (error) {
      console.error("Error:", error);
      setError(true);
    }

    setLoading(false);
  };

  const getPathByScientificName = (scientificName) => {
    for (let herbArray of HerbCardData) {
      for (let herb of herbArray) {
        if (herb.text.toLowerCase() === scientificName.toLowerCase()) {
          return herb.path;
        }
      }
    }
    return null;
  };

  return (
    <>
      <div className="container">
        <div
          {...getRootProps()}
          className={`upload-section ${
            isDragActive ? "drop-zone-active" : "drop-zone"
          }`}
        >
          <input {...getInputProps()} accept="image/*" />
          {image ? (
            <img
              src={URL.createObjectURL(image)}
              alt="Uploaded Herb"
              className="uploaded-image"
            />
          ) : (
            <p>Drag 'n' drop an image here, or click to select an image</p>
          )}
        </div>
        <button onClick={handleUpload}>Upload Image</button>
        {loading && <p className="loader">Loading...</p>}
        {error && (
          <div className="error-message">
            <h3>Oops!</h3>
            <p>
              It looks like the image you uploaded doesn't match any of our 30 recognized Ayurvedic herbs. Please try again with a different image.
            </p>
            <h4>Tips for Better Results:</h4>
            <ul>
              <li>Ensure the herb leaf is clearly visible and centered in the image.</li>
              <li>Avoid backgrounds with too much clutter.</li>
              <li>Use good lighting to enhance visibility.</li>
            </ul>
            <p>
              Explore More: Check out our <Link to="/herb-catalogue">Herb Catalogue Page</Link> to see examples of the 30 Ayurvedic herbs we recognize.
            </p>
          </div>
        )}
        {!loading && !error && image && classLabel && summary && (
          <div className="output-section">
            <div className="result">
              <h3 className="subheading">Result</h3>
              <h4 className="section-title">Scientific Name: </h4>
              <p className="subheading">{classLabel}</p>
              <h6 className="section-title">Summary:</h6>
              <p className="subheading">{summary}</p>
          
            </div>
          </div>
        )}
      </div>
      <CardSlider />
      <Footer />
    </>
  );
};

export default HerbIdentifier;
