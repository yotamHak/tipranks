import axios from 'axios';

async function GetAutocomplete(name = 'M') {
    return axios.get(`https://trautocomplete.azurewebsites.net/api/Autocomplete/GetAutocomplete?name=${name}`)
        .then(response => (
            {
                success: response.status === 200 ? true : false,
                data: response.data
            }))
        .catch(reason => (
            {
                success: false,
                error: reason
            }))
}

export default {
    GetAutocomplete,
}