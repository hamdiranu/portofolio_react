import createStore from 'unistore';
import axios from "axios";
import moment from 'moment';

const initialState = {
    token:"",
    search : "",
    isLoading: true,
    keyword:'',
    is_login: false,
    username : "",
    user_id : "",
    user_detail :{},
    first_name : "",
    last_name : "",
    gender : "",
    date_of_birth : "",
    address : "",
    city : "",
    zip_code : "",
    phone_number : "",
    password : "",
    email: "",
    listAllProduct: [],
    id_product: "",
    list_product_kategori: [],
    product_detail:{},
    kategori: "",
    item_search:"",
    total_to_cart: "",
    cart_id:"",
    total_harga_cart:"",
    listCart:[]
};

export const store = createStore(initialState);

export const actions = store => ({
    handleSearch : (state,e) => {
        let value = e.target.value;
        store.setState({ item_search :value});
    },

    handleSelect : (state,e) => {
        let value = e.target.value;
        store.setState({ total_to_cart :value});
    },

    changeInput: (state, event) => {
        store.setState({[event.target.name]: event.target.value});
    },

    changeInputKategori: (state, event) => {
        store.setState({kategori: event.target.value, item_search:""});
    },

    handleSignUp : async (state) => {
        const self = this
        const req = {
            method: "post",
            url: "http://localhost:5000/user",
            headers: {
              "Content-Type": "application/json"
            },
            data: {
              username : state.username,
              first_name : state.first_name,
              last_name : state.last_name,
              gender : state.gender,
              date_of_birth : state.date_of_birth,
              address : state.address,
              city : state.city,
              zip_code : state.zip_code,
              phone_number : state.phone_number,
              password : state.password,
              email: state.email,
            }
        }
        await axios(req)
        .then(response => {
            alert("Sign Up Success")
        })          
        .catch(error => {
            return false
        })
    },


    getAllProduct : () =>{
        axios
            .get("http://localhost:5000/item")
            .then(function(response){
            store.setState({ listAllProduct: response.data});
            })
            .catch(function(error){
                alert('invalid params')
            });
    },

    getSearchProduct : (state) =>{
        const item_search = state.item_search
        axios
            .get("http://localhost:5000/item/list?item_name="+item_search)
            .then(function(response){
            store.setState({ listAllProduct: response.data});
            })
            .catch(function(error){
                alert('invalid params')
            });
    },

    getProductDetail : (state) =>{
        const id_product = state.id_product
        axios
            .get("http://localhost:5000/item/"+id_product)
            .then(function(response){
            store.setState({ product_detail: response.data});
            })
            .catch(function(error){
                alert('invalid id_product')
            });
    },

    getUserDetail : (state) =>{
        const user_id = state.user_id
        axios
            .get("http://localhost:5000/user/"+user_id)
            .then(function(response){
            store.setState({ user_detail: response.data});
            })
            .catch(function(error){
                alert('invalid user_id')
            });
    },

    postCart : (state) =>{
        axios.post("http://localhost:5000/cart",
            {
                product_id: state.id_product,
                total_product: state.total_to_cart
            },
            {
                headers: {
                    "Authorization": "Bearer "+ state.token,
                    "Content-Type": "application/json"
                }
            }
        )
        .then((response) => {
            store.setState({cart_id:response.data.cart_id})
            alert("Berhasil ditambahkan ke keranjang");
        })
        .catch((error) => {
            alert("Terdapat kesalahan pada proses verifikasi, silahkan masuk kembali");
            localStorage.removeItem("isLogin");
            localStorage.removeItem("token");
            store.setState({modalShow: true});
        });
    },

    getCart : (state) => {
        axios.get("http://localhost:5000/cart",
            {
                headers: {
                    "Authorization": "Bearer "+ state.token,
                    "Content-Type": "application/json"
                }
            }
        )
        .then((response) => {
            var objekCart = response.data.filter((element) => element.status === false)
            store.setState({total_harga_cart : objekCart[0].total_harga})
            alert("Berhasil mendapatkan keranjang");
        })
        .catch((error) => {
            alert("Terdapat kesalahan pada proses verifikasi, silahkan masuk kembali");
            localStorage.removeItem("isLogin");
            localStorage.removeItem("token");
            store.setState({modalShow: true});
        });

    },

    getCartDetail : (state) => {
        axios.get("http://localhost:5000/cart/detail")
        .then((response) => {
            var objekCartDetail = response.data.filter((element) => element.cart_id === state.cart_id)
            store.setState({listCart : objekCartDetail})
        })
        .catch((error) => {
            alert("Terdapat kesalahan pada proses verifikasi, silahkan masuk kembali");
            localStorage.removeItem("isLogin");
            localStorage.removeItem("token");
            store.setState({modalShow: true});
        });
    }

})