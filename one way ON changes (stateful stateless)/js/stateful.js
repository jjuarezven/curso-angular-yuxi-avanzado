var statefulComponent = {
    template: `
    <div>
        <pre>{{$ctrl.user | json}}</pre>
        <stateless-component 
            user="$ctrl.user"
            on-update="$ctrl.updateUser($event);">       
        </stateless-component>
    </div>
    `,
    controller: function () {
        var vm = this;
        vm.user = {
            name: 'Todd Moto',
            location: 'England, UK'
        };

        vm.updateUser = function (event) {
            vm.user = event.user;
        };
    }
};

angular
.module('app')
.component('statefulComponent', statefulComponent);