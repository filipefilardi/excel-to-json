# excel-to-json 

*Supported file extension .xlsx, .xlsm, .xltx, .xltm*

Web platform to help biologists to organize data collected made with Python/Flask and React.js. The application converts files from excel to json, storing the information in a non-relational database (MongoDB), allowing the user search data by a common identifier in the database.

## Sharing data

Biodiversity always had and an essential role in the human species, we use animals, plants and various microorganisms to feed ourselves, produce medicines and also as raw material for various products. 

Although, it's difficult to maintain a balance between economic development and biodiversity conservation, and even with legislation to prevent exploitation of ecosystems, it is not always possible to monitor biodiversity degradation.

The data collected can help to detect problems that can occur, allowing disaster prevention and consequently saving both environmental resources and financial resources but for that, is necessary to store data in a way that biological researchers can use. That's the problem this projects aim to help. 

## How it works

The following gif show ou the dropzone which converts excel spreadsheet to json and stores in MongoDB. It will make one json for each sheet in the same file.

[gif ]

In `Search` you can type the keyword identifier to merge your data in one table like the following example.

### Example Sheet 1

TK | Genus | Species | Code_Age | Code_Sex
--- | --- | --- | --- | ---
TK121190 | Necromys | lasiurus | 3 | 2
TK121191 | Necromys | lasiurus | 2 | 1
TK121192 | Necromys | lasiurus | 3 | 2
TK121193 | Necromys | lasiurus | 2 | 2

### Example Sheet 2

TK | Antibody | Weight | Length
--- | --- | --- | ---
TK121190 | Nega | 45 | 193
TK121191 | Nega | 24 | 166
TK121192 | Nega | 54 | 206

### Result Sheet

TK | Genus | Species | Code_Age | Code_Sex | Weight | Length
--- | --- | --- | --- | --- | --- | ---
TK121190 | Necromys | lasiurus | 3 | 2 | Nega | 45 | 193
TK121191 | Necromys | lasiurus | 2 | 1 | Nega | 24 | 166
TK121192 | Necromys | lasiurus | 3 | 2 | Nega | 54 | 206
TK121193 | Necromys | lasiurus | 2 | 2 |  |  | 

## Getting Started

### Prerequisites

If you're missing one of the following dependencies, go through the documentation and install it.

* [npm](https://www.npmjs.com/) to install your client made with [React.js](https://reactjs.org)
* [flask](http://flask.pocoo.org/) to run your python server

### Installation

* server
	* Create config/keys.py file and setup your mongo keys or rename keys_example.py to keys.py and edit with your mongo keys
	* Run `pip install -r requirements.txt` to install env
	* Check [requirements.txt](/server/requirements.txt) if you want more datails about used modules

* client
	* Run `npm install` to install React packages
	* Check [package.json](/client/package.json) if you want more datails about used packages

### Run

* server
	* run `python run.py` inside server folder

* client 
	* run `npm run start` inside client folder

### Example of config/keys.py

``` py
keys = {
	'MONGO_DBNAME' : 'your_database_name',
	'MONGO_URI' : 'your_mongo_uri_name'
}

```

## License

This project is licensed under the [MIT License](LICENSE).
