/** @format */
import "/src/App.css";

function TweetCard({ tweetText, userName, imageUrl }) {
  return (
    <>
      <div className="row">
        <div className="col-md-4"></div>
        <div className="container">
          <div className="col-md-4">
            <div className="panel panel-danger">
              <div className="panel-heading">
                <h3 className="panel-title">
                  <i className="fa fa-twitter-square" aria-hidden="true"></i>
                  <img src={imageUrl} className=" rounded-lg " />
                  <p className=" text-white ">{userName}</p>
                </h3>
              </div>
              <div>
                <p className="text-black text-left ">{tweetText}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4"></div>
      </div>
    </>
  );
}

export default TweetCard;
