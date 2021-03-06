import {Client, PlaceAutocompleteType} from '@googlemaps/google-maps-services-js'
import { RequestHandler } from 'express';

const client = new Client({})

const citiesRoute: RequestHandler = async (req, res) => {
    const {input} = req.params;
    const placesResponse = await client.placeAutocomplete({
        params: {
            input,
            types: PlaceAutocompleteType.cities,
            key: process.env.GOOGLE_PLACES_API_KEY
        } 
    });
    const cities = placesResponse.data;
    res.json(cities)
}

export default citiesRoute;