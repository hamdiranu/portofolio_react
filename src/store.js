import createStore from 'unistore';
import axios from 'axios';

const initialState = {
  token: '',
  search: '',
  isLoading: true,
  keyword: '',
  is_login: false,
  username: '',
  user_id: '',
  user_detail: {},
  first_name: '',
  last_name: '',
  gender: '',
  date_of_birth: '',
  address: '',
  city: '',
  zip_code: '',
  phone_number: '',
  password: '',
  email: '',
  listAllProduct: [],
  id_product: '',
  list_product_kategori: [],
  product_detail: {},
  kategori: '',
  item_search: '',
  total_to_cart: '',
  cart_id: '',
  total_harga_cart: '',
  listCart: [],
  total_barang_cart: '',
  nama_penerima_checkout: '',
  alamat_checkout: '',
  kode_pos_checkout: '',
  nomor_telepon_checkout: '',
  metode_pengiriman_checkout: '',
  cardholder_payment: '',
  card_number_payment: '',
  security_code_payment: '',
  expired_month_payment: '',
  expired_year_payment: '',
  status_cod_payment: false
};

export const store = createStore(initialState);

export const actions = store => ({
  // Fungsi untuk mengubah state sesuai dengan inputan pada kotak input
  handleSearch: (state, e) => {
    const { value } = e.target;
    store.setState({ item_search: value });
  },

  // Fungsi untuk menyimpan jumlah barang yang ditambah pembeli ke cart
  handleSelect: (state, e) => {
    const { value } = e.target;
    store.setState({ total_to_cart: value });
  },

  // Fungsi untuk mendapatkan informasi pada search/input bar
  changeInput: (state, event) => {
    store.setState({ [event.target.name]: event.target.value });
    console.log(event.target.name, event.target.value);
  },

  // Fungsi untuk mendapatkan informasi kategori yang di klik
  changeInputKategori: (state, event) => {
    store.setState({ kategori: event.target.value, item_search: '' });
  },

  sliderInputKategori: (state, event) => {
    console.log('cek klik slider', event);
    store.setState({ kategori: event, item_search: '' });
  },

  // Axios untuk registrasi
  handleSignUp: async state => {
    const req = {
      method: 'post',
      url: 'http://localhost:5000/user',
      headers: {
        'Content-Type': 'application/json'
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
        alert('Sign Up Success');
      })
      .catch(error => false);
  },

  // Axios ntuk mendapatkan list all product
  getAllProduct: () => {
    axios
      .get('http://localhost:5000/item')
      .then(response => {
        store.setState({ listAllProduct: response.data });
      })
      .catch(error => {
        alert('invalid params');
      });
  },

  // Axios ntuk mendapatkan item product yang di search
  getSearchProduct: state => {
    const { item_search } = state;
    axios
      .get(`http://localhost:5000/item/list?item_name=${item_search}`)
      .then(response => {
        store.setState({ listAllProduct: response.data });
      })
      .catch(error => {
        alert('invalid params');
      });
  },

  // Axios ntuk mendapatkan informasi item product yang di klik
  getProductDetail: state => {
    const { id_product } = state;
    axios
      .get(`http://localhost:5000/item/${id_product}`)
      .then(response => {
        store.setState({ product_detail: response.data });
      })
      .catch(error => {
        alert('invalid id_product');
      });
  },

  // Axios ntuk mendapatkan informasi profil
  getUserDetail: state => {
    axios
      .get(`http://localhost:5000/user/${localStorage.getItem('user_id')}`)
      .then(response => {
        store.setState({ user_detail: response.data });
      })
      .catch(error => {});
  },

  // Axios ntuk menginput barang ke cart
  postCart: state => {
    axios
      .post(
        'http://localhost:5000/cart',
        {
          product_id: state.id_product,
          total_product: state.total_to_cart
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
            'Content-Type': 'application/json'
          }
        }
      )
      .then(response => {
        store.setState({ cart_id: response.data.cart_id });
        alert('Berhasil ditambahkan ke keranjang');
      })
      .catch(error => {
        store.setState({ modalShow: true });
      });
  },

  // Fungsi untuk log out
  handleLogOut: async () => {
    localStorage.removeItem('user_id');
    localStorage.removeItem('is_login');
    localStorage.removeItem('username');
    localStorage.removeItem('token');
  },

  // Axios ntuk mendapatkan info cart yang tersedia
  getCart: state => {
    axios
      .get('http://localhost:5000/cart', {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
          'Content-Type': 'application/json'
        }
      })
      .then(response => {
        const objekCart = response.data.filter(element => element.status === false);
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

  // Axios ntuk mendapatkan list cart
  getCartDetail: state => {
    axios
      .get('http://localhost:5000/cart/detail')
      .then(response => {
        const objekCartDetail = response.data.filter(element => element.cart_id === state.cart_id);
        store.setState({ listCart: objekCartDetail });
      })
      .catch(error => {
        alert('Terjadi kesalahan saat mengambil cart detail');
      });
  },

  // Fungsi utnuk menginputkan data checkout ke database checkout
  handleCheckout: async state => {
    const req = {
      method: 'post',
      url: 'http://localhost:5000/checkout',
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
        'Content-Type': 'application/json'
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
        alert('Checkout Success');
      })
      .catch(error => false);
  },

  // Fungsi utnuk menginputkan data checkout ke database checkout
  handlePayment: async state => {
    const req = {
      method: 'post',
      url: 'http://localhost:5000/payment',
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
        'Content-Type': 'application/json'
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
          cart_id: '',
          total_harga_cart: 0,
          total_barang_cart: 0
        });
        alert('Payment Success, Please Cek Your E-mail');
      })
      .catch(error => false);
  }
});
