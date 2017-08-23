(function () {
    'use strict';

    angular
        .module('app')
        .directive('fileUpload', fileUpload);

    function fileUpload() {
        return {
            scope: {},
            controllerAs: 'upload',
            template: `
            <div class="upload">
                <div class="upload-zone">
                    <p>Drop your files here!</p>
                    <a href="" ng-click="upload.uploadFiles();">
                        Upload
                    </a>
                </div>
                <ul>
                    <li ng-repeat="file in upload.files">
                        {{ file.name }}
                    </li>
                </ul>
            </div>
            `,
            link: function ($scope, $element, $attrs, $ctrl) {
                var upload = $element[0].querySelector('.upload-zone');
                
                upload.addEventListener('drop', onDrop, false);
                function onDrop(e) {
                    if (e.dataTransfer && e.dataTransfer.files) {
                        $ctrl.registerFiles(e.dataTransfer.files);
                        $scope.$apply();
                    }
                }
                
                upload.addEventListener('dragenter', preventDefault, false);
                upload.addEventListener('dragleave', preventDefault, false);
                upload.addEventListener('dragover', preventDefault, false);
                upload.addEventListener('drop', preventDefault, false);
                function preventDefault(e) {
                    e.preventDefault();
                }
            },
            controller: function () {                
                this.files = [];
                this.registerFiles = function (files) {
                    Array.prototype.push.apply(this.files, files);
                };
                this.uploadFiles = function () {
                    if (!this.files.length) {
                        return;
                    }
                    // pass to parent Directive or Service for uploading
                    console.log(this.files);
                };
            }
        }
    }
})();