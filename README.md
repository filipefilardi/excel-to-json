# excel-to-json 

*Supported file extension .xlsx, .xlsm, .xltx, .xltm*

Web platform to help biologists to organize data collected made with Python/Flask and React.js. The application converts files from excel to json, storing the information in a non-relational database (MongoDB), allowing the user search data by a common identifier in the database.

## Sharing data

Biodiversity always had and an essential role in the human species, we use animals, plants and various microorganisms to feed ourselves, produce medicines and also as raw material for various products. 

Although, it's difficult to maintain a balance between economic development and biodiversity conservation, and even with legislation to prevent exploitation of ecosystems, it is not always possible to monitor biodiversity degradation.

The data collected can help to detect problems that can occur, allowing disaster prevention and consequently saving both environmental resources and financial resources but for that, is necessary to store data in a way that biological researchers can use. That's the problem this projects aim to help. 

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
