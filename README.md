
---
# makanKuyServer Documentation
---

### How To Use
```
SETTING

npm i
sequelize db:migrate

RUN
npm install -g nodemon (if you dont have installed globally)
nodemon app.js (if you have installed nodemon globally)

Server URL : http://localhost:3000

```


### User
| Method | Route          | Description  |
| ------ | -------------- | ------------ |
| POST   | /user/register | Add new user |
| POST   | /user/login    | Login user   |

### Weather
| Method | Route            | Description                    |
| ------ | ---------------- | ------------------------------ |
| GET    | /weather/current | Get weather current of Jakarta |

### Corona
| Method | Route                      | Description                           |
| ------ | -------------------------- | ------------------------------------- |
| GET    | /corona/global             | Get data corona globally              |
| GET    | /corona/indonesia          | Get data corona in Indonesia          |
| GET    | /corona/indonesia/provinsi | Get data corona in Indonesia Province |

### Places
| Method | Route            | Description                                     |
| ------ | ---------------- | ----------------------------------------------- |
| GET    | /places/list     | Get data all city in Indonesia from 34 province |
| GET    | /places/province | Get data all province in indonesia              |

### Zomato
| Method | Route                                          | Description                                                                 |
| ------ | ---------------------------------------------- | --------------------------------------------------------------------------- |
| GET    | /zomato/all                                    | Get All restaurants recommendation In Jakarta                               |
| GET    | /zomato/cuisines                               | Get All Cuisines                                                            |
| GET    | /zomato/establishments                         | Get All Establishment                                                       |
| GET    | /zomato/search/cuisine/:cuisine_id             | Search all restaurants recommendation In Jakarta by cuisine                 |
| GET    | /zomato/search/establishment/:establishment_id | Search all restaurants recommendation In Jakarta by establishment           |
| GET    | /zomato/search/:cuisine_id/:establishment_id   | Search all restaurants recommendation In Jakarta by cuisine & establishment |

---
### POST /user/login
---
> login user

_Request Headers_
```
Not needed
```

_Request Body_
```
{
    email : user01@gmail.com,
    password : user01
}
```

_Response ( 200 )_
```
{
    "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibmFtZSI6InJvbWl6YWtpIiwiZW1haWwiOiJyemZlcmRpeWFudG9AZ21haWwuY29tIiwiaWF0IjoxNjEwMDg5NTk3fQ.SsRxk2IWB_Z11AWIpXOBcZIVt4Mm22gM04PIMC2n99g"
}
```

_Response (401)_
```
{
    "msg": "Invalid Email/Password"
}
```

---
### POST /user/register
---
> register user

_Request Headers_
```
Not needed
```

_Request Body_
```
{
    email : user01@gmail.com,
    password : user01
}
```

_Response ( 200 )_
```
{
    "name": "Romi Zaki",
    "email": "greedymons@gmail.com"
}
```

_Response (400)_
```
[
    {
        "message": "email must be unique",
        "column": "email"
    }
]
```

_Response (500)_
```
{
    "msg": "Internar server error"
}
```

---
### GET /weather/current
---
>Get All restaurants recommendation In Jakarta

_Request Headers_
```
Not needed
```

_Request Body_
```
not needed
```

_Response ( 200 )_
```
{
    "data": {
        "observation_time": "07:32 AM",
        "temperature": 26,
        "weather_code": 296,
        "weather_icons": [
            "https://assets.weatherstack.com/images/wsymbols01_png_64/wsymbol_0017_cloudy_with_light_rain.png"
        ],
        "weather_descriptions": [
            "Light Rain"
        ],
        "wind_speed": 9,
        "wind_degree": 330,
        "wind_dir": "NNW",
        "pressure": 1006,
        "precip": 0.2,
        "humidity": 94,
        "cloudcover": 50,
        "feelslike": 27,
        "uv_index": 7,
        "visibility": 4,
        "is_day": "yes"
    }
}
```

_Response (500)_
```
{
    "message": "Internal server error"
}
```

---
### GET /zomato/all
---
>Get All restaurants recommendation In Jakarta

_Request Headers_
```
Not needed
```

_Request Body_
```
not needed
```

