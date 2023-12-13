/** @format */
import "/src/App.css";

function TweetCard({ tweet, tweetText, user_name, imageUrl }) {
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
                  <img src={imageUrl} />
                  {tweet} {user_name}
                </h3>
              </div>
              <div className="panel-body">{tweetText}</div>
            </div>
          </div>
        </div>
        <div className="col-md-4"></div>
      </div>
    </>
  );
}

export default TweetCard;
