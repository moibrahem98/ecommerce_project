export const productListReducers = (state = { products: [] }, action) => {
  switch (action.type) {
    case "PRODUCT_LIST_REQUEST":
      return { loading: true, products: [] };
    case "PRODUCT_LIST_SUCCESS":
      return { loading: false, products: action.payload };
    case "PRODUCT_LIST_FAIL":
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};
export const categoryListReducers = (state = { categories: [] }, action) => {
  switch (action.type) {
    case "PRODUCT_LIST_REQUEST":
      return { loading: true, categories: [] };
    case "PRODUCT_LIST_SUCCESS":
      return { loading: false, categories: action.payload };
    case "PRODUCT_LIST_FAIL":
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};
export const productDetailsReducer = (
  state = { product: { reviews: [] } },
  action
) => {
  switch (action.type) {
    case "PRODUCT_DETAILS_REQUEST":
      return { loading: true, ...state };

    case "PRODUCT_DETAILS_SUCCESS":
      return { loading: false, product: action.payload };

    case "PRODUCT_DETAILS_FAIL":
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const productDeleteReducer = (state = {}, action) => {
  switch (action.type) {
    case "PRODUCT_DELETE_REQUEST":
      return { loading: true };

    case "PRODUCT_DELETE_SUCCESS":
      return { loading: false, success: true };

    case "PRODUCT_DELETE_FAIL":
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const productCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case "PRODUCT_CREATE_REQUEST":
      return { loading: true };

    case "PRODUCT_CREATE_SUCCESS":
      return { loading: false, success: true, product: action.payload };

    case "PRODUCT_CREATE_FAIL":
      return { loading: false, error: action.payload };

    case "PRODUCT_CREATE_RESET":
      return {};

    default:
      return state;
  }
};

export const productUpdateReducer = (state = { product: {} }, action) => {
  switch (action.type) {
    case "PRODUCT_UPDATE_REQUEST":
      return { loading: true };

    case "PRODUCT_UPDATE_SUCCESS":
      return { loading: false, success: true, product: action.payload };

    case "PRODUCT_UPDATE_FAIL":
      return { loading: false, error: action.payload };

    case "PRODUCT_UPDATE_RESET":
      return { product: {} };

    default:
      return state;
  }
};
export const productReviewCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case "PRODUCT_CREATE_REVIEW_REQUEST":
      return { loading: true };

    case "PRODUCT_CREATE_REVIEW_SUCCESS":
      return { loading: false, success: true };

    case "PRODUCT_CREATE_REVIEW_FAIL":
      return { loading: false, error: action.payload };

    case "PRODUCT_CREATE_REVIEW_RESET":
      return {};

    default:
      return state;
  }
};
export const productTopRatedReducer = (state = { products: [] }, action) => {
  switch (action.type) {
    case "PRODUCT_TOP_REQUEST":
      return { loading: true, products: [] };

    case "PRODUCT_TOP_SUCCESS":
      return { loading: false, products: action.payload };

    case "PRODUCT_TOP_FAIL":
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

// RETURNS

export const returnsListReducer = (state = { returns: [] }, action) => {
  switch (action.type) {
    case "RETURNS_LIST_REQUEST":
      return {
        loading: true,
      };

    case "RETURNS_LIST_SUCCESS":
      return {
        loading: false,
        returns: action.payload,
      };

    case "RETURNS_LIST_FAIL":
      return {
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export const returnDetailsReducer = (state = {}, action) => {
  switch (action.type) {
    case "RETURNS_DETAILS_REQUEST":
      return {
        ...state,
        loading: true,
      };

    case "RETURNS_DETAILS_SUCCESS":
      return {
        loading: false,
        returns: action.payload,
      };

    case "RETURNS_DETAILS_FAIL":
      return {
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};
export const returnIssueStateReducr = (state = {}, action) => {
  switch (action.type) {
    case "ISSUE_STATE_REQUEST":
      return {
        loading: true,
      };

    case "ISSUE_STATE_SUCCESS":
      return {
        loading: false,
        success: true,
      };

    case "ISSUE_STATE_FAIL":
      return {
        loading: false,
        error: action.payload,
      };

    case "ISSUE_STATE_RESET":
      return {};

    default:
      return state;
  }
};
export const returnCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case "RETURN_CREATE_REQUEST":
      return { loading: true };

    case "RETURN_CREATE_SUCCESS":
      return { loading: false, success: true, returns: action.payload };

    case "RETURN_CREATE_FAIL":
      return { loading: false, error: action.payload };

    case "RETURN_CREATE_RESET":
      return {};

    default:
      return state;
  }
};
// export const productDetailsReducer = (
//   state = { product: { reviews: [] } },
//   action
// ) => {
//   switch (action.type) {
//     case "PRODUCT_DETAILS_REQUEST":
//       return { loading: true, ...state };

//     case "PRODUCT_DETAILS_SUCCESS":
//       return { loading: false, product: action.payload };

//     case "PRODUCT_DETAILS_FAIL":
//       return { loading: false, error: action.payload };

//     default:
//       return state;
//   }
// };
