angular.module("myApp").component("asignatureList", {
    templateUrl: "/components/asignatureList/asignatureList",
    controller: ['asignatureService', '$state', function (asignatureService, $state) {
        this.$onInit = () => {
            this.asignatures = asignatureService.query();
        }
    }
    ]})