export const Login = () => {
  return(
    <>
          <section class="vh-60" style={{ backgroundColor: "#eee" }}>
        <div class="container h-80">
          <div class="row d-flex justify-content-center align-items-center h-100">
            <div class="col-lg-11 col-xl-10">
              <div class="card text-black" style={{ borderRadius: "25px" }}>
                <div class="card-body p-md-5">
                  <div class="row justify-content-center">
                    <div class="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                      <p class="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                        Sign In
                      </p>

                      <form action="/action_page.php">
                        <div class="form-group mb-3">
                          <label for="email">Email:</label>
                          <input
                            type="email"
                            class="form-control"
                            id="email"
                            placeholder="Enter email"
                            name="email"
                          />
                        </div>
                        <div class="form-group mb-3">
                          <label for="pwd">Password:</label>
                          <input
                            type="password"
                            class="form-control"
                            id="pwd"
                            placeholder="Enter password"
                            name="pswd"
                          />
                        </div>
                        <div class="form-group form-check mb-3">
                          <label class="form-check-label">
                            <input
                              class="form-check-input"
                              type="checkbox"
                              name="remember"
                            />{" "}
                            Remember me
                          </label>
                        </div>
                        <button type="submit" class="btn btn-primary">
                          Sign In
                        </button>
                      </form>
                    </div>
                    <div class="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                    <img src="https://www.lancome-usa.com/dw/image/v2/AANG_PRD/on/demandware.static/-/Sites-lancome-us-master-catalog/default/dw1903aa0b/3605532612690_LA_VIE_EST_BELLE_L_EAU_DE_PARFUM_30ml.jpg?sw=375&sfrm=jpg&q=70" />

                    </div >
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );

  
};
