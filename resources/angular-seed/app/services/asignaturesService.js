angular.module("myApp").service("asignatureService", function($resource) {
  return $resource(
    "http://localhost:5500/asignatures/:id",
    {
      id: "@id"
    },
    {
      update: {
        method: "PUT"
      }
    }
  )
});