_Response ( 200 )_
```
{
    "data": [
        {
            "name": "SKYE",
            "address": "Menara BCA, Lantai 56, Jl. MH. Thamrin, Thamrin, Jakarta",
            "cuisines": "Fusion, European, Asian",
            "average_cost_for_two": 600000,
            "user_rating": "4.3",
            "featured_image": "https://b.zmtcdn.com/data/pictures/5/7402935/dd9bf2f2186ad8b2d427e2400ff5c046.jpg?output-format=webp",
            "timings": "17h – 22h (Mon-Sun)"
        },
        {
            "name": "Hause Rooftop",
            "address": "MD Place Bulding, Lantai 6, Jl. Setiabudi Selatan No. 7, Kuningan, Jakarta",
            "cuisines": "Western, Coffee, Tea",
            "average_cost_for_two": 370000,
            "user_rating": "4.3",
            "featured_image": "https://b.zmtcdn.com/data/pictures/4/18166724/f987068fc138dd08319c55fc93faf8f6.jpg",
            "timings": "11 AM to 11 PM (Mon-Thu, Sun), 11 AM to 12 Midnight (Fri-Sat)"
        }
    ]
}
```

_Response (500)_
```
{
    "message": "Internal server error"
}
```

---
### GET /zomato/search/cuisine/:cuisine_id
---
>Get All restaurants recommendation In Jakarta by cuisine

_Request Headers_
```
req.params.cuisine_id = cuisine_id
```

_Request Body_
```
not needed
```

_Response ( 200 )_
```
{
    "data": [
        {
            "name": "Gurih 7",
            "address": "Jl. Raya Pajajaran No.102, Bogor Utara, Bogor 16153",
            "cuisines": "Sunda, Jawa, Indonesian",
            "average_cost_for_two": 250000,
            "user_rating": "4.2",
            "featured_image": "https://b.zmtcdn.com/data/pictures/9/7418529/672e77ee4213fc6a3386527b13dc9813.jpg",
            "timings": "9h – 21h 30m (Mon-Fri),9h – 22h (Sat-Sun)"
        },
        {
            "name": "Talaga Sampireun",
            "address": "Taman Impian Jaya Ancol, Jl. Lapangan Golf 7, Ancol, Jakarta",
            "cuisines": "Sunda, Indonesian",
            "average_cost_for_two": 200000,
            "user_rating": "4.3",
            "featured_image": "https://b.zmtcdn.com/data/pictures/5/7417455/055d1b779650154dbe6ad0ffe652471e.jpg",
            "timings": "10h – 19h (Mon-Sun)"
        }
    ]
}
```

---
### GET /zomato/establishments
---
>Get All restaurants recommendation In Jakarta by cuisine

_Request Headers_
```
req.params.cuisine_id = cuisine_id
```

_Request Body_
```
not needed
```

_Response ( 200 )_
```
{
    "data": [
        {
            "name": "Gurih 7",
            "address": "Jl. Raya Pajajaran No.102, Bogor Utara, Bogor 16153",
            "cuisines": "Sunda, Jawa, Indonesian",
            "average_cost_for_two": 250000,
            "user_rating": "4.2",
            "featured_image": "https://b.zmtcdn.com/data/pictures/9/7418529/672e77ee4213fc6a3386527b13dc9813.jpg",
            "timings": "9h – 21h 30m (Mon-Fri),9h – 22h (Sat-Sun)"
        },
        {
            "name": "Talaga Sampireun",
            "address": "Taman Impian Jaya Ancol, Jl. Lapangan Golf 7, Ancol, Jakarta",
            "cuisines": "Sunda, Indonesian",
            "average_cost_for_two": 200000,
            "user_rating": "4.3",
            "featured_image": "https://b.zmtcdn.com/data/pictures/5/7417455/055d1b779650154dbe6ad0ffe652471e.jpg",
            "timings": "10h – 19h (Mon-Sun)"
        }
    ]
}
```

_Response (500)_
```
{
    "message": "Internal server error"
}
```

---
### GET /zomato/search/establishment/:establishment_id
---
>Get All restaurants recommendation In Jakarta by cuisine by establishment

_Request Headers_
```
req.params.establishment_id = establishment_id
```

_Request Body_
```
not needed
```

