export default function MainComics({ comics }) {
  return (
    <div className="main-comics">
      <div className="main-comics-container">
        <div className="row">
          {comics.map((comic) => (
            <div className="col-20" key={comic.id}>
              <div className="custom-card">
                <div className="custom-card-img">
                  <img src={comic.thumb} alt={comic.id} />
                </div>
                <div className="custom-card-content">
                  <h3>{comic.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
