import MySQLdb

db = MySQLdb.connect("localhost", "root", "Password-1234", "private_shop_db")

cursor = db.cursor()
global resultsExportShops
resultsExportShops = []

def getshops():
    del resultsExportShops[:]
    sql = "SELECT * from t_shop"
    try:
        cursor.execute(sql)
        results = cursor.fetchall()
        for row in results:
            item = {
                "id_shop": row[0],
                "nom": row[1],
                "adresse": row[2]
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
    sql = "Insert into t_shop(nom, adresse) values('%s', '%s')" % (shop['nom'], shop['adresse'])
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