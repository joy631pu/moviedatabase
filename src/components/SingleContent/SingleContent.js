import { Badge } from "@material-ui/core";
import { img_300, unavailable } from "../../config/config";
import "./SingleContent.css";
import ContentModal from "../ContentModal/ContentModal";


// SingleContent component for displaying each movie or web-series
// in a particular pattern on Trending (Home) page
const SingleContent = ({
  id,
  poster,
  title,
  date,
  media_type,
  vote_average,
}) => {

  
  
  return (
    <>
    <div className="flex-container">
    <ContentModal className="flex-item" media_type={media_type} id={id}>
      {/* For showing IMDB rating */}
      <Badge
        badgeContent={vote_average}
        color={vote_average > 6 ? "primary" : "secondary"}
      />
      
      {/* To display image */}
      <img
        className="poster"
        src={poster ? `${img_300}${poster}` : unavailable}
        alt={title}
      />
      {/* To show Title */}
      <b className="title">{title}</b>
      <span className="subTitle">
        {/* To show is it either movie or series */}
        {media_type === "tv" ? "TV Series" : "Movie"}
        {/* For showing release data */}
        <span className="subTitle">{date}</span>
      </span>
      </ContentModal>
      
      <button className="flex-item" >Watch Later</button>
      
      </div>
      
      
      </>
  );
};

export default SingleContent;
