import MySQLdb

db = MySQLdb.connect("localhost", "root", "Password-1234", "private_shop_db")

cursor = db.cursor()
global resultsExportShops
resultsExportShops = []

global resultsExportProduits
resultsExportProduits = []

def getshops():
    del resultsExportShops[:]
    sql = "SELECT * from t_shops"
    try:
        cursor.execute(sql)
        results = cursor.fetchall()
        for row in results:
            item = {
                "id_shop": row[0],
                "name": row[1],
                "address": row[2],
                "mail": row[3],
                "tel_number": row[4],
                "city": row[5],
                "country": row[6],
                "post_code": row[7],
                "description": row[8]
                
            }
            resultsExportShops.append(item)
    except MySQLdb.Error as e :
        try:
            print ("MySQL Error [%]: %s" % (e.args[0], e.args[1]))
            return None
        except IndexError:
            print("MySQL Error: %s" % str(e))
            return None
        finally:
            cursor.close()
            db.close()

def createshop(shop):
    sql = "Insert into t_shops(name, address, mail, tel_number, city, country, post_code, description) values('%s', '%s', '%s', '%s', '%s', '%s', '%s', '%s')" % (shop['name'], shop['address'], shop['mail'], shop['tel_number'], shop['city'], shop['country'], shop['post_code'], shop['description'])
    try:
        cursor.execute(sql)
        db.commit()
    except MySQLdb.Error as e:
        try:
            print("MySQL Error [%]: %s" % (e.args[0], e.args[1]))
            return None
        except IndexError:
            db.rollback()
            print ("MySQL Error: %s" % str(e))
            return None
        finally:
            cursor.close()
            db.close()

# def getproduits():
#     del resultsExportProduits[:]
#     sql = "SELECT * from t_produits"
#     try:
#         cursor.execute(sql)
#         results = cursor.fetchall()
#         for row in results:
#             item = {
#                 "id_produit": row[0],
#                 "name": row[1],
#                 "size": row[2],
#                 "quantity": row[3],
#                 "colors": row[4],
#                 "id_shop": row[5]
#             }
#             resultsExportProduits.append(item)
#     except MySQLdb.Error as e :
#         try:
#             print ("MySQL Error [%]: %s" % (e.args[0], e.args[1]))
#             return None
#         except IndexError:
#             print("MySQL Error: %s" % str(e))
#             return None
#         finally:
#             cursor.close()
#             db.close()

# def createproduit(produit):
#     sql = "Insert into t_produits(name, size, quantity, colors) values('%s', '%s', '%s', '%s')" % (produit['name'], produit['size'], produit['quantity'], produit['colors'])
#     try:
#         cursor.execute(sql)
#         db.commit()
#     except MySQLdb.Error as e:
#         try:
#             print("MySQL Error [%]: %s" % (e.args[0], e.args[1]))
#             return None
#         except IndexError:
#             db.rollback()
#             print ("MySQL Error: %s" % str(e))
#             return None
#         finally:
#             cursor.close()
#             db.close()