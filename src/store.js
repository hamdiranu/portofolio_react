import createStore from "unistore";
import axios from "axios";

const initialState = {
  token: "",
  search: "",
  keyword: "",
  is_login: false,
  username: "",
  user_id: "",
  user_detail: {},
  first_name: "",
  last_name: "",
  gender: "",
  date_of_birth: "",
  address: "",
  city: "",
  zip_code: "",
  phone_number: "",
  password: "",
  email: "",
  list_all_product: [],
  id_product: "",
  list_product_kategori: [],
  product_detail: {},
  kategori: "",
  item_search: "",
  total_to_cart: "",
  cart_id: "",
  total_harga_cart: "",
  list_cart: [],
  total_barang_cart: "",
  nama_penerima_checkout: "",
  alamat_checkout: "",
  kode_pos_checkout: "",
  nomor_telepon_checkout: "",
  metode_pengiriman_checkout: "",
  cardholder_payment: "",
  card_number_payment: "",
  security_code_payment: "",
  expired_month_payment: "",
  expired_year_payment: "",
  status_cod_payment: false,
  list_search_product: [],
  list_admin_product: [],
  list_admin_user: [],
  list_admin_transaksi: []
};

export const store = createStore(initialState);

export const actions = store => ({
  /**
  * Fungsi untuk mengubah state sesuai dengan inputan pada kotak input
  */ 
  handleSearch: (state, e) => {
    const { value } = e.target;
    store.setState({ item_search: value });
  },

  /**
  * Fungsi untuk menyimpan jumlah barang yang ditambah pembeli ke cart
  */
  handleSelect: (state, e) => {
    const { value } = e.target;
    store.setState({ total_to_cart: value });
  },

  /**
  * Fungsi untuk mendapatkan informasi pada search/input bar
  */
  changeInput: (state, event) => {
    store.setState({ [event.target.name]: event.target.value });
    console.log(event.target.name, event.target.value);
  },

  /**
  * Fungsi untuk mendapatkan informasi kategori yang di klik
  */
  changeInputKategori: (state, event) => {
    store.setState({ kategori: event.target.value, item_search: "" });
  },

  /**
  * Fungsi Axios untuk mendapatkan jenis kategori slider yang diklik user
  */
  sliderInputKategori: (state, event) => {
    console.log("cek klik slider", event);
    store.setState({ kategori: event, item_search: "" });
  },

  /**
  * Fungsi Axios untuk mendaftarkan akun baru(registrasi)
  */
  handleSignUp: async state => {
    const req = {
      method: "post",
      url: "https://manggaleh.site/user",
      headers: {
        "Content-Type": "application/json"
      },
      data: {
        username: state.username,
        first_name: state.first_name,
        last_name: state.last_name,
        gender: state.gender,
        date_of_birth: state.date_of_birth,
        address: state.address,
        city: state.city,
        zip_code: state.zip_code,
        phone_number: state.phone_number,
        password: state.password,
        email: state.email
      }
    };
    await axios(req)
      .then(response => {
        alert("Sign Up Success");
      })
      .catch(error => false);
  },

  /**
  * Fungsi Axios untuk mendapatkan list all product
  */
  getAllProduct: () => {
    axios
      .get("https://manggaleh.site/item?rp=1000")
      .then(response => {
        store.setState({ list_all_product: response.data });
      })
      .catch(error => {
        alert("invalid params");
      });
  },

  /**
  * Fungsi Axios untuk mendapatkan item product yang di search
  */
  getSearchProduct: state => {
    const { item_search } = state;
    axios
      .get(`https://manggaleh.site/item/list?item_name=${item_search}`)
      .then(response => {
        store.setState({ list_search_product: response.data });
      })
      .catch(error => {
        alert("invalid params");
      });
  },

  /**
  * Fungsi Axios untuk mendapatkan informasi item product yang di klik
  */
  getProductDetail: state => {
    const { id_product } = state;
    axios
      .get(`https://manggaleh.site/item/${id_product}`)
      .then(response => {
        store.setState({ product_detail: response.data });
      })
      .catch(error => {
        alert("invalid id_product");
      });
  },

  /**
  * Fungsi Axios untuk mendapatkan informasi profil
  */
  getUserDetail: state => {
    axios
      .get(`https://manggaleh.site/user/${localStorage.getItem("user_id")}`)
      .then(response => {
        store.setState({ user_detail: response.data });
      })
      .catch(error => {});
  },

  /**
  * Fungsi Axios ntuk menginput barang ke cart
  */
  postCart: state => {
    axios
      .post(
        "https://manggaleh.site/cart",
        {
          product_id: state.id_product,
          total_product: state.total_to_cart
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
            "Content-Type": "application/json"
          }
        }
      )
      .then(response => {
        store.setState({ cart_id: response.data.cart_id });
        console.log("cek post cart", response.data);
        alert("Berhasil ditambahkan ke keranjang");
      })
      .catch(error => {
        store.setState({ modalShow: true });
      });
  },

  /**
  * Fungsi untuk keluar akun(logout)
  */
  handleLogOut: async () => {
    localStorage.removeItem("user_id");
    localStorage.removeItem("is_login");
    localStorage.removeItem("username");
    localStorage.removeItem("token");
  },

  /**
  * Fungsi Axios untuk mendapatkan info cart yang tersedia
  */
  getCart: state => {
    const user_id = Number(localStorage.getItem("user_id"));
    axios
      .get("https://manggaleh.site/cart?rp=1000", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
          "Content-Type": "application/json"
        }
      })
      .then(response => {
        const objekCart = response.data.filter(
          element => element.user_id === user_id && element.status === false
        );
        console.log("cek isi object Cart", objekCart);
        store.setState({
          total_harga_cart: objekCart[0].total_harga,
          total_barang_cart: objekCart[0].total_item,
          cart_id: objekCart[0].id
        });
      })
      .catch(error => {
        store.setState({ modalShow: true });
      });
  },

  /**
  * Fungsi Axios ntuk mendapatkan list cart
  */
  getCartDetail: state => {
    axios
      .get("https://manggaleh.site/cart/detail?rp=1000")
      .then(response => {
        const objekCartDetail = response.data.filter(
          element => element.cart_id === state.cart_id
        );
        store.setState({ list_cart: objekCartDetail });
      })
      .catch(error => {
        alert("Terjadi kesalahan saat mengambil cart detail");
      });
  },

  /**
  * Fungsi Axios untuk menginputkan data checkout ke database checkout
  */
  handleCheckout: async state => {
    const req = {
      method: "post",
      url: "https://manggaleh.site/checkout",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
        "Content-Type": "application/json"
      },
      data: {
        nama_penerima: state.nama_penerima_checkout,
        alamat: state.alamat_checkout,
        kode_pos: state.kode_pos_checkout,
        nomor_telepon: state.nomor_telepon_checkout,
        metode_pengiriman: state.metode_pengiriman_checkout
      }
    };
    await axios(req)
      .then(response => {
        alert("Checkout Success");
      })
      .catch(error => false);
  },

  /**
  * Fungsi Axios untuk menginputkan data checkout ke database checkout
  */
  handlePayment: async state => {
    const req = {
      method: "post",
      url: "https://manggaleh.site/payment",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
        "Content-Type": "application/json"
      },
      data: {
        cardholder: state.cardholder_payment,
        card_number: state.card_number_payment,
        security_code: state.security_code_payment,
        expired_month: state.expired_month_payment,
        expired_year: state.expired_year_payment,
        status_cod: state.status_cod_payment
      }
    };
    await axios(req)
      .then(response => {
        store.setState({
          cart_id: "",
          total_harga_cart: 0,
          total_barang_cart: 0
        });
        alert("Payment Success, Please Cek Your E-mail");
      })
      .catch(error => false);
  },

  /**
  * Fungsi Axios ntuk mendapatkan informasi daftar produk oleh admin
  */
  getAdminProduct: () => {
    axios
      .get("https://manggaleh.site/item?rp=1000")
      .then(response => {
        const list_product = response.data.filter(
          element => element.deleted === false
        );
        store.setState({ list_admin_product: list_product });
      })
      .catch(error => {
        alert("invalid params");
      });
  },

  /**
  * Fungsi Axios ntuk mendapatkan informasi daftar user oleh admin
  */
  getAdminUser: async state => {
    const req = {
      method: "get",
      url: "https://manggaleh.site/user?rp=1000",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`
      }
    };
    await axios(req)
      .then(response => {
        console.log("cek response", response.data);
        const list_user = response.data.filter(
          element => element.deleted === false
        );
        store.setState({ list_admin_user: list_user });
      })
      .catch(error => false);
  },

  /**
  * Fungsi Axios ntuk mendapatkan informasi daftar barang oleh admin
  */
  getAdminTransaksi: async state => {
    const req = {
      method: "get",
      url: "https://manggaleh.site/cart?rp=1000",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`
      }
    };
    await axios(req)
      .then(response => {
        console.log("cek response cart admin", response.data[0].status);
        const list_transaksi = response.data.filter(
          element => element.deleted === false
        );
        store.setState({ list_admin_transaksi: list_transaksi });
      })
      .catch(error => false);
  }
});
