import React from "react";
import PropTypes from "prop-types";
import "./YoutubeEmbed.css";

const YoutubeEmbed = ({ embedId, autoplay }) => (
  <div className="video-responsive">
    {embedId ? (
      <iframe
        style={{ borderRadius: "15px" }}
        src={`https://www.youtube.com/embed/${embedId}?autoplay=${autoplay}`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Embedded youtube"
      />
    ) : (
      ""
    )}
  </div>
);

YoutubeEmbed.propTypes = {
  embedId: PropTypes.string.isRequired,
};

export default YoutubeEmbed;
