import { useState } from "react";
import ImageUpload from "../../components/Business/Banner/ImageUpload";
import LiveVideoUpload from "../../components/Business/Banner/LiveVideoUpload";

const BannerInformation = () => {
  const [coverType, setCoverType] = useState("video");

  return (
    <div>
      <form>
        {coverType == "image" ? (
          <div>
            <ImageUpload />
          </div>
        ) : (
          <div>
            <LiveVideoUpload />
          </div>
        )}
      </form>
    </div>
  );
};

export default BannerInformation;
