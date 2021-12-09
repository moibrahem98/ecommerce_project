
import "./style.css";

export const ContactUs = () => {
  return(
    <>
<div class="contact2"style={{backgroundImage:'url("https://www.wrappixel.com/demos/ui-kit/wrapkit/assets/images/contact/map.jpg")'}}  id="contact">
  <div class="container">
    <div class="row contact-container">
      <div class="col-lg-12">
        <div class="card card-shadow border-0 mb-4">
          <div class="row">
            <div class="col-lg-8">
              <div class="contact-box p-4">
                <h4 class="title">Contact Us</h4>
                <form>
                  <div class="row">
                    <div class="col-lg-6">
                      <div class="form-group mt-3">
                        <input class="form-control" type="text" placeholder="name"/>
                      </div>
                    </div>
                    <div class="col-lg-6">
                      <div class="form-group mt-3">
                        <input class="form-control" type="text" placeholder="email"/>
                      </div>
                    </div>
                    <div class="col-lg-6">
                      <div class="form-group mt-3">
                        <input class="form-control" type="text" placeholder="phone"/>
                      </div>
                    </div>
                    <div class="col-lg-6">
                      <div class="form-group mt-3">
                        <input class="form-control" type="text" placeholder="location"/>
                      </div>
                    </div>
                    <div class="col-lg-12">
                      <div class="form-group mt-3">
                        <input class="form-control" type="text" placeholder="message"/>
                      </div>
                    </div>
                    <div class="col-lg-12">
                      <button type="submit" class="btn btn-danger-gradiant mt-3 mb-3 text-white border-0 py-2 px-3"><span> SUBMIT NOW <i class="ti-arrow-right"></i></span></button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div class="col-lg-4 bg-image" style={{backgroundImage:'url("https://www.wrappixel.com/demos/ui-kit/wrapkit/assets/images/contact/1.jpg")'}}>
              <div class="detail-box p-4">
                <h5 class="text-white font-weight-light mb-3">ADDRESS</h5>
                <p class="text-white op-7">601 Sherwood Ave.
                  <br/> San Bernandino</p>
                <h5 class="text-white font-weight-light mb-3 mt-4">CALL US</h5>
                <p class="text-white op-7">251 546 9442
                  <br/> 630 446 8851</p>
                <div class="round-social light">
                  <a href="#" class="ml-0 text-decoration-none text-white border border-white rounded-circle"><i class="icon-social-facebook"></i></a>
                  <a href="#" class="text-decoration-none text-white border border-white rounded-circle"><i class="icon-social-twitter"></i></a>
                  <a href="#" class="text-decoration-none text-white border border-white rounded-circle"><i class="icon-social-youtube"></i></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>    </>
  )
};
