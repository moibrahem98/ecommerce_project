import axios from "axios";

// list perfumes
export const listPerfume = () => async (dispatch) => {
  try {
    dispatch({ type: "PRODUCT_LIST_REQUEST" });

    const { data } = await axios.get(`/product/api/products/?category=Perfume`);

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

// list perfumes men
export const listMenPerfume = () => async (dispatch) => {
  try {
    dispatch({ type: "PRODUCT_LIST_REQUEST" });

    const { data } = await axios.get(
      `/product/api/products/?category=Perfume&sub_category=Men`
    );
    console.log(data);

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
// list perfumes women
export const listWomenPerfume = () => async (dispatch) => {
  try {
    dispatch({ type: "PRODUCT_LIST_REQUEST" });

    const { data } = await axios.get(
      `/product/api/products/?category=Perfume&sub_category=Women`
    );

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
// list perfumes Oriental
export const listOrientalPerfume = () => async (dispatch) => {
  try {
    dispatch({ type: "PRODUCT_LIST_REQUEST" });

    const { data } = await axios.get(
      `/product/api/products/?category=Perfume&sub_category=Oriental`
    );

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

// ========================================================================================

// list makeuo
export const listMakeup = () => async (dispatch) => {
  try {
    dispatch({ type: "PRODUCT_LIST_REQUEST" });

    const { data } = await axios.get(`/product/api/products/?category=Makeup`);

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
// list FOUNDATION MAKEUP
export const listFoundationMakeup = () => async (dispatch) => {
  try {
    dispatch({ type: "PRODUCT_LIST_REQUEST" });

    const { data } = await axios.get(
      `/product/api/products/?sub_category=Foundation`
    );

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

// list MASCARA MAKEUP
export const listMascaraMakeup = () => async (dispatch) => {
  try {
    dispatch({ type: "PRODUCT_LIST_REQUEST" });

    const { data } = await axios.get(
      `/product/api/products/?sub_category=Mascara`
    );

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

// list EYESHADOW MAKEUP
export const listEyeShadowMakeup = () => async (dispatch) => {
  try {
    dispatch({ type: "PRODUCT_LIST_REQUEST" });

    const { data } = await axios.get(
      `/product/api/products/?sub_category=Eye+Shadow`
    );

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

// list HIGHLIGHTER MAKEUP
export const listHighlighterMakeup = () => async (dispatch) => {
  try {
    dispatch({ type: "PRODUCT_LIST_REQUEST" });

    const { data } = await axios.get(
      `/product/api/products/?sub_category=Highlighter`
    );

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

// list BRONZER MAKEUP
export const listBronzerMakeup = () => async (dispatch) => {
  try {
    dispatch({ type: "PRODUCT_LIST_REQUEST" });

    const { data } = await axios.get(
      `/product/api/products/?sub_category=Bronzer`
    );

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

// list LIPGLOSS MAKEUP
export const listLipglossMakeup = () => async (dispatch) => {
  try {
    dispatch({ type: "PRODUCT_LIST_REQUEST" });

    const { data } = await axios.get(
      `/product/api/products/?sub_category=Lip+Gloss`
    );

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
// list ROUGE MAKEUP
export const listRougeMakeup = () => async (dispatch) => {
  try {
    dispatch({ type: "PRODUCT_LIST_REQUEST" });

    const { data } = await axios.get(
      `/product/api/products/?sub_category=Rouge`
    );

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
// list MAKEUPREMOVER MAKEUP
export const listMakeupremoverMakeup = () => async (dispatch) => {
  try {
    dispatch({ type: "PRODUCT_LIST_REQUEST" });

    const { data } = await axios.get(
      `/product/api/products/?sub_category=Makeup+Remover`
    );

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
// list KOHL MAKEUP
export const listKohlMakeup = () => async (dispatch) => {
  try {
    dispatch({ type: "PRODUCT_LIST_REQUEST" });

    const { data } = await axios.get(
      `/product/api/products/?sub_category=Kohl`
    );

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
// ========================================================================================

// list BODYCARE
export const listBodycare = () => async (dispatch) => {
  try {
    dispatch({ type: "PRODUCT_LIST_REQUEST" });

    const { data } = await axios.get(
      `/product/api/products/?category=Body+Care`
    );

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
// list CREAM BODYCARE
export const listCreamBodycare = () => async (dispatch) => {
  try {
    dispatch({ type: "PRODUCT_LIST_REQUEST" });

    const { data } = await axios.get(
      `/product/api/products/?sub_category=Cream`
    );

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
// list BODYLOTION BODYCARE
export const listBodyLotionBodycare = () => async (dispatch) => {
  try {
    dispatch({ type: "PRODUCT_LIST_REQUEST" });

    const { data } = await axios.get(
      `/product/api/products/?sub_category=Body+Lotion`
    );

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
// list BODYMIST BODYCARE
export const listBodyMistBodycare = () => async (dispatch) => {
  try {
    dispatch({ type: "PRODUCT_LIST_REQUEST" });

    const { data } = await axios.get(
      `/product/api/products/?sub_category=Body+Mist`
    );

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
// ======================================================================================
// list HAIRCARE
export const listHaircare = () => async (dispatch) => {
  try {
    dispatch({ type: "PRODUCT_LIST_REQUEST" });

    const { data } = await axios.get(
      `/product/api/products/?category=Hair+Care`
    );

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
// list SHAMPO HAIRCARE
export const listShampoHaircare = () => async (dispatch) => {
  try {
    dispatch({ type: "PRODUCT_LIST_REQUEST" });

    const { data } = await axios.get(
      `/product/api/products/?sub_category=Shampo`
    );

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
// list SERUMS HAIRCARE
export const listSerumsHaircare = () => async (dispatch) => {
  try {
    dispatch({ type: "PRODUCT_LIST_REQUEST" });

    const { data } = await axios.get(
      `/product/api/products/?sub_category=Serums`
    );

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
// list CONDITIONER HAIRCARE
export const listConditionerHaircare = () => async (dispatch) => {
  try {
    dispatch({ type: "PRODUCT_LIST_REQUEST" });

    const { data } = await axios.get(
      `/product/api/products/?sub_category=Conditioner`
    );

    dispatch({
      type: "PRODUCT_LIST_SUCCESS",
      payload: data,
    });
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
// list CONDITIONERCREAM HAIRCARE
export const listConditionerCreamHaircare = () => async (dispatch) => {
  try {
    dispatch({ type: "PRODUCT_LIST_REQUEST" });

    const { data } = await axios.get(
      `/product/api/products/?sub_category=Conditioner+Cream`
    );

    dispatch({
      type: "PRODUCT_LIST_SUCCESS",
      payload: data,
    });
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
// list PROTEINANDCREATINE HAIRCARE
export const listProteinandcreatineHaircare = () => async (dispatch) => {
  try {
    dispatch({ type: "PRODUCT_LIST_REQUEST" });

    const { data } = await axios.get(
      `/product/api/products/?sub_category=Protein+And+Creatine`
    );

    dispatch({
      type: "PRODUCT_LIST_SUCCESS",
      payload: data,
    });
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
// list OILS HAIRCARE
export const listOilsHaircare = () => async (dispatch) => {
  try {
    dispatch({ type: "PRODUCT_LIST_REQUEST" });

    const { data } = await axios.get(
      `/product/api/products/?sub_category=Oils`
    );

    dispatch({
      type: "PRODUCT_LIST_SUCCESS",
      payload: data,
    });
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
