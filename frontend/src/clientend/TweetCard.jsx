/** @format */

function TweetCard({ tweet, tweetText }) {
  return (
    <>
      {/* <ul className="card">
  <h5 className="card-title">{}</h5>
  <p className="card-text">{}</p>
</ul> */}

      <div className="row">
        <div className="col-md-4"></div>
        <div className="container">
          <div className="col-md-4">
            <div className="panel panel-danger">
              <div className="panel-heading">
                <h3 className="panel-title">
                  <i className="fa fa-twitter-square" aria-hidden="true"></i>
                  {tweet}
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
