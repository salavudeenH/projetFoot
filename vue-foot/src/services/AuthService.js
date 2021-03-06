import Api from '@/services/Api'

export default {
  login(credentials) {
    return Api()
      .post('login/', credentials)
      .then(response => response.data);
  },
  signUp(credentials) {
    return Api()
      .post('sign-up/', credentials)
      .then(response => response.data);
  },
  getSecretContent() {
    return Api()
      .get('secret-route/')
      .then(response => response.data);
  },
  getArticle() {
    return Api()
      .get('article/')
      .then(response => response.data);
  },
  getProduct() {
    return Api()
      .get('product/')
      .then(response => response.data);
  },
  articleAdd(credentials) {
    return Api()
      .post('articleAdd/', credentials)
      .then(response => response.data);
  },
  productAdd(credentials) {
    return Api()
      .post('productAdd/', credentials)
      .then(response => response.data);
  },
};