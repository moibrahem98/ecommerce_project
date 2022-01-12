import axios from "axios";
// Product Actions:
export const listProducts =
  (name = "") =>
  async (dispatch) => {
    try {
      dispatch({ type: "PRODUCT_LIST_REQUEST" });

      const { data } = await axios.get(`/product/api/products/${name}`);

      dispatch({ type: "PRODUCT_LIST_SUCCESS", payload: data });
    } catch (error) {
      dispatch({
        type: "PRODUCT_LIST_FAIL",
        payload:
          error.response && error.response.data.detail
            ? error.response.data.detail
            : error.message,
      });
    }
  };
export const listTopProducts = () => async (dispatch) => {
  try {
    dispatch({ type: "PRODUCT_TOP_REQUEST" });

    const { data } = await axios.get(`/product/api/products/top/`);

    dispatch({
      type: "PRODUCT_TOP_SUCCESS",
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: "PRODUCT_TOP_FAIL",
      payload:
        error.response && error.response.data.detail
          ? error.response.data.detail
          : error.message,
    });
  }
};
export const listLatestProducts = () => async (dispatch) => {
  try {
    dispatch({ type: "LATEST_PRODUCTS_REQUEST" });

    const { data } = await axios.get(`/product/api/products/latest/`);

    dispatch({
      type: "LATEST_PRODUCTS_SUCCESS",
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: "LATEST_PRODUCTS_FAIL",
      payload:
        error.response && error.response.data.detail
          ? error.response.data.detail
          : error.message,
    });
  }
};

export const listProductDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: "PRODUCT_DETAILS_REQUEST" });

    const { data } = await axios.get(`/product/api/product/${id}`);

    dispatch({
      type: "PRODUCT_DETAILS_SUCCESS",
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: "PRODUCT_DETAILS_FAIL",
      payload:
        error.response && error.response.data.detail
          ? error.response.data.detail
          : error.message,
    });
  }
};

export const deleteProduct = (id) => async (dispatch, getState) => {
  try {
    dispatch({
      type: "PRODUCT_DELETE_REQUEST",
    });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.delete(
      `/product/api/product/delete/${id}/`,
      config
    );

    dispatch({
      type: "PRODUCT_DELETE_SUCCESS",
    });
  } catch (error) {
    dispatch({
      type: "PRODUCT_DELETE_FAIL",
      payload:
        error.response && error.response.data.detail
          ? error.response.data.detail
          : error.message,
    });
  }
};

export const createProduct =
  (
    name,
    price,

    brand,
    category,
    subCategory,
    stock,
    description,
    image
  ) =>
  async (dispatch, getState) => {
    try {
      dispatch({
        type: "PRODUCT_CREATE_REQUEST",
      });

      const {
        userLogin: { userInfo },
      } = getState();

      const config = {
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${userInfo.token}`,
        },
      };

      const { data } = await axios.post(
        `/product/api/products/create/`,
        {
          name: name,
          price: price,
          brand: brand,

          category: category,
          subCategory: subCategory,
          stock: stock,
          description: description,
          image: image,
        },
        config
      );
      dispatch({
        type: "PRODUCT_CREATE_SUCCESS",
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: "PRODUCT_CREATE_FAIL",
        payload:
          error.response && error.response.data.detail
            ? error.response.data.detail
            : error.message,
      });
    }
  };

export const updateProduct = (product) => async (dispatch, getState) => {
  try {
    dispatch({
      type: "PRODUCT_UPDATE_REQUEST",
    });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.put(
      `/product/api/products/update/${product._id}/`,
      product,
      config
    );
    dispatch({
      type: "PRODUCT_UPDATE_SUCCESS",
      payload: data,
    });

    dispatch({
      type: "PRODUCT_DETAILS_SUCCESS",
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: "PRODUCT_UPDATE_FAIL",
      payload:
        error.response && error.response.data.detail
          ? error.response.data.detail
          : error.message,
    });
  }
};

export const createProductReview =
  (productId, review) => async (dispatch, getState) => {
    try {
      dispatch({
        type: "PRODUCT_CREATE_REVIEW_REQUEST",
      });

      const {
        userLogin: { userInfo },
      } = getState();

      const config = {
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${userInfo.token}`,
        },
      };

      const { data } = await axios.post(
        `/product/api/products/${productId}/reviews/`,
        review,
        config
      );
      dispatch({
        type: "PRODUCT_CREATE_REVIEW_SUCCESS",
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: "PRODUCT_CREATE_REVIEW_FAIL",
        payload:
          error.response && error.response.data.detail
            ? error.response.data.detail
            : error.message,
      });
    }
  };

// Returns:

export const listReturns = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: "RETURNS_LIST_REQUEST",
    });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.get(`/product/api/returns/`, config);
    dispatch({
      type: "RETURNS_LIST_SUCCESS",
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: "RETURNS_LIST_FAIL",
      payload:
        error.response && error.response.data.detail
          ? error.response.data.detail
          : error.message,
    });
  }
};
export const listMyReturnsFunction = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: "LIST_MY_RETURNS_REQUEST",
    });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.get(`/product/api/myreturns/`, config);
    dispatch({
      type: "LIST_MY_RETURNS_SUCCESS",
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: "LIST_MY_RETURNS_FAIL",
      payload:
        error.response && error.response.data.detail
          ? error.response.data.detail
          : error.message,
    });
  }
};
export const getReturnsDetails = (id) => async (dispatch, getState) => {
  try {
    dispatch({
      type: "RETURNS_DETAILS_REQUEST",
    });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.get(`/product/api/returns/${id}/`, config);

    dispatch({
      type: "RETURNS_DETAILS_SUCCESS",
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: "RETURNS_DETAILS_FAIL",
      payload:
        error.response && error.response.data.detail
          ? error.response.data.detail
          : error.message,
    });
  }
};

