import warnings

import subprocess

import database

from flask import Flask, jsonify, request, abort

warnings.filterwarnings("ignore")

app = Flask(__name__)

items = []

@app.route('/api/v1.0/shop', methods=['GET'])
def get_shops():
    database.getshops()
    result = database.resultsExportShops
    print (result)
    return jsonify({'item': result}), 201

@app.route('/api/v1.0/shop', methods=['POST'])
def create_shop():
    database.createshop(request.json)

    return jsonify({'item': 'shop crée'}), 201

@app.route('/api/v1.0/produit', methods=['GET'])
def get_produit():
        database.getproduits()
        result = database.resultsExportProduits
        print (result)
        return jsonify({'item': result}), 201

@app.route('/api/v1.0/produit', methods=['POST'])
def create_produit():
        database.createproduit(request.json)
        
        return jsonify({'item': 'produit crée'}), 201

if __name__ == '__main__':
        app.run(debug=True)