_Response ( 200 )_
```
{
    "data": [
        {
            "name": "Sophie Authentique",
            "address": "Jl. Cipete Raya No. 11, Fatmawati, Jakarta",
            "cuisines": "French, Coffee, Desserts, Bakery",
            "average_cost_for_two": 200000,
            "user_rating": "4.2",
            "featured_image": "https://b.zmtcdn.com/data/pictures/chains/7/7410297/5abba13dc3307bc3148b8ea540ef6bea.jpg",
            "timings": "8 AM to 10 PM"
        },
        {
            "name": "NAMELAKA",
            "address": "Shophaus, Lantai 1, Jl. Teuku Cik Ditiro No. 36, Menteng, Jakarta",
            "cuisines": "Bakery",
            "average_cost_for_two": 150000,
            "user_rating": "4.5",
            "featured_image": "https://b.zmtcdn.com/data/res_imagery/18421275_RESTAURANT_10d013778b61cfcf45afedb030856964.jpeg?output-format=webp",
            "timings": "11h – 20h (Mon-Sun)"
        }
    ]
}
```

_Response (500)_
```
{
    "message": "Internal server error"
}
```

---
### GET /zomato/establishments
---
>Get All establishment

_Request Headers_
```
Not Needed
```

_Request Body_
```
not needed
```

_Response ( 200 )_
```
{
    "data": [
        {
            "establishment_id": 21,
            "establishment_name": "Quick Bites"
        },
        {
            "establishment_id": 23,
            "establishment_name": "Dessert Parlour"
        }
    ]
}
```

_Response (500)_
```
{
    "message": "Internal server error"
}
```

---
### GET /zomato/cuisines
---
>Get All cuisines

_Request Headers_
```
Not Needed
```

_Request Body_
```
not needed
```

_Response ( 200 )_
```
{
    "data": [
        {
            "cuisine_id": 237,
            "cuisine_name": "Aceh"
        },
        {
            "cuisine_id": 1,
            "cuisine_name": "American"
        }
    ]
}
```

_Response (500)_
```
{
    "message": "Internal server error"
}
```

---
### GET /corona/global
---
>Get Corona data globally

_Request Headers_
```
Not Needed
```

_Request Body_
```
not needed
```

_Response ( 200 )_
```
{
    "data": {
        "confirmed": 88051477,
        "recovered": 49100713,
        "deaths": 1898655,
        "image": "https://covid19.mathdro.id/api/og",
        "lastUpdate": "2021-01-08T06:22:22.000Z"
    }
}
```

_Response (500)_
```
{
    "message": "Internal server error"
}
```

---
### GET /corona/indonesia
---
>Get Corona data in Indonesia

_Request Headers_
```
Not Needed
```

_Request Body_
```
not needed
```

_Response ( 200 )_
```
{
    "data": {
        "confirmed": 797723,
        "recovered": 659437,
        "deaths": 23520,
        "lastUpdate": "2021-01-08T06:22:22.000Z"
    }
}
```

_Response (500)_
```
{
    "message": "Internal server error"
}
```

---
### GET /corona/indonesia/provinsi
---
>Get Corona data in Indonesia

_Request Headers_
```
Not Needed
```

_Request Body_
```
not needed
```

_Response ( 200 )_
```
{
    "data": [
        {
            "province": "DKI Jakarta",
            "confirmed": 197699,
            "recovered": 176736,
            "deaths": 3403
        },
        {
            "province": "Jawa Barat",
            "confirmed": 92547,
            "recovered": 78729,
            "deaths": 1201
        }
    ]
}
```

_Response (500)_
```
{
    "message": "Internal server error"
}
```

---
### GET /places/list
---
>Get all 34 provinces in indonesia

_Request Headers_
```
Not Needed
```

_Request Body_
```
not needed
```

_Response ( 200 )_
```
{
    "data": [
        {
            "kota": "Simeulue"
        },
        {
            "kota": "Aceh Singkil"
        }
    ]
}
```

_Response (500)_
```
{
    "message": "Internal server error"
}
```
---
### GET /places/province
---
>Get all city in Indonesia from 34 province

_Request Headers_
```
Not Needed
```

_Request Body_
```
not needed
```

_Response ( 200 )_
```
{
    "data": [
        {
            "id": 11,
            "nama": "Aceh"
        },
        {
            "id": 12,
            "nama": "Sumatera Utara"
        }
    ]
}
```

_Response (500)_
```
{
    "message": "Internal server error"
}
```