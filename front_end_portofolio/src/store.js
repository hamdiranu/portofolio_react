import createStore from 'unistore';
import axios from "axios";
import moment from 'moment';

const initialState = {
    originPlace: "",
    departureDate: "",
    kiwiUrl: "https://api.skypicker.com/flights?partner=picky",
    ticketList: [],
    airlineList: ["ID", "QG", "GA", "QZ", "JT", "SJ", "IW"],
    airlineImageLink: {
        ID: "https://4.bp.blogspot.com/-qdPMmSV78LE/UYY_foFEDwI/AAAAAAAANV0/-apMs-fBjsM/s1600/LOGO+BATIK+AIR.png",
        QG: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/2012_Citilink_Logo.svg/250px-2012_Citilink_Logo.svg.png",
        GA: "https://upload.wikimedia.org/wikipedia/id/thumb/f/fe/Garuda_Indonesia_Logo.svg/250px-Garuda_Indonesia_Logo.svg.png",
        QZ: "https://seeklogo.com/images/A/Air_Asia-logo-5ACDC17858-seeklogo.com.png",
        JT: "https://upload.wikimedia.org/wikipedia/id/thumb/5/59/Lion_Air.svg/250px-Lion_Air.svg.png",
        SJ: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/LOGO_SJ_VERTIKAL.png/250px-LOGO_SJ_VERTIKAL.png",
        IW: "https://upload.wikimedia.org/wikipedia/id/thumb/a/a9/Wings_Air.svg/150px-Wings_Air.svg.png"
    },
    listDestinasi : [],
    listHasilTriposo : [],
    apiUrl : "https://www.triposo.com/api/20190906/location.json?account=HRJIHM7V&token=p16qxx6luhn0k0fhlou5m4h52poe8c0f&id=",
    idKota : "",
    search : "",
    latitudeKota : '',
    longitudeKota : '',
    isLoading: true,
    username:'',
    email:'',
    password:'',
    keyword:'',
    is_login: false
};

export const store = createStore(initialState);

export const actions = store => ({
    handleSearch : (state,e) => {
        let value = e.target.value;
        store.setState({ search :value, idKota:value});
        console.warn("cek store", store.getState())
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
    
    postLogin : async (state) => {
        const username = store.getState('username')
        const password = store.getState('password')
        const mydata = {
            username: username,
            password: password
        };
        const test = await axios
            .post("https://groupproject.free.beeceptor.com/masuk", mydata)
            .then(response => {
                return response
            })
            .catch(error => {
                return false
        })
        if (test) {
            store.setState({
                "accKey": test.data.accKey,
                "is_login": true,
                "email": test.data.email,
                "username": test.data.username
            });
        }
    }
})