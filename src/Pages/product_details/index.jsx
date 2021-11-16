import "./style.css";
export const ProductDetails = () => {
  return (
    <>
      <div className="row">
        <div className="col-6">
          <img
            className="pimg"
            src="https://source.unsplash.com/random"
            alt=""
          />
        </div>
        <div className="col-6">
          <div className="row">
            <div className="col-6">
              <p className="mt-4 pt-5 title">
                Curved Basic Long-Sleeve With Cuffs
              </p>
            </div>
            <div className="col-4">
              <div className=" mt-5 pt-5">
                <button className="button btn">
                  <i className="fas fa-arrow-left"></i>
                </button>
                <button className="button btn">
                  <i className="fas fa-arrow-right"></i>
                </button>
              </div>
            </div>
            <div className="pricing">
              <p className="mt-4 title">LE 169.00</p>
            </div>

            <div className="desc mt-4">
              <div className="row">
                <p className="col-7">
                  A basic long-sleeve T-Shirt with cuffs, curved hem, and round
                  neck. made from cotton parasola light fabric, perfect for fall
                  early mornings and late nights.
                </p>
              </div>
            </div>

            <div className="row">
              <div className="col-1">
                <input
                  className="form-control"
                  type="number"
                  name="items"
                  value="1"
                />
              </div>
              <button className=" pl-2 col-5 btn btn-success">ddd</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