export const issueStatus = (returns) => async (dispatch, getState) => {
  try {
    dispatch({
      type: "ISSUE_STATE_REQUEST",
    });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.put(
      `/product/api/returns/${returns.id}/update/`,
      {},
      config
    );

    dispatch({
      type: "ISSUE_STATE_SUCCESS",
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: "ISSUE_STATE_FAIL",
      payload:
        error.response && error.response.data.detail
          ? error.response.data.detail
          : error.message,
    });
  }
};
export const createReturn =
  (title, productname, issue, ordernumber, phonenumber) =>
  async (dispatch, getState) => {
    try {
      dispatch({
        type: "RETURN_CREATE_REQUEST",
      });

      const {
        userLogin: { userInfo },
      } = getState();

      const config = {
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${userInfo.token}`,
        },
      };

      const { data } = await axios.post(
        `/product/api/returns/create/`,
        {
          title: title,
          productname: productname,
          issue: issue,
          ordernumber: ordernumber,
          phonenumber: phonenumber,
        },
        config
      );

      dispatch({
        type: "RETURN_CREATE_SUCCESS",
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: "RETURN_CREATE_FAIL",
        payload:
          error.response && error.response.data.detail
            ? error.response.data.detail
            : error.message,
      });
    }
  };
// ==========================================================
// Categories

export const listCategories = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: "CATEGORIES_LIST_REQUEST",
    });

    const { data } = await axios.get(`/product/api/categories/`);
    dispatch({
      type: "CATEGORIES_LIST_SUCCESS",
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: "CATEGORIES_LIST_FAIL",
      payload:
        error.response && error.response.data.detail
          ? error.response.data.detail
          : error.message,
    });
  }
};

export const getProductByCategory =
  (id, name = "") =>
  async (dispatch, getState) => {
    try {
      dispatch({
        type: "PRODUCT_CATEGORY_LIST_REQUEST",
      });

      const { data } = await axios.get(
        `/product/api/products/category/${id}/${name}`
      );

      dispatch({
        type: "PRODUCT_CATEGORY_LIST_SUCCESS",
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: "PRODUCT_CATEGORY_LIST_FAIL",
        payload:
          error.response && error.response.data.detail
            ? error.response.data.detail
            : error.message,
      });
    }
  };
// ==========================================================
// Sub Categories

export const listSubCategories = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: "SUB_CATEGORY_LIST_REQUEST",
    });

    const { data } = await axios.get(`/product/api/sub_categories/`);
    dispatch({
      type: "SUB_CATEGORY_LIST_SUCCESS",
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: "SUB_CATEGORY_LIST_FAIL",
      payload:
        error.response && error.response.data.detail
          ? error.response.data.detail
          : error.message,
    });
  }
};

export const getProductBySubCategory = (id) => async (dispatch, getState) => {
  try {
    dispatch({
      type: "PRODUCT_SUB_CATEGORY_LIST_REQUEST",
    });

    const { data } = await axios.get(
      `/product/api/products/subcategory/${id}/`
    );

    dispatch({
      type: "PRODUCT_SUB_CATEGORY_LIST_SUCCESS",
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: "PRODUCT_SUB_CATEGORY_LIST_FAIL",
      payload:
        error.response && error.response.data.detail
          ? error.response.data.detail
          : error.message,
    });
  }
};
// Brands:

export const listBrandsFunction = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: "BRAND_LIST_REQUEST",
    });

    const { data } = await axios.get(`/product/api/brands/`);
    dispatch({
      type: "BRAND_LIST_SUCCESS",
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: "BRAND_LIST_FAIL",
      payload:
        error.response && error.response.data.detail
          ? error.response.data.detail
          : error.message,
    });
  }
};

export const getBrandDetails = (id) => async (dispatch, getState) => {
  try {
    dispatch({
      type: "BRAND_DETAILS_REQUEST",
    });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.get(`/product/api/brand/${id}`, config);
    dispatch({
      type: "BRAND_DETAILS_SUCCESS",
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: "BRAND_DETAILS_FAIL",
      payload:
        error.response && error.response.data.detail
          ? error.response.data.detail
          : error.message,
    });
  }
};

export const getProductByBrand = (id) => async (dispatch) => {
  try {
    dispatch({
      type: "PRODUCT_BY_BRAND_REQUEST",
    });

    const { data } = await axios.get(`/product/api/brand/${id}/products`);

    dispatch({
      type: "PRODUCT_BY_BRAND_SUCCESS",
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: "PRODUCT_BY_BRAND_FAIL",
      payload:
        error.response && error.response.data.detail
          ? error.response.data.detail
          : error.message,
    });
  }
};

export const addBrandFunction = (name) => async (dispatch, getState) => {
  try {
    dispatch({
      type: "BRAND_ADD_REQUEST",
    });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.post(
      `/product/api/createbrand/`,
      {
        name: name,
      },
      config
    );

    dispatch({
      type: "BRAND_ADD_SUCCESS",
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: "BRAND_ADD_FAIL",
      payload:
        error.response && error.response.data.detail
          ? error.response.data.detail
          : error.message,
    });
  }
};
