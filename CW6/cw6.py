import riak

# setup
myClient = riak.RiakClient(protocol='http', host='172.17.0.3', http_port=8098)
myBucket = myClient.bucket('s25871')
myDocument = {
    "name" : "Python",
    "test_value" : 5,
    "date" : "19-03-1999"
    }

# add document
try:
    NewKey = myBucket.new('Python_test', data=myDocument,  content_type="application/json").store()
    print("Document added!")
except Exception as e:
    print(e)

# download and print result
try:
    result = myBucket.get('Python_test')
    print("downloaded document: ", result.data)
except Exception as e:
    print(e)

# modify
try:
    result.data["test_value"] = 10
    result.store()
    print("Document modified and stored successfully")
except Exception as e:
    print(e)

# download and print modified doc
print("Modified document: ", result.data)

# delete doc
try:
    result.delete()
    print("document deleted!")
except Exception as e:
    print(e)

# print deleted doc
print("Attempt to print download deleted document: ", result.data)