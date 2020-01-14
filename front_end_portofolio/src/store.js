import createStore from 'unistore';
import axios from "axios";
import moment from 'moment';

const initialState = {
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
    item_search:""
};

export const store = createStore(initialState);

export const actions = store => ({
    handleSearch : (state,e) => {
        let value = e.target.value;
        store.setState({ item_search :value});
        console.warn("cek state item search", store.getState().item_search)
    },

    // Mendefinisikan fungsi axios untuk api Triposo
    kategoriKota : async (state) => {
        const url = state.apiUrl + state.idKota
        await axios
            .get(url)
            .then(function(response) {
                store.setState({ 
                    listHasilTriposo: response.data.results[0], 
                    listDestinasi: response.data.results[0].images,
                    latitudeKota: response.data.results[0].coordinates.latitude,
                    longitudeKota: response.data.results[0].coordinates.longitude,
                    isLoading: false });
                // handle success
                console.log("cek isi response",response);
            })
            .catch(function(error) {
                store.setState({ isLoading: false });
                // handle error
                console.log(error);
            });
    },
    

    changeInput: (state, event) => {
        store.setState({[event.target.name]: event.target.value});
        console.log("cek input", event.target.name, event.target.value)
    },

    changeInputKategori: (state, event) => {
        store.setState({kategori: event.target.value, item_search:""});
        console.log("cek input", event.target.value)
    },

    postOriginAndDepartureDate: async (state, city) => {
        const flyFrom = "&flyFrom=" + state.originPlace;
        const dateFrom = "&dateFrom=" + state.departureDate;
        const dateTo = "&dateTo=" + state.departureDate;
        const url = state.kiwiUrl + flyFrom + dateFrom + dateTo;
        const self = store;
        const that = state;
        await axios
            .get(url)
            .then(function (response) {
                const responseList = response.data.data;
                const filteredList = responseList.filter(data => {
                    return data.cityTo === city;
                }).filter(data => {
                    const airlineList = that.airlineList;
                    for (let i=0; i < 7; i++) {
                        if (airlineList[i] === data.airlines[0]) {
                            return true;
                        }
                    }
                    return false;
                });
                self.setState({ ticketList: filteredList });
            })
            .catch(function (error) {
                console.warn(error);
            })
    },

    convertTimestamp: (state, time) => {
        const date = new Date(time*1000);
        const stringTime = moment(date).utcOffset("+0700").format("HH:mm:ss");
        return stringTime;
    },

    // Atur kategori dinamis untuk idKotA
    setCategory: (state, category) => {
        return {idKotA : category}
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
            store.setState({
                "is_login": true
            });
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

            // handle success
            // console.log(response.data);
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

            // handle success
            // console.log(response.data);
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

            // handle success
            // console.log(response.data);
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

            // handle success
            // console.log(response.data);
            })
            .catch(function(error){
                alert('invalid user_id')
            });
    }

})