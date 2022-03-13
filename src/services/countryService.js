/*
    TAKEN FROM: https://github.com/arnarleifs/WebProgrammingIIRU/blob/main/Coding%20projects/pro-gamers/src/services/countryService.js
    Service to provide data for country, region and city
**/
import fetch from 'fetch-jsonp';

const endpoint = 'http://battuta.medunes.net/api';
const key = '00000000000000000000000000000000';

const countryService = () => {
	return {
		getRegions: (countryCode = 'is', format) => {
			return fetch(`${endpoint}/region/${countryCode}/all/?key=${key}`).then(resp => resp.json()).then(regions => regions.map(r => format(r)));
		},
		getCities: (countryCode = 'is', regionName = '', format) => {
			return fetch(`${endpoint}/city/${countryCode}/search/?region=${regionName}&key=${key}`).then(resp => resp.json()).then(cities => cities.map(c => format(c)));
		}
        
	};
};

export default countryService();