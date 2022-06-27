printjson(db.people.aggregate({
    $group: {
      _id: '$job'
    }
  })._batch);
