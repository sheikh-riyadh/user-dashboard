import Input from "../../Common/Input";
import ReactPlayer from "react-player";

const LiveVideoUpload = () => {
  const coverType = "",
    liveUrl = "";

  return (
    <div>
      <Input
        label={"Live URL"}
        required={coverType === "live" && true}
        placeholder="https://www.youtube.com/live/WQh7zQQ_3i4"
        message={""}
        name={"live_url"}
      />

      {liveUrl ? (
        <div className="flex justify-center items-center w-full">
          <ReactPlayer url={liveUrl} controls />
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default LiveVideoUpload;
