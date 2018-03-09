# excel-to-json 

## Getting Started

### Prerequisites

If you're missing one of the following dependencies, go through the documentation and install it.

* [npm](https://www.npmjs.com/) to install your client made with [React.js](https://reactjs.org);
* [flask](http://flask.pocoo.org/) to run your python server.

### Installation

* server
	* Create config/keys.py file and setup your mongo keys or rename keys_example.py to keys.py and edit with your mongo keys;
	* Run `pip install -r requirements.txt` to install env;
	* Check requirements.txt if you want more datails about used modules.

* client
	* Run `npm install` to install React packages;
	* Check package.json if you want more datails about used packages.

### example of config/keys.py

``` py
keys = {
	'MONGO_DBNAME' : 'your_database_name',
	'MONGO_URI' : 'your_mongo_uri_name'
}

```

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details